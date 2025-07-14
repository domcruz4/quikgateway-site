'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-16 border-t">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {year} QuikGateway. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="mailto:support@quikgateway.com" className="hover:text-gray-700">
            support@quikgateway.com
          </a>
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

