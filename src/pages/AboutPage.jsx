import React from "react";

const AboutPage = () => {
  return (
    <section className="w-full bg-white px-4 pb-20 pt-28 text-slate-900">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1c9bf0]">
          About TIJAN AT
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
          Telecom Infrastructure Partner for Reliable Growth
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
          TIJAN AT supports telecom operators with preventive maintenance,
          infrastructure upgrades, and operational planning to keep networks
          stable and ready for demand growth. We focus on quality delivery,
          safety compliance, and measurable service performance across each
          project lifecycle.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-slate-600">
              Deliver dependable telecom infrastructure services that improve
              network uptime and long-term operating efficiency.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-3 text-slate-600">
              Become a trusted regional partner known for disciplined delivery,
              technical quality, and transparent collaboration.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold">Approach</h2>
            <p className="mt-3 text-slate-600">
              Plan with data, execute with precision, and continuously optimize
              operations for better reliability and customer outcomes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
