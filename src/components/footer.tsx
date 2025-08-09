"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-300/40 via-fuchsia-300/40 to-emerald-300/40" />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {year} <span className="font-medium text-slate-700">QuikGateway</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="mailto:support@quikgateway.com" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-800 hover:shadow">
              support@quikgateway.com
            </a>
            <a href="/privacy" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-800 hover:shadow">
              Privacy Policy
            </a>
            <a href="/terms" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-800 hover:shadow">
              Terms
            </a>
            <a href="https://dashboard.quikgateway.com" className="rounded-full border border-slate-900 bg-slate-900 px-3 py-1.5 text-sm text-white shadow-sm transition hover:bg-slate-800">
              Dashboard
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none select-none">
        <div className="mx-auto h-8 max-w-6xl bg-gradient-to-r from-sky-200/20 via-fuchsia-200/20 to-emerald-200/20 blur-2xl" />
      </div>
    </footer>
  );
}
