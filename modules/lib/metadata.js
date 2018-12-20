const ipfsClient = require('ipfs-http-client')

module.exports = (osseus) => {
  const ipfs = ipfsClient({
    host: osseus.config.ipfs_host,
    port: osseus.config.ipfs_port,
    protocol: osseus.config.ipfs_protocol
  })

  const later = (delay, value) => {
    return new Promise(resolve => setTimeout(resolve, delay, value))
  }

  function metadata () {}

  metadata.create = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const filesAdded = await ipfs.add(Buffer.from(JSON.stringify(data)))
        const hash = filesAdded[0].hash
        const md = await osseus.db_models.metadata.create({hash: hash, data: data})
        resolve(md)
      } catch (err) {
        osseus.logger.error(`Could not create ${data}`, err)
        reject(err)
      }
    })
  }

  metadata.get = (hash) => {
    return new Promise(async (resolve, reject) => {
      try {
        osseus.logger.silly(`Trying to get '${hash}' from IPFS`)
        let md = await Promise.race([
          ipfs.cat(hash),
          later(osseus.config.ipfs_timeout || 5000)
        ])
        if (md) {
          osseus.logger.silly(`Got '${hash}' from IPFS`)
          return resolve({hash: hash, data: JSON.parse(md.toString())})
        } else {
          osseus.logger.silly(`Could not get '${hash}' from IPFS - Trying from DB`)
          md = await osseus.db_models.metadata.getByHash(hash)
          osseus.logger.silly(`Got '${hash}' from DB`)
          resolve(md)
        }
      } catch (err) {
        osseus.logger.error(`Could not get '${hash}' from IPFS/DB`, err)
        reject(err)
      }
    })
  }

  return metadata
}
