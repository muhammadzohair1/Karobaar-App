
import Link from 'next/link';

const features = [
  {
    title: 'Next-Gen Performance',
    description:
      'Powered by powerful multi-core processors to handle heavy multitasking, coding, and rendering with ease.',
    badge: 'Performance',
    number: '01',
  },
  {
    title: 'All-Day Battery Life',
    description:
      'Stay productive for longer with reliable battery performance and convenient USB-C fast charging.',
    badge: 'Endurance',
    number: '02',
  },
  {
    title: 'Ultra-Crisp Display',
    description:
      'Enjoy immersive visuals, vibrant colors, and smooth display performance for work and entertainment.',
    badge: 'Visuals',
    number: '03',
  },
];

const lineup = [
  {
    name: 'AeroBook 14',
    tagline: 'Ultra-lightweight everyday productivity',
    specs: '16GB RAM • 512GB NVMe SSD • 1.2 kg',
    price: '$899',
    highlight: false,
    image: '/img/1.jpg',
  },
  {
    name: 'ProBook 16 Max',
    tagline: 'Built for developers, creators & power users',
    specs: '32GB RAM • 1TB NVMe SSD • Dedicated GPU',
    price: '$1,499',
    highlight: true,
    image: '/img/2.jpg',
  },
  {
    name: 'FlexBook 360',
    tagline: '2-in-1 touchscreen versatility on the go',
    specs: '16GB RAM • 512GB SSD • Stylus Included',
    price: '$1,049',
    highlight: false,
    image: '/img/3.jpg',
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900">

      {/* HERO SECTION */}
      <section className="relative">
        <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* HERO CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              2026 Edition Available Now
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Power Meets
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Pure Portability.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              Experience the perfect balance of performance, portability,
              and reliability. Discover laptops designed to power your
              <span className="font-semibold text-indigo-600"> everyday ambitions.</span>
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#lineup"
                className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-300"
              >
                Explore Models →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-indigo-200 hover:text-indigo-600"
              >
                Discover Our Story
              </Link>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <span className="font-bold text-indigo-600">✓</span>
                Quality Tested
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-indigo-600">✓</span>
                2-Year Warranty
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-indigo-600">✓</span>
                Local Support
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}
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
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="border-y border-slate-200/80 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
              What Makes Us Different
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Built for Everything
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                You Do.
              </span>
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              No compromises between battery life, portability, and
              performance. Technology that keeps up with you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-indigo-100 px-3 py-2 text-xs font-bold text-indigo-700">
                    {item.badge}
                  </span>
                  <span className="text-sm font-extrabold text-indigo-200 transition-colors group-hover:text-indigo-600">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* LAPTOP LINEUP */}
      <section
        id="lineup"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
              Our Collection
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Machine.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Discover machines designed for every workflow, from everyday
              productivity to demanding professional tasks.
            </p>
          </div>

          <Link
            href="/about"
            className="text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-800"
          >
            Learn About Us →
          </Link>

        </div>

        <div className="mt-12 grid items-stretch gap-7 lg:grid-cols-3">

          {lineup.map((laptop) => (
            <div
              key={laptop.name}
              className={`group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                laptop.highlight
                  ? 'border-2 border-indigo-500 bg-white shadow-xl shadow-indigo-100'
                  : 'border border-slate-200 bg-white shadow-sm hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50'
              }`}
            >

              {laptop.highlight && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  Best Seller
                </div>
              )}

              {/* PRODUCT IMAGE */}
              <div className="overflow-hidden bg-slate-100 p-5">
                <img
                  src={laptop.image}
                  alt={laptop.name}
                  className="h-52 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-7">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                    Karobaar Collection
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
                    {laptop.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {laptop.tagline}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-3xl font-extrabold text-indigo-600">
                      {laptop.price}
                    </span>
                  </div>

                  <p className="mt-5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-xs font-medium leading-6 text-slate-600">
                    {laptop.specs}
                  </p>
                </div>

                <button
                  type="button"
                  className={`mt-7 w-full rounded-full py-3.5 text-sm font-bold transition-all ${
                    laptop.highlight
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700'
                      : 'bg-slate-900 text-white hover:bg-indigo-600'
                  }`}
                >
                  Select {laptop.name} →
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center shadow-2xl sm:px-12">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative z-10">
            <span className="rounded-full border border-indigo-400/30 bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-200">
              Your Next Upgrade Starts Here
            </span>

            <h2 className="mx-auto mt-7 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Upgrade Your
              <span className="block bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Everyday Experience?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Find the right laptop for your work, creativity, and everyday
              ambitions.
            </p>

            <Link
              href="#lineup"
              className="mt-9 inline-flex rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/40 transition-all hover:-translate-y-1 hover:bg-indigo-500"
            >
              Explore Our Collection →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
