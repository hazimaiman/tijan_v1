import React from "react";

const resources = [
  {
    title: "Cell Tower Maintenance",
    description:
      "Scheduled inspection, structural checks, and component replacement to prevent service disruption.",
  },
  {
    title: "Fiber Optic Support",
    description:
      "Testing, troubleshooting, and restoration services to ensure stable high-capacity connectivity.",
  },
  {
    title: "Data Center Operations",
    description:
      "Environmental monitoring, equipment upkeep, and resilience planning for critical systems.",
  },
  {
    title: "Operational Readiness",
    description:
      "Workflow design, field coordination, and reporting frameworks to keep teams aligned.",
  },
  {
    title: "Performance Reporting",
    description:
      "Actionable KPI dashboards and service reviews to support fast technical decisions.",
  },
  {
    title: "Safety & Compliance",
    description:
      "Documentation, audits, and standards alignment for reliable and compliant project delivery.",
  },
];

const ResourcesPage = () => {
  return (
    <section className="w-full bg-slate-100 px-4 pb-20 pt-28 text-slate-900">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1c9bf0]">
          Resources
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">
          Service Capabilities
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Explore the core areas where our team helps telecom operators improve
          reliability, manage costs, and scale infrastructure with confidence.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;
