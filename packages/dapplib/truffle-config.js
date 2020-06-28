require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name razor spike concert grace battle flat genuine'; 
let testAccounts = [
"0x9e9e38faebfe2a3e838d23edc8588fe1edf93166d8609ffafd4914858944e299",
"0x8be681283f57e6c02ac96bc3b0d801fecce08d5cc9bd5d43f8fbbed387a9c831",
"0xfca48a80ecc36990976e6d5a4c8803292a8c72aeb03c6ca92a993e4e177d99bb",
"0xdff6cce6fc33055464dd3362305e9a6faa590a0548e5b0225808c62c5ce7a19f",
"0x1187003821ef9035adeb610d664489350b0ef2f65ce13f0c7171b184b4d96760",
"0xf2f5d876a26c524e6d5599a189ae26bc8fdc5f26e24048b200c1eb9c6a816df8",
"0x296ebe32144636ddd6333577b04620d2d1b20e99c3b638b9523c1a8d0e1d24a0",
"0x78696e3d42ba7660f9d84747aeed197b1b86ffa36728a20d8e0ef12318acf810",
"0x0bd617f2cbfd810c7d9c141fcf7ff95c3d510912336899b7517a64f4d1809832",
"0x272d2cf62316bfcf5ec0890775b40da30e6205ed7f6372f43ead6163f2f8d738"
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
