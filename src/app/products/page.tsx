// app/products/page.tsx (or wherever your route lives)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, SignalHigh, Bolt } from "lucide-react";

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
          <li>
            <Card className="group border-gray-200 shadow-sm hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Q-DC-W</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Bolt className="h-3.5 w-3.5" />
                      24V DC
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Wifi className="h-3.5 w-3.5" />
                      Wi-Fi
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 leading-relaxed">
                Compact Gateway control panel that accepts 24V DC wiring for field signals. Uses pre-existing plant WiFi connection ONLY.
                *Contact for pricing and availability*
              </CardContent>
            </Card>
          </li>

          {/* Q-DC-5G */}
          <li>
            <Card className="group border-gray-200 shadow-sm hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Q-DC-5G</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Bolt className="h-3.5 w-3.5" />
                      24V DC
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <SignalHigh className="h-3.5 w-3.5" />
                      5G UC
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Wifi className="h-3.5 w-3.5" />
                      Wi-Fi
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 leading-relaxed">
                Compact Gateway control panel that accepts 24V DC wiring for field signals. Includes Wi-Fi and 5G UC connection via data plans.
                *Contact for pricing and availability*
              </CardContent>
            </Card>
          </li>

          {/* Q-AC-W */}
          <li>
            <Card className="group border-gray-200 shadow-sm hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Q-AC-W</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Bolt className="h-3.5 w-3.5" />
                      120v AC
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Wifi className="h-3.5 w-3.5" />
                      Wi-Fi
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 leading-relaxed">
                Compact Gateway control panel that accepts 120v AC wiring for field signals. Uses pre-existing plant WiFi connection ONLY.
                *Contact for pricing and availability*
              </CardContent>
            </Card>
          </li>

          {/* Q-AC-5G */}
          <li>
            <Card className="group border-gray-200 shadow-sm hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Q-AC-5G</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Bolt className="h-3.5 w-3.5" />
                      120v AC
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <SignalHigh className="h-3.5 w-3.5" />
                      5G UC
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Wifi className="h-3.5 w-3.5" />
                      Wi-Fi
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 leading-relaxed">
                Compact Gateway control panel that accepts 120v AC wiring for field signals. Includes Wi-Fi and 5G UC connection via data plans.
                *Contact for pricing and availability*
              </CardContent>
            </Card>
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
