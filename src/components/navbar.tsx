'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">
          QuikGateway
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-black">Features</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-black">Pricing</Link>
          <Button asChild>
  <a href="/contact" className="text-white text-lg px-6 py-3">Request a Demo</a>
</Button>
        </div>
      </div>
    </nav>
  );
}
