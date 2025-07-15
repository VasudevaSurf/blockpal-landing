import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockPal - Your All-in-One Crypto Ecosystem",
  description:
    "Trade, automate transactions, research, and connect everything you need. BlockPal is your all-in-one crypto ecosystem, empowering you to trade, automate transactions, research, and connect with your community.",
  keywords:
    "crypto, blockchain, trading, automation, cryptocurrency, ecosystem",
  authors: [{ name: "BlockPal Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
