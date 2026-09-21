export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // level: 1-5
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  location: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  socials: SocialLink[];
  experiences: WorkExperience[];
  volunteering: Volunteering[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  professionalBodies?: string[];
  hobbies?: string[];
}

export const resumeData: ResumeData = {
  name: "Lee Payne",
  title: "Director of Consulting Expert & SRE Leader",
  tagline:
    "Strategic IT and engineering leader driving business value through cloud, SRE, and DevOps transformation.",
  bio: "Strategic IT and engineering leader with extensive experience leading high-performing teams through complex technology and organisational change. Proven in defining and executing technology roadmaps, managing large operational budgets, and improving security, reliability, and cost efficiency at scale. Brings a pragmatic, people-first leadership style and a strong record of delivering tangible business value.",
  email: "lee@thepaynetrain.com",
  phone: "Contact via Email",
  location: "United Kingdom",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/lapayne1982",
      icon: "linkedin",
    },
    {
      label: "Website",
      url: "https://cpd.thepaynetrain.com",
      icon: "blog",
    },
  ],
  experiences: [
    {
      company: "CGI",
      role: "Director of Consulting Expert: DevOps and SRE",
      location: "UK",
      period: "March 2026 - Present",
      description:
        "Directing high-stakes DevOps and Site Reliability Engineering consulting engagements, leading operational readiness strategies, and implementing upskilling frameworks.",
      achievements: [
        "Transitioned critical landing zone intellectual property (IP) from the innovation team to the operational support team to guarantee service stability.",
        "Creating a DevOps academy to upskill internal staff, reducing reliance on expensive outside contractors and lowering consulting operational costs.",
      ],
      skills: [
        "DevOps",
        "SRE",
        "Landing Zones",
        "Operational Support",
        "Capability Upskilling",
        "IT Consulting",
      ],
      link: "https://www.cgi.com",
    },
    {
      company: "CGI",
      role: "Manager of Consulting Delivery – Unified DevOps",
      location: "UK",
      period: "June 2025 - March 2026",
      description:
        "Senior consulting delivery leadership role directing DevOps capabilities, client engagement outcomes, and cloud platform strategy.",
      achievements: [
        "Defined and implemented the technology strategy for the Unified DevOps practice, aligning architectures with client objectives.",
        "Led the successful migration and cultural integration of engineers from BJSS into the unified CGI consulting practice.",
        "Oversaw major cloud architecture modifications for a high-profile government client, ensuring tight compliance and uptime.",
        "Reduced client security vulnerabilities by 70% through targeted remediation audits and governance improvements.",
        "Reduced client cloud expenditures by 76% through aggressive resource optimization and governance controls.",
        "Implemented Continual Service Improvement (CSI) cycles and formalized maintenance processes to reduce service outages.",
      ],
      skills: [
        "Unified DevOps",
        "Practice Strategy",
        "Migration & Integration",
        "Government IT",
        "Security Auditing",
        "Cloud FinOps",
        "CSI Frameworks",
      ],
      link: "https://www.cgi.com",
    },
    {
      company: "BJSS",
      role: "Managed Services Engineering Practice Lead",
      location: "UK",
      period: "August 2022 - June 2025",
      description:
        "Led the Managed Services engineering division with full accountability for delivery quality, people management, and operational maturity across client accounts.",
      achievements: [
        "Held overall resourcing, hiring, and capability planning accountability for the managed services engineering cohort.",
        "Designed and implemented a unified career development and progression framework across the business unit to reduce staff churn.",
        "Introduced a comprehensive skills and competency matrix to enable targeted personal development and self-directed engineer learning.",
        "Led the creation and rollout of Well-Operated Reviews to improve service delivery quality, reliability, and consistency.",
        "Partnered with corporate client executives to define and deliver technology strategies aligned with their core business objectives.",
      ],
      skills: [
        "Practice Leadership",
        "People Management",
        "Career Frameworks",
        "Resourcing",
        "Well-Operated Reviews",
        "Client Strategy Alignment",
      ],
      link: "https://www.bjss.com",
    },
    {
      company: "Nagra Media",
      role: "Engineering Manager",
      location: "UK",
      period: "September 2021 - August 2022",
      description:
        "Engineering management role with responsibility for cloud platforms, continuous delivery tooling, infrastructure, and budget control.",
      achievements: [
        "Managed a team of 5 platform engineers delivering core build infrastructure and deployment automation services.",
        "Owned AWS account strategy, security governance, and cloud budget management.",
        "Introduced Infrastructure as Code via Terraform, reducing infrastructure build times by 93%.",
        "Migrated build infrastructure to a fully containerized architecture, reducing platform costs by 88%.",
        "Improved infrastructure security by migrating access to AWS Session Manager integrated with Azure AD.",
      ],
      skills: [
        "AWS Cloud",
        "Terraform",
        "Docker & Containers",
        "CI/CD",
        "AWS Session Manager",
        "Budget Control",
      ],
      link: "https://www.nagra.com",
    },
    {
      company: "Computershare",
      role: "Web Environments Manager / DevOps Manager",
      location: "UK",
      period: "July 2019 - September 2021",
      description:
        "Leadership role overseeing DevOps and web platform operations across 4 European sites.",
      achievements: [
        "Managed a team of 9 engineers across multiple European locations to maintain high-availability systems.",
        "Implemented SRE and DevOps methodologies, reducing average support ticket age by 81% and total ticket volume by 56%.",
        "Reduced out-of-hours infrastructure support callouts by 90% through automation and reliability tuning.",
        "Led capacity management, CAPEX/OPEX planning, and lowered OPEX via tool rationalization.",
      ],
      skills: [
        "Multi-site Management",
        "SRE Methods",
        "CAPEX/OPEX Planning",
        "Service Reliability",
        "Team Coaching",
        "OPEX Rationalization",
      ],
      link: "https://www.computershare.com",
    },
    {
      company: "Computershare",
      role: "Server, Storage, Data Centre & Open Systems Manager",
      location: "UK",
      period: "March 2018 - July 2019",
      description:
        "Infrastructure leadership role managing core enterprise platforms and physical data center operations across UK sites.",
      achievements: [
        "Led 13 systems engineers across 2 UK sites, managing all servers, storage arrays, Active Directory, and Exchange systems.",
        "Reduced support ticket backlog by 70% and successfully merged two separate IT teams with zero staff attrition.",
        "Reduced infrastructure security vulnerabilities by 80% and introduced cloud disaster recovery services.",
      ],
      skills: [
        "Data Center Ops",
        "Server Infrastructure",
        "Exchange & AD",
        "Disaster Recovery",
        "Team Mergers",
        "Vulnerability Remediation",
      ],
      link: "https://www.computershare.com",
    },
    {
      company: "Computershare",
      role: "Network & Voice Manager",
      location: "UK",
      period: "March 2016 - March 2018",
      description:
        "Managed network infrastructure, telecom platforms, and voice engineering delivery teams.",
      achievements: [
        "Oversaw WAN/LAN upgrades, security firewall policies, and corporate VOIP telephony systems across sites.",
      ],
      skills: [
        "Network Management",
        "Voice Engineering",
        "VOIP Platforms",
        "Firewall Governance",
      ],
    },
    {
      company: "Computershare",
      role: "Network Engineer",
      location: "UK",
      period: "July 2013 - March 2016",
      description:
        "Hands-on network routing, switching, and voice engineering support.",
      achievements: [
        "Maintained corporate networks, Cisco routers, switches, and resolved high-priority network outages.",
      ],
      skills: [
        "Cisco Systems",
        "Routing & Switching",
        "Network Troubleshooting",
      ],
    },
  ],
  volunteering: [
    {
      organization: "Bridge Farm Primary School",
      role: "Chair of Governors",
      period: "Active",
      description:
        "Providing governance leadership, strategic direction, and financial oversight for the school board.",
      achievements: [
        "Directing the governing body to ensure educational quality, safety, and financial compliance.",
      ],
    },
    {
      organization: "Futura Learning Partnership",
      role: "EdTech Steering Group Member",
      period: "Active",
      description:
        "Advising the educational trust on digital strategy, technology integration, and educational software platforms.",
      achievements: [
        "Formulating IT adoption roadmaps to support digital teaching and remote learning systems across schools.",
      ],
    },
  ],
  skills: [
    {
      category: "Leadership & Advisory",
      skills: [
        { name: "Consulting Delivery & Practice Management", level: 5 },
        { name: "CAPEX & OPEX Budget Management", level: 5 },
        { name: "C-Suite & Executive Stakeholder Alignment", level: 5 },
        { name: "Career Frameworks & Capability Planning", level: 4.5 },
        { name: "Team Coaching & Multi-site Management", level: 4.5 },
        { name: "Vendor & Tooling Rationalisation", level: 4 },
      ],
    },
    {
      category: "Cloud & Infrastructure Platforms",
      skills: [
        { name: "AWS Cloud (Professional Level)", level: 5 },
        { name: "Infrastructure as Code (Terraform)", level: 5 },
        { name: "Azure & Google Cloud Platform (GCP)", level: 4 },
        { name: "Kubernetes & Container Platforms", level: 4.5 },
        { name: "Data Centre & Server Operations", level: 5 },
        { name: "Active Directory, Exchange & M365", level: 4.5 },
      ],
    },
    {
      category: "DevOps & Site Reliability (SRE)",
      skills: [
        { name: "Site Reliability Engineering (SRE)", level: 5 },
        { name: "Continuous Integration & Deployment (CI/CD)", level: 5 },
        { name: "Continual Service Improvement (CSI)", level: 4.5 },
        { name: "Disaster Recovery (DR) & Site Recovery", level: 4.5 },
        { name: "ITIL 4 Strategy & Frameworks", level: 4.5 },
        { name: "PRINCE2 Project Governance", level: 4 },
      ],
    },
    {
      category: "Networks & System Operations",
      skills: [
        { name: "Network Routing & Switching (Cisco)", level: 4.5 },
        { name: "Voice Engineering & VOIP Systems", level: 4.5 },
        { name: "Vulnerability Remediation & Security", level: 4.5 },
        { name: "Operational Service Desk & SLA Management", level: 5 },
      ],
    },
  ],
  education: [
    {
      institution: "The Open University",
      degree: "Master of Business Administration (MBA)",
      fieldOfStudy: "Technology Management",
      period: "2014 - 2018",
      location: "UK",
      details: [
        "Earned an executive MBA focusing on technological innovation, business strategy, and technology management frameworks.",
      ],
    },
    {
      institution: "Chartered Management Institute",
      degree: "Level 5 Diploma",
      fieldOfStudy: "Leadership & Management",
      period: "2014",
      location: "UK",
      details: [
        "Professional diploma focused on operational managers, covering project leadership, strategy, and resourcing.",
      ],
    },
    {
      institution: "University of the West of England",
      degree: "BSc (Hons) Computer Science",
      fieldOfStudy: "Software Systems & Networking",
      period: "2000 - 2004",
      location: "Bristol, UK",
      details: [
        "Graduated with 2:1 Honors.",
        "Core focus on distributed networks, software engineering, and systems administration.",
      ],
    },
  ],
  certifications: [
    {
      name: "ITIL 4 Managing Professional",
      issuer: "AXELOS Global Best Practice",
      date: "Certified",
      url: "https://www.axelos.com",
    },
    {
      name: "ITIL 4 Strategic Leader",
      issuer: "AXELOS Global Best Practice",
      date: "Certified",
      url: "https://www.axelos.com",
    },
    {
      name: "PRINCE2 Practitioner",
      issuer: "AXELOS Global Best Practice",
      date: "Certified",
      url: "https://www.axelos.com",
    },
    {
      name: "Associate & Professional Cloud Certifications (AWS, Azure, GCP)",
      issuer: "Cloud Providers",
      date: "Certified",
    },
  ],
  professionalBodies: [
    "Chartered member of the Chartered Management Institute",
    "Member of the Association of MBA's",
    "Chartered Member of the British Computer Society",
  ],
  hobbies: [
    "PADI-qualified scuba diver with experience diving in Australia and Turkey.",
    "Enjoy hiking, exploring new cuisines, reading both technical and non-technical books, and spending time with family.",
  ],
};
