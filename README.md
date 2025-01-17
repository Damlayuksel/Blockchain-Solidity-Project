# Fee Collector DApp

This project is a simple decentralized application (DApp) built with Solidity and Web3.js that allows users to register, deposit funds, withdraw funds, check balances, and view a list of registered users. The DApp interacts with an Ethereum smart contract deployed on the Ethereum network.

## Features

- **User Registration**: Users can register with a unique ID.
- **Deposit Funds**: Users can deposit Ethereum (ETH) into their account.
- **Withdraw Funds**: Users can withdraw ETH from their account.
- **Check Balance**: Users can check the balance of their account.
- **View Registered Users**: Display a list of all registered users.

## Smart Contract

The smart contract is written in Solidity and provides the following functionality:

- **register()**: Registers a user with a unique ID.
- **deposit()**: Allows users to deposit funds (ETH) into their account.
- **withdraw()**: Allows users to withdraw ETH from their account.
- **getBalance()**: Fetches the balance of a user.
- **getUserCount()**: Returns the total number of registered users.
- **getUserByIndex()**: Returns a user’s ID based on their index in the list of users.

## Technologies Used

- **Solidity**: Smart contract development.
- **Web3.js**: JavaScript library to interact with the Ethereum blockchain.
- **HTML/CSS**: Front-end interface to interact with the users.
- **Ethereum**: Blockchain for the DApp deployment.
- **MetaMask**: Ethereum wallet for interacting with the contract.

## Getting Started

To run the DApp, follow these steps:

### Prerequisites

- Install **MetaMask** in your browser for managing Ethereum accounts.
- Install **Node.js** if you want to run the project locally.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fee-collector-dapp.git
