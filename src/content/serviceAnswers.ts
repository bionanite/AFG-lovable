export type ServiceAnswer = {
  /** 40–60 word plain-language definition, shown directly under the h1. */
  answer: string;
  faqs: { question: string; answer: string }[];
};

export const serviceAnswers: Record<string, ServiceAnswer> = {
  "integrated-fm": {
    answer:
      "Integrated facilities management is the delivery of engineering, site services and security under a single contract. Allied Force Group holds the asset register, PPM planner and reactive helpdesk in one CAFM system, so one point of contact answers for the whole estate and one reporting pack covers every discipline.",
    faqs: [
      {
        question: "What does integrated FM include?",
        answer:
          "Integrated FM from Allied Force Group typically combines hard FM (mechanical, electrical and fabric maintenance), soft services (cleaning, waste, front of house and grounds) and security, coordinated under one contract with a shared helpdesk, one asset register and one reporting pack.",
      },
      {
        question: "How is an integrated FM contract mobilised?",
        answer:
          "Mobilisation runs against an agreed start date and covers asset verification and tagging, CAFM set-up with the asset register and PPM planner loaded, access, permit-to-work and induction arrangements, personnel screening and TUPE consultation where it applies, and agreement of the reporting format before day one.",
      },
      {
        question: "Who is the point of contact on an integrated FM contract?",
        answer:
          "Each contract has a single named point of contact for the client, with a documented escalation route behind them. The intention is that the client raises one call rather than chasing separate cleaning, engineering and security providers.",
      },
      {
        question: "Can Allied Force Group take over from an incumbent provider?",
        answer:
          "Yes. Transition from an incumbent is planned as part of mobilisation, including asset verification, scope documentation and handover of statutory records. The arrangements for a specific site are confirmed following a site review.",
      },
    ],
  },
  "hard-fm": {
    answer:
      "Hard FM covers the engineering and fabric of a building: heating and ventilation, power, water services, fire and life-safety support and the building fabric itself. Allied Force Group plans this work per tagged asset using SFG20-aligned task content, and records every closed job against the asset register.",
    faqs: [
      {
        question: "What is the difference between hard FM and soft services?",
        answer:
          "Hard FM covers the physical plant and fabric of a building — HVAC, electrical distribution, water services, lifts, fire systems and the structure. Soft services cover the people-facing side: cleaning, waste, hygiene, grounds and front of house.",
      },
      {
        question: "How is planned maintenance scheduled?",
        answer:
          "Planned maintenance is scheduled per tagged asset rather than per visit, using SFG20-aligned task content where it applies, with a frequency and a statutory reference where one exists. The schedule sits in the CAFM system alongside the reactive record.",
      },
      {
        question: "How are reactive repairs handled?",
        answer:
          "Reactive jobs are logged on the helpdesk with a priority, triaged, RAMS reviewed where the task requires it, attended and closed with evidence: timestamp, engineer identity, parts used and a photograph where the work is not otherwise visible.",
      },
      {
        question: "What compliance records are produced?",
        answer:
          "Statutory and compliance tasks are tracked with logbook entries and O&M records, so the evidence behind a completion figure can be produced on request rather than assembled later.",
      },
    ],
  },
  "soft-services": {
    answer:
      "Soft services cover cleaning, hygiene, waste, grounds and front of house. Allied Force Group works to a written specification that states what is cleaned, how often and to what standard, so the scope is auditable rather than assumed, and periodic tasks are planned rather than squeezed into daily hours.",
    faqs: [
      {
        question: "What is included in a cleaning specification?",
        answer:
          "A cleaning specification sets out each area, the tasks in it, the frequency of each task and the standard expected, separating daily work from periodic tasks such as deep cleans, carpet and hard-floor treatment and high-level work.",
      },
      {
        question: "How is cleaning quality checked?",
        answer:
          "Quality is checked against the written specification through site audits, with findings and remedial actions recorded so the result can be reviewed at the contract meeting rather than debated informally.",
      },
      {
        question: "Is waste handling included?",
        answer:
          "Segregated waste handling can be included, with transfer documentation kept as evidence under waste duty of care. The streams collected and their frequencies are confirmed following a site review.",
      },
      {
        question: "Can front of house be delivered alongside cleaning?",
        answer:
          "Yes. Reception and front-of-house cover is frequently combined with cleaning and security so the first impression of a building and its access control are managed by one coordinated team.",
      },
    ],
  },
  "security-personnel": {
    answer:
      "Security personnel cover guarding, patrols, keyholding, alarm response and reception security. Delivery is carried out by CSTM Services Ltd, the security company within the Allied Force Group family, so security sits under the same contract, the same reporting and the same escalation route as the rest of the estate.",
    faqs: [
      {
        question: "Who delivers Allied Force Group security services?",
        answer:
          "Security is delivered by CSTM Services Ltd, a group company, under the Allied Force Group contract. That keeps a single point of contact and one reporting pack while the security work is carried out by a dedicated security business.",
      },
      {
        question: "What does keyholding and alarm response involve?",
        answer:
          "Keyholding means the provider holds site keys and attends when an alarm activates, so no member of the client's own staff has to respond out of hours. Each attendance is logged with the cause of activation and the action taken.",
      },
      {
        question: "How are officers screened?",
        answer:
          "Screening covers identity, right to work, employment history and the resolution of gaps in that history, and status is maintained rather than checked once at deployment. The screening arrangements for a specific contract are confirmed during mobilisation.",
      },
      {
        question: "Can security be combined with cleaning and maintenance?",
        answer:
          "Yes — that is the usual arrangement. Holding security alongside cleaning and engineering means access, patrol routes and out-of-hours work are planned together rather than negotiated between separate providers.",
      },
    ],
  },
  "security-systems": {
    answer:
      "Security systems cover CCTV, access control, intruder alarms and supporting technology. Allied Force Group treats systems and people as one arrangement, so cameras, door control and patrol routes are designed against the same site plan, and system faults are logged on the same helpdesk as building faults.",
    faqs: [
      {
        question: "What security systems can be supported?",
        answer:
          "CCTV, access control, intruder detection and associated infrastructure can be supported, alongside the personnel who use them. The systems installed on a specific site and the support arrangements are confirmed following a site review.",
      },
      {
        question: "How do systems and security officers work together?",
        answer:
          "Systems and officers are planned against the same site plan: camera coverage, door control and patrol routes are set up so each supports the other, rather than technology and manpower being specified separately.",
      },
      {
        question: "How are system faults reported?",
        answer:
          "System faults are logged on the same helpdesk as building faults, given a priority and closed with evidence, so a failed camera or reader is visible in the same record as a failed plant item.",
      },
      {
        question: "Can existing systems be taken on?",
        answer:
          "Existing systems can be surveyed, documented and taken into the maintenance record as part of mobilisation. What can be supported is confirmed after that survey rather than assumed.",
      },
    ],
  },
  "water-compliance": {
    answer:
      "Water compliance is the control of Legionella risk in a building's water systems, carried out in line with the HSE Approved Code of Practice ACOP L8 and the technical guidance HSG274. Allied Force Group delivers monitoring, flushing, temperature checks and record keeping against a written scheme of control.",
    faqs: [
      {
        question: "What does ACOP L8 require of a duty holder?",
        answer:
          "ACOP L8 requires a duty holder to assess the risk of Legionella in water systems, put a written scheme of control in place, monitor and maintain the system, and keep records of that work. HSG274 provides the supporting technical guidance.",
      },
      {
        question: "What water hygiene tasks are delivered?",
        answer:
          "Typical tasks include outlet flushing, temperature monitoring at sentinel points, TMV servicing, tank inspections and cleaning, and sampling where the scheme requires it. Frequencies follow the written scheme of control for the site.",
      },
      {
        question: "How are water records kept?",
        answer:
          "Monitoring results and completed tasks are recorded so the logbook reflects the work actually carried out, with dates, readings and the person responsible, ready for inspection rather than reconstructed afterwards.",
      },
      {
        question: "Who confirms the scope of water compliance work?",
        answer:
          "Scope and frequencies follow the site's risk assessment and written scheme of control, and are confirmed following a site review before any work is programmed.",
      },
    ],
  },
  "vacant-property": {
    answer:
      "Vacant property management protects a building while it is empty. Allied Force Group combines inspections, security cover, void compliance tasks and condition reporting, so deterioration, unauthorised access and lapsed statutory obligations are found during a planned visit rather than at the point of reletting.",
    faqs: [
      {
        question: "What does vacant property management include?",
        answer:
          "It typically includes scheduled inspections with condition reporting, security cover or keyholding, void compliance tasks such as water flushing and drainage checks, and clearance or presentation work ahead of reletting.",
      },
      {
        question: "Why does an empty building still need water compliance?",
        answer:
          "Water sitting in a low-use or empty system is a Legionella risk, so flushing and temperature monitoring continue while the building is void. The scheme of control does not pause because the building is unoccupied.",
      },
      {
        question: "How is unauthorised access prevented?",
        answer:
          "Security cover, keyholding and alarm response can be arranged alongside the inspection programme, so an activation gets a planned attendance rather than an ad hoc call to a landlord or agent.",
      },
      {
        question: "What reporting is produced on a void property?",
        answer:
          "Each visit produces a dated condition report with photographs, so changes to the building are evidenced over time rather than described at the end of the void period.",
      },
    ],
  },
  "sustainability-energy": {
    answer:
      "Sustainability and energy work is about reducing consumption and waste without reducing service. Allied Force Group starts from what the building's own records show — run hours, controls settings, waste streams and consumables — and prioritises the changes that can be made within the existing estate and contract.",
    faqs: [
      {
        question: "Where do energy savings usually come from?",
        answer:
          "In occupied buildings the common wins are plant run hours and control settings that no longer match occupancy, lighting controls, and maintenance that keeps equipment operating efficiently rather than running harder to compensate.",
      },
      {
        question: "How is waste reduced?",
        answer:
          "By segregating streams properly at source, reviewing what is actually being thrown away, and adjusting consumables and collections so fewer part-empty collections are made. Transfer documentation is kept as evidence under duty of care.",
      },
      {
        question: "Is consumption data required to start?",
        answer:
          "It helps. Where meter data, run hours or waste transfer records exist, those are the starting point; where they do not, establishing a baseline is the first piece of work.",
      },
      {
        question: "Are results guaranteed?",
        answer:
          "No figures are promised in advance. The work is prioritised against what the building's own records show, and the outcome is reported from the same records afterwards.",
      },
    ],
  },
};

export function getServiceAnswer(slug: string): ServiceAnswer | undefined {
  return serviceAnswers[slug];
}
