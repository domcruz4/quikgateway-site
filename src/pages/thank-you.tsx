import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg-tech2.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 bg-white text-gray-800 rounded-xl shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">✅ Thank you!</h1>
        <p className="mb-6">Your request has been submitted successfully. We will contact you soon.</p>

        <Link href="/">
          <Button className="px-6 py-3 bg-black text-white border border-black hover:bg-gray-900">
            Go Back Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
