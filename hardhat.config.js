require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9RUJAKaTYhuQq6bEzscRVXZ350yqOVhd',
      accounts: ['80b41fdc1fc2c18432dbbff81c72c3fd49f560ab0e76e6dad3cee224eedfbf62'],
    },
  },
};
