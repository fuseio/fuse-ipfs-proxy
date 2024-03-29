[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Fuse IPFS Proxy

The Fuse IPFS proxy is an [osseus](https://github.com/colucom/osseus) based server implementation for interacting with [IPFS](https://ipfs.io/).

## Dependencies

To make sure that the following instructions work, please install the following dependencies
on you machine:

- [Node.js (comes with a bundled npm)](https://nodejs.org/en/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [MongoDB](https://www.mongodb.com/download-center/community)
- [IPFS](https://docs.ipfs.io/introduction/install/)

## Installation

To get the source of `fuse-ipfs-proxy`, clone the git repository via:

````
$ git clone https://github.com/fuseio/fuse-ipfs-proxy
````

This will clone the complete source to your local machine.

Navigate to the project folder and install all needed dependencies via **npm**:

````
$ npm install
````

This commands installs everything which is required for building and testing the project.

## Developing
### Run locally: `npm run dev`
This task will run the application and start listening on port `3000`.

Under the hood, we use a complete [osseus](https://github.com/colucom/osseus) stack.

You will find the local configuration at [LOCAL.js](https://github.com/fuseio/fuse-ipfs-proxy/blob/master/config/LOCAL.js).

## Configuration
See [tutorial](https://github.com/fuseio/fuse-ipfs-proxy/blob/master/CONFIGURATION.md).

## Testing

### Source linting
`npm run lint` performs a lint for all source code using [standard js](https://standardjs.com/).

### Unit testing
`npm test` executes (as you might think) the unit tests, which are located
in [`test`](https://github.com/fuseio/fuse-ipfs-proxy/blob/master/test).

## Contributing
Please see [contributing guidelines](https://github.com/fuseio/fuse-ipfs-proxy/blob/master/.github/CONTRIBUTING.md).

## License
Code released under the [MIT License](https://github.com/fuseio/fuse-ipfs-proxy/blob/master/LICENSE).