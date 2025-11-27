import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export default function Education() {
  const data = [
    {
      title: "The Open University",
      date: "2013 - 2015",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            Masters Of Business Administration (Technology Management)
          </div>
          <div className="text-lg mb-2">Modules:</div>
          <div className="block text-sm">
            <ul className="list-disc ml-5 space-y-2">
              <li>MBA Stage 1</li>
              <li>Managing Technological Innovation</li>
              <li>Technology Strategy</li>
              <li>Strategic Human Resource Management</li>
              <li>Corporate Finance</li>
              <li>Project Management</li>
              <li>The Management Initiative (Capstone Project)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "The Open University",
      date: "2015 - 2016",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            Postgraduate Certificate Technology Management
          </div>
          <div className="text-lg mb-2">Modules:</div>
          <div className="block text-sm">
            <ul className="list-disc ml-5 space-y-2">
              <li>Exploring management</li>
              <li>Managing people and organizations</li>
              <li>Managing financial resources and performance</li>
              <li>Managing marketing</li>
              <li>Operational management</li>
              <li>Evidence Based Initiative</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Chartered Management Institute",
      date: "2014",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            Level 5 Diploma - leadership and management
          </div>
          <div className="text-lg mb-2">Modules: </div>
          <div className="block text-sm">
            <ul className="list-disc ml-5 space-y-2">
              <li>Being a Leader</li>
              <li>Managing Team and Individual Performance</li>
              <li>Project Development and Control</li>
              <li>Managing Recruitment, Selection and Induction</li>
              <li>Organizational Financial Management</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Swindon College",
      date: "2005",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            Certificate in Business management
          </div>
          <div className="block text-sm">
            This course covered the major aspects of first line management
            including hiring, performance management and basic budgeting, it was
            the first management course I had taken and was a good overview of
            being a front line manager.
          </div>
        </div>
      ),
    },
    {
      title: "University of the West Of England",
      date: "2000-2004",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-base font-normal mb-4">
            BSc(Hons) Computer Science
          </div>
          <div className="text-lg mb-2">Modules: </div>
          <div className="block text-sm">
            <ul className="list-disc ml-5 space-y-2">
              <li>Analytical modelling</li>
              <li>Component based development</li>
              <li>Computer networks and operating systems</li>
              <li>Computer science concepts</li>
              <li>Computer systems</li>
              <li>Computing project</li>
              <li>Data structures and databases</li>
              <li>Declarative programming</li>
              <li>Design and analysis of algorithms</li>
              <li>Formal language processing</li>
              <li>Industrial placement</li>
              <li>Information systems application context</li>
              <li>Interface engineering</li>
              <li>Professional, commercial & legal issues</li>
              <li>Program development</li>
              <li>Software design</li>
              <li>Software engineering</li>
              <li>Symbolic processing</li>
              <li>Systems development</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="education" className="w-full data">
      <Timeline data={data} />
    </div>
  );
}
