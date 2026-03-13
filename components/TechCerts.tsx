"use client";

import { FocusCards } from "./ui/Focus-Cards";

export default function TechCerts() {
  const cards = [
    {
      title: "Microsoft Certified: DevOps Engineer Expert ",
      src: "/msdevops.png",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      src: "/msadmin.png",
    },

    {
      title: "Microsoft Certified: Azure AI Engineer Associate",

      src: "/msai.png",
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      src: "/mssa.png",
    },
    {
      title:
        "Microsoft® Certified Solutions Expert: Cloud Platform and Infrastructure",
      src: "/msmcse.png",
    },
  ];

  return (
    <div id="certs" className="my-10 py-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className=" text-purple-600 dark:text-purple-600 text-3xl font-bold  max-w-4xl text-center mb-8">
          Technical Qualifications
        </h2>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
