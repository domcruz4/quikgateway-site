import { WifiIcon, SignalIcon, BoltIcon } from "@heroicons/react/24/solid";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our models communicate via WiFi or 5G Ultra Capability connection depending on your needs.
          </p>
        </div>

        {/* Product grid */}
        <ul className="grid gap-6 sm:grid-cols-2">
          {/* Q-DC-W */}
          <li className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur transition hover:shadow-xl hover:-translate-y-0.5">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Q-DC-W</h2>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-sky-100 text-sky-700">
                    <BoltIcon className="h-3 w-3" />
                    24V DC
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                    <WifiIcon className="h-3 w-3" />
                    Wi-Fi
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Compact Gateway control panel that accepts 24V DC wiring for field signals. Uses pre-existing plant WiFi connection ONLY.
                *Contact for pricing and availability*
              </p>
            </div>
          </li>

          {/* Q-DC-5G */}
          <li className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur transition hover:shadow-xl hover:-translate-y-0.5">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-fuchsia-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Q-DC-5G</h2>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-sky-100 text-sky-700">
                    <BoltIcon className="h-3 w-3" />
                    24V DC
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                    <SignalIcon className="h-3 w-3" />
                    5G UC
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                    <WifiIcon className="h-3 w-3" />
                    Wi-Fi
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Compact Gateway control panel that accepts 24V DC wiring for field signals. Includes Wi-Fi and 5G UC connection via data plans.
                *Contact for pricing and availability*
              </p>
            </div>
          </li>

          {/* Q-AC-W */}
          <li className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur transition hover:shadow-xl hover:-translate-y-0.5">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Q-AC-W</h2>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
                    <BoltIcon className="h-3 w-3" />
                    120v AC
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                    <WifiIcon className="h-3 w-3" />
                    Wi-Fi
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Compact Gateway control panel that accepts 120v AC wiring for field signals. Uses pre-existing plant WiFi connection ONLY.
                *Contact for pricing and availability*
              </p>
            </div>
          </li>

          {/* Q-AC-5G */}
          <li className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur transition hover:shadow-xl hover:-translate-y-0.5">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Q-AC-5G</h2>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
                    <BoltIcon className="h-3 w-3" />
                    120v AC
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                    <SignalIcon className="h-3 w-3" />
                    5G UC
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                    <WifiIcon className="h-3 w-3" />
                    Wi-Fi
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Compact Gateway control panel that accepts 120v AC wiring for field signals. Includes Wi-Fi and 5G UC connection via data plans.
                *Contact for pricing and availability*
              </p>
            </div>
          </li>
        </ul>

        {/* Subtle note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-gray-600">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <span>Plug-and-play hardware. Customer lands field signals.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
