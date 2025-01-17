# FeeCollector Smart Contract DApp

**FeeCollector Smart Contract** is a decentralized application (DApp) running on the Ethereum blockchain. The project consists of a smart contract that collects fees and a frontend interface where users can interact with the contract. The contract is deployed using Remix IDE, and the frontend is created using JavaScript.

## Features

- **Blockchain-based**: FeeCollector Smart Contract operates on the Ethereum blockchain.
- **Smart Contract**: The smart contract collects fees based on predefined conditions, enabling automated and secure transactions.
- **Open Source**: The source code for the smart contract and frontend is open and available for review and contribution.
- **Decentralization**: The contract and data are decentralized, providing transparency and security without relying on a central authority.
- **Token Integration**: The contract may interact with tokens or cryptocurrency to collect fees.



### Here is some operations in the project like if we want to deposit ether from user Id 1 we should follow these steps ıts the steps given in the picture:

![Image](https://github.com/user-attachments/assets/1bdc495f-1bb2-465f-85b5-8a7a919ad4ee)

![Image](https://github.com/user-attachments/assets/602d93da-1c8d-4165-acb4-2a0084fb91d3)

![Image](https://github.com/user-attachments/assets/c0492f20-2b94-4278-9b90-8aa87b9804d2)  


## Getting Started

Follow the instructions below to deploy the smart contract and run the frontend locally.

### Requirements

- **Node.js**: Required for backend operations.
- **Remix IDE**: Used to deploy the Solidity smart contract on the Ethereum blockchain.
- **MetaMask**: A wallet for interacting with the Ethereum blockchain.
- **http-server**: A tool to serve the frontend locally.

### Steps to Run the FeeCollector Smart Contract DApp

1. **Deploy Smart Contract on Remix**
   - Open Remix IDE (https://remix.ethereum.org) and deploy the Solidity smart contract.
   - After successful deployment, obtain the contract address from Remix.

2. **Update the Contract Address in JavaScript**
   - Open your frontend JavaScript file and update the contract address with the one you received after deploying the smart contract on Remix.

3. **Connect Wallet with MetaMask**
   - Install and open MetaMask in your browser.
   - Connect MetaMask to the Ethereum network and use WalletConnect to link your wallet with the DApp.

4. **Run the Frontend Locally**
   - Open Visual Studio Code (VSCode) and open the project directory in the terminal.
   - Run the command `http-server` to start the local server on `localhost`.

5. **Interact with the DApp**
   - Open your browser and visit `localhost` to access the frontend interface.
   - You can now interact with the FeeCollector Smart Contract by performing various operations on the Ethereum blockchain.



