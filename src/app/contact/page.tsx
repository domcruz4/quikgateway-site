'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Request a Demo</h1>
<form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-4"
>
  {/* Web3Forms Access Key */}
  <input type="hidden" name="access_key" value="470d8f27-77b6-44ba-a86a-a7836d9dd81f" />

  <Input name="name" placeholder="Your Name" required />
  <Input name="email" type="email" placeholder="Email Address" required />
  <Input name="company" placeholder="Company Name" />

  <Textarea name="message" placeholder="Tell us what you're looking for..." required />

  <Button type="submit" className="px-6 py-3 text-lg">Submit Request</Button>

  {/* Optional: Redirect to thank-you page */}
  <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" />
</form>

      </main>
      <Footer />
    </>
  );
}

