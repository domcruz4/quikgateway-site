export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-800">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Products</h1>
        <p className="text-lg text-center mb-6">
          Our models communicate via WiFi or 5G Ultra Capability connection depending on your needs.
        </p>

        <ul className="space-y-8">
          <li>
            <h2 className="text-xl font-semibold">Q-DC-W</h2>
            <p>Compact Gateway control panel that accepts 24V DC wiring for field signals. Uses pre-existing plant WiFi connection ONLY.
              *Contact for pricing and availability*
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Q-DC-5G</h2>
            <p>Compact Gateway control panel that accepts 24V DC wiring for field signals. Includes Wi-Fi and 5G UC connection via data plans.
              *Contact for pricing and availability*
            </p>
          </li>
                    <li>
            <h2 className="text-xl font-semibold">Q-AC-W</h2>
            <p>Compact Gateway control panel that accepts 120v AC wiring for field signals. Uses pre-existing plant WiFi connection ONLY.
              *Contact for pricing and availability*
            </p>
          </li>
                    <li>
            <h2 className="text-xl font-semibold">Q-AC-5G</h2>
            <p>Compact Gateway control panel that accepts 120v AC wiring for field signals. Includes Wi-Fi and 5G UC connection via data plans.
              *Contact for pricing and availability*
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
