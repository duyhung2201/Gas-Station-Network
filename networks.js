const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config()

const projectId = process.env.PROJECT_ID
const mnemonic = process.env.MNEMONIC

module.exports = {
  networks: {
    development: {
      protocol: "http",
      host: "localhost",
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${projectId}`
        ),
      networkId: 4,
      gasPrice: 5e9,
    },
  },
};
