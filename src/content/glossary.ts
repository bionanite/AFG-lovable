export type GlossaryTerm = {
  term: string;
  abbreviation?: string;
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Hard FM",
    definition:
      "Hard FM covers the physical fabric and engineering systems of a building: heating and ventilation, electrical distribution, water services, lifts, fire and life-safety systems and the building fabric itself. It is the work that keeps the asset operating and statutorily compliant.",
  },
  {
    term: "Soft services",
    definition:
      "Soft services cover the people-facing side of a building: cleaning, washroom and hygiene provision, waste handling, grounds maintenance, front of house and reception. The scope is set by a written specification rather than by the plant on site.",
  },
  {
    term: "Integrated facilities management",
    abbreviation: "IFM",
    definition:
      "Integrated facilities management is the delivery of several disciplines — typically hard FM, soft services and security — under a single contract with one point of contact and one reporting pack, rather than through separate contracts per discipline.",
  },
  {
    term: "Planned preventative maintenance",
    abbreviation: "PPM",
    definition:
      "Planned preventative maintenance is scheduled work carried out at set frequencies to keep an asset serviceable and compliant, rather than waiting for failure. Tasks are planned per tagged asset, with a frequency and, where one applies, a statutory reference.",
  },
  {
    term: "Reactive maintenance",
    definition:
      "Reactive maintenance is unplanned work raised in response to a fault or a request. Jobs are logged on a helpdesk, given a priority, triaged, attended and closed with evidence, so the record sits alongside the planned work rather than separately.",
  },
  {
    term: "SFG20",
    definition:
      "SFG20 is the maintenance standard published by the Building Engineering Services Association, setting out task content and frequencies for building engineering assets. PPM schedules aligned to SFG20 task sets make it clear what was done to each asset and why.",
  },
  {
    term: "ACOP L8",
    definition:
      "ACOP L8 is the HSE Approved Code of Practice on the control of Legionella bacteria in water systems, supported by the technical guidance HSG274. It sets out the duty holder's responsibilities for risk assessment, written schemes of control, monitoring and record keeping.",
  },
  {
    term: "BS 7858",
    definition:
      "BS 7858 is the British Standard for screening individuals working in a secure environment. It covers identity, right to work, employment history and the resolution of gaps in that history, and it expects status to be maintained rather than checked once.",
  },
  {
    term: "Computer-aided facility management",
    abbreviation: "CAFM",
    definition:
      "A CAFM system is the software record of an estate: the asset register, the PPM planner, the reactive helpdesk and the closed-job evidence. Holding all of it in one system means reporting is drawn from the work record rather than assembled by hand.",
  },
  {
    term: "Risk assessment and method statement",
    abbreviation: "RAMS",
    definition:
      "RAMS document the hazards of a task and the method to be followed to carry it out safely. They are reviewed before attendance and sit alongside the permit-to-work arrangements for the site.",
  },
  {
    term: "Permit to work",
    abbreviation: "PTW",
    definition:
      "A permit to work is a formal authorisation to carry out a defined task in a defined place at a defined time, used for higher-risk activity such as hot works, confined spaces or work on live systems. It records who authorised the work and under what conditions.",
  },
  {
    term: "Statutory compliance",
    definition:
      "Statutory compliance is the work a building owner or occupier is legally required to carry out and evidence: water hygiene, fire and life safety, electrical testing, lifting equipment, gas and pressure systems and similar. Evidence is held in logbooks and the maintenance record.",
  },
  {
    term: "Transfer of Undertakings (Protection of Employment)",
    abbreviation: "TUPE",
    definition:
      "TUPE is the regulation that protects employees' terms when a service transfers from one provider to another. On a facilities contract change, in-scope staff usually transfer to the incoming provider on their existing terms.",
  },
  {
    term: "Mobilisation",
    definition:
      "Mobilisation is the period between contract award and service start: asset verification, CAFM set-up, access and induction arrangements, personnel screening, TUPE consultation where it applies, and the agreement of reporting before the first working day.",
  },
  {
    term: "Keyholding and alarm response",
    definition:
      "Keyholding is the arrangement under which a provider holds site keys and attends when an alarm activates, so that no member of the client's own staff has to respond out of hours. Attendance is logged and reported with the cause of activation.",
  },
  {
    term: "Duty of care (waste)",
    definition:
      "Waste duty of care is the legal obligation on anyone producing or handling waste to store it safely, transfer it only to an authorised carrier and keep the transfer or consignment documentation as evidence of where the waste went.",
  },
];
