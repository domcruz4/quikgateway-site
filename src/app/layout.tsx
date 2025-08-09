import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/footer";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {/* Modern Navbar */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center text-2xl font-bold text-black hover:text-blue-600 transition-colors"
            >
              QuikGateway<span className="align-super text-xs ml-1">™</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 items-center">
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                FAQ
              </Link>
              <a
                href="https://dashboard.quikgateway.com"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100 transition"
              onClick={() =>
                document.getElementById("mobile-menu")?.classList.toggle("hidden")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="hidden md:hidden px-6 pb-4 space-y-2 bg-white shadow"
          >
            <Link
              href="/products"
              className="block text-gray-700 hover:text-blue-600 transition"
            >
              Products
            </Link>
            <Link
              href="/faq"
              className="block text-gray-700 hover:text-blue-600 transition"
            >
              FAQ
            </Link>
            <a
              href="https://dashboard.quikgateway.com"
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </a>
          </div>
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
