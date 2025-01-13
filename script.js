const contractAddress = "0x3Fa0042466E43Ed299C9ad42e3957664D12D31dA"; 
const contractABI = [
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
    }
],
"name": "deposit",
"outputs": [],
"stateMutability": "payable",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
    }
],
"name": "register",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }
],
"name": "withdraw",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
    }
],
"name": "getBalance",
"outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
    }
],
"name": "getUserByIndex",
"outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "getUserCount",
"outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
],
"name": "users",
"outputs": [
    {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
    }
],
"stateMutability": "view",
"type": "function"
}
];

let web3;
let contract;

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        contract = new web3.eth.Contract(contractABI, contractAddress);
    } else {
        alert("Please install MetaMask to use this application.");
    }
};

async function registerUser() {
    const id = document.getElementById("registerId").value;
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.register(id).send({ from: accounts[0] });
        alert("User registered successfully.");
    } catch (error) {
        alert("Error: " + error.message);
    }
}

async function depositFunds() {
    const id = document.getElementById("depositId").value;
    const amount = document.getElementById("depositAmount").value;
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.deposit(id).send({ 
            from: accounts[0], 
            value: web3.utils.toWei(amount, "ether") 
        });
        alert("Funds deposited successfully.");
    } catch (error) {
        alert("Error: " + error.message);
    }
}

async function withdrawFunds() {
    const id = document.getElementById("withdrawId").value;
    const amount = document.getElementById("withdrawAmount").value;
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.withdraw(id, web3.utils.toWei(amount, "ether")).send({ from: accounts[0] });
        alert("Funds withdrawn successfully.");
    } catch (error) {
        alert("Error: " + error.message);
    }
}

async function checkBalance() {
    const id = document.getElementById("balanceId").value;
    try {
        const balance = await contract.methods.getBalance(id).call();
        document.getElementById("balanceOutput").innerText = "Balance: " + web3.utils.fromWei(balance, "ether") + " ETH";
    } catch (error) {
        alert("Error: " + error.message);
    }
}

async function getRegisteredUsers() {
    try {
        const userCount = await contract.methods.getUserCount().call(); // Total user count
        const userListElement = document.getElementById("registeredUsersList");
        userListElement.innerHTML = ""; // Clear the list

        for (let i = 0; i < userCount; i++) {
            const userId = await contract.methods.getUserByIndex(i).call(); // Assuming you have a getUserByIndex function
            const listItem = document.createElement("li");
            listItem.textContent = `User ID: ${userId}`;
            userListElement.appendChild(listItem);
        }
    } catch (error) {
        alert("Error fetching registered users: " + error.message);
    }
}