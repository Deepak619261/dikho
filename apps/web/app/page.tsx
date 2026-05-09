export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-border flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-primary text-2xl font-bold">Dikho</span>
          <span className="text-muted-foreground font-devanagari text-lg">दिखो</span>
        </div>
        <a
          href="https://wa.me/919999999999"
          className="bg-primary hover:bg-primary/90 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
        >
          Free mein shuru karein →
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <div className="text-primary mb-6 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
          Chandigarh ke salons ke liye
        </div>
        <h1 className="text-foreground mb-4 text-4xl leading-tight font-bold sm:text-5xl">
          Google pe <span className="text-primary">Dikho.</span>
          <br />
          Customers tak <span className="text-accent">Pahuncho.</span>
        </h1>
        <p className="text-muted-foreground mb-2 text-lg">
          WhatsApp pe 10 minute — aapka business online.
        </p>
        <p className="text-muted-foreground mb-10 text-base">
          Free website. Google listing. WhatsApp booking.
          <br />
          Pehla customer aaye tab pay karein — ₹299/month.
        </p>

        <a
          href="https://wa.me/919999999999"
          className="bg-primary hover:bg-primary/90 inline-block rounded-2xl px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-100"
        >
          WhatsApp pe FREE shuru karein 🚀
        </a>
        <p className="text-muted-foreground mt-4 text-sm">
          No app download. No form fill. Sirf WhatsApp.
        </p>
      </section>

      {/* How it works */}
      <section className="bg-orange-50 px-6 py-14">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-foreground mb-10 text-center text-2xl font-bold">
            Kaise kaam karta hai?
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                step: '1',
                title: 'WhatsApp karo',
                desc: 'Hamare number pe message karo. Hum 10 sawal poochenge.',
              },
              {
                step: '2',
                title: 'Website ban jaati hai',
                desc: 'AI aapke liye professional website bana deta hai — bilkul free.',
              },
              {
                step: '3',
                title: 'Google pe dikh jaao',
                desc: 'Aapki website Google Maps pe link hoti hai. Customers directly book karte hain.',
              },
              {
                step: '4',
                title: 'Customer aaye tab pay karo',
                desc: '"1 naya customer aaya" — sirf tab ₹299 mein unlock karo unka number.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white">
                  {step}
                </div>
                <div>
                  <p className="text-foreground text-base font-semibold">{title}</p>
                  <p className="text-muted-foreground mt-0.5 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="mx-auto max-w-xl px-6 py-14 text-center">
        <h2 className="text-foreground mb-4 text-2xl font-bold">
          Pehle customer aane do, phir sochna
        </h2>
        <p className="text-muted-foreground mb-6">
          Website, Google listing, WhatsApp chat — sab free. Jab pehla customer booking try kare,
          sirf tab ₹299/month.
        </p>
        <div className="border-primary/20 rounded-2xl border bg-orange-50 p-6 text-left">
          <p className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
            Free plan mein milega
          </p>
          {[
            'Professional website',
            'Google pe listing help',
            'WhatsApp click-to-chat',
            'Lead counter (locked)',
          ].map((f) => (
            <p key={f} className="text-foreground flex items-center gap-2 py-1 text-sm">
              <span className="text-success font-bold">✓</span> {f}
            </p>
          ))}
          <hr className="border-border my-4" />
          <p className="text-accent mb-3 text-sm font-semibold tracking-wide uppercase">
            ₹299/month mein unlock hoga
          </p>
          {[
            'Customer ka naam + number',
            'WhatsApp pe seedha connect',
            'Review collection',
            'Monthly Google posts',
          ].map((f) => (
            <p key={f} className="text-foreground flex items-center gap-2 py-1 text-sm">
              <span className="text-accent font-bold">✓</span> {f}
            </p>
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-primary px-6 py-14 text-center">
        <h2 className="mb-3 text-3xl font-bold text-white">Aaj shuru karein</h2>
        <p className="mb-8 text-base text-orange-100">
          Chandigarh ke 50+ salons already Dikho pe hain.
        </p>
        <a
          href="https://wa.me/919999999999"
          className="text-primary inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold shadow-lg transition-all hover:bg-orange-50"
        >
          WhatsApp karo — FREE hai 🙏
        </a>
        <p className="font-devanagari mt-4 text-sm text-orange-200">
          Google pe Dikho. Customers tak Pahuncho.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-muted-foreground border-border border-t px-6 py-6 text-center text-xs">
        <p>
          © 2025 Dikho — <span className="font-devanagari">दिखो</span> — Made with ❤️ in Chandigarh
        </p>
      </footer>
    </main>
  )
}
