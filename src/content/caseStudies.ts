import caseLogistics from "@/assets/case-logistics.jpg";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import caseHq from "@/assets/case-hq.jpg";
import caseEducation from "@/assets/case-education.jpg";

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  image: string;
  imageAlt: string;
  headline: string;
  brief: string;
  scope: string[];
  outcome: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
};

/**
 * Placeholder case study content. Client names, locations and figures are
 * illustrative and to be replaced with confirmed detail before publish.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "riverside-logistics",
    client: "Riverside Logistics",
    sector: "Logistics & industrial",
    location: "Midlands",
    image: caseLogistics,
    imageAlt: "Night view of a logistics distribution centre gatehouse and loading bays",
    headline: "Gatehouse control and night cover on a 24-hour distribution centre",
    brief:
      "A regional distribution centre needed consistent gatehouse control, vehicle checks and night patrols without a separate supplier for cleaning and yard upkeep.",
    scope: [
      "Manned gatehouse and vehicle access control",
      "Night patrols and keyholding",
      "CCTV review and incident reporting",
      "Yard, washroom and office cleaning",
    ],
    outcome: [
      "One rota and one reporting pack across security and site services",
      "Access logs and patrol records available to the site team each morning",
      "Escalation routed through a single named point of contact",
    ],
    testimonial: {
      quote:
        "Having security and site services under one contract removed a lot of noise. We raise one call and it gets picked up.",
      name: "Operations Manager",
      role: "Riverside Logistics",
    },
  },
  {
    slug: "riverstone-capital",
    client: "Riverstone Capital",
    sector: "Commercial",
    location: "London",
    image: caseHq,
    imageAlt: "Corporate headquarters reception with concierge desk and access gates",
    headline: "Front of house and integrated FM at a City headquarters",
    brief:
      "A head office wanted a reception presence that read as hospitality rather than guarding, with cleaning and engineering coordinated behind it.",
    scope: [
      "Reception and concierge security",
      "Access control and visitor management",
      "Daily cleaning and periodic works",
      "Planned and reactive maintenance coordination",
    ],
    outcome: [
      "Documented visitor and access procedure agreed with the client",
      "Cleaning and engineering scheduled around occupancy",
      "Monthly review against a written scope",
    ],
  },
  {
    slug: "riverside-hospital",
    client: "Riverside Hospital Trust",
    sector: "Healthcare",
    location: "South East",
    image: caseHealthcare,
    imageAlt: "Bright hospital main entrance with a cleaning operative at work",
    headline: "Cleaning to clinical standards in public-facing areas",
    brief:
      "Main entrance, outpatient corridors and washrooms needed a cleaning regime that held up through peak footfall and could be evidenced.",
    scope: [
      "Daily and periodic cleaning of public areas",
      "Washroom and hygiene services",
      "Waste segregation support",
      "Audit records at the point of work",
    ],
    outcome: [
      "Task frequencies written down and signed off before mobilisation",
      "Completed work evidenced by area, not by shift",
      "Issues logged and closed against a named owner",
    ],
    testimonial: {
      quote:
        "The difference is the record. We can see what was done, where and when, without chasing anyone for it.",
      name: "Estates Lead",
      role: "Riverside Hospital Trust",
    },
  },
  {
    slug: "riverside-high-school",
    client: "Riverside High School",
    sector: "Education",
    location: "North West",
    image: caseEducation,
    imageAlt: "Modern secondary school exterior with a maintenance van on site",
    headline: "Term-time cleaning, grounds and reactive maintenance",
    brief:
      "A secondary school needed site services delivered around teaching hours, with clear safeguarding-appropriate access arrangements.",
    scope: [
      "Daily cleaning and holiday deep cleans",
      "Grounds maintenance and litter control",
      "Building fabric and reactive repairs",
      "Agreed site access and induction procedure",
    ],
    outcome: [
      "Works scheduled to term dates and out-of-hours windows",
      "Single point of contact for the site team",
      "Written scope reviewed each term",
    ],
  },
];
