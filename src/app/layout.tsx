/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Metadata } from "next";
import { Capriola, Outfit, Orbitron } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./hooks/CartContext";

const capriola = Capriola({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400", // Capriola has only one weight
  variable: "--font-capriola", // Optional: Use a CSS variable
});
const orbitron = Orbitron({
  subsets: ["latin"], // Specify the subsets you need
  weight: "400",
  variable: "--font-orbitron", // Optional: Use a CSS variable
});

// Configure the Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300"], // Specify multiple weights if needed
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Wizz gym Kampala Uganda",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`antialiased ${capriola.variable} ${outfit.variable} ${orbitron.variable}`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
