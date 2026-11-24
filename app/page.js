import Link from 'next/link';

const features = [
  {
    title: 'Next-Gen Performance',
    description: 'Powered by the latest multi-core processors to handle heavy multitasking, coding, and rendering without breaking a sweat.',
    badge: 'Speed',
  },
  {
    title: 'All-Day Battery Life',
    description: 'Up to 18 hours of real-world usage on a single charge, paired with rapid USB-C fast charging.',
    badge: 'Endurance',
  },
  {
    title: 'Ultra-Crisp Display',
    description: '120Hz anti-glare IPS panel with 100% sRGB color accuracy and razor-thin bezels for immersive work and play.',
    badge: 'Visuals',
  },
];

const lineup = [
  {
    name: 'AeroBook 14',
    tagline: 'Ultra-lightweight everyday productivity',
    specs: '16GB RAM • 512GB NVMe SSD • 1.2 kg',
    price: '$899',
    highlight: false,
  },
  {
    name: 'ProBook 16 Max',
    tagline: 'Built for developers, creators & power users',
    specs: '32GB RAM • 1TB NVMe SSD • Dedicated GPU',
    price: '$1,499',
    highlight: true,
  },
  {
    name: 'FlexBook 360',
    tagline: '2-in-1 touchscreen versatility on the go',
    specs: '16GB RAM • 512GB SSD • Stylus Included',
    price: '$1,049',
    highlight: false,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
  
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:py-24 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 uppercase">
            2026 Edition Available Now
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Power Meets Pure Portability.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Engineered with an aerospace-grade aluminum chassis, silent thermal cooling, and a display that brings every pixel to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#lineup"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg"
            >
              Explore Models
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* CSS-Only Sleek Laptop Mockup */}
        <div className="mt-12 w-full max-w-lg lg:mt-0">
          <div className="mx-auto aspect-[16/10] w-11/12 rounded-t-2xl border-[6px] border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 shadow-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium tracking-widest text-indigo-300 uppercase">ProBook Series</p>
              <p className="mt-1 text-2xl font-bold text-white">16&quot; Retina Display</p>
              <p className="mt-1 text-xs text-slate-400">120Hz • 500 Nits • Dolby Vision</p>
            </div>
            <div className="h-1.5 w-16 mx-auto rounded-full bg-slate-700"></div>
          </div>
          {/* Laptop Base */}
          <div className="mx-auto h-4 w-full rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md">
            <div className="mx-auto h-1.5 w-20 rounded-b-md bg-slate-500/50"></div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="border-y border-slate-200/80 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Built for Everything You Do
            </h2>
            <p className="mt-2 text-slate-600">
              No compromises between battery life, weight, and raw speed.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all hover:border-indigo-200 hover:bg-white hover:shadow-md"
              >
                <span className="inline-block rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Lineup / Pricing Section */}
      <section id="lineup" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Choose Your Machine
          </h2>
          <p className="mt-2 text-slate-600">
            Available in Space Gray and Silver with a 2-year warranty.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {lineup.map((laptop) => (
            <div
              key={laptop.name}
              className={`flex flex-col justify-between rounded-2xl p-8 transition-all ${
                laptop.highlight
                  ? 'border-2 border-indigo-600 bg-white shadow-xl'
                  : 'border border-slate-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{laptop.name}</h3>
                  {laptop.highlight && (
                    <span className="rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold text-white">
                      Best Seller
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-500">{laptop.tagline}</p>
                <p className="mt-6 text-3xl font-extrabold text-slate-900">{laptop.price}</p>
                <p className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                  {laptop.specs}
                </p>
              </div>

              <button
                type="button"
                className={`mt-8 w-full rounded-full py-2.5 text-sm font-semibold transition-colors ${
                  laptop.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-slate-900 text-white hover:bg-indigo-600'
                }`}
              >
                Select {laptop.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}