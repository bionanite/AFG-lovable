import diagramCommercial from "@/assets/sector-diagram-commercial.png";
import diagramHealthcare from "@/assets/sector-diagram-healthcare.png";
import diagramEducation from "@/assets/sector-diagram-education.png";
import diagramLogistics from "@/assets/sector-diagram-logistics.png";
import diagramPublicSector from "@/assets/sector-diagram-public-sector.png";
import diagramVacant from "@/assets/sector-diagram-vacant-property.png";
import diagramDataCentres from "@/assets/sector-diagram-data-centres.png";
import diagramRail from "@/assets/sector-diagram-rail.png";

export type SectorDetail = {
  diagram: string;
  diagramAlt: string;
  diagramHeading: string;
  diagramIntro: string;
  points: string[];
  detail: { heading: string; body: string }[];
  evidence: string[];
};

export const sectorDetail: Record<string, SectorDetail> = {
  commercial: {
    diagram: diagramCommercial,
    diagramAlt:
      "Illustration of a cutaway office building with reception, cleaning, maintenance, security, compliance and reporting connected to it",
    diagramHeading: "How a commercial building is covered",
    diagramIntro:
      "Front of house, cleaning, engineering and security sit under one contract, so cover is planned against the hours the building is actually used.",
    points: [
      "Front of house and reception",
      "Daily and periodic cleaning",
      "Planned maintenance",
      "Reactive attendance",
      "Security and access",
      "Compliance records",
      "Waste and recycling",
      "Monthly reporting",
    ],
    detail: [
      {
        heading: "How the day is planned",
        body: "Cover is built backwards from occupancy, with the PPM planner and cleaning schedule held in CAFM. Cleaning and front-of-house hours are set around when the building fills and empties, periodic tasks are loaded into quieter windows, and noisy engineering work is moved outside core hours by agreement.",
      },
      {
        heading: "Where scope is usually argued over",
        body: "Multi-tenant buildings create grey areas between landlord and tenant. We write scope down per demise at mobilisation: who cleans what, who holds plant responsibility, who authorises reactive spend, and what happens in shared areas and risers.",
      },
      {
        heading: "Managing change across the year",
        body: "Occupancy changes, fit-outs and tenant churn all move the workload. Scope is reviewed at agreed intervals so cover, frequencies and access arrangements track how the building is actually being used rather than the original specification.",
      },
    ],
    evidence: [
      "Task records against the agreed cleaning specification",
      "PPM history per asset held in CAFM",
      "Reactive jobs with attendance and completion notes",
      "Access, visitor and incident records where applicable",
    ],
  },

  healthcare: {
    diagram: diagramHealthcare,
    diagramAlt:
      "Illustration of a cutaway hospital building with cleaning, water hygiene, access control, compliance and reporting connected to it",
    diagramHeading: "How a healthcare estate is covered",
    diagramIntro:
      "Clinical and non-clinical areas are treated separately, with methods, frequencies and sign-off written down for each area type.",
    points: [
      "Clinical area cleaning",
      "Non-clinical and public areas",
      "Water hygiene coordination",
      "Controlled access and escorting",
      "Planned maintenance",
      "Reactive attendance",
      "Waste segregation support",
      "Audit-ready records",
    ],
    detail: [
      {
        heading: "Specification before frequency",
        body: "Each area type gets an agreed method, product set and frequency before any schedule is built. That keeps cleaning defensible under audit and makes it clear where a change in clinical use should change the regime.",
      },
      {
        heading: "Attending a live estate",
        body: "Healthcare sites do not close. Inductions, escorting and permitted working hours are agreed with your team in advance, and attendance is planned around clinical activity rather than around our own convenience.",
      },
      {
        heading: "Water and life safety",
        body: "Legionella risk assessment actions, flushing and temperature regimes, TMV servicing and sampling are coordinated on a written scheme of control, structured against ACOP L8 and HSG274 guidance. Scope and delivery arrangements for specialist work are confirmed following a site review.",
      },
    ],
    evidence: [
      "Cleaning records held against each area type",
      "Flushing, temperature and TMV servicing logs",
      "PPM and reactive maintenance history from CAFM",
      "Remedial actions tracked to closure",
    ],
  },

  education: {
    diagram: diagramEducation,
    diagramAlt:
      "Illustration of a cutaway school building with cleaning, term planning, visitor control, grounds and maintenance connected to it",
    diagramHeading: "How a campus is covered",
    diagramIntro:
      "Daily cover is sized for term time, while periodic and disruptive works are loaded into the holidays.",
    points: [
      "Term-time daily cleaning",
      "Holiday deep cleans",
      "Visitor and contractor sign-in",
      "Planned maintenance",
      "Reactive attendance",
      "Grounds and external areas",
      "Waste and recycling",
      "Compliance records",
    ],
    detail: [
      {
        heading: "Working to the academic calendar",
        body: "The year is planned once, not improvised term by term. Deep cleans, decoration, flooring and disruptive engineering sit in the holidays; term time is kept to daily cover, statutory checks and reactive attendance.",
      },
      {
        heading: "Safeguarding-aware attendance",
        body: "Site access, signing in, supervision and movement around occupied areas are agreed with the school before any visit, and the same arrangements apply to our supply chain.",
      },
      {
        heading: "Grounds and externals",
        body: "Playing fields, hard standing, drainage, lighting and boundary fencing are held on the same schedule as the buildings, so the outside of the site does not drift while the inside is maintained.",
      },
    ],
    evidence: [
      "Daily and periodic cleaning records by block",
      "Holiday works programme and completion evidence",
      "Statutory and PPM checks with dates and outcomes",
      "Grounds and external inspection reports",
    ],
  },

  "logistics-industrial": {
    diagram: diagramLogistics,
    diagramAlt:
      "Illustration of a cutaway distribution centre with guarding, patrols, doors, lighting, compliance and reporting connected to it",
    diagramHeading: "How a distribution site is covered",
    diagramIntro:
      "Cover is built around shift changes, gate flow and vehicle movements so attendance fits the operation instead of interrupting it.",
    points: [
      "Gatehouse and driver control",
      "Manned guarding",
      "Mobile patrols",
      "Loading equipment maintenance",
      "Doors, barriers and lighting",
      "Welfare and office cleaning",
      "Yard and external upkeep",
      "Incident and movement records",
    ],
    detail: [
      {
        heading: "Built around the shift pattern",
        body: "Rosters and attendance are set against real shift changes and peak dispatch windows, so cleaning, patrols and engineering work land in the gaps rather than across the busiest hours.",
      },
      {
        heading: "Control at the gate",
        body: "Driver, visitor and contractor management is run to a written process, with movements recorded so there is an account of who was on site and when.",
      },
      {
        heading: "Keeping the operation moving",
        body: "Dock levellers, roller shutters, high-bay lighting and yard surfaces carry most of the downtime risk on these sites, so they sit at the front of the PPM schedule rather than being handled reactively, with task content aligned to SFG20 schedules where they apply.",
      },
    ],
    evidence: [
      "Patrol and attendance records",
      "Gate, visitor and vehicle movement logs",
      "PPM history on doors and loading equipment",
      "Reactive jobs with cause and remedial notes",
    ],
  },

  "public-sector": {
    diagram: diagramPublicSector,
    diagramAlt:
      "Illustration of a cutaway civic building with reception, washrooms, cleaning, compliance, recycling and reporting connected to it",
    diagramHeading: "How a civic building is covered",
    diagramIntro:
      "Everything delivered is documented against the specification and reported in a form that can be handed on.",
    points: [
      "Reception and public areas",
      "Washroom and hygiene cover",
      "Daytime cleaning",
      "Planned maintenance",
      "Reactive attendance",
      "Waste and recycling",
      "Compliance records",
      "Contract reporting",
    ],
    detail: [
      {
        heading: "Auditable by default",
        body: "Tasks, attendance and remedial actions are recorded against the agreed specification at the point of work, so reporting is a summary of what happened rather than a reconstruction of it.",
      },
      {
        heading: "Public-facing presentation",
        body: "Reception, waiting areas and washrooms are covered through the working day, not only before opening, because these are the areas the public judge the building by.",
      },
      {
        heading: "Social and environmental value",
        body: "Local recruitment, waste reduction and practical energy measures are discussed openly at mobilisation and reviewed against what was actually delivered, without overstating the outcome.",
      },
    ],
    evidence: [
      "Specification-linked task records",
      "Daytime cover and washroom check sheets",
      "Statutory and PPM history with logbook entries",
      "Periodic performance and spend reporting",
    ],
  },

  "vacant-property": {
    diagram: diagramVacant,
    diagramAlt:
      "Illustration of an empty building with locks, inspections, patrols, utilities isolation, waste clearance and cameras connected to it",
    diagramHeading: "How an empty building is held",
    diagramIntro:
      "A schedule of inspections, security arrangements and compliance checks protects the asset and keeps it ready for its next use.",
    points: [
      "Scheduled inspections",
      "Keyholding and alarm response",
      "Mobile patrols",
      "Utilities, isolation and retained PPM checks",
      "Water and drainage checks",
      "Clearance and waste removal",
      "Grounds and boundary upkeep",
      "Condition reporting",
    ],
    detail: [
      {
        heading: "Inspection on a written schedule",
        body: "Each visit follows the same checklist: ingress, damage, unauthorised entry, water and drainage, fire precautions and boundary condition, with photographs and a dated report each time.",
      },
      {
        heading: "Security set to the risk",
        body: "Keyholding, patrol frequency and access arrangements are set against the location, the building's condition and how long it will stay empty, and reviewed as those change.",
      },
      {
        heading: "Ready for handback",
        body: "Clearance, cleaning, minor repairs and records are prepared ahead of reletting, sale or reoccupation so the building can be handed over without a scramble.",
      },
    ],
    evidence: [
      "Dated inspection reports with photographs",
      "Patrol and alarm response records",
      "Utility, water and fire precaution checks",
      "Clearance and remedial works records",
    ],
  },

  "data-centres": {
    diagram: diagramDataCentres,
    diagramAlt:
      "Illustration of a cutaway data centre with access control, permits, technical cleaning, cooling plant, cameras and reporting connected to it",
    diagramHeading: "How a technical estate is covered",
    diagramIntro:
      "Access, cleanliness and record keeping are tightly controlled, with attendance and sign-off documented at the point of work.",
    points: [
      "Access under permit",
      "Escorted attendance",
      "White space cleaning",
      "Plant and loading areas",
      "Support space cleaning",
      "Security cover",
      "Change window scheduling",
      "Task sign-off records",
    ],
    detail: [
      {
        heading: "Nothing happens without a permit",
        body: "Inductions, escorting, RAMS and permit-to-work requirements are agreed in writing before anyone attends, and the same rules apply to every member of our supply chain.",
      },
      {
        heading: "Cleaning by area type",
        body: "Methods and frequencies are set separately for white space, plant rooms, loading areas and support space, because the risk and the acceptable materials are different in each.",
      },
      {
        heading: "Disruptive work in agreed windows",
        body: "Anything that could affect the operating environment is scheduled into an agreed change window and evidenced afterwards. Scope and delivery arrangements are confirmed following a site review.",
      },
    ],
    evidence: [
      "Permit-to-work, RAMS and induction records",
      "Attendance logged against each visit",
      "Cleaning sign-off by area type",
      "Change window completion evidence",
    ],
  },

  rail: {
    diagram: diagramRail,
    diagramAlt:
      "Illustration of a station platform and depot with timetabling, competencies, cleaning, lighting, cameras and compliance connected to it",
    diagramHeading: "How a rail estate is covered",
    diagramIntro:
      "Cleaning, maintenance and security cover are planned around traffic hours, possessions and station footfall.",
    points: [
      "Platform and concourse cleaning",
      "Welfare and depot buildings",
      "Work around traffic hours",
      "Possession planning",
      "Lighting and fabric upkeep",
      "Security cover",
      "Waste and litter management",
      "Attendance records",
    ],
    detail: [
      {
        heading: "Planned against the timetable",
        body: "Attendance is scheduled against traffic hours, footfall peaks and planned possessions, so work is done when it can be done safely rather than when it is convenient.",
      },
      {
        heading: "Access agreed in advance",
        body: "Inductions, competencies and site access requirements are agreed with your team before attendance, and recorded for each person who attends.",
      },
      {
        heading: "Presentation and safety together",
        body: "Platforms, concourses, welfare facilities and depot buildings are held on one schedule covering cleanliness, lighting, and the condition of surfaces the public walk on. Scope and delivery arrangements are confirmed following a site review.",
      },
    ],
    evidence: [
      "Cleaning records by area and shift",
      "Access and competency records per attendance",
      "Lighting and fabric inspection outcomes",
      "Reactive jobs with completion notes",
    ],
  },
};

export function getSectorDetail(slug: string) {
  return sectorDetail[slug];
}
