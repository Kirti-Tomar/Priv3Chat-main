// Importing necessary modules from Hardhat
const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

async function main() {
    // Getting the contract's name
    const message = "Messaging"; // Replace with your contract's name
    console.log(`Deploying ${message}...`);

    // Get the signer (deployer) from the wallet
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Log the account balance
    console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

    // Get the contract factory
    const Messaging = await ethers.getContractFactory(message);

    // Deploy the contract (you can use upgrades.deployProxy if it's an upgradeable contract)
    console.log("Deploying...");
    const messagingContract = await Messaging.deploy(); // You can add constructor arguments if required
    console.log(`Contract deployed to: ${messagingContract.address}`);

    // Wait for the contract to be mined
    await messagingContract.deployed();
    console.log(`Messaging contract deployed at: ${messagingContract.address}`);

    // Save the deployed contract address and ABI
    const contractAddress = messagingContract.address;
    console.log(`Saving contract address...`);
    const fs = require("fs");
    const path = require("path");

    const buildPath = path.resolve(__dirname, "../constants/contractConfig.js");
    const contractABIPath = path.resolve(__dirname, "../constants/contractABI.json");

    // Saving contract address to contractConfig.js
    const configData = `
    export const CONTRACT_ADDRESS = "${contractAddress}";
    export const NETWORK = "Airchains Testnet"; // Adjust this as needed
    `;
    fs.writeFileSync(buildPath, configData);

    // Saving ABI to contractABI.json
    fs.writeFileSync(contractABIPath, JSON.stringify(abi, null, 2));

    console.log("Contract address and ABI saved!");
}

// Run the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
