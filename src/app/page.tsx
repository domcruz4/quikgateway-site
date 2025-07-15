 import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
  className="relative min-h-[60vh] flex flex-col items-center justify-center text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/bg-tech2.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70 z-0" />

  {/* Content on top of the overlay */}
  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to QuikGateway</h1>
    <p className="text-lg mb-6 max-w-xl mx-auto">
      The easiest way to monitor your industrial machines with real-time dashboards.
    </p>
    <Link href="/products">
      <Button className="px-6 py-2 bg-black text-white border border-black hover:bg-gray-900">
        View Products
      </Button>
    </Link>
  </div>
</section>


      {/* Features Overview */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-cover bg-center text-white" style={{ backgroundImage: "url('/iiot.jpg')" }}>
  <CardContent className="p-6 bg-black/60 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">IIoT Monitoring</h3>
    <p>Track machine status, runtime, and performance from any device.</p>
  </CardContent>
</Card>
<Card className="relative overflow-hidden text-white">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/mqtt.jpg')" }}
  />

  {/* Centered overlay: 65% height, top offset 17.5% */}
  <div className="absolute left-0 right-0 top-[17.5%] h-[65%] bg-black/50 rounded-lg" />

  {/* Text content */}
  <CardContent className="relative z-10 p-6">
    <h3 className="text-xl font-semibold mb-2">MQTT Integration</h3>
    <p>
      Native support for MQTT to connect your PLC, field devices, or sensors effortlessly.
    </p>
  </CardContent>
</Card>
          
          <Card className="relative overflow-hidden text-white">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/dashboard.jpg')" }}
  />

  {/* Centered overlay: 65% height, top offset 17.5% */}
  <div className="absolute left-0 right-0 top-[17.5%] h-[65%] bg-black/50 rounded-lg" />

  {/* Text content */}
  <CardContent className="relative z-10 p-6">
    <h3 className="text-xl font-semibold mb-2">Custom Dashboards</h3>
    <p>
      Each customer gets their own branded dashboards to view live machine status KPIs in real time.
    </p>
  </CardContent>
</Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose QuikGateway?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Plug-and-Play Setup</h3>
            <p>Get up and running in minutes with our pre-configured IIoT gateway that connects directly to field device wiring or PLC.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Machine Insights</h3>
            <p>Monitor status, uptime, and performance instantly—right from your phone or desktop using beautiful dashboards.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Zero Coding Required</h3>
            <p>Designed for plant operations and maintenance, not programmers. No code. No complexity. Just data.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p>Each company gets its own isolated dashboard with secure HTTPS access and custom branding.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flat Monthly Pricing</h3>
            <p>No surprises. Plans from $49/month for one device or up to 10 for only $199/month. Monthly subscription covers secure cloud infrastructure, server maintenance, real-time dashboards, alerting, and ongoing support.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p>Run by automation pros who understand your production floor. We help you set up so you can start viewing live data quickly.</p>
          </div>
        </div>
      </section>

{/* Contact Form */}
<section
  className="relative py-16 px-6 text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/touch.jpeg')" }}
>
  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />

  {/* Content on top */}
  <div className="relative z-10">
    <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
    <form
      action="https://formsubmit.co/joe@quikgateway.com"
      method="POST"
      className="grid gap-4 max-w-xl mx-auto"
    >
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Input type="text" name="company" placeholder="Company Name" />
      <textarea
        name="message"
        placeholder="Message"
        className="border rounded p-2 text-black"
        rows={4}
        required
      ></textarea>
      <input type="hidden" name="_captcha" value="false" />
      <Button
        type="submit"
        className="px-6 py-2 bg-black text-white border border-black hover:bg-gray-900"
      >
        Submit
      </Button>
    </form>
  </div>
</section>

      {/* Dashboard Link */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Already a Customer?</h2>
        <a
          href="https://dashboard.quikgateway.com"
          className="text-blue-600 hover:underline text-lg"
        >
          Go to Your Dashboard
        </a>
      </section>
    </main>
  );
}
