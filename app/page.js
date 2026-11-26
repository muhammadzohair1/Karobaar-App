import Link from "next/link";
import Product from "./components/Product";
import { getLatestProducts } from "./data/products";

const features = [
  {
    title: "Next-Gen Performance",
    description:
      "Powered by multi-core processors to handle heavy multitasking, coding, and rendering with ease.",
    badge: "Performance",
    number: "01",
  },
  {
    title: "All-Day Battery Life",
    description:
      "Stay productive for longer with verified battery health and convenient USB-C fast charging.",
    badge: "Endurance",
    number: "02",
  },
  {
    title: "Ultra-Crisp Display",
    description:
      "Enjoy calibrated, color-accurate visuals and smooth refresh rates for work and creativity.",
    badge: "Visuals",
    number: "03",
  },
];

export default function HomePage() {
  // Always grabs only the 3 latest laptops from the shop list
  const latestLaptops = getLatestProducts(3);

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
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
              Experience the perfect balance of performance, portability, and
              reliability. Discover laptops designed to power your{" "}
              <span className="font-semibold text-indigo-600">
                everyday ambitions.
              </span>
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
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
                40-Point Tested
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
            <div className="mx-auto flex aspect-[16/10] w-11/12 flex-col justify-between rounded-t-2xl border-[6px] border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 shadow-2xl">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-indigo-300">
                  ProBook Series
                </p>
                <p className="mt-1 text-2xl font-bold text-white">
                  16&quot; Retina Display
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  120Hz • 500 Nits • Dolby Vision
                </p>
              </div>
              <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-700" />
            </div>
            {/* Laptop Base */}
            <div className="mx-auto h-4 w-full rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md">
              <div className="mx-auto h-1.5 w-20 rounded-b-md bg-slate-500/50" />
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

      {/* LATEST 3 LAPTOPS FROM SHOP */}
      <section
        id="lineup"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
              Latest Arrivals
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Fresh From Our
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Shop Lineup.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Showing the 3 newest machines added to our shop—benchmarked and
              ready for your workflow.
            </p>
          </div>

          <Link
            href="/shop"
            className="text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-800"
          >
            Browse Full Shop →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestLaptops.map((laptop) => (
            <Product
              key={laptop.id}
              name={laptop.name}
              category={laptop.category}
              price={laptop.price}
              src={laptop.src}
              detail={laptop.detail}
            />
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

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/shop"
                className="inline-flex rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/40 transition-all hover:-translate-y-1 hover:bg-indigo-500"
              >
                Explore Our Collection →
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}