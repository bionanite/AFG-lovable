import serviceIntegrated from "@/assets/service-integrated-fm.jpg";
import serviceHard from "@/assets/service-hard-fm.jpg";
import serviceSoft from "@/assets/service-soft-fm.jpg";
import serviceSecurityPersonnel from "@/assets/service-security-personnel.jpg";
import serviceSecuritySystems from "@/assets/service-security-systems.jpg";
import serviceWater from "@/assets/service-water-compliance.jpg";
import serviceVacant from "@/assets/service-vacant-property.jpg";
import serviceSustainability from "@/assets/service-sustainability.jpg";

export type ServiceFamily = {
  slug: string;
  number: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  imageAlt: string;
  groups: { title: string; items: string[] }[];
  note?: string;
};

export const serviceFamilies: ServiceFamily[] = [
  {
    slug: "integrated-fm",
    number: "01",
    name: "Integrated FM",
    short:
      "Engineering, site services and security coordinated under one contract, one contact and one reporting pack.",
    intro:
      "Where several disciplines sit on the same estate, we can hold them under a single contract so scope, access and reporting stay consistent. Assets, PPM schedules and reactive jobs are held in a CAFM system so the record is one source rather than several. The exact mix of services, frequencies and management arrangements is confirmed following a site review.",
    image: serviceIntegrated,
    imageAlt: "Facilities team coordinating works across a commercial estate",
    groups: [
      {
        title: "Set-up and transition",
        items: [
          "Mobilisation planning against an agreed date",
          "Transition from an incumbent provider",
          "Asset verification, tagging and scope documentation",
          "CAFM set-up with the asset register and PPM planner loaded",
          "Access, permit-to-work and induction arrangements",
        ],
      },
      {
        title: "Day-to-day coordination",
        items: [
          "CAFM helpdesk for job logging, priorities and audit trail",
          "PPM scheduling by asset, using SFG20-aligned task sets where they apply",
          "Reactive works triage, RAMS review and attendance",
          "Supply-chain and subcontractor coordination",
        ],
      },
      {
        title: "Assurance and reporting",
        items: [
          "Statutory and compliance task tracking with logbook entries",
          "Consolidated reporting drawn from the CAFM record",
          "Scheduled contract review meetings",
          "Continuous improvement actions carried forward",
        ],
      },
    ],
  },
  {
    slug: "hard-fm",
    number: "02",
    name: "Hard FM",
    short:
      "Mechanical, electrical, plumbing and fabric maintenance recorded against the asset register.",
    intro:
      "Building services maintained on a PPM schedule built from the asset register, with reactive attendance when something falls outside tolerance. Task content is set against SFG20-aligned schedules where they apply to the asset, work is carried out under RAMS and permit-to-work, and statutory activity is coordinated with your own duty holders. Scope is confirmed following a site review.",
    image: serviceHard,
    imageAlt: "Engineer working on plant room equipment",
    groups: [
      {
        title: "Mechanical and HVAC",
        items: [
          "Air handling, chiller and cooling plant servicing",
          "Ventilation and filtration maintenance",
          "Pump, valve and pipework attention",
          "PPM task content aligned to SFG20 schedules where applicable",
        ],
      },
      {
        title: "Electrical and plumbing",
        items: [
          "Electrical distribution inspection and testing support",
          "Lighting, emergency lighting and small power works",
          "Plumbing, drainage and sanitaryware repairs",
          "Isolations and works controlled under permit-to-work",
        ],
      },
      {
        title: "Fabric and life safety",
        items: [
          "Building fabric repairs and minor works",
          "Doors, locks, ceilings and floor finishes",
          "Fire and life-safety system support, coordinated with your responsible person",
          "Planned and reactive maintenance recorded in CAFM, with logbooks and O&M records kept current",
        ],
      },
    ],
  },
  {
    slug: "soft-services",
    number: "03",
    name: "Soft services",
    short:
      "Cleaning, hygiene, waste, front of house and grounds delivered to a written specification.",
    intro:
      "Presentation and hygiene delivered to a written specification you can hold us to, with sign-off captured on site rather than estimated later. Periodic and higher-risk tasks are carried out under RAMS, and waste is handled under duty of care with transfer documentation retained. Frequencies and cover are set following a site review.",
    image: serviceSoft,
    imageAlt: "Cleaning operative working in a commercial building",
    groups: [
      {
        title: "Cleaning and hygiene",
        items: [
          "Commercial cleaning on daily and periodic cycles",
          "Deep cleaning and specialist or technical cleaning under task-specific RAMS",
          "Washroom and hygiene services with consumables",
          "Pest-control coordination through specialist providers",
        ],
      },
      {
        title: "Occupied-building support",
        items: [
          "Front of house and reception cover",
          "Portering and internal moves",
          "Decorating and general building support",
        ],
      },
      {
        title: "External and waste",
        items: [
          "Grounds maintenance and external areas",
          "Segregated waste and recycling managed under duty of care, with transfer notes retained",
          "Presentation audits against the written specification",
        ],
      },
    ],
  },
  {
    slug: "security-personnel",
    number: "04",
    name: "Security personnel",
    short:
      "Guarding, patrols, keyholding and reception security arranged around how the site actually runs.",
    intro:
      "Security officers deployed to written assignment instructions agreed with you. Licensing, screening and deployment requirements are agreed and confirmed in writing following a site review, and cover patterns are set to the hours your site needs rather than a standard template. Security services are delivered by CSTM Services, our SIA ACS-approved group company.",
    image: serviceSecurityPersonnel,
    imageAlt: "Security officer at a commercial building reception",
    groups: [
      {
        title: "Static and mobile cover",
        items: [
          "Manned guarding to agreed assignment instructions",
          "Mobile patrols on scheduled or varied routes",
          "Keyholding and alarm response arrangements",
        ],
      },
      {
        title: "Front of house and access",
        items: [
          "Reception and concierge security",
          "Access management, passes and visitor control",
          "Escorting of contractors and visitors where required",
        ],
      },
      {
        title: "Additional cover",
        items: [
          "Event and short-term security support",
          "Cover for planned works, shutdowns and moves",
          "Incident logging and handover records",
        ],
      },
    ],
    note: "Security work is regulated. Licensing, screening and deployment arrangements are confirmed in writing following site review.",
  },
  {
    slug: "security-systems",
    number: "05",
    name: "Security systems",
    short:
      "CCTV, access control, intruder alarms and staff-safety systems, specified and maintained.",
    intro:
      "Electronic security specified around the risk on the site, then maintained so it keeps working. Monitoring and connected services are arranged with specialist providers, and the delivery arrangement is confirmed following a site review.",
    image: serviceSecuritySystems,
    imageAlt: "Camera and access control equipment on a building exterior",
    groups: [
      {
        title: "Detection and surveillance",
        items: [
          "CCTV system design support, installation and maintenance",
          "Intruder alarm systems with servicing on a planned (PPM) cycle",
          "Fault attendance, RAMS for works at height or in live areas, and system record keeping",
        ],
      },
      {
        title: "Access and identity",
        items: [
          "Electronic access control and door entry",
          "Credential, pass and permission administration",
          "Integration with existing site systems where practical",
        ],
      },
      {
        title: "Connected and personal safety",
        items: [
          "Monitoring and connected services through specialist providers",
          "Lone-worker and staff-safety devices",
          "Escalation arrangements agreed with your team",
        ],
      },
    ],
  },
  {
    slug: "water-compliance",
    number: "06",
    name: "Water compliance",
    short:
      "Legionella coordination, sampling, TMV servicing and flushing regimes with records kept current.",
    intro:
      "Water safety tasks organised around the written scheme of control so it stays live rather than sitting in a folder. Programmes are structured against the principles set out in ACOP L8 and HSG274, with risk assessment and any treatment work coordinated through specialist providers. The arrangement is confirmed following a site review.",
    image: serviceWater,
    imageAlt: "Water plant and pipework in a building services room",
    groups: [
      {
        title: "Assessment and monitoring",
        items: [
          "Legionella risk-assessment coordination against ACOP L8 and HSG274 guidance",
          "Sampling and monitoring programmes",
          "Sentinel outlet temperature monitoring regimes",
        ],
      },
      {
        title: "Planned tasks",
        items: [
          "Flushing of little-used outlets",
          "Thermostatic mixing valve servicing",
          "Tank, calorifier and outlet checks",
        ],
      },
      {
        title: "Records",
        items: [
          "Treatment and dosing arranged where required",
          "Water safety logbook and CAFM records kept up to date",
          "Remedial actions tracked to closure",
        ],
      },
    ],
    note: "Water safety is regulated work. Scope, competencies and delivery arrangements are confirmed following site review.",
  },
  {
    slug: "vacant-property",
    number: "07",
    name: "Vacant property management",
    short:
      "Inspections, security, compliance checks and clearance while a building sits empty.",
    intro:
      "Empty buildings still need attention. We can hold a schedule of inspections and maintenance so the asset does not deteriorate, and prepare it for handback when the time comes. Frequencies are agreed following a site review.",
    image: serviceVacant,
    imageAlt: "Empty commercial building interior",
    groups: [
      {
        title: "Inspection and security",
        items: [
          "Scheduled inspections with written reports",
          "Security and access arrangements",
          "Reporting of damage, ingress or unauthorised entry",
        ],
      },
      {
        title: "Maintenance and compliance",
        items: [
          "Utilities checks and isolations",
          "Compliance checks appropriate to a vacant building, with PPM reduced to the retained scope",
          "Grounds and building maintenance",
        ],
      },
      {
        title: "Clearance and handback",
        items: [
          "Cleaning and clearance",
          "Waste removal under duty of care with disposal documentation",
          "Handback preparation for reletting or sale",
        ],
      },
    ],
  },
  {
    slug: "sustainability-energy",
    number: "08",
    name: "Sustainability and energy",
    short:
      "Practical energy review, waste reduction and improvement measures tied to how the estate runs.",
    intro:
      "Improvement work that starts from what the estate actually consumes and discards, rather than a generic plan. Measures are proposed after a review and agreed with you before anything is committed.",
    image: serviceSustainability,
    imageAlt: "Rooftop solar panels and building energy plant",
    groups: [
      {
        title: "Review",
        items: [
          "Energy review and consumption support",
          "Waste stream review across the estate",
          "Identification of practical improvement measures",
        ],
      },
      {
        title: "Planning",
        items: [
          "Sustainability planning aligned to your own targets",
          "Prioritised actions with clear ownership",
          "Input to procurement and specification decisions",
        ],
      },
      {
        title: "Delivery",
        items: [
          "Waste reduction and segregation improvements",
          "Operational adjustments to plant schedules",
          "Progress reviewed at contract meetings",
        ],
      },
    ],
  },
];

export function getServiceFamily(slug: string) {
  return serviceFamilies.find((f) => f.slug === slug);
}
