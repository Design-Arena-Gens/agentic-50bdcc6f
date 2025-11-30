'use client';

export default function Page() {
  return (
    <>
      <header className="site-header">
        <a href="#" className="brand">
          <svg viewBox="0 0 64 64" aria-hidden="true" className="brand-mark">
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--p300))" />
                <stop offset="100%" stopColor="hsl(var(--p500))" />
              </linearGradient>
            </defs>
            <path
              d="M32 6C22 18 10 28 10 40c0 10.5 9 18 22 18s22-7.5 22-18C54 28 42 18 32 6z"
              fill="url(#g)"
            />
            <circle cx="32" cy="38" r="6" fill="white" opacity="0.9" />
          </svg>
          <span>AquaFlow Pro</span>
        </a>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#specs">Specs</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className="btn btn--small">Get Quote</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero__content">
            <h1>
              High?Efficiency Water Pump
              <span className="accent"> Built for Reliability</span>
            </h1>
            <p className="lede">
              Delivering powerful, ultra?quiet performance with smart controls and up to
              35% energy savings for residential, agricultural, and light industrial use.
            </p>
            <div className="cta-row">
              <a className="btn btn--primary" href="#contact">Request a Quote</a>
              <a className="btn btn--ghost" href="#specs">View Specifications</a>
            </div>
            <ul className="hero__highlights">
              <li>Smart variable?speed motor</li>
              <li>IP67 weather sealed</li>
              <li>Noise ? 38 dB</li>
              <li>5?year warranty</li>
            </ul>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <svg viewBox="0 0 640 480" className="pump-illustration">
              <defs>
                <linearGradient id="body" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(var(--p400))" />
                  <stop offset="100%" stopColor="hsl(var(--p600))" />
                </linearGradient>
                <linearGradient id="flow" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(var(--a300))" />
                  <stop offset="100%" stopColor="hsl(var(--a500))" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect x="140" y="140" width="360" height="200" rx="28" fill="url(#body)" />
              <rect x="150" y="150" width="340" height="180" rx="22" fill="hsl(var(--bg-elev))" />
              <circle cx="210" cy="240" r="58" fill="url(#body)" />
              <circle cx="210" cy="240" r="46" fill="hsl(var(--bg))" />
              <rect x="460" y="190" width="120" height="100" rx="16" fill="url(#body)" />
              <rect x="400" y="210" width="70" height="60" rx="8" fill="hsl(var(--ink-2))" />
              <path d="M260 235h120" stroke="url(#flow)" strokeWidth="8" strokeLinecap="round" filter="url(#glow)"/>
              <path d="M385 235h50" stroke="url(#flow)" strokeWidth="8" strokeLinecap="round" filter="url(#glow)"/>
              <rect x="170" y="310" width="420" height="20" rx="10" fill="hsl(var(--ink-3))" opacity="0.35"/>
            </svg>
          </div>
        </section>

        <section id="features" className="section">
          <h2 className="section__title">Engineered Features</h2>
          <div className="grid">
            <Feature
              title="Variable?Speed Intelligence"
              desc="Adaptive control maintains optimal pressure with minimal energy draw."
              icon="speed"
            />
            <Feature
              title="Ultra?Quiet Operation"
              desc="Acoustic dampening and balanced impeller keep noise below 38 dB."
              icon="quiet"
            />
            <Feature
              title="Weather Sealed"
              desc="Rugged IP67 enclosure resists dust, rain, and outdoor conditions."
              icon="shield"
            />
            <Feature
              title="Dry?Run Protection"
              desc="Automatic shutdown protects the motor when inlet water is absent."
              icon="protect"
            />
            <Feature
              title="Smart Monitoring"
              desc="Wi?Fi and Bluetooth diagnostics with mobile alerts and OTA updates."
              icon="smart"
            />
            <Feature
              title="High Efficiency"
              desc="Premium BLDC motor and precision bearings reduce losses by 35%."
              icon="efficiency"
            />
          </div>
        </section>

        <section id="specs" className="section section--alt">
          <h2 className="section__title">Technical Specifications</h2>
          <div className="specs">
            <div>
              <span className="k">Max Flow</span>
              <span className="v">180 L/min</span>
            </div>
            <div>
              <span className="k">Max Head</span>
              <span className="v">52 m</span>
            </div>
            <div>
              <span className="k">Power</span>
              <span className="v">750 W (peak)</span>
            </div>
            <div>
              <span className="k">Voltage</span>
              <span className="v">110?240 V AC</span>
            </div>
            <div>
              <span className="k">Ingress</span>
              <span className="v">IP67</span>
            </div>
            <div>
              <span className="k">Noise</span>
              <span className="v">? 38 dB</span>
            </div>
            <div>
              <span className="k">Inlet/Outlet</span>
              <span className="v">1.25 in BSP</span>
            </div>
            <div>
              <span className="k">Warranty</span>
              <span className="v">5 years</span>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <h2 className="section__title">Trusted in the Field</h2>
          <div className="quotes">
            <Quote
              text="Pressure is rock solid and the pump is whisper quiet. Our irrigation cycles use less power than ever."
              author="Jonas M., Farm Operator"
            />
            <Quote
              text="Simple to install and the app diagnostics are excellent. It just works."
              author="Katrina S., Contractor"
            />
            <Quote
              text="Best upgrade we made?night and day compared to our old unit."
              author="Priya V., Homeowner"
            />
          </div>
        </section>

        <section id="contact" className="section section--cta">
          <div className="cta-card">
            <h2>Get a personalized quote</h2>
            <p>Tell us about your application and we?ll recommend the ideal configuration.</p>
            <form
              className="quote-form"
              action="https://formspree.io/f/xwkgqyqw"
              method="POST"
            >
              <div className="form-row">
                <input name="name" type="text" placeholder="Full name" required />
                <input name="email" type="email" placeholder="Email address" required />
              </div>
              <div className="form-row">
                <input name="flow" type="text" placeholder="Required flow (L/min)" />
                <input name="head" type="text" placeholder="Required head (m)" />
              </div>
              <textarea name="notes" rows={4} placeholder="Describe your use case (location, duty cycle, water source)?" />
              <button type="submit" className="btn btn--primary btn--full">Request Quote</button>
              <p className="fineprint">By submitting, you agree to be contacted about AquaFlow Pro.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer__brand">
          <span className="brand-mini">AquaFlow Pro</span>
          <span className="muted">? {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="footer__links">
          <a href="#features">Features</a>
          <a href="#specs">Specs</a>
          <a href="#contact">Contact</a>
          <a href="mailto:sales@aquaflow.pro">sales@aquaflow.pro</a>
        </div>
      </footer>
    </>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <article className="feature">
      <span className={`feature__icon feature__icon--${icon}`} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

function Quote({ text, author }) {
  return (
    <blockquote className="quote">
      <p>?{text}?</p>
      <cite>? {author}</cite>
    </blockquote>
  );
}

