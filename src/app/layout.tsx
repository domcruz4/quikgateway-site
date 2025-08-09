import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuikGateway",
  description: "Your gateway to smarter industrial monitoring",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}>
        {/* Server-safe navbar (no event handlers) */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center text-2xl font-extrabold tracking-tight text-black hover:text-blue-600 transition-colors">
              QuikGateway<span className="align-super text-xs ml-1">™</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">
                Products
              </Link>
              <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">
                FAQ
              </Link>
              <a
                href="https://dashboard.quikgateway.com"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition shadow-sm hover:shadow-md"
              >
                Login
              </a>
            </nav>

            {/* Mobile toggle (CSS-only) */}
            <div className="md:hidden">
              {/* Hidden checkbox controls the panel via peer classes */}
              <input id="nav-toggle" type="checkbox" className="peer sr-only" />
              <label
                htmlFor="nav-toggle"
                aria-label="Toggle menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-white cursor-pointer"
              >
                {/* Hamburger / X using CSS only */}
                <svg className="h-5 w-5 peer-checked:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                <svg className="h-5 w-5 hidden peer-checked:block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>
          </div>

          {/* Mobile menu panel (driven by checkbox state) */}
          <div
            className="md:hidden max-w-7xl mx-auto px-6 pb-4 space-y-2 bg-white/90 shadow transition-all duration-200
                       max-h-0 overflow-hidden peer-checked:max-h-96 peer-checked:py-3
                       [#nav-toggle:checked~&]:max-h-96 [#nav-toggle:checked~&]:py-3"
          >
            <Link href="/products" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-slate-50">
              Products
            </Link>
            <Link href="/faq" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-slate-50">
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
