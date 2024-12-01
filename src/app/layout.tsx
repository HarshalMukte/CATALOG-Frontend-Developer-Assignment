import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Track cryptocurrency prices and trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="font-sans bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 text-gray-800">
        {/* Header and Tabs */}
        <div className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <Tabs />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </body>
    </html>
  );
}
