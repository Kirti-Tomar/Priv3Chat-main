# Web3 User Messaging with zkFHE

## 🚀 Overview
This project enables **decentralized user discovery and messaging** using **Web3 smart contracts and zkFHE** for encryption. Users can **register usernames**, **search for other users**, and **send encrypted messages** securely.

⚠️ **Note:** This is just a prototype.

---

## 🔍 Features
- **Username Registration:** Users link their **wallet address** to a **unique username**.
- **User Search:** Find users by username to retrieve their **wallet address**.
- **Secure Messaging:** Encrypt and send messages using **zkFHE**.

---

## 📌 Smart Contract
The following Solidity contract allows users to register usernames and search for wallet addresses.

### **1️⃣ Register a Username**
```solidity
mapping(string => address) public usernameToAddress;
mapping(address => string) public addressToUsername;

function registerUsername(string memory _username) public {
    require(usernameToAddress[_username] == address(0), "Username already taken");

    usernameToAddress[_username] = msg.sender;
    addressToUsername[msg.sender] = _username;
}
```
✅ **How It Works?**
- Users call `registerUsername("sachin")` to link their wallet to `"sachin"`.
- Prevents duplicate usernames.

---

### **2️⃣ Search for a User**
```solidity
function getAddressByUsername(string memory _username) public view returns (address) {
    return usernameToAddress[_username];
}
```
✅ **Example Usage:**
1. User searches for `"sachin"` → Returns `0x123...abc` (wallet address).
2. Sender encrypts a message and sends it to `0x123...abc`.

---

## 🖥️ Frontend Integration (Next.js / React)
Create a **search bar** to find users by username.

```javascript
const searchUser = async (username) => {
  const contract = getContractInstance();
  const userAddress = await contract.getAddressByUsername(username);
  console.log("User address:", userAddress);
};
```
✅ **How It Works?**
- Users enter a username (e.g., `"sachin"`).
- The smart contract returns the **wallet address**.
- Sender can now **send an encrypted message** to the recipient.

---

## 🔧 Workflow
1️⃣ **User registers a username** in the smart contract.
2️⃣ **Other users search by username** to get the wallet address.
3️⃣ **Sender encrypts a message** and sends it to the recipient’s address.
4️⃣ **Recipient decrypts the message** using zkFHE.

---

## 📜 Requirements
- Solidity Smart Contract (Ethereum, Polygon, etc.)
- Web3.js / Ethers.js for frontend interaction
- zkFHE for message encryption

---

## 📖 Installation
1. **Clone the Repository:**
```sh
git clone https://github.com/your-repo.git
cd your-repo
```
2. **Install Dependencies:**
```sh
npm install
```
3. **Deploy Smart Contract:** (Using Hardhat or Remix)
```sh
npx hardhat run scripts/deploy.js --network goerli
```
4. **Run Frontend:**
```sh
npm run dev
```

---

## 📬 Contributions
Feel free to **fork** and **contribute** to improve the project! 🚀

---

## 📜 License
MIT License. Free to use and modify!

