export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-800">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Products</h1>
        <p className="text-lg text-center mb-6">
          Our models communicate via WiFi or LTE connection depending on your needs. Price includes hardware, installation, and setup.
        </p>

        <ul className="space-y-8">
          <li>
            <h2 className="text-xl font-semibold">QG-ETH-W</h2>
            <p>Compact Gateway Box that taps into your local ethernet network to gather and display KPIs on your dashboards. Uses pre-existing plant WiFi connection ONLY.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">QG-DA-W</h2>
            <p>Compact Gateway box that taps into your digital and analog signals inside your machine and displays KPIs on your dashboards. Uses pre-existing plant WiFi connection ONLY.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">QG-ETH-L</h2>
            <p>Compact Gateway box that taps into your local ethernet network to gather and display KPIs on your dashboard. Uses LTE ONLY.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">QG- DA-L</h2>
            <p>Compact Gateway box that taps into your digital and analog signals inside your machine to display KPIs on your dashboard. Uses LTE ONLY.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
