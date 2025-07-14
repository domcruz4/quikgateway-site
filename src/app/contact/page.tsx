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
          action="https://formsubmit.co/joe@quikgateway.com"
          method="POST"
          className="space-y-4"
        >
          <Input name="name" placeholder="Your Name" required />
          <Input name="email" type="email" placeholder="Email Address" required />
          <Input name="company" placeholder="Company Name" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

          <Textarea name="message" placeholder="Tell us what you're looking for..." required />
          <Button type="submit" className="px-6 py-3 text-lg">Submit Request</Button>
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </main>
      <Footer />
    </>
  );
}

