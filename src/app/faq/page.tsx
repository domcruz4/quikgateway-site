import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Cpu,
  BarChart3,
  Factory,
  Plug,
  LayoutDashboard,
  Rocket,
  ChevronDown,
} from "lucide-react";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Reusable row helper */}
          <FAQRow
            value="item-1"
            icon={<Cpu className="h-5 w-5 text-sky-600" />}
            question="What is QuikGateway?"
          >
            QuikGateway is an IIoT gateway solution that lets companies
            monitor LIVE machine data in real time giving valuable KPIs that
            can be viewed on custom branded dashboard. Essentially a mini
            SCADA system.
          </FAQRow>

          <FAQRow
            value="item-2"
            icon={<BarChart3 className="h-5 w-5 text-emerald-600" />}
            question="Why is industrial data so important?"
          >
            {`-Boosts productivity by automating and optimizing processes

-Reduces downtime through predictive maintenance

-Improves safety by monitoring hazardous conditions

-Enables smarter decisions with real-time data analytics`}
          </FAQRow>

          <FAQRow
            value="item-3"
            icon={<Factory className="h-5 w-5 text-indigo-600" />}
            question="What are some popular systems that will benfit from this IIOT Gateway?"
          >
            Dust collectors, air comprssors, waste water systems, HVAC control
            panels, pump stations, or any Legacy PLC controlled equipment that
            has limited data monitoring capabilities.
          </FAQRow>

          <FAQRow
            value="item-4"
            icon={<Plug className="h-5 w-5 text-orange-500" />}
            question="What are the requirments needed?"
          >
            You can connect any machine/system you want as long as it can
            receive WiFi signals. Our control panels accept 24v DC or 120v AC
            control wiring for field devices. *Note* AC version require
            additional charges depending on how many signals needed.
          </FAQRow>

          <FAQRow
            value="item-5"
            icon={<LayoutDashboard className="h-5 w-5 text-purple-600" />}
            question="Can I get a custom dashboard?"
          >
            Yes! Every customer gets their own branded dashboard with tailored
            KPIs like runtime, machine status, fault status, or any digital or
            analog signals you would like to monitor.
          </FAQRow>

          <FAQRow
            value="item-6"
            icon={<Rocket className="h-5 w-5 text-rose-600" />}
            question="How do I get started?"
          >
            Just fill out the form on the homepage to request more details
            about our service, and we will get back to you with all the
            information you need to get started.
          </FAQRow>
        </Accordion>
      </section>
    </main>
  );
}

/* --- Reusable item with animations --- */
function FAQRow({
  value,
  icon,
  question,
  children,
}: {
  value: string;
  icon: React.ReactNode;
  question: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem
      value={value}
      className="overflow-hidden rounded-xl border bg-white/70 backdrop-blur transition hover:shadow-sm"
    >
      <AccordionTrigger
        className="px-4 py-3 text-left text-xl font-semibold flex items-center gap-2
                   hover:bg-white data-[state=open]:bg-white
                   focus:outline-none"
      >
        <span className="shrink-0">{icon}</span>
        <span className="flex-1">{question}</span>

        {/* Chevron rotates on open */}
        <ChevronDown
          className="h-5 w-5 text-gray-500 transition-transform duration-300
                     data-[state=open]:rotate-180"
          aria-hidden
        />
      </AccordionTrigger>

      {/* Slide/fade animation via radix state classes */}
      <AccordionContent
        className="px-4 pb-4 text-[15px] leading-relaxed text-gray-700 whitespace-pre-line
                   data-[state=closed]:animate-accordion-up
                   data-[state=open]:animate-accordion-down"
      >
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
