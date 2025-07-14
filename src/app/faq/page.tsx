export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20 text-gray-800">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What is QuikGateway?</h2>
          <p>
            QuikGateway is an IIoT gateway device that lets companies monitor their machines in real time giving KPIs on a machine and can be viewed live on dashboards. Essentially a mini SCADA system.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How much does it cost?</h2>
          <p>
            Devices can be found on our product page ranging from $799-$850 depending on the model. $99/month monthly subscription per company for software and server maintenance. Each device beyond 10 costs an additional $20/month.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What machines can I connect?</h2>
          <p>
            You can connect any machine you want as long as it can receive WiFi or LTE signals.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Can I get a custom dashboard?</h2>
          <p>
            Yes! Every customer gets their own branded Grafana dashboard with tailored KPIs like runtime, machine status, fault status, or any digital or analog signals you would like to monitor on your machine.
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
