export type Policy = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string }[];
};

const reviewNote =
  "This statement is reviewed periodically and applies to all Allied Force Group personnel, including subcontractors working under our contracts. A signed copy is available on request.";

export const policies: Policy[] = [
  {
    slug: "mission-statement",
    number: "01",
    title: "Mission statement",
    summary:
      "What Allied Force Group sets out to do and how we expect to be judged on it.",
    sections: [
      {
        heading: "Our purpose",
        body: "To bring security-grade discipline to cleaning, facilities management and maintenance, so that clients receive one accountable team, one contract and evidence captured at the point of work.",
      },
      {
        heading: "How we work",
        body: "Scope is written down before mobilisation, access is planned with the client, and delivery is reported honestly — including where something has not gone to plan.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "quality-policy",
    number: "02",
    title: "Quality policy",
    summary: "How we define, measure and correct the standard of our work.",
    sections: [
      {
        heading: "Commitment",
        body: "Every contract is delivered against a written specification agreed with the client. Quality is assessed against that specification rather than a general impression.",
      },
      {
        heading: "Monitoring",
        body: "Tasks are recorded at the point of work, audited on a planned cycle and reviewed with the client at contract meetings.",
      },
      {
        heading: "Correction",
        body: "Where work falls short, it is recorded, corrected and the cause addressed. Repeat issues are escalated to contract management.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "health-safety-policy",
    number: "03",
    title: "Health and safety policy",
    summary: "Our approach to safe working on client sites.",
    sections: [
      {
        heading: "Commitment",
        body: "We take reasonable steps to provide a safe working environment for our people and to avoid putting client staff, visitors or the public at risk.",
      },
      {
        heading: "Risk assessment",
        body: "Work is planned using task-specific risk assessments and method statements, reviewed when the site, task or equipment changes.",
      },
      {
        heading: "Reporting",
        body: "Accidents, near misses and unsafe conditions are reported and investigated, with corrective actions tracked to closure.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "environmental-policy",
    number: "04",
    title: "Environmental policy",
    summary: "How we manage waste, consumption and environmental impact on site.",
    sections: [
      {
        heading: "Commitment",
        body: "We aim to reduce the environmental impact of our operations and to help clients reduce the impact of their estates.",
      },
      {
        heading: "Practical measures",
        body: "Segregated waste streams, controlled use of chemicals and consumables, efficient plant schedules and route planning to reduce travel.",
      },
      {
        heading: "Improvement",
        body: "Measures are proposed after review of actual consumption and waste, and agreed with the client before commitment.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "equality-diversity-policy",
    number: "05",
    title: "Equality and diversity policy",
    summary: "Fair treatment in recruitment, deployment and day-to-day work.",
    sections: [
      {
        heading: "Commitment",
        body: "We recruit, deploy and promote on the basis of suitability for the role. Discrimination, harassment and victimisation are not tolerated.",
      },
      {
        heading: "In practice",
        body: "Recruitment decisions are documented, reasonable adjustments are considered, and concerns can be raised without disadvantage.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "modern-slavery",
    number: "06",
    title: "Modern slavery statement",
    summary: "Steps taken to prevent forced labour in our operations and supply chain.",
    sections: [
      {
        heading: "Commitment",
        body: "We do not tolerate modern slavery or human trafficking in any part of our business or supply chain.",
      },
      {
        heading: "Our people",
        body: "Right-to-work checks are carried out before deployment, workers are paid directly, and identity documents are never retained.",
      },
      {
        heading: "Supply chain",
        body: "Subcontractors are expected to meet the same standard, and are asked to confirm their arrangements.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "safeguarding-policy",
    number: "07",
    title: "Safeguarding policy",
    summary: "Working safely around children and vulnerable adults.",
    sections: [
      {
        heading: "Commitment",
        body: "On education, healthcare and public-facing sites, our people work to the safeguarding arrangements of the site they attend.",
      },
      {
        heading: "In practice",
        body: "Site inductions, signing in, supervision and escalation routes are agreed with the client before attendance.",
      },
      {
        heading: "Concerns",
        body: "Any safeguarding concern is reported immediately to the client's designated lead and recorded.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "data-protection-policy",
    number: "08",
    title: "Data protection policy",
    summary: "How we handle personal data belonging to clients, staff and visitors.",
    sections: [
      {
        heading: "Commitment",
        body: "Personal data is collected only where there is a clear purpose, held no longer than needed and shared only where there is a lawful basis.",
      },
      {
        heading: "On site",
        body: "Visitor records, access logs and CCTV material are handled under arrangements agreed with the client, who normally remains the data controller.",
      },
      {
        heading: "Requests",
        body: "Requests about personal data can be made using the contact details on our contact page.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "anti-bribery-policy",
    number: "09",
    title: "Anti-bribery and corruption policy",
    summary: "Our position on gifts, hospitality and improper payments.",
    sections: [
      {
        heading: "Commitment",
        body: "We do not offer, give, request or accept bribes, facilitation payments or improper advantages of any kind.",
      },
      {
        heading: "Gifts and hospitality",
        body: "Modest, transparent hospitality is acceptable. Anything that could reasonably influence a decision is not.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "whistleblowing-policy",
    number: "10",
    title: "Whistleblowing policy",
    summary: "Raising serious concerns without fear of disadvantage.",
    sections: [
      {
        heading: "Commitment",
        body: "Anyone working for or with Allied Force Group can raise a concern about wrongdoing, danger or malpractice.",
      },
      {
        heading: "How to raise a concern",
        body: "Concerns can be raised with contract management, or directly using the contact details on our contact page.",
      },
      {
        heading: "Protection",
        body: "Concerns raised in good faith will be investigated and the person raising them will not be penalised for doing so.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "business-continuity-policy",
    number: "11",
    title: "Business continuity policy",
    summary: "Keeping contracts running through disruption.",
    sections: [
      {
        heading: "Commitment",
        body: "We plan for the loss of people, access, systems or suppliers so that critical tasks on client sites continue.",
      },
      {
        heading: "In practice",
        body: "Contact and escalation routes are agreed at mobilisation, cover arrangements are identified for key roles, and records are held so work can resume quickly.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
  {
    slug: "complaints-policy",
    number: "12",
    title: "Complaints policy",
    summary: "How to raise a complaint and what happens next.",
    sections: [
      {
        heading: "Making a complaint",
        body: "Complaints can be made by phone on 020 7183 9055 or by email to sales@alliedforcegroup.com, or through the enquiry form on our contact page.",
      },
      {
        heading: "What happens",
        body: "The complaint is logged, acknowledged and investigated by someone not directly involved in the work concerned. We will tell you the outcome and any corrective action.",
      },
      {
        heading: "If you are not satisfied",
        body: "You can ask for the matter to be escalated to contract management for a further review.",
      },
      { heading: "Review", body: reviewNote },
    ],
  },
];

export function getPolicy(slug: string) {
  return policies.find((p) => p.slug === slug);
}
