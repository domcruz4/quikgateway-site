'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={[
        "sticky top-0 z-50 w-full transition",
        // Glassy background with graceful fallback
        "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70",
        // Subtle border/shadow for separation
        "border-b border-slate-200 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
          >
            QuikGateway
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
            >
              Pricing
            </Link>

            <Button asChild className="shadow-sm hover:shadow-md">
              <a href="/contact" className="text-base px-5 py-2.5">
                Request a Demo
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div
            className="mt-3 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <Link
              href="#features"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Button asChild className="mt-1">
              <a href="/contact" className="text-base px-5 py-2.5" onClick={() => setOpen(false)}>
                Request a Demo
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
