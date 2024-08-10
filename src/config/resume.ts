export const HEADER: Header = {
  summary: "User-focused Software Engineer",
  links: [
    { label: "nicodnt@icloud.com", url: "mailto:nicodnt@icloud.com" },
    { label: "https://nicodinata.dev", url: "https://nicodinata.dev" },
  ],
};

export const EXPERIENCE: Experience = [
  {
    title: "Software Engineer",
    institution: "Applickable",
    from: "Mar 2019",
    to: "Jun 2023",
    location: "Melbourne AU",
    skills: ["React Native", "ReactJS", "NextJS", "Swift", "Java", "Flask"],
    content: [
      {
        body: `Responsible for ${semibold("end-to-end product implementation")} for projects across Applickable's client portfolio, working with ${semibold("React Native and NextJS")} on the frontend and ${semibold("Flask")} on the backend.`,
        bulletPoints: [
          `${semibold("Collaborated with clients and designers")} to do ${semibold("feature scoping and prioritisation")}.`,
          `Utilised technical best practices to ensure great UX, ranging from ${semibold("optimising network calls")} to ${semibold("fine-tuning render performance")}.`,
          `${semibold("Streamlined and maintained development pipelines")} to improve team velocity.`,
          `${semibold("Maintained internal documentation and KBs")} to increase team productivity and scalability.`,
          `Helped ${semibold("onboard new engineers")} and perform ${semibold("task allocation and review")}.`,
        ],
      },
    ],
  },
  {
    title: "Volunteer Webmaster",
    institution: "PPIA Melbourne University",
    from: "Sep 2017",
    to: "Aug 2018",
    location: "Melbourne AU",
    skills: ["HTML", "CSS", "Wordpress"],
    content: [
      `Helped maintain the association's strong digital engagement with the community by ${semibold("implementing new deliverables on the website")} and fixing issues. ${semibold("Led the integration of PPIA's website")} with Indonesian Film Festival's by collaborating with its webmaster.`,
    ],
  },
  {
    title: "Volunteer Webmaster",
    institution: "Perspektif Magazine",
    from: "Jan 2018",
    to: "Apr 2018",
    location: "Melbourne AU",
    skills: ["HTML", "CSS", "Wordpress", "Adobe XD"],
    content: [
      `${semibold("Implemented a major redesign")} of the magazine's website to fit its new design language. ${semibold("Collaborated directly with the lead designer")} to negotiate project scope, manage handover, and deliver the finished project within the set stakeholder timeline.`,
    ],
  },
];

export const SKILLS: Skills = {
  technical: [
    "React Native/Expo",
    "Swift & Java native modules",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "Astro",
    "TailwindCSS",
    "Flask (Python)",
    "PostgreSQL",
  ],
  development: [
    "Project management (Agile)",
    "documentation building",
    "client communication",
    "design-friendly development",
  ],
};

export const EDUCATION: Education = [
  {
    title: "Master of Engineering, Software (Distinction)",
    from: "2020",
    to: "2022",
    institution: "University of Melbourne",
  },
  {
    title: "Bachelor of Science, Computing and Software Systems",
    from: "2015",
    to: "2018",
    institution: "University of Melbourne",
  },
];

/**
 * ---------------------------------------------------------------------------
 * Types & utils
 * ------------------------------------------------------------------------- */

type Header = {
  /** Short summary string below the name at the header. */
  summary: string | undefined;
  links: { label: string; url: string }[];
};

type Experience = {
  title: string;
  institution: string;
  from: string;
  to: string;
  location: string;
  skills: string[];
  content: (string | { body: string; bulletPoints: string[] })[];
  /** If true, the item appears on the website but not on the generated PDF. */
  excludeFromPdf?: boolean;
}[];

type Skills = {
  technical: string[];
  development: string[];
};

type Education = {
  title: string;
  from: string;
  to: string;
  institution: string;
  /** If true, the item appears on the website but not on the generated PDF. */
  excludeFromPdf?: boolean;
}[];

/** Returns the given string styled as "semibold". */
function semibold(str: string): string {
  return `<span style='font-weight:600;color:hsl(var(--foreground)/0.8)'>${str}</span>`;
}
