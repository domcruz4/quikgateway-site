{/* Customer CTA – modernized */}
<section className="relative py-16">
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
  <div className="relative max-w-6xl mx-auto px-6">
    <div className="rounded-3xl border bg-white/80 p-8 md:p-12 text-center shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-600">
        Already a Customer?
      </p>
      <h3 className="text-3xl font-bold text-slate-900">Go to Your Dashboard</h3>
      <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
        Sign in to view live KPIs, alerts, and device status.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="https://dashboard.quikgateway.com"
          className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-800"
        >
          Go to Your Dashboard
        </a>
        <a
          href="mailto:support@quikgateway.com"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
        >
          Need help?
        </a>
      </div>

      {/* subtle multi‑color glow under the card (matches your site accents) */}
      <div className="pointer-events-none mt-8 h-6 w-full rounded-full bg-gradient-to-r from-sky-200/30 via-fuchsia-200/30 to-emerald-200/30 blur-2xl" />
    </div>
  </div>
</section>
