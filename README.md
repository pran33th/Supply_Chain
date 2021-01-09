
# Project 6B Supply Chain

## Truffle Version
>
    Truffle v5.1.56
>

## Node Version
>
    node-version : 12.19.1
>

## web3 Version
>
    Web3.js v1.2.9
>
## Contract Address
>
    0x569224524D1e54210399C17d61eE99A810bF450f 
>

## Transaction Id
>
    0x1e95fc8b5210aa0cc179e3cb31d3f35335c6a51f3a7229e94527919c39b45001
>



## Requirement 1: Project write-up - Libraries
I used one library called Roles which made it easier to manage AccessControl in my DAPP. It made it easy to add and remove roles in each of my AccessControl contracts (FarmerRole.sol, DistributorRole.sol, RetailerRole.sol, and ConsumerRole.sol).

## Requirement 2: Project write-up - IPFS
I did not use IPFS to deliver my website for this project. However, I could have added my HTML, CSS, and JS files to IPFS in order to fully decentralize my Supply Chain DAPP.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/pran33th/Supply_Chain
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

In a separate terminal window, launch the DApp:

```
npm run dev
