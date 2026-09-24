export type Pillar = {
  id: string;
  number: string;
  title: string;
  line: string;
  points: string[];
};

export const pillars: Pillar[] = [
  {
    id: "approach",
    number: "01",
    title: "Our approach",
    line: "One accountable team, one contract and a scope that is written down before anyone attends.",
    points: [
      "A single point of contact across every service on the estate",
      "Scope, frequencies and access agreed in writing at the outset",
      "Security-grade discipline applied to cleaning, FM and maintenance",
      "Honest reporting, including where something has not gone to plan",
    ],
  },
  {
    id: "quality",
    number: "02",
    title: "Quality and assurance",
    line: "Work measured against the specification you signed, not a general impression.",
    points: [
      "Task records captured at the point of work",
      "Planned audit cycles against the written specification",
      "Remedial actions tracked to closure",
      "Contract reviews with the same figures in front of both parties",
    ],
  },
  {
    id: "health-safety",
    number: "03",
    title: "Health and safety",
    line: "Safe working planned per task, not assumed from experience.",
    points: [
      "Task-specific risk assessments and method statements",
      "Site induction and permit arrangements agreed before attendance",
      "Accident, near-miss and unsafe-condition reporting",
      "Corrective actions reviewed at contract meetings",
    ],
  },
  {
    id: "technology",
    number: "04",
    title: "Technology",
    line: "Evidence captured where the work happens, so reporting is a by-product rather than a chore.",
    points: [
      "Job logging and service coordination through a single helpdesk route",
      "Planned maintenance scheduled by asset with records kept current",
      "Photographic and timestamped evidence against completed tasks",
      "Consolidated reporting across every service on the contract",
    ],
  },
  {
    id: "social-value",
    number: "05",
    title: "Social value",
    line: "Local employment and sensible environmental measures, described plainly.",
    points: [
      "Recruitment from the communities around the sites we serve",
      "Direct payment, right-to-work checks and fair treatment at work",
      "Waste segregation and reduction reviewed with the client",
      "Energy measures proposed from actual consumption, not templates",
    ],
  },
  {
    id: "mobilisation",
    number: "06",
    title: "Mobilisation",
    line: "A planned transition, so day one looks like every day after it.",
    points: [
      "Mobilisation plan built back from an agreed start date",
      "Asset verification and scope documentation before handover",
      "Transition arrangements with any incumbent provider",
      "Access, permits and inductions in place before the first shift",
    ],
  },
];
