"use client";
import React, { useState, useEffect } from "react";


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
/**
 * ContactUsPage Component
 * A modern, responsive Contact Us page tailored for Zohair.
 * Features interactive inquiry type selection, form validation,
 * simulated submission states, and one-click email copy functionality.
 */
export default function ContactUsPage() {
  // Contact details configuration
  const contactEmail = "hello@zohair.dev";

  // State for email copy feedback
  const [copied, setCopied] = useState(false);

  // Inquiry topic options
  const inquiryTypes = [
    "Project Inquiry",
    "Collaboration",
    "Consulting",
    "General Hello",
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Project Inquiry",
    message: "",
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Submission status: 'idle' | 'submitting' | 'success'
  const [status, setStatus] = useState("idle");

  /**
   * Copies the email address to clipboard with fallback support
   * and triggers a temporary visual confirmation state.
   */
  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(contactEmail);
      } else {
        // Fallback for non-secure contexts / iframes
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

  /**
   * Handles input changes and clears field-specific errors on type
   */
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

  /**
   * Validates form inputs before submission
   * @returns {boolean} True if form is valid
   */
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

  /**
   * Handles form submission with validation and simulated network request
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");

    // Simulate API call delay
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  /**
   * Resets form back to initial state to send another message
   */
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      inquiryType: "Project Inquiry",
      message: "",
    });
    setErrors({});
    setStatus("idle");
  };

  // Social links configuration
  // Social links configuration
  const socialLinks = [
    {
      name: "GitHub",
      handle: "@zohair",
      href: "https://github.com/muhammadzohair1",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      handle: "in/zohair",
      href: "https://linkedin.com",
      icon: LinkedinIcon,
    },
    {
      name: "Twitter / X",
      handle: "@zohair_dev",
      href: "https://twitter.com",
      icon: TwitterIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 relative overflow-hidden">
      {/* Subtle decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 via-slate-200 to-emerald-100 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero / Header Section */}
        <header className="max-w-3xl mb-14 sm:mb-16">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-slate-700">
              Available for new projects &amp; collaborations
            </span>
          </div>

          {/* Primary Heading featuring Zohair */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5">
            Get in touch with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              Zohair
            </span>
            <span className="text-indigo-600">.</span>
          </h1>

          {/* Welcoming Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Have a project in mind, looking to collaborate, or simply want to
            say hello? Drop a message below or reach out directly—I&apos;d love
            to hear from you.
          </p>
        </header>

        {/* Two-Column Responsive Layout */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Info Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card with Copy-to-Clipboard */}
            <div className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-base sm:text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors break-all"
                    >
                      {contactEmail}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Best for detailed briefs &amp; inquiries
                    </p>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer ${
                    copied
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Location &amp; Timezone
                  </p>
                  <h2 className="text-base font-semibold text-slate-900">
                    Karachi, Pakistan (PKT / UTC+5)
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Working remotely with clients worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time / Availability Card */}
            <div className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Response Time
                  </p>
                  <h2 className="text-base font-semibold text-slate-900">
                    Within 24 Hours
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Monday – Friday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Connect on Socials
                </h3>
                <Sparkles className="w-4 h-4 text-indigo-500" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-indigo-200 hover:shadow-xs transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white border border-slate-200/70 text-slate-700 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {social.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg shadow-slate-200/40">
              {status === "success" ? (
                /* Sleek Success Confirmation Screen */
                <div className="py-10 sm:py-14 text-center max-w-md mx-auto animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Message Sent!
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-8">
                    Thank you for reaching out,{" "}
                    <span className="font-semibold text-slate-900">
                      {formData.name}
                    </span>
                    . Zohair has received your{" "}
                    <span className="text-indigo-600 font-medium">
                      {formData.inquiryType.toLowerCase()}
                    </span>{" "}
                    and will get back to you at{" "}
                    <span className="font-medium text-slate-800">
                      {formData.email}
                    </span>{" "}
                    shortly.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-slate-100 pb-5">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Send a Message
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Fill out the form below and I&apos;ll respond as soon as
                      possible.
                    </p>
                  </div>

                  {/* Inquiry Type Selector Pills */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2.5">
                      What can I help you with?
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
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Your Name <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-slate-900 placeholder:text-slate-400 text-sm transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.name
                            ? "border-rose-400 focus:ring-rose-500/20 focus:border-rose-500"
                            : "border-slate-200 focus:ring-indigo-500/20 focus:border-indigo-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Email Address <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-slate-900 placeholder:text-slate-400 text-sm transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-rose-400 focus:ring-rose-500/20 focus:border-rose-500"
                            : "border-slate-200 focus:ring-indigo-500/20 focus:border-indigo-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Message <span className="text-indigo-600">*</span>
                      </label>
                      <span className="text-xs text-slate-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me a bit about your project, timeline, or goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-slate-900 placeholder:text-slate-400 text-sm transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 resize-y ${
                        errors.message
                          ? "border-rose-400 focus:ring-rose-500/20 focus:border-rose-500"
                          : "border-slate-200 focus:ring-indigo-500/20 focus:border-indigo-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message to Zohair</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>


      </div>
    </div>
  );
}
