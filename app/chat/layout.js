import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat Dashboard",
  description: "A chat app dashboard similar to WhatsApp and Instagram",
};

export default function ChatLayout({ children }) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}