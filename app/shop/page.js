"use client";
import React, { useState } from "react";
import Link from "next/link";
import Product from "../components/Product";
import { products } from "../data/products";

const categories = ["All", "Ultrabook", "Business", "Creator", "Workstation"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Show newest items first in the shop too
  const orderedProducts = [...products].sort((a, b) => b.id - a.id);

  const filteredProducts =
    selectedCategory === "All"
      ? orderedProducts
      : orderedProducts.filter((item) => item.category === selectedCategory);

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* HERO SECTION */}
      <section className="relative px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />
            40-Point Benchmarked Lineup
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Curated Machines,
            <br className="hidden sm:block" />
            Honest{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Hardware Specs.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Every laptop in our collection passes thermal stress tests, battery
            health verification, and display calibration—backed by a{" "}
            <span className="font-semibold text-indigo-600">
              2-year warranty
            </span>{" "}
            and direct technician support.
          </p>
        </div>
      </section>

      {/* LINEUP / PRODUCT GRID SECTION */}
      <section
        id="lineup"
        className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-6 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 sm:text-sm ${isSelected
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "machine" : "machines"}
          </span>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              src={product.src}
              detail={product.detail}
            />
          ))}
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center px-6 py-20 text-center shadow-2xl sm:px-12"
          style={{
            backgroundImage: "url('/img/2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-200">
              Custom Configurations &amp; Bulk Orders
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Need Specific RAM
              <span className="block bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                or Storage Upgrades?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Message our Karachi bench directly—we can upgrade SSDs, expand
              RAM, or source a specific model for your team.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-1 hover:bg-indigo-500"
              >
                Ask a Technician →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Our 40-Point Testing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}