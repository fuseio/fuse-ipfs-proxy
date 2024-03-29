const imageType = require('image-type')

module.exports = (osseus) => {
  return {
    create: async (req, res, next) => {
      osseus.lib.Metadata.create(req.file.buffer, true)
        .then(md => {
          delete md.data
          res.send(md)
        })
        .catch(err => { next(err) })
    },

    get: async (req, res, next) => {
      osseus.lib.Metadata.get(req.params.hash, true)
        .then(md => {
          const buffer = Buffer.from(md.data)
          const type = imageType(buffer)
          res.set('Content-Type', type ? type.mime : 'image/png')
          res.send(buffer)
        })
        .catch(err => { next(err) })
    }
  }
}
