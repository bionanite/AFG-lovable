import caseEducation from "@/assets/case-education.jpg";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import sectorDataCentre from "@/assets/sector-data-centre.jpg";
import sectorRail from "@/assets/sector-rail.jpg";
import sectorCommercial from "@/assets/sector-commercial.jpg";
import sectorLogistics from "@/assets/sector-logistics.jpg";
import sectorPublic from "@/assets/sector-public-sector.jpg";
import serviceVacant from "@/assets/service-vacant-property.jpg";

export type Sector = {
  slug: string;
  number: string;
  name: string;
  line: string;
  image: string;
  imageAlt: string;
  intro: string;
  priorities: { title: string; body: string }[];
  services: string[];
};

export const sectors: Sector[] = [
  {
    slug: "commercial",
    number: "01",
    name: "Commercial",
    line: "Offices, business parks and multi-tenant buildings kept presentable, maintained and secure.",
    image: sectorCommercial,
    imageAlt: "Commercial office reception and atrium",
    intro:
      "Occupied offices and multi-tenant buildings judged on how they look and feel every morning. We hold cleaning, engineering and security under one contract so front of house, plant and access arrangements are coordinated rather than argued over.",
    priorities: [
      {
        title: "Presentation before the first arrival",
        body: "Cleaning and front-of-house cover set around the hours the building actually fills up.",
      },
      {
        title: "Tenant and landlord clarity",
        body: "Scope written down per demise so it is clear what sits with the landlord and what sits with the tenant.",
      },
      {
        title: "Quiet engineering",
        body: "Planned works scheduled around occupancy, with noisy or disruptive tasks moved outside core hours.",
      },
    ],
    services: ["integrated-fm", "soft-services", "hard-fm", "security-personnel"],
  },
  {
    slug: "healthcare",
    number: "02",
    name: "Healthcare",
    line: "Clinical and non-clinical areas supported to written cleaning, hygiene and access standards.",
    image: caseHealthcare,
    imageAlt: "Hospital entrance and reception area",
    intro:
      "Healthcare estates run continuously and are audited constantly. We work to written specifications for clinical and non-clinical areas, with sign-off captured at the point of work rather than reconstructed later.",
    priorities: [
      {
        title: "Specification-led cleaning",
        body: "Frequencies and methods agreed by area type, with records kept against each task.",
      },
      {
        title: "Controlled access",
        body: "Inductions, escorting and access arrangements agreed with your team before attendance.",
      },
      {
        title: "Water and life safety",
        body: "Legionella coordination, TMV servicing and flushing regimes kept live and evidenced.",
      },
    ],
    services: ["soft-services", "water-compliance", "hard-fm", "security-personnel"],
  },
  {
    slug: "education",
    number: "03",
    name: "Education",
    line: "Schools, colleges and campuses served around term time, lessons and site access rules.",
    image: caseEducation,
    imageAlt: "Secondary school campus building and grounds",
    intro:
      "Campuses that have to be ready for the first bell and free for works in the holidays. We plan cleaning, maintenance and site security around the academic calendar and your safeguarding requirements.",
    priorities: [
      {
        title: "Term-time and holiday planning",
        body: "Periodic and disruptive works loaded into holidays; daily cover sized for term time.",
      },
      {
        title: "Safeguarding-aware attendance",
        body: "Site access, signing in and supervision arrangements agreed with the school before any visit.",
      },
      {
        title: "Grounds and externals",
        body: "Playing fields, hard standing and external areas kept safe and presentable year round.",
      },
    ],
    services: ["soft-services", "hard-fm", "security-personnel", "sustainability-energy"],
  },
  {
    slug: "logistics-industrial",
    number: "04",
    name: "Logistics & Industrial",
    line: "Warehouses, depots and production sites supported around shift patterns and live operations.",
    image: sectorLogistics,
    imageAlt: "Distribution centre yard and loading bays at night",
    intro:
      "Sites that never fully stop. Cover is built around shift changes, gatehouse flow and vehicle movements, so attendance fits the operation instead of interrupting it.",
    priorities: [
      {
        title: "Shift-aligned cover",
        body: "Cleaning, patrols and reactive attendance scheduled against real shift patterns.",
      },
      {
        title: "Gate and yard control",
        body: "Visitor, driver and contractor management with a clear written record of movements.",
      },
      {
        title: "Plant and fabric uptime",
        body: "Planned maintenance on loading equipment, doors, lighting and building fabric.",
      },
    ],
    services: ["security-personnel", "security-systems", "hard-fm", "integrated-fm"],
  },
  {
    slug: "public-sector",
    number: "05",
    name: "Public Sector",
    line: "Civic buildings and public-facing estates delivered to documented scope and reporting.",
    image: sectorPublic,
    imageAlt: "Public civic building interior",
    intro:
      "Public-facing buildings where scope, spend and evidence all have to stand up to scrutiny. Everything we do is documented against the specification and reported in a form you can hand on.",
    priorities: [
      {
        title: "Auditable delivery",
        body: "Tasks, attendance and remedial actions evidenced against the agreed specification.",
      },
      {
        title: "Public-facing presentation",
        body: "Reception, waiting areas and washrooms maintained through the working day, not only overnight.",
      },
      {
        title: "Social and environmental value",
        body: "Local recruitment, waste reduction and energy measures discussed openly, not overstated.",
      },
    ],
    services: ["integrated-fm", "soft-services", "security-personnel", "sustainability-energy"],
  },
  {
    slug: "vacant-property",
    number: "06",
    name: "Vacant Property",
    line: "Empty buildings inspected, secured, maintained and prepared for handback.",
    image: serviceVacant,
    imageAlt: "Empty commercial building interior awaiting reletting",
    intro:
      "An empty building still carries risk and still deteriorates. We hold a schedule of inspections, security arrangements and compliance checks so the asset is protected and ready when it is needed.",
    priorities: [
      {
        title: "Scheduled inspection",
        body: "Written reports on condition, ingress, damage and unauthorised entry.",
      },
      {
        title: "Security and access",
        body: "Keyholding, patrols and access control arrangements set to the risk on the site.",
      },
      {
        title: "Handback readiness",
        body: "Clearance, cleaning and records prepared for reletting, sale or reoccupation.",
      },
    ],
    services: ["vacant-property", "security-personnel", "hard-fm", "soft-services"],
  },
  {
    slug: "data-centres",
    number: "07",
    name: "Data Centres",
    line: "Technical estates supported under permit, with controlled access and documented attendance.",
    image: sectorDataCentre,
    imageAlt: "Data centre hall with server racks",
    intro:
      "Technical environments where access, cleanliness and record keeping are tightly controlled. We work to agreed permits and change windows, with attendance and task sign-off documented at the point of work. Scope and delivery arrangements are confirmed following a site review.",
    priorities: [
      {
        title: "Access under permit",
        body: "Escorting, inductions and permit requirements agreed in writing before any attendance.",
      },
      {
        title: "Technical cleaning regimes",
        body: "Cleaning methods and frequencies set by area type, from white space to plant and loading areas.",
      },
      {
        title: "Planned change windows",
        body: "Disruptive tasks scheduled into agreed windows and evidenced afterwards.",
      },
    ],
    services: ["security-personnel", "hard-fm", "soft-services", "integrated-fm"],
  },
  {
    slug: "rail",
    number: "08",
    name: "Rail",
    line: "Stations, depots and lineside buildings supported around operating hours and access rules.",
    image: sectorRail,
    imageAlt: "Railway station platform and depot buildings",
    intro:
      "Rail estates run to timetables and strict access rules. We plan cleaning, maintenance and security cover around traffic hours and possessions, with competencies and site access arrangements agreed before attendance. Scope and delivery arrangements are confirmed following a site review.",
    priorities: [
      {
        title: "Work around operating hours",
        body: "Attendance planned against traffic hours, possessions and station footfall.",
      },
      {
        title: "Controlled site access",
        body: "Inductions, escorting and access requirements agreed with your team in advance.",
      },
      {
        title: "Presentation and safety",
        body: "Platforms, concourses, welfare and depot buildings kept clean, lit and safe.",
      },
    ],
    services: ["soft-services", "hard-fm", "security-personnel", "integrated-fm"],
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
