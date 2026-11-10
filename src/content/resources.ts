export type Resource = {
  slug: string;
  number: string;
  title: string;
  kind: string;
  summary: string;
  intro: string;
  sections: { heading: string; items: string[] }[];
  note?: string;
};

const useNote =
  "This checklist is published as practical guidance. It is not a contractual document, and the arrangements for your own site are confirmed following a site review.";

export const resources: Resource[] = [
  {
    slug: "mobilisation-checklist",
    number: "01",
    title: "Contract mobilisation checklist",
    kind: "Checklist",
    summary:
      "The sequence of work that moves an estate from one provider to another without a gap in service.",
    intro:
      "People, data and access need a clear handover before service starts. Use this checklist to agree responsibilities, records and the sequence of work for your estate.",
    sections: [
      {
        heading: "People",
        items: [
          "Staff transfer consultation opened and timetable agreed",
          "Screening files reviewed and gaps listed with owners",
          "Site inductions booked for every person due to attend",
          "Named single point of contact confirmed in writing",
          "Escalation route and out-of-hours arrangements agreed",
        ],
      },
      {
        heading: "Data and assets",
        items: [
          "Asset verification survey scheduled",
          "Plant tagged, photographed and loaded into the CAFM asset register with a frequency",
          "PPM and statutory tasks mapped to SFG20-aligned schedules where they apply",
          "Existing open works and defects transferred with dates",
          "Historic records requested from the outgoing provider",
        ],
      },
      {
        heading: "Access and systems",
        items: [
          "Permit-to-work, RAMS, escort and induction requirements documented",
          "Keys, fobs and access credentials issued and logged",
          "CAFM helpdesk configured with site, priority and contact data",
          "Reporting pack format agreed with the client",
          "Parallel running period and cut-over date confirmed",
        ],
      },
    ],
    note: useNote,
  },
  {
    slug: "site-audit-checklist",
    number: "02",
    title: "Site audit checklist",
    kind: "Checklist",
    summary:
      "What to walk, record and photograph on a first visit so the scope written afterwards is accurate.",
    intro:
      "A scope written from a floor plan tends to miss the things that cost money. This is the walk we use before pricing any estate.",
    sections: [
      {
        heading: "Building fabric and plant",
        items: [
          "Roof, gutters and external fabric condition",
          "Plant rooms: access, labelling and isolation points",
          "HVAC, boilers and pumps with age, service history and existing PPM schedule",
          "Electrical distribution and last fixed wire test date, with O&M manuals located",
          "Lifts, shutters and any specialist equipment on site",
        ],
      },
      {
        heading: "Cleaning and site services",
        items: [
          "Floor areas and surface types by zone",
          "Washroom count, consumable types and replenishment pattern",
          "Waste streams, bin store location and collection frequency",
          "Grounds, car parks and external cleaning requirements",
          "Periodic tasks currently in scope and their frequency",
        ],
      },
      {
        heading: "Security and access",
        items: [
          "Entry points, reception cover and visitor process",
          "CCTV, access control and alarm coverage with age",
          "Lone-working areas and staff-safety arrangements",
          "Keyholding and alarm response arrangements in place",
          "Hours of occupation and quiet windows for works",
        ],
      },
    ],
    note: useNote,
  },
  {
    slug: "water-compliance-record-sheet",
    number: "03",
    title: "Water compliance record sheet",
    kind: "Guide",
    summary:
      "The records a water safety file is expected to hold, and how often each entry is made.",
    intro:
      "Water compliance is judged on the written record as much as the work, and ACOP L8 and HSG274 set the expectation for what that record holds. These are the entries a file is normally expected to carry.",
    sections: [
      {
        heading: "Standing documents",
        items: [
          "Current Legionella risk assessment with date and author, written to ACOP L8 and HSG274 guidance",
          "Written scheme of control and schematic drawings",
          "Named responsible person and deputy",
          "Asset list: tanks, calorifiers, TMVs, outlets and dead legs",
        ],
      },
      {
        heading: "Routine entries",
        items: [
          "Hot and cold temperature checks at sentinel outlets at the frequencies set by the applicable written scheme",
          "Flushing records for little-used outlets",
          "Tank inspections and cleaning or chlorination records",
          "TMV servicing and failsafe checks",
          "Sampling results with laboratory reports attached",
        ],
      },
      {
        heading: "Exceptions",
        items: [
          "Out-of-range readings with the action taken and by whom",
          "Remedial works raised, completed or deferred with reasons",
          "Changes to the system recorded on the schematic",
          "Date the risk assessment is next due for review",
        ],
      },
    ],
    note:
      "Use HSE ACOP L8 and HSG274 alongside the site's competent risk assessment and written scheme. Applicable tasks, frequencies and responsibilities are site-specific; this guide is not a universal schedule. Scope and specialist delivery are confirmed following a site review.",
  },
  {
    slug: "security-handover-sheet",
    number: "04",
    title: "Security shift handover sheet",
    kind: "Template",
    summary:
      "What one shift should pass to the next so nothing is carried only in someone's head.",
    intro:
      "A written shift handover helps the incoming team identify changes, incidents and unresolved items. Agree this record with your site's security scope and escalation arrangements.",
    sections: [
      {
        heading: "Site state",
        items: [
          "Doors, gates and barriers not in their normal state",
          "Systems out of service: CCTV, access control, alarms",
          "Contractors on site, their areas and expected finish time",
          "Areas restricted or under works during the shift",
        ],
      },
      {
        heading: "Events",
        items: [
          "Incidents with time, location, action taken and reference",
          "Alarm activations and the outcome of each",
          "Visitors or vehicles refused entry and why",
          "Patrols completed, missed or shortened with reasons",
        ],
      },
      {
        heading: "Carry forward",
        items: [
          "Open items for the next shift with an owner",
          "Keys and equipment signed across by name",
          "Client instructions received during the shift",
          "Anything reported to the client and awaiting a response",
        ],
      },
    ],
    note: useNote,
  },
  {
    slug: "cleaning-specification-guide",
    number: "05",
    title: "Writing a cleaning specification",
    kind: "Guide",
    summary:
      "How to describe cleaning work so both sides can tell whether it has been delivered.",
    intro:
      "A specification written as a list of rooms invites argument. A specification written as tasks, frequencies and outcomes does not.",
    sections: [
      {
        heading: "Structure",
        items: [
          "Zone the site by use and traffic, not by floor",
          "Set a task list per zone with a stated frequency",
          "Separate daily, periodic and reactive work clearly, with RAMS for higher-risk periodic tasks",
          "State who supplies consumables and to what standard",
        ],
      },
      {
        heading: "Standards",
        items: [
          "Describe the outcome expected, not just the activity",
          "Agree how the standard is inspected and how often",
          "Set what happens when an inspection fails",
          "Record any areas excluded and why",
        ],
      },
      {
        heading: "Practicalities",
        items: [
          "Hours of access and any restricted periods",
          "Storage, water and power available on site",
          "Waste streams, duty of care documentation and where waste is presented",
          "Cover arrangements for holidays and absence",
        ],
      },
    ],
    note: useNote,
  },
  {
    slug: "statutory-compliance-calendar",
    number: "06",
    title: "Statutory compliance calendar",
    kind: "Guide",
    summary:
      "The recurring compliance activities a typical occupied building carries through a year.",
    intro:
      "This is an outline calendar for planning purposes; PPM task content is normally built from SFG20-aligned schedules and recorded in CAFM alongside the statutory logbooks. The obligations that apply to a specific building depend on its use, plant and occupancy, and are confirmed following a site review.",
    sections: [
      {
        heading: "Frequent",
        items: [
          "Fire alarm call point testing and emergency lighting checks",
          "Sentinel temperature monitoring and outlet flushing under the written scheme of control",
          "Fire door and escape route inspections",
          "Plant room and housekeeping walks",
        ],
      },
      {
        heading: "Periodic",
        items: [
          "Emergency lighting duration tests",
          "Sprinkler, suppression and dry riser checks where fitted",
          "Lifting equipment and pressure system examinations",
          "Local exhaust ventilation testing where applicable",
        ],
      },
      {
        heading: "Annual and longer",
        items: [
          "Fixed wiring inspection on its stated cycle",
          "Gas and heating plant servicing",
          "Legionella risk assessment review",
          "Fire risk assessment review and action tracking",
        ],
      },
    ],
    note:
      "Applicable obligations, frequencies and delivery arrangements are confirmed following a site review.",
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
