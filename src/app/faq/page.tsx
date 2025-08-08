export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-800">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What is QuikGateway?</h2>
          <p>
            QuikGateway is an IIoT gateway solution that lets companies monitor LIVE machine data in real time giving valuable KPIs that can be viewed on custom branded dashboard. Essentially a mini SCADA system.
          </p>
        </div>

                <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Why is industrial data so important?</h2>
          <p>
             -Boosts productivity by automating and optimizing processes

             -Reduces downtime through predictive maintenance

            -Improves safety by monitoring hazardous conditions

            -Enables smarter decisions with real-time data analytics
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What are some popular systems that will benfit from this IIOT Gateway?</h2>
          <p>
            Dust collectors, air comprssors, waste water systems, HVAC control panels, pump stations, or any Legacy PLC controlled equipment that has limited data monitoring capabilities.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What are the requirments needed?</h2>
          <p>
            You can connect any machine/system you want as long as it can receive WiFi signals. Our control panels accept 24v DC or 120v AC control wiring for field devices. *Note* AC version require additional charges depending on how many signals needed.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Can I get a custom dashboard?</h2>
          <p>
            Yes! Every customer gets their own branded dashboard with tailored KPIs like runtime, machine status, fault status, or any digital or analog signals you would like to monitor.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How do I get started?</h2>
          <p>
            Just fill out the form on the homepage to request more details about our service, and we will get back to you with all the information you need to get started.
          </p>
        </div>
      </section>
    </main>
  );
}
