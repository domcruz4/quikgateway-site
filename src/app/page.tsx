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
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to QuikGateway</h1>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            We are your solution to a smarter industry 4.0 by providing real-time field level data directly from your industrial systems and onto a custom dashboard that can be viewed from anywhere in the world.
          </p>
          <Link href="/products">
            <Button className="px-6 py-2 bg-black text-white border border-black hover:bg-gray-900">
              View Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Sales Pitch Section */}
<section className="relative py-16">
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
  <div className="relative mx-auto max-w-6xl px-6">

    <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-900">
      Bring your industrial systems online today!
    </h2>
    <p className="mt-2 text-slate-600">
      Real-time visibility for legacy equipment. Plug-and-play panel + hosted dashboard. No coding. No SCADA overhaul.
    </p>

    <div className="mt-8 grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-base font-semibold text-slate-900">What we capture (day-one wiring)</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Run / Idle (starter aux or PLC bit)</li>
          <li>Fault active (stacklight/relay)</li>
          <li>E-Stop tripped</li>
          <li>Auto / Manual</li>
          <li>Cycle start / complete (pulses)</li>
          <li>Good / scrap count</li>
          <li>Plant air OK</li>
          <li>Analog health (4–20 mA): motor current, air pressure, critical temperature, vibration/hydraulic</li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold text-slate-900">What you get instantly</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>OEE &amp; KPIs: Availability, cycle time, rate, quality</li>
          <li>Downtime analytics: top stops, duration, time-of-day patterns</li>
          <li>Alerts: long stops, no-parts running, low air, high temp/amps/vibration</li>
          <li>Trends: last 24 h / 7 d for amps, pressure, temp, vibration</li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold text-slate-900">Why teams like it</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Maintenance: early warnings, faster root cause, fewer blind spots</li>
          <li>Operations: rate vs target, bottlenecks by shift/order</li>
          <li>Management: objective uptime and throughput without a SCADA project</li>
        </ul>
      </div>
    </div>
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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/mqtt.jpg')" }}
            />
            <div className="absolute left-0 right-0 top-[17.5%] h-[65%] bg-black/50 rounded-lg" />
            <CardContent className="relative z-10 p-6">
              <h3 className="text-xl font-semibold mb-2">MQTT Integration</h3>
              <p>Native support for MQTT to send and receive real field signals effortlessly.</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/dashboard.jpg')" }}
            />
            <div className="absolute left-0 right-0 top-[17.5%] h-[65%] bg-black/50 rounded-lg" />
            <CardContent className="relative z-10 p-6">
              <h3 className="text-xl font-semibold mb-2">Custom Dashboards</h3>
              <p>Each customer gets their own branded dashboards to view live machine status KPIs in real time.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us (subtle multi-color glow) */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Why Choose QuikGateway?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Plug-and-Play Setup",
                text:
                  "Get up and running in a day with our pre-configured IIoT gateway panels. Just land your field signal wires and you will be up and running in no time."
              },
              {
                title: "Real-Time Machine Insights & Alerts",
                text:
                  "Monitor system status and get real timie alerts instantly from your phone, desktop, or on a TV screen."
              },
              {
                title: "Zero Coding Required",
                text:
                  "Designed for plant operations, management and maintenance, not programmers. No code. No complexity. Just data."
              },
              {
                title: "Secure & Private",
                text:
                  "Each company gets their own dashboard with secure HTTPS access and custom branding."
              },
              {
                title: "Industry 4.0",
                text:
                  "Boost productivity by automating and optimizing processes. Reduces downtime through predictive maintenance. Improves safety by monitoring hazardous conditions. Enables smarter decisions with real time data analytics. "
              },
              {
                title: "Expert Support",
                text:
                  "Run by automation professionals who understand the industry. We help you set up so you can start viewing valuable data quickly."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-transparent bg-white p-6 shadow-sm ring-1 ring-slate-200 
                transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg
                hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.5),0_0_25px_-5px_rgba(167,139,250,0.5),0_0_25px_-5px_rgba(34,197,94,0.5)]"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="relative py-16 px-6 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/touch.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
          <div className="max-w-lg mx-auto bg-white rounded-lg p-6 text-gray-800 shadow-lg">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="access_key"
                value="470d8f27-77b6-44ba-a86a-a7836d9dd81f"
              />

              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Email Address" required />
              <Input name="company" placeholder="Company Name" />

              <textarea
                name="message"
                placeholder="Tell us what you're looking for..."
                required
                className="w-full border rounded p-2 text-gray-800 bg-white"
              ></textarea>

              <Button
                type="submit"
                className="px-6 py-3 text-lg bg-black text-white border border-black hover:bg-gray-900 hover:border-gray-700 transition"
              >
                Submit Request
              </Button>

              <input
                type="hidden"
                name="redirect"
                value="https://quikgateway.com/thank-you"
              />
            </form>
          </div>
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
