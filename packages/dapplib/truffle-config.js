require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember assume include close bottom symptom'; 
let testAccounts = [
"0x9600bd7fc1dd24b9b466a204bfa0874e839647fbbd90d637139a053e32f689b0",
"0x88655d72faebdbf565a0e6434d72b2c3115429d0966f113f0750e733980ecb5f",
"0x4b4ec5e0c0d4ce9bf16d2e15bbbd1c87476e19ce44ffebcde4b9d6e549a5fbcf",
"0xdf1d2aab673ede5b866131b597ad8f33394980dd38eec9c3cc638e47d3c11b45",
"0xaef1e9face5d8144343eed8585d69b3bcb44eb5dd9039a3a4c059e309389c036",
"0x9c7f077dc8c50458e08a91ad28da7b577521beec9afd887492527a85d33ed7da",
"0x0722af205738584cef9271d508e3ff778fa80ec7a385ef722c179fd708193b89",
"0xaeca86bbceab339cb6cfda1db27e124ace72eedbde200dbbdd4244229566fc45",
"0xe04e9f4972474bb749f523f5395ba1204f94f2396d14151da1a3cceecec86527",
"0xce193996afb9b8b2cbb66443e6278cf909d2483118ba1bd5fe383868f8b2b8ad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
