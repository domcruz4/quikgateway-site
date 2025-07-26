import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">✅ Thank you!</h1>
        <p className="mb-6 text-gray-600">
          Your request has been submitted successfully. We will contact you soon.
        </p>

        <Link href="/">
          <Button className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition">
            Go Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
