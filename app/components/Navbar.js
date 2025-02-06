"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Home, Layout, Layers, Wallet, Mail } from "lucide-react"; // Added Mail icon for Contact Us

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(""); // Add state for wallet address

  const menuItems = [
    { href: "#hero", label: "Home", icon: Home },
    { href: "#features", label: "Features", icon: Layers },
    { href: "#plans", label: "Plan", icon: Layout },
    { href: "#contact", label: "Contact Us", icon: Mail }, // Added Contact Us
  ];

  // Add wallet connection function
  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setIsOpen(false); // Close mobile menu if open
      } else {
        alert("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const NavItems = () => (
    <>
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-black bg-opacity-70 backdrop-blur-md">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo & Desktop Navigation */}
        <div className="flex items-center space-x-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-white text-lg">Priv3Chat</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <NavItems />
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Connect Wallet Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={connectWallet}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-200"
          >
            {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="absolute left-0 top-0 w-3/4 bg-black bg-opacity-90 p-6 space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-white"
              onClick={() => setIsOpen(false)}
            >
              <Wallet className="h-6 w-6" /> {/* Wallet Icon Only in Mobile */}
              <span className="font-bold">Priv3Chat</span>
            </Link>
            <nav className="flex flex-col space-y-4">
              <NavItems />
            </nav>
            <button
              onClick={connectWallet}
              className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 mt-6 transition duration-200"
            >
              {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
