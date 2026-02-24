import React from "react";
import Haji from "../assets/haji.png";
import Azman from "../assets/azman.png";
import Awang from "../assets/awang.png";

const Cards = () => {
  const team = [
    {
      name: "Dato Haji Shahrul",
      role: "Chief Executive Officer",
      profile:
        "30+ years of experience leading telecom growth. He drives company strategy, strengthens client relationships, and ensures delivery governance across all projects, with a leadership belief to lead by example and build teams that execute with confidence.",
      img: Haji,
      email: "haji@tijan.my",
    },
    {
      name: "Azman Yusof",
      role: "Chief Financial Officer",
      profile:
        "26+ years of experience in finance and operations. He leads financial planning, budget control, investment strategy, and risk management to keep infrastructure programs sustainable, guided by the principle that strong financial structure creates room for long-term innovation.",
      img: Azman,
      email: "azman@tijan.my",
    },
    {
      name: "Haji Awang",
      role: "Chief Operating Officer",
      profile:
        "23+ years of experience in telecom operations. He oversees field execution, maintenance quality, process efficiency, and service reliability to maintain uptime and delivery consistency, with a clear focus on accountability in every operation.",
      img: Awang,
      email: "awang@tijan.my",
    },
  ];

  const handleConnect = (member) => {
    const shouldOpen = window.confirm(
      `Open your email app to contact ${member.name} at ${member.email}?`
    );

    if (shouldOpen) {
      window.location.href = `mailto:${member.email}`;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-blue-50 px-4 py-24">
      <div className="mx-auto mb-12 max-w-[1240px] text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          Leadership Team
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
          Meet Our Core Leadership
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          A focused team combining strategy, finance, and operations to deliver
          dependable telecom infrastructure services.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        {team.map((member, index) => (
          <article
            key={index}
            className="flex min-h-[540px] flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50"
          >
            <div className="relative -mt-16 mb-6 self-center">
              <div className="absolute inset-0 rounded-full bg-blue-300/70 blur-lg" />
              <img
                className="relative z-10 h-24 w-24 rounded-full object-cover ring-4 ring-white"
                src={member.img}
                alt={member.name}
              />
            </div>

            <h3 className="text-center text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              {member.name}
            </h3>

            <p className="mt-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
              {member.role}
            </p>

            <p className="mt-6 text-center text-base leading-relaxed text-slate-700">
              {member.profile}
            </p>

            <button
              className="mt-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/35"
              onClick={() => {
                handleConnect(member);
              }}
            >
              Connect
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Cards;
