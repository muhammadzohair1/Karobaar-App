
import Link from 'next/link';

const stats = [
  { label: 'Laptops Delivered', value: '12,000+', detail: 'Trusted by customers' },
  { label: 'Customer Satisfaction', value: '99.4%', detail: 'Customer-first service' },
  { label: 'Warranty Coverage', value: '2 Years', detail: 'Long-term confidence' },
  { label: 'Support Response', value: '< 2 Hrs', detail: 'Quick assistance' },
];

const values = [
  {
    number: '01',
    title: 'Honest Hardware Specs',
    description:
      'No confusing model numbers or hidden downgrades. Every machine is benchmarked and listed with exact processor, RAM, and display details.',
    icon: '01',
  },
  {
    number: '02',
    title: 'Rigorous 40-Point Testing',
    description:
      'Before any laptop leaves our bench, it goes through thermal stress tests, battery health checks, and display calibration.',
    icon: '02',
  },
  {
    number: '03',
    title: 'Direct Local Support',
    description:
      'Talk directly to hardware technicians—not scripted chatbots—whenever you need upgrades, troubleshooting, or warranty service.',
    icon: '03',
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900">

      {/* HERO SECTION */}
      <section className="relative px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />
            Our Story
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Built by Tech Enthusiasts,
            <br className="hidden sm:block" />
            for Everyday{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Builders.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            We started with a simple frustration: buying a reliable laptop
            shouldn’t require decoding endless spec sheets or overpaying for
            features you never use. We curate and engineer machines that
            balance <span className="font-semibold text-indigo-600">raw speed</span>,
            clean design, and real-world durability.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/#lineup"
              className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-300"
            >
              Explore Our Laptops
            </Link>

            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-indigo-200 hover:text-indigo-600"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>


      {/* STATS SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-7"
            >
              <p className="text-3xl font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-800 sm:text-sm">
                {stat.label}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                {stat.detail}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Technology You Can Trust.
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Quality You Can Feel.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether you are writing code, editing video, or running a
              business, your laptop is your primary tool. We believe in
              providing technology that works as hard as you do.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Performance That Matters
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Carefully selected hardware for everyday productivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Quality Without Compromise
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Tested machines and transparent specifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Support You Can Count On
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Real assistance whenever you need it.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-indigo-200/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-indigo-100/60">
              <img
                src="/img/3.jpg"
                alt="Karobaar technology and laptops"
                className="h-[350px] w-full rounded-2xl object-cover sm:h-[430px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-indigo-100 bg-white p-5 shadow-xl sm:-left-8">
              <p className="text-2xl font-extrabold text-indigo-600">
                40-Point
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Quality Inspection
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* VALUES SECTION */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
              What We Stand For
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              The Values Behind
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Every Device.
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-500">
              We focus on the things that make a real difference in your
              everyday technology experience.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {values.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-sm font-extrabold text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-110">
                  {item.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ABOUT IMAGE SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-indigo-100/50">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl" />

          <img
            src="/img/About-Us-img.png"
            alt="About Karobaar"
            className="relative z-10 h-auto max-h-[550px] w-full rounded-2xl object-cover"
          />

        </div>
      </section>


      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">

        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center px-6 py-20 text-center shadow-2xl sm:px-12"
          style={{
            backgroundImage: "url('/img/2.jpg')",
          }}
        >

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-950/80" />

          {/* Decorative Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />

          <div className="relative z-10">

            <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-200">
              Your Next Upgrade Starts Here
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Ready to Find Your
              <span className="block bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Next Laptop?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore our current lineup or reach out if you need help
              picking the right configuration for your workflow.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/#lineup"
                className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-1 hover:bg-indigo-500"
              >
                Browse Laptops →
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Back to Home
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
