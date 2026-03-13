"use client";

import { FocusCards } from "./ui/Focus-Cards";

export default function NonTechCerts() {
  const cards = [
    {
      title: "ITIL Strategic Manager",
      src: "/sl.png",
    },
    {
      title: "ITIL Managing Professional",
      src: "/mp.png",
    },

    {
      title: "PRINCE2 Practioner",

      src: "/prince2.png",
    },
    {
      title: "CMI L5 Leadership and Management",
      src: "/cmi.png",
    },

    {
      title: "CMI L7 Strategic Leadership",
      src: "/cmi.png",
    },
    {
      title: "Chartered Manager",
      src: "/cmi.png",
    },
    {
      title: "Chair Of Governors Bridge Farm Primary School",
      src: "/bf.gif",
    },
  ];

  return (
    <div id="certs" className="my-10 py-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="heading">My certifications and affiliations</h1> <br />
        <h2 className=" text-purple dark:text-purple max-w-4xl bg-center text-center mb-8">
          Non Technical Qualifications
        </h2>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
