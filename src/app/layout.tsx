import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/footer"; // <-- ✅ Import your Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuikGateway",
  description: "Your gateway to smarter industrial monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-black">
  QuikGateway<span className="align-super text-xs ml-1">™</span>
</Link>

            <nav className="space-x-6 hidden md:block">
              <Link href="/products" className="text-gray-700 hover:text-blue-600">
  Products
</Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600">
                FAQ
              </Link>
              
              <a
                href="https://dashboard.quikgateway.com"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <Footer /> {/* ✅ Now the footer will display on every page */}
      </body>
    </html>
  );
}
