"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  Loader2,
  MessageSquare,
} from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactUsPage() {
  const contactEmail = "support@karobaar.pk";

  const [copied, setCopied] = useState(false);

  const inquiryTypes = [
    "Laptop Recommendation",
    "Order & Warranty",
    "Bulk / Business Order",
    "Technical Support",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Laptop Recommendation",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(contactEmail);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = contactEmail;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please include a short message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      inquiryType: "Laptop Recommendation",
      message: "",
    });
    setErrors({});
    setStatus("idle");
  };

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@muhammadzohair1",
      href: "https://github.com/muhammadzohair1",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      handle: "in/karobaar-tech",
      href: "https://linkedin.com",
      icon: LinkedinIcon,
    },
    {
      name: "Twitter / X",
      handle: "@karobaar_pk",
      href: "https://twitter.com",
      icon: TwitterIcon,
    },
  ];

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* HERO SECTION (Matches About Page Hero) */}
      <section className="relative px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
            </span>
            Direct Hardware Support
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Talk Directly to
            <br className="hidden sm:block" />
            Our Tech{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Specialists.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Need help picking the right processor and RAM for your workflow,
            checking warranty coverage, or placing a bulk order? Reach out to{' '}
            <span className="font-semibold text-indigo-600">Karobaar</span>{' '}
            and get honest answers in under 2 hours.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-300"
            >
              Send a Message
            </a>

            <Link
              href="/#lineup"
              className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-indigo-200 hover:text-indigo-600"
            >
              Explore Our Laptops
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section
        id="contact-form"
        className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Contact Info Cards & Social Links */}
          <div className="space-y-6 lg:col-span-5">
            {/* Direct Email Card */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-200 group-hover:bg-indigo-600 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="break-all text-base font-bold text-slate-900 transition-colors hover:text-indigo-600 sm:text-lg"
                    >
                      {contactEmail}
                    </a>
                    <p className="mt-1 text-sm text-slate-500">
                      Best for quotes, specs &amp; warranty claims
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                  className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-bold transition-all duration-200 ${copied
                      ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-white hover:text-indigo-600"
                    }`}
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-indigo-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-200 group-hover:bg-indigo-600 group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Testing Lab &amp; Pickup
                  </p>
                  <h2 className="text-base font-bold text-slate-900">
                    Karachi, Pakistan (PKT / UTC+5)
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Nationwide insured shipping &amp; local bench inspections
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-200 group-hover:bg-indigo-600 group-hover:text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Support Response
                  </p>
                  <h2 className="text-base font-bold text-slate-900">
                    Under 2 Hours
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Monday – Saturday, 10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Connect With Us
                </h3>
                <Sparkles className="h-4 w-4 text-indigo-600" />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md hover:shadow-indigo-100/40"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-slate-200/70 bg-white p-2 text-slate-700 transition-colors group-hover:border-indigo-200 group-hover:text-indigo-600">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                            {social.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-indigo-100/40 sm:p-10">
              {status === "success" ? (
                <div className="mx-auto max-w-md py-10 text-center sm:py-14">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700">
                    Inquiry Logged
                  </span>

                  <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Message Received!
                  </h2>

                  <p className="mt-3 mb-8 text-sm leading-7 text-slate-600 sm:text-base">
                    Thank you for reaching out,{" "}
                    <span className="font-bold text-slate-900">
                      {formData.name}
                    </span>
                    . One of our hardware technicians has received your{" "}
                    <span className="font-semibold text-indigo-600">
                      {formData.inquiryType.toLowerCase()}
                    </span>{" "}
                    inquiry and will reply to{" "}
                    <span className="font-semibold text-slate-800">
                      {formData.email}
                    </span>{" "}
                    within 2 hours.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 hover:bg-indigo-700"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-slate-100 pb-6">
                    <span className="inline-block rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700">
                      Ask a Technician
                    </span>
                    <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      How Can We{" "}
                      <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Help You?
                      </span>
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      Tell us your budget, daily apps, or order number—no scripted
                      replies, just straight advice.
                    </p>
                  </div>

                  {/* Inquiry Type Selector Pills */}
                  <div>
                    <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Select Topic
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => {
                        const isSelected = formData.inquiryType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                inquiryType: type,
                              }))
                            }
                            className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 sm:text-sm ${isSelected
                                ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-white hover:text-indigo-600"
                              }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-bold text-slate-800"
                      >
                        Your Name <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Bilal Ahmed"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 ${errors.name
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20"
                          }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-600">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-bold text-slate-800"
                      >
                        Email Address <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="bilal@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 ${errors.email
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20"
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-600">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-slate-800"
                      >
                        Message <span className="text-indigo-600">*</span>
                      </label>
                      <span className="text-xs font-medium text-slate-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share what kind of work you do (coding, editing, office, gaming) or any specific model you're eyeing..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full resize-y rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 ${errors.message
                          ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20"
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-600">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message to Karobaar</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION (Matches About Page Dark Overlay Banner) */}
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
              40-Point Inspected Machines
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Not Sure Which Spec
              <span className="block bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Fits Your Budget?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Browse our benchmarked lineup with transparent processor, RAM, and
              display breakdowns before you decide.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/#lineup"
                className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-1 hover:bg-indigo-500"
              >
                Browse Laptops →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Our 40-Point Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}