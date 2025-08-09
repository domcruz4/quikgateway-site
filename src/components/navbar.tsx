'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">
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
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {/* simple hamburger / close */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden px-6 pb-4 space-y-2 bg-white shadow ${open ? '' : 'hidden'}`}
      >
        <Link href="/products" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setOpen(false)}>
          Products
        </Link>
        <Link href="/faq" className="block text-gray-700 hover:text-blue-600 transition" onClick={() => setOpen(false)}>
          FAQ
        </Link>
        <a
          href="https://dashboard.quikgateway.com"
          className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => setOpen(false)}
        >
          Login
        </a>
      </div>
    </header>
  );
}
