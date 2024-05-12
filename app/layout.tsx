import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo Survey",
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
        <body className={fontInter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            storageKey="echo-survey-theme"
          >
            {children}
            <Toaster richColors position="bottom-left" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
