// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@airchains/fhevm/contracts/FHE.sol"; // Import zkFHE library

contract PrivateMessaging {
    struct UserProfile {
        string username;
        bytes publicKey;  // Store user's public key for zkFHE decryption
        bool exists;
    }

    struct Message {
        bytes encryptedContent;  // zkFHE-encrypted message
        address sender;
        uint256 timestamp;
    }

    mapping(address => UserProfile) public users;  // Store user profiles
    mapping(address => Message[]) private messages;  // Store messages per recipient

    event UserRegistered(address indexed user, string username, bytes publicKey);
    event UserUpdated(address indexed user, string newUsername, bytes newPublicKey);
    event MessageSent(address indexed sender, address indexed recipient, uint256 timestamp);

    /// @notice Register a new user with a username and public key
    /// @param _username Unique username
    /// @param _publicKey zkFHE public key for encryption
    function registerUser(string memory _username, bytes memory _publicKey) external {
        require(!users[msg.sender].exists, "User already registered");
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(_publicKey.length > 0, "Invalid public key");

        users[msg.sender] = UserProfile(_username, _publicKey, true);
        emit UserRegistered(msg.sender, _username, _publicKey);
    }

    /// @notice Update username or public key
    /// @param _newUsername New username
    /// @param _newPublicKey New public key
    function updateUser(string memory _newUsername, bytes memory _newPublicKey) external {
        require(users[msg.sender].exists, "User not registered");
        require(bytes(_newUsername).length > 0, "Username cannot be empty");
        require(_newPublicKey.length > 0, "Invalid public key");

        users[msg.sender].username = _newUsername;
        users[msg.sender].publicKey = _newPublicKey;
        emit UserUpdated(msg.sender, _newUsername, _newPublicKey);
    }

    /// @notice Send an encrypted message
    /// @param _encryptedMessage zkFHE-encrypted content
    /// @param _recipient Address of the message receiver
    function sendMessage(bytes memory _encryptedMessage, address _recipient) external {
        require(_recipient != address(0), "Invalid recipient address");
        require(users[_recipient].exists, "Recipient not registered");
        require(_encryptedMessage.length > 0, "Message cannot be empty");

        messages[_recipient].push(Message(_encryptedMessage, msg.sender, block.timestamp));
        emit MessageSent(msg.sender, _recipient, block.timestamp);
    }

    /// @notice Retrieve all received messages
    function getMessages() external view returns (Message[] memory) {
        return messages[msg.sender];
    }

    /// @notice Fetch a user's profile
    function getUserProfile(address _user) external view returns (UserProfile memory) {
        require(users[_user].exists, "User not found");
        return users[_user];
    }
}
