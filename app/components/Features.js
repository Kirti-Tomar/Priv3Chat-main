import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-900">
            <h2 className="text-2xl font-semibold mb-4">Secure & Private</h2>
            <p className="text-lg mb-4">
              End-to-end encrypted messaging ensures that only the sender and receiver can read the messages. 
              No one else, including the platform or network, can access your message content. With zkFHE, this encryption process is more secure and verifiable.
            </p>
            <p className="text-sm text-gray-600">
              Use case: Send sensitive information securely, such as financial transactions or private communications, knowing that it's tamper-proof.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-900">
            <h2 className="text-2xl font-semibold mb-4">zkFHE-Powered</h2>
            <p className="text-lg mb-4">
              Powered by Zero-Knowledge Fully Homomorphic Encryption (zkFHE), this ensures that messages are encrypted before transmission, 
              and only the recipient can decrypt them using their private key. This ensures both privacy and integrity, with no risk of leaking data.
            </p>
            <p className="text-sm text-gray-600">
              Use case: Securely send messages in a way that even the service provider cannot access the content, making it ideal for confidential communication.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-900">
            <h2 className="text-2xl font-semibold mb-4">Blockchain-Backed</h2>
            <p className="text-lg mb-4">
              By leveraging blockchain technology, specifically the Airchains network, all encrypted messages are securely stored. The blockchain serves as a decentralized ledger that ensures integrity, and zk-proofs ensure messages have not been tampered with.
            </p>
            <p className="text-sm text-gray-600">
              Use case: Trustless communication where both parties can verify message integrity through the blockchain without needing a third-party intermediary.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-900">
            <h2 className="text-2xl font-semibold mb-4">Seamless UI</h2>
            <p className="text-lg mb-4">
              The user interface is designed to be intuitive and easy to navigate. You can send and receive encrypted messages with just a few clicks, all while maintaining full security. 
              The UI is simple yet effective, ensuring a smooth experience for users.
            </p>
            <p className="text-sm text-gray-600">
              Use case: Perfect for users who want secure messaging without dealing with complicated encryption settings or cumbersome interfaces.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-900">
            <h2 className="text-2xl font-semibold mb-4">Fast & Efficient</h2>
            <p className="text-lg mb-4">
              Optimized gas fees make it cost-effective to send encrypted messages via blockchain, while the system is designed for fast encryption and decryption to ensure seamless communication. 
              Even with zkFHE's powerful cryptographic features, performance remains top-notch.
            </p>
            <p className="text-sm text-gray-600">
              Use case: Send messages quickly and efficiently without worrying about high transaction fees or delays in encryption/decryption.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-blue-900">
            <h2 className="text-2xl font-semibold mb-4">Easy to Deploy</h2>
            <p className="text-lg mb-4">
              With tools like Hardhat or Foundry, deploying your smart contracts on the Airchains testnet is quick and straightforward. 
              Developers can easily test and deploy the system without dealing with complex setup procedures.
            </p>
            <p className="text-sm text-gray-600">
              Use case: Developers can quickly implement and test zkFHE-based secure messaging dApps in their Web3 projects, minimizing time-to-market.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
