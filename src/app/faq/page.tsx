import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Q1 */}
          <AccordionItem value="item-1" className="border rounded-xl bg-white/70 backdrop-blur">
            <AccordionTrigger className="px-4 py-3 text-left text-xl font-semibold">
              What is QuikGateway?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-[15px] leading-relaxed text-gray-700">
              QuikGateway is an IIoT gateway solution that lets companies monitor LIVE machine data in real time giving valuable KPIs that can be viewed on custom branded dashboard. Essentially a mini SCADA system.
            </AccordionContent>
          </AccordionItem>

          {/* Q2 */}
          <AccordionItem value="item-2" className="border rounded-xl bg-white/70 backdrop-blur">
            <AccordionTrigger className="px-4 py-3 text-left text-xl font-semibold">
              Why is industrial data so important?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-[15px] leading-relaxed text-gray-700 whitespace-pre-line">
              {`-Boosts productivity by automating and optimizing processes

-Reduces downtime through predictive maintenance

-Improves safety by monitoring hazardous conditions

-Enables smarter decisions with real-time data analytics`}
            </AccordionContent>
          </AccordionItem>

          {/* Q3 */}
          <AccordionItem value="item-3" className="border rounded-xl bg-white/70 backdrop-blur">
            <AccordionTrigger className="px-4 py-3 text-left text-xl font-semibold">
              What are some popular systems that will benfit from this IIOT Gateway?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-[15px] leading-relaxed text-gray-700">
              Dust collectors, air comprssors, waste water systems, HVAC control panels, pump stations, or any Legacy PLC controlled equipment that has limited data monitoring capabilities.
            </AccordionContent>
          </AccordionItem>

          {/* Q4 */}
          <AccordionItem value="item-4" className="border rounded-xl bg-white/70 backdrop-blur">
            <AccordionTrigger className="px-4 py-3 text-left text-xl font-semibold">
              What are the requirments needed?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-[15px] leading-relaxed text-gray-700">
              You can connect any machine/system you want as long as it can receive WiFi signals. Our control panels accept 24v DC or 120v AC control wiring for field devices. *Note* AC version require additional charges depending on how many signals needed.
            </AccordionContent>
          </AccordionItem>

          {/* Q5 */}
          <AccordionItem value="item-5" className="border rounded-xl bg-white/70 backdrop-blur">
            <AccordionTrigger className="px-4 py-3 text-left text-xl font-semibold">
              Can I get a custom dashboard?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-[15px] leading-relaxed text-gray-700">
              Yes! Every customer gets their own branded dashboard with tailored KPIs like runtime, machine status, fault status, or any digital or analog signals you would like to monitor.
            </AccordionContent>
          </AccordionItem>

          {/* Q6 */}
          <AccordionItem value="item-6" className="border rounded-xl bg-white/70 backdrop-blur">
            <AccordionTrigger className="px-4 py-3 text-left text-xl font-semibold">
              How do I get started?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-[15px] leading-relaxed text-gray-700">
              Just fill out the form on the homepage to request more details about our service, and we will get back to you with all the information you need to get started.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

