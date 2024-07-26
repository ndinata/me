/** Profile links etc. */
export const PROFILE = {
  email: "nicodnt@icloud.com",
  github: { username: "ndinata", url: "https://github.com/ndinata/" },
  linkedin: {
    username: "nicodinata",
    url: "https://www.linkedin.com/in/nicodinata/",
  },
} as const;

/** Website-related config. */
export const SITE = {
  year: "2024",
} as const;

export type Work = {
  name: string;
  summary: string;
  externalUrl: string | undefined;
  responsibilityType:
    | "mobile-only"
    | "web-only"
    | "frontend"
    | "backend"
    | "mobile-full-stack"
    | "web-full-stack"
    | "full-stack";
};

/** All past work at Applickable. */
export const PAST_APPLICKABLE_WORK = {
  assemble: {
    name: "Assemble",
    summary: "Mobile app for centralised home/property management.",
    externalUrl: "https://assemble.com.au/",
    responsibilityType: "mobile-full-stack",
  },
  avie: {
    name: "Avie",
    summary: "Client scheduling platform for businesses.",
    externalUrl: "https://www.avieapp.com/",
    responsibilityType: "mobile-only",
  },
  carconnect: {
    name: "carconnect",
    summary: "Online car buying platform.",
    externalUrl: "https://carconnect.com.au/",
    responsibilityType: "mobile-only",
  },
  commons: {
    name: "The Commons",
    summary: "Premium coworking spaces and flexible offices management app.",
    externalUrl: "https://www.thecommons.com.au/",
    responsibilityType: "mobile-only",
  },
  hsp: {
    name: "HSP",
    summary: "Mobile app for syncing with electric ute covers.",
    externalUrl: "https://hsputelids.com/app-sync/",
    responsibilityType: "mobile-full-stack",
  },
  winecollective: {
    name: "The Wine Collective",
    summary: "Digital premium wine marketplace.",
    externalUrl: "https://www.thewinecollective.com.au/",
    responsibilityType: "mobile-full-stack",
  },
} as const satisfies Record<string, Work>;

export type SideProject = {
  name: string;
  summary: string;
  url: {
    production: string | undefined;
    source: string | undefined;
  };
  techStack: (string | { name: string; url: string })[];
};

/** All side projects. */
export const SIDE_PROJECT = {
  mantram: {
    name: "📿 mantram",
    summary:
      "Mobile-friendly online library of Buddhist mantrams. Ergonomic DX and great performance—thanks to Astro, Tailwind, and Rust (for the parser)!",
    url: {
      production: "https://mantram.blog/",
      source: "https://github.com/ndinata/mantram",
    },
    techStack: ["Astro", "ReactJS", "TailwindCSS", "Rust"],
  },
} as const satisfies Record<string, SideProject>;
