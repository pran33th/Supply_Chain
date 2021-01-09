const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
web3 = new Web3.providers.WebsocketProvider('ws://localhost:8545')
mnemonic = "myPrivateKey"
infuraKey = "MyInfuraId"

module.exports = {
  networks: {
    development: {
      provider: web3,
      // host: "127.0.0.1",
      // port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
    }
  }
};
