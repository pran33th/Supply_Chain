const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
web3 = new Web3.providers.WebsocketProvider('ws://localhost:8545')
mnemonic = "dc4c35ab35355155a96f0c08ef1f338aba68e9bdab5b72ee14c82f5bf1c7e9b1"
infuraKey = "014f44fc7bae424da6e5208787a5fcd1"

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