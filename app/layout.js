import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Karobaar | Benchmarked Laptops & Honest Hardware",
  description:
    "Curated, 40-point tested laptops with transparent specs, 2-year warranty coverage, and direct local support in Karachi.",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Brand / Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-sm font-extrabold text-white shadow-md shadow-indigo-200 transition-transform duration-200 group-hover:scale-105">
                K
              </div>
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                Karobaar
              </span>
            </Link>

            {/* Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="flex items-center gap-5 sm:gap-7"
            >
              <Link
                href="/"
                className="text-sm font-bold text-slate-600 transition-colors hover:text-indigo-600"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="hidden text-sm font-bold text-slate-600 transition-colors hover:text-indigo-600 sm:inline-block"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-sm font-bold text-slate-600 transition-colors hover:text-indigo-600"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 sm:px-5 sm:text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        {/* Footer */}
        <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-indigo-200/25 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              {/* Brand Column */}
              <div className="md:col-span-5">
                <Link href="/" className="group inline-flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-sm font-extrabold text-white shadow-md shadow-indigo-200 transition-transform duration-200 group-hover:scale-105">
                    K
                  </div>
                  <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                    Karobaar
                  </span>
                </Link>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
                  Built by tech enthusiasts for everyday builders. Every laptop
                  passes a 40-point inspection with honest specs and direct
                  local support in Karachi.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-bold text-indigo-700">
                  <span className="h-2 w-2 rounded-full bg-indigo-600" />
                  2-Year Warranty &amp; &lt; 2 Hr Support
                </div>
              </div>

              {/* Navigation Links */}
              <div className="md:col-span-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Explore
                </h2>
                <ul className="mt-4 space-y-3 text-sm font-bold text-slate-700">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-indigo-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className="transition-colors hover:text-indigo-600"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="transition-colors hover:text-indigo-600"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="transition-colors hover:text-indigo-600"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Direct Contact & Hours */}
              <div className="md:col-span-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Karachi Bench &amp; Desk
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>
                    <a
                      href="mailto:support@karobaar.pk"
                      className="font-bold text-slate-800 transition-colors hover:text-indigo-600"
                    >
                      support@karobaar.pk
                    </a>
                  </li>
                  <li>Karachi, Pakistan (PKT / UTC+5)</li>
                  <li className="text-xs font-medium text-slate-500">
                    Mon – Sat, 10:00 AM – 8:00 PM
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row">
              <p>© 2026 Karobaar. All rights reserved.</p>
              <p>Honest Hardware • 40-Point Inspected</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}