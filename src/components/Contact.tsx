"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (values.phone && !/^[\d\s+()-]{7,}$/.test(values.phone)) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  }

  return (
    <section id="contact" className="px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b4423]">
            Get in Touch
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#1e3a8a] sm:text-4xl">
            Let&apos;s Find Your
            <br />
            Next Property
          </h2>
          <p className="mt-6 max-w-md text-gray-600">
            Reach out to our advisors for a private consultation, property
            valuation, or to schedule a viewing.
          </p>

          <div className="mt-10 space-y-6">
            <InfoRow
              icon={<PinIcon />}
              title="Office"
              detail="450 Park Avenue, New York, NY 10022"
            />
            <InfoRow icon={<PhoneIcon />} title="Phone" detail="+1 (212) 555-0182" />
            <InfoRow icon={<MailIcon />} title="Email" detail="hello@luxasset.com" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-[#f8f5f0] p-8 shadow-lg sm:p-10"
          >
            {submitted && (
              <div className="mb-6 rounded-xl bg-green-100 px-4 py-3 text-sm font-medium text-green-800">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <Field
              label="Full Name"
              value={form.name}
              error={errors.name}
              onChange={(v) => handleChange("name", v)}
              placeholder="John Doe"
            />
            <Field
              label="Email Address"
              value={form.email}
              error={errors.email}
              onChange={(v) => handleChange("email", v)}
              placeholder="john@example.com"
              type="email"
            />
            <Field
              label="Phone Number"
              value={form.phone}
              error={errors.phone}
              onChange={(v) => handleChange("phone", v)}
              placeholder="(Optional)"
            />
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-[#1e3a8a]">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                placeholder="Tell us what you're looking for..."
                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#1e3a8a] ${
                  errors.message ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#c9a227] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#1e3a8a]"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-semibold text-[#1e3a8a]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#1e3a8a] ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function InfoRow({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a]">
        {icon}
      </div>
      <div>
        <p className="font-heading font-bold text-[#1e3a8a]">{title}</p>
        <p className="text-sm text-gray-600">{detail}</p>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5c0 8.3 6.7 15 15 15l2-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-5-4 1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
