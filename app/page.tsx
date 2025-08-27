export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      {/* Top bar */}
      <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-900"></div>
          <span className="font-semibold tracking-tight">VICLARI</span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a className="hover:opacity-80" href="#features">Features</a>
          <a className="hover:opacity-80" href="#roadmap">Roadmap</a>
          <a className="hover:opacity-80" href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Your vision, <span className="underline decoration-slate-300">made clear</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
          VICLARI is a modern Next.js starter that’s production-ready from day one.
          Deployed on Vercel, wired to GitHub, and designed to scale.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/api/capture"
            className="rounded-lg bg-slate-900 px-4 py-2 text-white text-sm hover:bg-slate-800"
          >
            Test API route
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-medium">Next.js + App Router</h3>
            <p className="mt-1 text-sm text-slate-600">14.x, TypeScript, API routes, and fast refresh.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-medium">Vercel Production</h3>
            <p className="mt-1 text-sm text-slate-600">CI/CD from GitHub with instant rollbacks.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-medium">Tailwind CSS</h3>
            <p className="mt-1 text-sm text-slate-600">Utility-first styling for rapid iteration.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl font-semibold">What’s included</h2>
        <ul className="mt-4 list-disc pl-6 text-slate-700">
          <li>Clean project structure with <code>app/</code> router</li>
          <li>Working <code>/api/capture</code> endpoint</li>
          <li>Deployed at <code>viclari.com</code> with <code>www → viclari.com</code> redirect</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl font-semibold">Roadmap</h2>
        <ol className="mt-4 list-decimal pl-6 text-slate-700">
          <li>Connect Supabase (auth + DB)</li>
          <li>Add Stripe (billing)</li>
          <li>Ship first feature module</li>
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-3 text-slate-700 text-sm">
          Want to collaborate? Email <span className="font-medium">hello@viclari.com</span> (update later).
        </p>
      </section>

      <footer className="mt-8 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} VICLARI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}