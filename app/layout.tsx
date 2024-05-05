import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo Survery",
  description:
    "A next.js application for creating survey and collecting data for different users.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={fontInter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
