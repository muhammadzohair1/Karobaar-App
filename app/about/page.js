import Link from 'next/link';
import MainHeading from '../components/MainHeading';

const stats = [
  { label: 'Laptops Delivered', value: '12,000+' },
  { label: 'Customer Satisfaction', value: '99.4%' },
  { label: 'Warranty Coverage', value: '2 Years' },
  { label: 'Support Response', value: '< 2 Hrs' },
];

const values = [
  {
    title: 'Honest Hardware Specs',
    description:
      'No confusing model numbers or hidden downgrades. Every machine is benchmarked and listed with exact processor, RAM, and display details.',
  },
  {
    title: 'Rigorous 40-Point Testing',
    description:
      'Before any laptop leaves our bench, it goes through thermal stress tests, battery health checks, and display calibration.',
  },
  {
    title: 'Direct Local Support',
    description:
      'Talk directly to hardware technicians—not scripted chatbots—whenever you need upgrades, troubleshooting, or warranty service.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero / Story Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-12 text-center sm:px-6 lg:px-8">
        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 uppercase">
          Our Story
        </span>
        {/* <MainHeading a={400} b={300}/> */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Built by Tech Enthusiasts, for Everyday Builders.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          We started with a simple frustration: buying a reliable laptop shouldn’t require decoding endless spec sheets or overpaying for features you never use. We curate and engineer machines that balance raw speed, clean design, and real-world durability.
        </p>
      </section>

      {/* Stats Bar */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium tracking-wide text-slate-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values / Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why People Trust Our Machines
          </h2>
          <p className="mt-2 text-slate-600">
            Whether you are writing code, editing video, or running a business, your laptop is your primary tool. Here is how we back ours up.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 text-center shadow-xl sm:px-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Find Your Next Laptop?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Explore our current lineup or reach out if you need help picking the right configuration for your workflow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#lineup"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
            >
              Browse Laptops
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}