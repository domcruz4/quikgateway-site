import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Zap, Code2, Lock, Factory, Headphones,
  Play, AlertTriangle, Octagon, Settings2, RefreshCw, CheckCircle2,
  Wind, Activity, Gauge, BarChart3, BellRing, TrendingUp, Wrench, Workflow, Briefcase, ThermometerSnowflake, Flame, Droplet, Fan, Thermometer,
  Box, Cog, Hammer, ArrowRightLeft, Package, Beaker, Snowflake, AirVent
} from "lucide-react";


// Why Choose features (match visuals from the earlier cards)
type Feature = { icon: LucideIcon; title: string; text: string; color: string };

const features: Feature[] = [
  {
    icon: Zap,
    title: "Plug-and-Play Setup",
    text:
      "Get up and running in a day with our pre-configured IIoT gateway panels. Just land your field signal wires and you will be up and running in no time.",
    color: "text-sky-600",
  },
  {
    icon: BarChart3,
    title: "Real-Time Machine Insights & Alerts",
    text:
      "Monitor system status and get real timie alerts instantly from your phone, desktop, or on a TV screen.",
    color: "text-sky-600",
  },
  {
    icon: Code2,
    title: "Zero Coding Required",
    text:
      "Designed for plant operations, management and maintenance, not programmers. No code. No complexity. Just data.",
    color: "text-purple-600",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    text:
      "Each company gets their own dashboard with secure HTTPS access and custom branding.",
    color: "text-slate-700",
  },
  {
    icon: Factory,
    title: "Industry 4.0",
    text:
      "Boost productivity by automating and optimizing processes. Reduces downtime through predictive maintenance. Improves safety by monitoring hazardous conditions. Enables smarter decisions with real time data analytics.",
    color: "text-emerald-600",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    text:
      "Run by automation professionals who understand the industry. We help you set up so you can start viewing valuable data quickly.",
    color: "text-indigo-600",
  },
];

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
            We are your solution to a smarter industry 4.0 
          </p>
          <Link href="/products">
            <Button className="px-6 py-2 bg-black text-white border border-black hover:bg-gray-900">
              View Products
            </Button>
          </Link>
        </div>
      </section>

      <section className="relative py-20">
        {/* soft background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto h-24 max-w-6xl bg-gradient-to-r from-sky-200/25 via-fuchsia-200/25 to-emerald-200/25 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Bring your industrial systems online today!
          </h2>
          <p className="mt-2 text-slate-600">
            Real-time visibility for legacy equipment. Plug-and-play panel + hosted dashboard. No coding. No SCADA overhaul.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)"
                }}
              />
              <div className="relative">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
                <h3 className="text-base font-semibold text-slate-900">
                  What we capture (day-one wiring)
                </h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Play className="mt-0.5 h-5 w-5 text-sky-500" />
                    <span>Run / Idle (starter aux or PLC bit)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                    <span>Fault active (stacklight/relay)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Octagon className="mt-0.5 h-5 w-5 text-rose-500" />
                    <span>E-Stop tripped</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings2 className="mt-0.5 h-5 w-5 text-slate-600" />
                    <span>Auto / Manual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <RefreshCw className="mt-0.5 h-5 w-5 text-fuchsia-500" />
                    <span>Cycle start / complete (pulses)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span>Good / scrap count</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wind className="mt-0.5 h-5 w-5 text-cyan-600" />
                    <span>Plant air OK</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="mt-0.5 h-5 w-5 text-purple-600" />
                    <span>
                      Analog status (4–20 mA): motor current, air pressure, temperature, level, flow,
                      vibration/hydraulic
                    </span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Card 2 */}
            <div className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)"
                }}
              />
              <div className="relative">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
                <h3 className="text-base font-semibold text-slate-900">What you get instantly</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Gauge className="mt-0.5 h-5 w-5 text-indigo-600" />
                    <span>OEE &amp; KPIs: Availability, cycle time, rate, quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="mt-0.5 h-5 w-5 text-sky-600" />
                    <span>Downtime analytics: top stops, duration, time-of-day patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BellRing className="mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Alerts: long stops, no-parts running, low air, high temp/amps/vibration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span>Trends: last 24 h / 7 d for amps, pressure, temp, vibration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)"
                }}
              />
              <div className="relative">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
                <h3 className="text-base font-semibold text-slate-900">Why teams like it</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Wrench className="mt-0.5 h-5 w-5 text-slate-700" />
                    <span>Maintenance: early warnings, faster root cause, fewer blind spots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Workflow className="mt-0.5 h-5 w-5 text-sky-700" />
                    <span>Operations: rate vs target, bottlenecks by shift/order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-5 w-5 text-emerald-700" />
                    <span>Management: objective uptime and throughput without a SCADA project</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most common systems — matches previous visuals (gradient bar + hover glow + icons) */}
<section className="relative py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
  <div className="pointer-events-none absolute inset-0">
    <div className="mx-auto h-24 max-w-6xl bg-gradient-to-r from-sky-200/25 via-fuchsia-200/25 to-emerald-200/25 blur-2xl" />
  </div>

  <div className="relative mx-auto max-w-6xl px-6">
    <h2 className="text-4xl font-bold tracking-tight text-slate-900">Most common systems</h2>

    {(() => {
      type Item = { icon: LucideIcon; color: string; text: string };
      const items: Item[] = [
        { icon: Wind,                color: "text-sky-600",     text: "Dust collectors/baghouses — catch clogged filters, fan/VFD trips, bin overflows, stay EPA/OSHA-ready." },
        { icon: Gauge,               color: "text-indigo-600",  text: "Air compressors — see duty cycle, leaks, high temp/pressure, unexpected stops; cut energy waste." },
        { icon: ThermometerSnowflake,color: "text-cyan-600",    text: "Chillers & cooling towers — track ΔT, flow, level/conductivity; prevent freeze/overheat and efficiency loss." },
        { icon: Flame,               color: "text-rose-600",    text: "Boilers/steam — lockouts, steam pressure, feedwater level; avoid downtime and safety events." },
        { icon: Droplet,             color: "text-emerald-600", text: "Process pumps — suction/discharge pressure, seal leak, current; spot clogs, cavitation, dry-run." },
        { icon: Fan,                 color: "text-slate-700",   text: "Central vacuum systems — header vacuum, run/fault; find leaks and over-cycling fast." },
        { icon: Thermometer,         color: "text-orange-600",  text: "Ovens/dryers/furnaces — chamber temp and conveyor/run; stop out-of-spec temps before scrap." },
        { icon: Box,                color: "text-purple-600",  text: "Injection molding — cycle pulses, faults, hydraulic pressure; tighten cycle time, reduce scrap spikes." },
        { icon: Cog,                 color: "text-slate-700",   text: "CNCs (mills/lathes) — cycle/alarms, spindle load; real utilization, tool wear trends, alarm patterns." },
        { icon: Hammer,              color: "text-amber-600",   text: "Presses (stamping/hydraulic) — stroke counts, faults, lube/tonnage signals; detect jams and die issues." },
        { icon: ArrowRightLeft,      color: "text-sky-600",     text: "Conveyors/sorters — run/fault, photoeye jams, motor current; expose bottlenecks and nuisance trips." },
        { icon: Package,             color: "text-emerald-600", text: "Packaging lines — cycle & reject counts, air pressure; OEE clarity and changeover loss visibility." },
        { icon: Beaker,              color: "text-indigo-600",  text: "Parts washers/CIP — temp, flow, tank level, run/fault; ensure process quality and prevent empty-tank trips." },
        { icon: Snowflake,           color: "text-cyan-600",    text: "Refrigeration/walk-ins — room/case temp, compressor run/fault, door status; stop product loss early." },
        { icon: AirVent,             color: "text-slate-700",   text: "RTUs/MAUs (HVAC) — fan/compressor run, supply air temp, filter ΔP; cut off-hours runtime and filter issues." },
      ];
      return (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* hover glow overlay (same as other sections) */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)",
                }}
              />
              <div className="relative">
                {/* top gradient bar */}
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
                {/* single-color icon (matches previous section style) */}
                <div className="mb-3">
                  <it.icon className={`h-5 w-5 ${it.color}`} aria-hidden="true" />
                </div>
                <p className="text-slate-700">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    })()}
  </div>
</section>

 {/* Features Overview — unified with other cards */}
<section className="relative py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
  <div className="pointer-events-none absolute inset-0">
    <div className="mx-auto h-24 max-w-6xl bg-gradient-to-r from-sky-200/25 via-fuchsia-200/25 to-emerald-200/25 blur-2xl" />
  </div>

  <div className="relative mx-auto max-w-6xl px-6">
    <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="group relative overflow-hidden rounded-2xl border bg-white/90 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
        {/* hover glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)" }}
        />
        {/* image header */}
        <div className="relative h-40">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/iiot.jpg')" }} />
        </div>
        {/* content */}
        <div className="relative p-6">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-slate-900">IIoT Monitoring</h3>
          <p className="text-slate-700">Track machine status, runtime, and performance from any device.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative overflow-hidden rounded-2xl border bg-white/90 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)" }}
        />
        <div className="relative h-40">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/mqtt.jpg')" }} />
        </div>
        <div className="relative p-6">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-slate-900">MQTT Integration</h3>
          <p className="text-slate-700">Native support for MQTT to send and receive real field signals effortlessly.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative overflow-hidden rounded-2xl border bg-white/90 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)" }}
        />
        <div className="relative h-40">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/dashboard.jpg')" }} />
        </div>
        <div className="relative p-6">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-slate-900">Custom Dashboards</h3>
          <p className="text-slate-700">Each customer gets their own branded dashboards to view live machine status KPIs in real time.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose QuikGateway — matched visuals */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Why Choose QuikGateway?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* same hover glow overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(167,139,250,0.14) 45%, rgba(34,197,94,0.12) 95%)",
                  }}
                />
                <div className="relative">
                  {/* same top gradient bar */}
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 mb-4" />
                  {/* single-color icon like earlier cards */}
                  <div className="mb-3">
                    <item.icon className={`h-5 w-5 ${item.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.text}</p>
                </div>
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
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="470d8f27-77b6-44ba-a86a-a7836d9dd81f" />

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

              <input type="hidden" name="redirect" value="https://quikgateway.com/thank-you" />
            </form>
          </div>
        </div>
      </section>

      {/* Dashboard Link */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Already a Customer?</h2>
        <a href="https://dashboard.quikgateway.com" className="text-blue-600 hover:underline text-lg">
          Go to Your Dashboard
        </a>
      </section>
    </main>
  );
}
