"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Wallet2, Search, Send, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import axios from 'axios'; // We'll use axios for API requests

export default function Chat() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [message, setMessage] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [account, setAccount] = useState("")
  const [chats, setChats] = useState([])  // To store chats from the backend
  const [messages, setMessages] = useState([])  // To store messages of selected chat

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Fetch chats from the backend (replace with real API endpoint)
  const fetchChats = async () => {
    try {
      const response = await axios.get('/api/chats', { params: { account } });
      setChats(response.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  // Fetch messages for selected chat (replace with real API endpoint)
  const fetchMessages = async (chatId) => {
    try {
      const response = await axios.get(`/api/messages/${chatId}`, { params: { account } });
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Send message (use backend API to store messages)
  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        chatId: selectedChat,
        message,
        sender: account,
        timestamp: new Date().toISOString(),
      };

      try {
        await axios.post('/api/messages', newMessage);  // Replace with real API endpoint
        setMessages([...messages, newMessage]);
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  }

  // Connect wallet
  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);
        fetchChats();  // Fetch chats once the wallet is connected
      } else {
        alert("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Handle search functionality
  const filteredChats = chats.filter((chat) => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Handle chat selection
  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
    setIsSidebarOpen(false);
    fetchMessages(chatId);  // Fetch messages for the selected chat
  };

  useEffect(() => {
    if (account) {
      fetchChats(); // Fetch chats when account is connected
    }
  }, [account]);

  return (
    <div className={`flex h-screen ${isDarkMode ? "dark" : ""} bg-gray-100 dark:bg-gray-900`}>
      
      {/* Sidebar for Mobile & Desktop */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:w-1/3 lg:w-1/4`}>

        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <h1 className="text-xl font-bold text-gray-700 dark:text-white">Priv3Chat</h1>
          <Button onClick={toggleDarkMode} className="rounded-full">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users"
              className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedChat === chat.id ? "bg-gray-200 dark:bg-gray-600" : ""
              }`}
              onClick={() => handleChatSelect(chat.id)}
            >
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{chat.lastMessage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-800">

        {/* Top Navbar */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {selectedChat ? (
              <h2 className="text-lg font-semibold">{chats.find(chat => chat.id === selectedChat)?.name}</h2>
            ) : (
              <h2 className="text-lg font-semibold">Select a Chat</h2>
            )}
          </div>

          <Button onClick={connectWallet} className="bg-purple-500 bg-opacity-80 backdrop-blur-md text-white flex items-center">
            <Wallet2 className="h-5 w-5 mr-2" />
            {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {selectedChat ? (
            messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className="mb-4">
                  <div className="font-semibold">{msg.sender}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{msg.message}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No messages yet. Start the conversation!</p>
            )
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold text-purple-500">Welcome to Web3 Chat</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Connect your wallet and start chatting.</p>
              <Button className="mt-4 bg-purple-500 text-white">Start Chatting</Button>
            </div>
          )}
        </div>

        {/* Message Input */}
        {selectedChat && (
          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                rows="1"
              />
              <Button onClick={handleSendMessage} className="bg-purple-500 text-white rounded-full">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
