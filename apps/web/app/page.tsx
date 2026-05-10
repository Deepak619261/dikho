const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-1 3.645 3.977-1.054zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
)

const STAR = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#FB8C00" aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const CHECK = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(251,246,238,.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #ECE3D2',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '14px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #F26B1F 0%, #D8541A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Noto Sans Devanagari, sans-serif',
              fontWeight: 700,
              color: '#fff',
              fontSize: 18,
              boxShadow: '0 4px 12px -3px rgba(242,107,31,.5)',
            }}
          >
            द
          </div>
          <span
            style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em', color: '#14110D' }}
          >
            Dikho
          </span>
        </div>

        {/* Links — hidden on mobile */}
        <div
          style={{ display: 'flex', gap: 30, fontSize: 14, color: '#2A2521', fontWeight: 500 }}
          className="hidden md:flex"
        >
          {['Features', 'Pricing', 'Examples', 'Help'].map((l) => (
            <a key={l} href="#" style={{ color: '#2A2521', textDecoration: 'none' }}>
              {l}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            style={{
              background: 'transparent',
              border: 0,
              fontSize: 14,
              fontWeight: 500,
              color: '#14110D',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <button
            style={{
              background: '#14110D',
              color: '#fff',
              border: 0,
              padding: '10px 18px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Start free
          </button>
        </div>
      </div>
    </nav>
  )
}

// ─── Google Search Preview ────────────────────────────────────────────────────
function GooglePreview() {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: 14,
        boxShadow: '0 4px 14px -4px rgba(20,17,13,.10), 0 2px 4px rgba(20,17,13,.04)',
        border: '1px solid #ECE3D2',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#F1F3F4',
          borderRadius: 100,
          padding: '7px 12px',
          fontSize: 12,
          color: '#5F6368',
          marginBottom: 12,
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5F6368"
          strokeWidth="2.5"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span style={{ flex: 1 }}>best salon near me chandigarh</span>
      </div>
      <div
        style={{
          padding: 12,
          borderRadius: 12,
          background: 'linear-gradient(180deg, #FFF3E6 0%, #FBF6EE 100%)',
          border: '1.5px solid #FFE7D2',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: '#14110D',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            S
          </div>
          <span style={{ fontSize: 11, color: '#5F6368' }}>shahnaz-salon.dikho.in</span>
        </div>
        <div
          style={{
            fontSize: 15,
            color: '#1A0DAB',
            fontWeight: 500,
            lineHeight: 1.25,
            marginBottom: 4,
          }}
        >
          Shahnaz Beauty Salon · Sector 22, Chandigarh
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ display: 'flex' }}>
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>{STAR}</span>
            ))}
          </span>
          <span style={{ fontSize: 11, color: '#5F6368' }}>4.6 · 248 reviews · Open now</span>
        </div>
        <div style={{ fontSize: 12, color: '#3C4043', lineHeight: 1.4 }}>
          Premium salon offering haircut, hair colour, facial, and bridal makeup. Book on
          WhatsApp...
        </div>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        background: `
        radial-gradient(circle at 90% -10%, rgba(242,107,31,.18) 0%, transparent 50%),
        radial-gradient(circle at 0% 90%, rgba(31,58,138,.10) 0%, transparent 55%),
        #FBF6EE
      `,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '72px 32px 80px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Left copy */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255,255,255,.75)',
              border: '1px solid #FFE7D2',
              color: '#D8541A',
              borderRadius: 999,
              padding: '8px 14px',
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            ⚡ 6,400+ businesses already on Dikho
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(52px,6vw,88px)',
              lineHeight: 0.92,
              fontWeight: 800,
              letterSpacing: '-0.045em',
              fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
              color: '#14110D',
            }}
          >
            Google pe
            <br />
            <span
              style={{
                fontFamily: '"Noto Sans Devanagari", "Inter Tight", Inter, sans-serif',
                background: 'linear-gradient(135deg, #F26B1F 0%, #D8541A 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
                letterSpacing: '-0.03em',
              }}
            >
              दिखो.
            </span>
          </h1>

          <p
            style={{
              margin: '24px 0 36px',
              fontSize: 18,
              lineHeight: 1.5,
              color: '#6B5F50',
              maxWidth: 500,
            }}
          >
            Apna salon, clinic ya shop ka website + Google listing + WhatsApp booking — sab kuch ek
            jagah. <strong style={{ color: '#14110D' }}>5 minute mein. Phone se.</strong>
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 24px',
                borderRadius: 14,
                border: 0,
                cursor: 'pointer',
                background: '#25D366',
                color: '#fff',
                fontSize: 16,
                fontWeight: 700,
                boxShadow: '0 14px 28px -10px rgba(37,211,102,.55)',
              }}
            >
              {WA_ICON} WhatsApp pe shuru karein
            </button>
            <button
              style={{
                padding: '16px 24px',
                borderRadius: 14,
                border: '1.5px solid #ECE3D2',
                background: '#fff',
                color: '#14110D',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Live demo dekhein →
            </button>
          </div>

          <div style={{ fontSize: 13, color: '#94887A', marginBottom: 32 }}>
            7 din free. Card ki zaroorat nahin.
          </div>

          {/* Trust strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 18px',
              background: 'rgba(255,255,255,.65)',
              borderRadius: 16,
              border: '1px solid #ECE3D2',
              maxWidth: 420,
            }}
          >
            <div style={{ display: 'flex' }}>
              {['#F26B1F', '#1F3A8A', '#15A36A', '#C97A3A'].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: c,
                    border: '2px solid #FBF6EE',
                    marginLeft: i ? -10 : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  {['R', 'M', 'A', 'P'][i]}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.4, color: '#6B5F50' }}>
              <strong style={{ color: '#14110D' }}>Rajeev, Meena, Anil + 6,400 others</strong>
              <br />
              got their first lead within 48 hours.
            </div>
          </div>
        </div>

        {/* Right — Google preview card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <GooglePreview />

          {/* Mini stat chips */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { label: 'Avg first lead', value: '< 48 hrs' },
              { label: 'Setup time', value: '5 min' },
              { label: 'Languages', value: '10+' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid #ECE3D2',
                  padding: '12px 14px',
                  textAlign: 'center',
                  boxShadow: '0 1px 2px rgba(20,17,13,.04)',
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 18,
                    letterSpacing: '-0.02em',
                    color: '#14110D',
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: '#94887A', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: '1',
      color: '#F26B1F',
      shadow: 'rgba(242,107,31,.35)',
      title: 'WhatsApp pe message bhejein',
      desc: '"Hi" likhne se shuru ho jata hai. No app download.',
    },
    {
      n: '2',
      color: '#1F3A8A',
      shadow: 'rgba(31,58,138,.30)',
      title: 'Photos aur details bhejein',
      desc: 'Salon ka naam, services, kuch photos. Bas.',
    },
    {
      n: '3',
      color: '#15A36A',
      shadow: 'rgba(21,163,106,.30)',
      title: 'Website live ho jata hai',
      desc: 'Google par dikhna shuru. Customer aane lagte hain.',
    },
  ]
  return (
    <section style={{ background: '#F4ECDD', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#D8541A',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          Kaise kaam karta hai
        </div>
        <h2
          style={{
            margin: '0 0 48px',
            fontSize: 'clamp(28px,3.5vw,44px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            fontFamily: '"Inter Tight", Inter, sans-serif',
            color: '#14110D',
          }}
        >
          Teen step. Bas itna hi.
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 20,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 24,
                border: '1px solid #ECE3D2',
                boxShadow: '0 4px 14px -4px rgba(20,17,13,.06)',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  flexShrink: 0,
                  background: s.color,
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 16px -4px ${s.shadow}`,
                  marginBottom: 18,
                }}
              >
                {s.n}
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#14110D' }}>
                {s.title}
              </div>
              <div style={{ fontSize: 14, color: '#6B5F50', lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const features = [
    'Google par website + listing',
    'Unlimited leads (no monthly cap)',
    'WhatsApp booking automation',
    'Customer reviews + photos',
    'Hindi + English + 8 more languages',
  ]
  return (
    <section style={{ background: '#FBF6EE', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Left copy */}
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#D8541A',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Pricing
            </div>
            <h2
              style={{
                margin: '0 0 20px',
                fontSize: 'clamp(28px,3vw,42px)',
                fontWeight: 700,
                letterSpacing: '-0.035em',
                fontFamily: '"Inter Tight", Inter, sans-serif',
                color: '#14110D',
              }}
            >
              Itna kam kharcha.
              <br />
              Itna zyada faayda.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#6B5F50',
                lineHeight: 1.6,
                marginBottom: 28,
                maxWidth: 400,
              }}
            >
              One coffee less per month. Pehla customer aaye tab pay karein — tab tak bilkul free.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  icon: '🆓',
                  label: 'Free forever',
                  desc: 'Website, Google listing, WhatsApp chat, lead counter',
                },
                {
                  icon: '🔓',
                  label: '₹299–499/month',
                  desc: 'Lead names + phones, booking calendar, review automation',
                },
                {
                  icon: '↩️',
                  label: '7-day free trial',
                  desc: 'No credit card. Cancel anytime in one tap.',
                },
              ].map((i) => (
                <div key={i.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{i.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: '#14110D' }}>{i.label}</div>
                    <div style={{ fontSize: 13, color: '#6B5F50', marginTop: 2 }}>{i.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dark pricing card */}
          <div
            style={{
              background: 'linear-gradient(160deg, #14110D 0%, #2A2521 100%)',
              color: '#fff',
              borderRadius: 28,
              padding: 32,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 18px 40px -16px rgba(20,17,13,.4), 0 4px 10px rgba(20,17,13,.08)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(242,107,31,.4) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(242,107,31,.18)',
                color: '#FFB179',
                border: '1px solid rgba(242,107,31,.35)',
                borderRadius: 999,
                padding: '6px 12px',
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              ✦ Most popular
            </div>
            <div
              style={{ fontSize: 22, fontWeight: 700, marginBottom: 4, letterSpacing: '-0.02em' }}
            >
              Dikho Pro
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 24 }}>
              <span style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.05em' }}>₹499</span>
              <span style={{ color: '#9C8C7A', fontSize: 15 }}>/ month</span>
            </div>
            <div
              style={{
                padding: 16,
                borderRadius: 14,
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginBottom: 22,
              }}
            >
              {features.map((f) => (
                <div
                  key={f}
                  style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: '#15A36A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {CHECK}
                  </span>
                  {f}
                </div>
              ))}
            </div>
            <button
              style={{
                width: '100%',
                padding: '16px',
                background: '#F26B1F',
                color: '#fff',
                border: 0,
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                boxShadow: '0 12px 30px -10px rgba(242,107,31,.55)',
              }}
            >
              Start 7-day free trial
            </button>
            <div style={{ textAlign: 'center', fontSize: 12, color: '#9C8C7A', marginTop: 12 }}>
              UPI · Card · Net banking · No lock-in
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const cards = [
    {
      name: 'Rajeev Sharma',
      biz: 'Sharma Salon, Sector 22, Chandigarh',
      quote:
        'Pehle hafte mein hi 3 naye customers WhatsApp pe aaye. Sach mein 5 minute mein ho gaya.',
      rating: 5,
    },
    {
      name: 'Dr. Meena Patel',
      biz: 'Patel Dental Clinic, Mohali',
      quote: 'Google par clinic ka naam aane laga. Patients khud dhundh ke aate hain ab.',
      rating: 5,
    },
    {
      name: 'Anil Verma',
      biz: 'Verma Physio & Wellness, Panchkula',
      quote: 'Pehle ₹15,000 ka site bana tha jo kisi kaam ka nahi tha. Yeh ₹499 mein sab ho gaya.',
      rating: 5,
    },
  ]
  return (
    <section style={{ background: '#F4ECDD', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          style={{
            margin: '0 0 40px',
            textAlign: 'center',
            fontSize: 'clamp(26px,3vw,40px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            fontFamily: '"Inter Tight", Inter, sans-serif',
            color: '#14110D',
          }}
        >
          Jinhe already farak pada
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 20,
          }}
        >
          {cards.map((c) => (
            <div
              key={c.name}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 24,
                border: '1px solid #ECE3D2',
                boxShadow: '0 4px 14px -4px rgba(20,17,13,.06)',
              }}
            >
              <div style={{ display: 'flex', marginBottom: 14 }}>
                {Array.from({ length: c.rating }).map((_, i) => (
                  <span key={i}>{STAR}</span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: '#14110D',
                  margin: '0 0 18px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{c.quote}&rdquo;
              </p>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#14110D' }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#6B5F50', marginTop: 2 }}>{c.biz}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const items = [
    {
      q: 'Kya mujhe coding aati hogi?',
      a: 'Bilkul nahin. WhatsApp pe message karein, baaki sab hum sambhalte hain.',
    },
    {
      q: 'Google par kab dikhne lagunga?',
      a: 'Average 24–48 hours mein. Aapko WhatsApp par notify kar denge.',
    },
    { q: 'Cancel karna ho to?', a: 'Ek tap. Koi sawaal nahin. 7 din ke andar full refund.' },
    {
      q: 'Kya mera number safe rahega?',
      a: 'Haan. Aapka data sirf aapko dikhta hai. Hum kisi ke saath share nahin karte.',
    },
  ]
  return (
    <section style={{ background: '#FBF6EE', padding: '80px 32px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <h2
          style={{
            margin: '0 0 36px',
            textAlign: 'center',
            fontSize: 'clamp(26px,3vw,38px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            fontFamily: '"Inter Tight", Inter, sans-serif',
            color: '#14110D',
          }}
        >
          Common sawaal
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((it, i) => (
            <details
              key={i}
              open={i === 0}
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: '16px 20px',
                border: '1px solid #ECE3D2',
                boxShadow: '0 1px 2px rgba(20,17,13,.03)',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: 15,
                  color: '#14110D',
                }}
              >
                {it.q}
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: '#F6F1E6',
                    border: '1px solid #ECE3D2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    color: '#6B5F50',
                    flexShrink: 0,
                    marginLeft: 16,
                  }}
                >
                  +
                </span>
              </summary>
              <div style={{ fontSize: 14, color: '#6B5F50', marginTop: 10, lineHeight: 1.6 }}>
                {it.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────
function BottomCTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #14110D 0%, #2A2521 100%)',
        padding: '80px 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242,107,31,.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
        <h2
          style={{
            margin: '0 0 16px',
            color: '#fff',
            fontSize: 'clamp(32px,4vw,52px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            fontFamily: '"Inter Tight", Inter, sans-serif',
          }}
        >
          Aaj shuru karein.
          <br />
          <span
            style={{
              fontFamily: '"Noto Sans Devanagari", sans-serif',
              background: 'linear-gradient(135deg, #F26B1F 0%, #FFB179 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            बिल्कुल free.
          </span>
        </h2>
        <p style={{ fontSize: 17, color: '#9C8C7A', marginBottom: 36, lineHeight: 1.5 }}>
          Chandigarh ke 6,400+ businesses already Dikho pe hain.
          <br />
          Aap kab aa rahe hain?
        </p>
        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '18px 32px',
            borderRadius: 16,
            border: 0,
            cursor: 'pointer',
            background: '#25D366',
            color: '#fff',
            fontSize: 17,
            fontWeight: 700,
            boxShadow: '0 14px 36px -10px rgba(37,211,102,.5)',
          }}
        >
          {WA_ICON} WhatsApp pe FREE shuru karein
        </button>
        <p style={{ fontSize: 13, color: '#6B5F50', marginTop: 16 }}>
          7 din free · Card ki zaroorat nahin · 1 tap cancel
        </p>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#14110D', padding: '40px 32px 32px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: 'linear-gradient(135deg, #F26B1F 0%, #D8541A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Noto Sans Devanagari, sans-serif',
                fontWeight: 700,
                color: '#fff',
                fontSize: 17,
              }}
            >
              द
            </div>
            <span
              style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: '#fff' }}
            >
              Dikho
            </span>
          </div>
          <p style={{ fontSize: 13, color: '#6B5F50', lineHeight: 1.6, maxWidth: 260, margin: 0 }}>
            Made with ❤️ in Chandigarh for Indian businesses.
            <br />
            Dikho Technologies Pvt. Ltd. · 2026
          </p>
        </div>
        <div style={{ display: 'flex', gap: 40 }}>
          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Examples', 'Changelog'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Refund Policy'] },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#6B5F50',
                  textTransform: 'uppercase',
                  letterSpacing: '.1em',
                  marginBottom: 14,
                }}
              >
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    style={{ fontSize: 13, color: '#9C8C7A', textDecoration: 'none' }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: '28px auto 0',
          paddingTop: 20,
          borderTop: '1px solid #2A2521',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 12, color: '#6B5F50' }}>© 2026 Dikho Technologies Pvt. Ltd.</span>
        <span
          style={{ fontSize: 13, color: '#6B5F50', fontFamily: 'Noto Sans Devanagari, sans-serif' }}
        >
          Google pe Dikho. Customers tak Pahuncho.
        </span>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#FBF6EE' }}>
      <Nav />
      <Hero />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BottomCTA />
      <Footer />
    </main>
  )
}
