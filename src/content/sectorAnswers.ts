export type SectorAnswer = {
  /** 40–60 word plain-language definition, shown directly under the h1. */
  answer: string;
  faqs: { question: string; answer: string }[];
};

const reviewLine =
  "The scope and delivery arrangements for a specific site are confirmed following a site review.";

export const sectorAnswers: Record<string, SectorAnswer> = {
  commercial: {
    answer:
      "Allied Force Group supports commercial offices, business parks and multi-tenant buildings with cleaning, engineering and security held under one contract. Scope is written down per demise, so it is clear what sits with the landlord and what sits with the tenant, and presentation is set around the hours the building fills up.",
    faqs: [
      {
        question: "What facilities services do commercial offices usually need?",
        answer:
          "Most offices need daily and periodic cleaning, washroom and waste provision, front of house, planned and reactive engineering across HVAC, power and fabric, and security cover or access control. Allied Force Group can hold those under one contract.",
      },
      {
        question: "How is landlord and tenant scope separated?",
        answer:
          "Scope is documented per demise, setting out which tasks sit with the landlord's common parts and which sit inside a tenant's area, so recharges and responsibilities are settled in writing rather than argued after the event.",
      },
      {
        question: "Can work be done outside office hours?",
        answer:
          "Yes. Cleaning, periodic tasks and disruptive engineering work are usually planned around occupancy, with access and permits agreed in advance so the building is presentable before the first arrival.",
      },
      {
        question: "How is performance reported on a commercial contract?",
        answer: `Reporting is drawn from the CAFM record — planned tasks closed against tagged assets, reactive jobs with evidence, and audit findings against the cleaning specification — and reviewed at a scheduled contract meeting. ${reviewLine}`,
      },
    ],
  },
  healthcare: {
    answer:
      "Allied Force Group supports healthcare estates where cleaning standards, infection control and uninterrupted plant operation are clinical concerns rather than housekeeping. Work is planned around clinical activity, access is controlled and evidenced, and statutory tasks such as water hygiene are recorded to a standard that stands up to inspection.",
    faqs: [
      {
        question: "How does cleaning differ in a healthcare setting?",
        answer:
          "Cleaning in clinical areas is specified by area risk, with defined methods, colour-coded equipment and frequencies that reflect infection-control requirements rather than general office standards, and with audit evidence kept for each area.",
      },
      {
        question: "How is work planned around clinical activity?",
        answer:
          "Tasks are scheduled around lists, occupancy and access restrictions, with permits and escorts arranged where areas cannot simply be entered. Disruptive work is booked into agreed windows.",
      },
      {
        question: "What compliance evidence is produced?",
        answer:
          "Statutory tasks including water hygiene under ACOP L8, fire and life-safety support and electrical testing are tracked with logbook entries, so evidence can be produced at inspection rather than reconstructed.",
      },
      {
        question: "Can security be included on a healthcare site?",
        answer: `Yes. Reception security, patrols and access control can be delivered alongside cleaning and engineering by the same coordinated team. ${reviewLine}`,
      },
    ],
  },
  education: {
    answer:
      "Allied Force Group supports schools, colleges and campuses where the working day is fixed and the estate has to be ready before it starts. Cleaning and maintenance are planned around teaching hours and holidays, and everyone attending site works within the setting's safeguarding and access arrangements.",
    faqs: [
      {
        question: "How is work scheduled around the school day?",
        answer:
          "Daily cleaning and reactive attendance are set around teaching hours, and larger periodic and engineering works are programmed into holidays and inset days so teaching space is handed back ready for use.",
      },
      {
        question: "What safeguarding arrangements apply to site staff?",
        answer:
          "Personnel attending an education site work within the setting's safeguarding and access arrangements, including signing in, identification and supervision requirements. The specific arrangements are agreed with the setting before attendance.",
      },
      {
        question: "Are holiday deep cleans included?",
        answer:
          "Periodic work such as deep cleans, floor treatment and high-level cleaning is usually programmed into holiday periods and specified separately from the daily clean so it is planned rather than squeezed in.",
      },
      {
        question: "Can one contract cover several sites in a trust?",
        answer: `Yes. Multi-site portfolios can be held under one contract with a single point of contact and consolidated reporting across the sites. ${reviewLine}`,
      },
    ],
  },
  "logistics-industrial": {
    answer:
      "Allied Force Group supports warehouses, distribution centres and industrial sites where the building runs long hours and traffic never really stops. Work is planned around shift patterns and vehicle movement, with access, permits and safe working arrangements agreed before attendance rather than negotiated at the gate.",
    faqs: [
      {
        question: "How is maintenance planned on a site that runs continuously?",
        answer:
          "Planned work is booked into shift changeovers or quieter periods, and disruptive tasks are programmed with the site team in advance so operations and vehicle movement are not interrupted.",
      },
      {
        question: "What security arrangements suit a distribution site?",
        answer:
          "Gatehouse and access control, patrols and keyholding are common, coordinated with the way vehicles and people actually move around the site rather than applied as a generic pattern.",
      },
      {
        question: "Is high-level and specialist cleaning available?",
        answer:
          "High-level cleaning, floor scrubbing and welfare-area cleaning are typical on industrial sites, planned with the access equipment and permits the task requires.",
      },
      {
        question: "How are safe working arrangements handled?",
        answer: `RAMS are reviewed and permits arranged before attendance, so work in traffic routes, at height or on live systems is authorised in writing. ${reviewLine}`,
      },
    ],
  },
  "public-sector": {
    answer:
      "Allied Force Group supports public sector buildings where spend is scrutinised and the evidence behind it matters as much as the work. Scope is documented, statutory tasks are tracked with logbook entries, and reporting is drawn from the work record so it can be handed to an auditor without a follow-up meeting.",
    faqs: [
      {
        question: "What reporting do public sector clients usually need?",
        answer:
          "Typically: planned task completion per asset, reactive performance with evidence, statutory compliance status, and a clear audit trail behind each figure. Reporting is produced from the CAFM record rather than compiled separately.",
      },
      {
        question: "How is scope agreed and controlled?",
        answer:
          "Scope is written down before service start and changes are documented, so what is being paid for is visible and variations are recorded rather than absorbed informally.",
      },
      {
        question: "Can services be delivered across several buildings?",
        answer:
          "Yes. Multi-building portfolios can be held under one contract with one point of contact and consolidated reporting across the estate.",
      },
      {
        question: "How is public access handled?",
        answer: `Buildings open to the public need cleaning and presentation set around opening hours, and reception or security cover at the entrance. ${reviewLine}`,
      },
    ],
  },
  "vacant-property": {
    answer:
      "Allied Force Group supports vacant and void property with scheduled inspections, security cover, void compliance tasks and dated condition reporting. The purpose is to find deterioration, unauthorised access or a lapsed statutory obligation during a planned visit rather than at the point of reletting.",
    faqs: [
      {
        question: "What happens during a void inspection?",
        answer:
          "The building is walked to an agreed route, condition is recorded with photographs, and any deterioration, water ingress, damage or evidence of access is reported with a date so changes can be tracked over time.",
      },
      {
        question: "Does an empty building still need water compliance?",
        answer:
          "An empty building can still present water-system risks. The dutyholder's risk assessment and written scheme determine applicable controls, which may include managing little-used outlets and monitoring. Tasks and frequencies are site-specific rather than identical for every vacant system.",
      },
      {
        question: "How is the building kept secure?",
        answer:
          "Security cover, keyholding and alarm response can be arranged alongside the inspection programme, so an activation receives a planned attendance rather than an ad hoc call.",
      },
      {
        question: "What happens before reletting?",
        answer: `Clearance, cleaning and presentation work can be programmed ahead of marketing or handover. ${reviewLine}`,
      },
    ],
  },
  "data-centres": {
    answer:
      "Allied Force Group supports data centre environments where access is controlled, cleaning is technical rather than cosmetic, and any work near live equipment is planned. Attendance is arranged under permit, technical cleaning follows a defined method, and disruptive tasks are booked into agreed change windows.",
    faqs: [
      {
        question: "How is access controlled on a data centre site?",
        answer:
          "Attendance is arranged in advance under the site's permit and escort arrangements, with personnel identified and inducted before they arrive rather than cleared at the door.",
      },
      {
        question: "What does technical cleaning involve?",
        answer:
          "Technical cleaning follows a defined method for the environment — controlled equipment, appropriate materials and agreed routes — so the work does not introduce risk to live equipment.",
      },
      {
        question: "How is disruptive work scheduled?",
        answer:
          "Work that could affect live equipment is programmed into agreed change windows with the site team, documented in advance and evidenced when it is completed.",
      },
      {
        question: "Can security be provided alongside facilities work?",
        answer: `Yes. Access control, reception security and patrols can be coordinated with the facilities work under the same contract. ${reviewLine}`,
      },
    ],
  },
  rail: {
    answer:
      "Allied Force Group supports rail environments where the operating timetable sets the working day and site access is controlled. Work is planned around operating hours, attendance follows the site's access and safety arrangements, and presentation and safety in passenger areas are treated as the same task.",
    faqs: [
      {
        question: "How is work planned around operating hours?",
        answer:
          "Tasks are programmed around the timetable, with disruptive and cleaning work planned for quieter periods or outside service so passenger movement is not affected.",
      },
      {
        question: "What access arrangements apply on rail sites?",
        answer:
          "Attendance follows the site's controlled access and safety arrangements, with personnel briefed and authorised in advance and works documented before they start.",
      },
      {
        question: "What does presentation cover in passenger areas?",
        answer:
          "Cleaning in passenger areas covers appearance and safety together — floors, waste, glass and touch points — because a slip hazard and an untidy concourse are the same visit.",
      },
      {
        question: "Can security be included?",
        answer: `Security personnel and systems can be coordinated with the facilities work under one contract. ${reviewLine}`,
      },
    ],
  },
};

export function getSectorAnswer(slug: string): SectorAnswer | undefined {
  return sectorAnswers[slug];
}
