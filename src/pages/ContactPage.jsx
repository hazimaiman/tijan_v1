import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Contact Request from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`;

    window.location.href = `mailto:general@tijan.my?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white px-4 pb-20 pt-28 text-slate-900">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1c9bf0]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            Let&apos;s Discuss Your Network Needs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Share your requirements and our team will connect with you for the
            right maintenance and infrastructure support plan.
          </p>

          <div className="mt-8 space-y-2 text-slate-700">
            <p>
              <span className="font-semibold">General Email:</span>{" "}
              general@tijan.my
            </p>
            <p>
              <span className="font-semibold">Focus:</span> Cell towers, fiber
              optics, data centers, and preventive maintenance.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1c9bf0]"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1c9bf0]"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-semibold">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1c9bf0]"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1c9bf0]"
                placeholder="Tell us about your project needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#1c9bf0] px-6 py-3 text-base font-semibold text-white transition hover:brightness-110"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-sm text-emerald-700">
                Your email client should open with the message details filled in.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
