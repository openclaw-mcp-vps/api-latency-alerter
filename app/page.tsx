export default function Home() {
  const faqs = [
    {
      q: 'How quickly will I get alerted?',
      a: 'Checks run every minute from multiple global regions. You receive a Slack or Discord notification within seconds of a threshold breach.',
    },
    {
      q: 'Can I set different thresholds per endpoint?',
      a: 'Yes. Each monitored endpoint has its own configurable latency threshold, so a slow internal API won\'t drown out alerts for your critical checkout flow.',
    },
    {
      q: 'What happens after I pay?',
      a: 'You get instant access to the dashboard. Add your first endpoint and Slack webhook in under two minutes — no credit card trials, no setup calls.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get Slack alerts when your{' '}
          <span className="text-[#58a6ff]">API response times spike</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor endpoints from multiple global locations, detect latency spikes above custom thresholds, and receive instant Slack or Discord alerts with performance graphs — before your customers notice.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No setup fees.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Multi-region checks', 'Custom thresholds', 'Slack & Discord', 'Performance graphs', '1-min intervals', 'Instant alerts'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Simple pricing</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Up to 20 monitored endpoints',
              'Checks every 60 seconds',
              '5 global monitoring regions',
              'Slack & Discord webhooks',
              'Latency history & graphs',
              'Custom alert thresholds',
              'Email digest reports',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Latency Alerter. All rights reserved.
      </footer>
    </main>
  )
}
