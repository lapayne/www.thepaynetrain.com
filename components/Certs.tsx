"use client";

import { Tabs } from "./ui/Tabs";

export default function Certs() {
  const tabs = [
    {
      title: "ITIL",
      value: "ITIL",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-base md:text-xl font-bold text-white">
          <div>ITIL Strategic Manager</div> <br />
          <div>ITIL Managing Professional</div>
        </div>
      ),
    },
    {
      title: "Project Management",
      value: "Project",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-base md:text-xl font-bold text-white">
          <div>PRINCE2 Practioner</div>
        </div>
      ),
    },
    {
      title: "Professional Certs",
      value: "ProfessionalCerts",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-base md:text-xl font-bold text-white">
          <div>CMI L5 Leadership and Management</div>
          <br />
          <div>CMI L7 Professional Consultancy</div>
        </div>
      ),
    },
    {
      title: "Affiliations",
      value: "Affiliations",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-base md:text-xl font-bold text-white">
          <div>Charted Manager</div>
          <br />
          <div>Chair Of Governors Bridge Farm Primary School</div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
