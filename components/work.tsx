import React from "react";
import { Timeline } from "@/components/ui/WorkTimeline";

export default function Work() {
  const data = [
    {
      title: "BJSS",
      date: "Dec 24 - Present",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Managed Services Practice Engineering Lead</b>
          </div>
          <br />
        </div>
      ),
    },
    {
      title: "BJSS ",
      date: "Aug 22 - Dec 24",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Managed Services Engineering Lead</b>
          </div>
          <br />

          <ul className="list-disc pl-4 space-y-2">
            <li>
              Responsible for all managed services engineers within BJSS (45
              engineers)
            </li>
            <li>
              Responsible for aiding in the resourcing of engineers on
              engagements
            </li>
            <li>
              Run quarterly updates with each engineer individually to ensure
              they remain on track for their progression
            </li>
            <li> Implemented a robust career development strategy</li>
            <li> Implemented a progression strategy for the engineers</li>
            <li>
              Implemented a skills and competency matrix to allow for self
              identification of training needs
            </li>
            <li> Implemented Tech-ops reviews of engagements</li>
            <li>
              Lead the improvement of patching and monitoring across engagements
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Nagra Media",
      date: " Sep 21 - Aug 22",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Engineering Manager</b>
          </div>
          <br />
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Managing three engineers including appraisals and performance
              management
            </li>
            <li>
              Working with development, operational and architectural staff
            </li>
            <li>Responsible for AWS accounts & budgets</li>
            <li>
              Responsible for all CI/CD pipeline tooling and golden images
            </li>
            <li>Centralized password management </li>
            <li>
              Introduced IaC and reduced deployment time from 4 hours to 15
              minutes
            </li>
            <li>
              Improved security by migrating by utilizing AWS Session Manager
              and Azure AD
            </li>
            <li>
              Moved build infrastructure to a fully containerized solution
            </li>
            <li>
              Migrated build infrastructure to Fargate from docker swarm saving
              an average 97% OPEX cost
            </li>
            <li>
              Put processes in place to perform routine updates and
              configuration changes
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Computershare",
      date:  "Jul 19 - Sep 21",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Web Environments Manager</b>
            <br />
          </div>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Managing seven engineers including appraisals and performance
              management
            </li>
            <li>
              Working with development, operational and architectural staff
            </li>
            <li>
              Working with business units to understand their needs and
              requirements
            </li>
            <li>
              Restored the function to a fit state after losing their management
              structure
            </li>
            <li>
              Converting a traditional web hosting team to be a Site Reliability
              Engineering function
            </li>
            <li>
              Upskilling the engineers to reduce single points of failure and
              manage azure
            </li>
            <li>
              Developed a comprehensive training plan to prepare for future
              required skills
            </li>
            <li>
              Implemented M365 support into BAU / run teams globally when it was
              currently unsupported
            </li>
            <li>
              Worked with various functions to deploy a chatbot for use by the
              service desk
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Computershare ",
      date: "Mar 18 – Jul 19",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Server, Storage, Data Centre and Open Systems Manger</b>
            <br />
          </div>
          <ul className="list-disc pl-4 space-y-2">
            <li>Managing vendor relationships</li>
            <li> Assisting with CAPEX/OPEX requirements for the business</li>
            <li>Managing a portfolio of projects for business improvement</li>
            <li>Managing incidents </li>
            <li>
              Encouraging project idea generation and development within the
              team.
            </li>
            Coaching and
            <li>developing engineers to reach their full potential.</li>
            Line
            <li>
              management of 13 engineers including developing PDP’s and
              appraisals.
            </li>
            <li>Managing change management including risk analysis</li>
            <li>
              Created and managed team skills matrix and identified training
              requirements.
            </li>
            <li>Reduced outstanding support tickets by 70 % </li>
            <li>Developed a 3 - year strategy for the team</li>
            <li> Managed the DR testing exercise for all infrastructure </li>
            <li>
              Implemented cloud based storage for all operational DR
              documentation
            </li>
            <li>Statistically significant higher employee engagement scores</li>
            <li>Implemented a continuous service improvement system </li>
            <li>
              Utilized Subject Matter Experts to improve the operational
              environment
            </li>
            <li>Developed a continuous learning culture for the team </li>
            <li>
              Developed a system of project control which was adopted by other
              teams
            </li>
            <li>
              Implemented a programme of work which reduced outstanding security
              issues by 80 %
            </li>
            <li>
              Merged two disparate teams into one and reduced silos of knowledge
              with no staff turnover
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Computershare",
      date: "Mar 16 - Mar 18",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Network & Voice Manager</b>
            <br />
          </div>
          <ul className="list-disc pl-4 space-y-2">
            <li>Managing vendor relationships</li>
            <li>Assisting with CAPEX/OPEX requirement for the business</li>
            <li>Managing CAPEX budget spend</li>
            <li>Managed a portfolio of projects</li>
            <li>Managing incidents.</li>
            <li>
              Attending global collaboration meetings as the regional
              representative.
            </li>
            <li>
              Coaching and developing engineers to reach their full potential.
            </li>
            <li>
              Line management of 8 engineers including developing PDP’s and
              appraisals.
            </li>
            <li>
              Helped initiate an apprenticeship programme with the HR team.
            </li>
            <li>Managing change management processes.</li>
            <li>Managing resource utilization within the team.</li>
            <li>
              Created and managed team skills matrix and identified training
              needs.
            </li>

            <li>
              Expanded the team from 2 to 8 engineers and ensured we had the
              correct skills mix
            </li>
            <li>
              Worked with the service desk to transition routine duties freeing
              up 3rd line resources
            </li>
            <li>
              Worked with application support teams to enable them to self
              service requests enabling business agility and innovation
            </li>
            <li>
              Managed the integration of teams on different sites as part of an
              acquisition
            </li>
            <li>
              Developed structures and policies to enable a customer focused
              environment
            </li>
            <li>Worked with global teams to achieve a follow the sun model</li>
            <li>
              Merged network and voice specialists into a single team and
              ensured they were cross skilled
            </li>
            <li>
              Created long term development and training plans for all engineers
              to develop their full potential
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Computershare",
      date: "Jul 13-Mar 16",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Network Engineer</b>
          </div>
          <br />
          <ul className="list-disc pl-4 space-y-2"></ul>
        </div>
      ),
    },
    {
      title: "Computershare ",
      date: "Mar 06 – Jun 13",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Server Support Engineer</b>
          </div>
          <br />
          <ul className="list-disc pl-4 space-y-2"></ul>
        </div>
      ),
    },
    {
      title: "Kennet & N. Wilts NHS",
      date: "Jul 04 – Mar 06",
      content: (
        <div>
          <div className="text-gray-900 dark:text-gray-300 text-lg md:text-lg font-normal mb-4">
            <b>Desktop/Server Support Engineer</b>
          </div>
          <br />
          <ul className="list-disc pl-4 space-y-2"></ul>
        </div>
      ),
    },
  ];
  return (
    <div id="experience" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
