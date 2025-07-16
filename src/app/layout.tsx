import "./globals.css";
import { nunito, satoshi } from "./fonts";
import type { Metadata } from "next";

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
      <body
        className={`${satoshi.variable} ${nunito.variable} ${satoshi.className}`}
      >
        {children}
      </body>
    </html>
  );
}
