export type SectorSearch = {
  heading: string;
  description: string;
  scope: string;
  prepare: string[];
  resources: string[];
  questions: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
};

const review = "Included tasks, attendance arrangements and specialist responsibilities are confirmed following a site review and recorded in the agreed scope.";

export const sectorSearch: Record<string, SectorSearch> = {
  "data-centres": {
    heading: "Data centre cleaning, security and facilities services",
    description: "Data centre cleaning, security and facilities support planned around controlled access, area-specific methods and agreed change windows. Discuss your site scope.",
    scope: `Support can cover technical and support-area cleaning, security personnel and agreed building maintenance. Work follows the site's applicable access, permit and change-control procedures; this is not a claim of uptime certification or authority to work on every live system. ${review}`,
    prepare: ["Areas in scope: white space, plant, loading and support spaces", "Approved cleaning materials, equipment and access routes", "Escort, induction, permit and change-window requirements", "Assets, existing maintenance records and task sign-off requirements"],
    resources: ["mobilisation-checklist", "cleaning-specification-guide", "security-handover-sheet"],
    questions: [
      { question: "What affects the cost of data centre cleaning and security?", answer: "Area types, permitted methods, access restrictions, escorts, working windows and the required security cover affect the scope. A quote should distinguish routine attendance from specialist or disruptive work; no standard price applies to every data centre." },
      { question: "Does facilities support include work on live IT equipment?", answer: "Do not assume it does. Work on live IT equipment, critical systems or specialist plant needs its own agreed scope, authorisation and competence requirements. The site review establishes which tasks can be included and which remain with your specialist providers." },
    ],
  },
  rail: {
    heading: "Rail facilities management, station cleaning and security",
    description: "Rail facilities management for stations and depots: cleaning, maintenance and security planned around operating hours, controlled access and agreed site requirements.",
    scope: `Stations, concourses, welfare areas and depot buildings have different access and operating constraints. Possessions, sponsorship and competence requirements depend on the infrastructure and task; not every facilities task is trackside work. ${review}`,
    prepare: ["Station, depot or lineside buildings and areas in scope", "Traffic hours, passenger peaks and available work windows", "Infrastructure-specific access, sponsor and competence requirements", "Cleaning, lighting and fabric records plus outstanding defects"],
    resources: ["mobilisation-checklist", "cleaning-specification-guide", "security-handover-sheet"],
    questions: [
      { question: "What access and competence checks apply to rail facilities work?", answer: "Requirements depend on the infrastructure, location and task. The client and relevant infrastructure arrangements determine inductions, supervision, sponsorship and competence checks before attendance. A single card or qualification should not be assumed to authorise every rail task." },
      { question: "How is station cleaning different from depot maintenance?", answer: "Station cleaning is planned around passenger movement, public areas and operating hours. Depot maintenance may involve controlled areas, vehicle movements and different plant. Each needs a written area-specific scope and authorised work windows rather than a generic schedule." },
    ],
    sources: [{ label: "Network Rail supplier assurance", url: "https://www.networkrail.co.uk/who-we-are/our-approach-to-safety/safety-assurance/supplier-assurance/" }],
  },
  commercial: {
    heading: "Commercial facilities management and office security",
    description: "Commercial facilities management for offices and business parks: cleaning, office maintenance and security with clear landlord and tenant responsibilities.",
    scope: `Office cleaning, building maintenance and security can be coordinated with front-of-house and occupancy arrangements. Responsibilities are separated between common areas and tenant space, including who authorises additional work. ${review}`,
    prepare: ["Floor areas, occupancy hours and tenant boundaries", "Asset register, maintenance history and open defects", "Daily and periodic cleaning specifications", "Reception, visitor, keyholding and access arrangements"],
    resources: ["site-audit-checklist", "cleaning-specification-guide", "mobilisation-checklist"],
    questions: [
      { question: "What affects the cost of commercial facilities management?", answer: "Floor area, occupancy, plant condition, cleaning frequencies, security hours and landlord-versus-tenant responsibilities influence the scope. Separate routine tasks, consumables and additional works in the quotation so comparisons are based on the same requirements." },
      { question: "What should be agreed before changing office maintenance providers?", answer: "Confirm asset and compliance records, outstanding defects, tenant boundaries, access credentials, work windows and who authorises expenditure. Agree the handover and reporting format before the start date so responsibilities are not lost between providers." },
    ],
  },
  "logistics-industrial": {
    heading: "Warehouse security and industrial facilities management",
    description: "Warehouse security, industrial cleaning and building maintenance coordinated around shift patterns, gatehouse access, vehicle movements and agreed work windows.",
    scope: `Gatehouse cover, guarding, cleaning and building maintenance are planned around dispatch, shifts and live traffic. Specialist machinery or process-equipment work is not automatically included in building maintenance. ${review}`,
    prepare: ["Shift patterns, dispatch peaks and yard traffic routes", "Gatehouse process and visitor or driver records", "Doors, loading equipment, lighting and maintenance history", "Cleaning zones, high-level access and permit requirements"],
    resources: ["security-handover-sheet", "site-audit-checklist", "cleaning-specification-guide"],
    questions: [
      { question: "What should a warehouse security scope include?", answer: "Set out gatehouse duties, driver and contractor checks, patrol areas, keyholding, incident escalation and shift handover. Specify which movements need recording and any limits on personnel duties; the appropriate cover depends on the site's assessed risks and traffic patterns." },
      { question: "Can industrial cleaning take place during live operations?", answer: "Only within the site's agreed safe working arrangements. Traffic routes, production activity, equipment access and permits determine whether tasks can run alongside operations or need a quieter window. High-level or specialist tasks require an explicitly agreed method and scope." },
    ],
  },
  healthcare: {
    heading: "Healthcare facilities management, cleaning and security",
    description: "Healthcare facilities management with area-specific cleaning, building maintenance, water hygiene coordination and security planned around clinical activity.",
    scope: `Clinical and non-clinical areas need separately agreed cleaning outcomes, methods and records. Specialist clinical requirements and water safety responsibilities remain explicit in the site specification; general facilities support is not a substitute for clinical governance. ${review}`,
    prepare: ["Clinical and non-clinical area types and required cleaning outcomes", "Client-approved methods, products and inspection arrangements", "Access, escorts and clinical activity restrictions", "Water risk assessment, written scheme and outstanding maintenance actions"],
    resources: ["cleaning-specification-guide", "water-compliance-record-sheet", "mobilisation-checklist"],
    questions: [
      { question: "How are healthcare cleaning methods and frequencies agreed?", answer: "The client specification should identify each area type, its use, required outcomes, approved methods and products, frequencies and inspection evidence. Clinical requirements are agreed with the relevant client team rather than inferred from a general office cleaning schedule." },
      { question: "Who decides the water hygiene tasks for a healthcare estate?", answer: "The site's dutyholder arrangements, risk assessment and written scheme establish applicable controls and responsibilities. Facilities support can coordinate agreed tasks and records, but specialist work and clinical water-safety requirements need explicit allocation and competent delivery." },
    ],
    sources: [{ label: "HSE: managing Legionella risks", url: "https://www.hse.gov.uk/legionnaires/what-you-must-do/manage-the-risk.htm" }],
  },
  education: {
    heading: "School facilities management, cleaning and maintenance",
    description: "School facilities management for schools, colleges and campuses: cleaning, maintenance and security planned around term time, holidays and safeguarding arrangements.",
    scope: `Daily cleaning, maintenance, grounds and security arrangements are coordinated with the academic calendar. Checks, supervision and access are agreed for each role and setting; do not assume every contractor needs the same vetting arrangements. ${review}`,
    prepare: ["Term dates, holiday works windows and occupied areas", "Contractor signing-in, supervision and safeguarding arrangements", "Cleaning zones, grounds and outstanding maintenance defects", "Campus or trust reporting needs and named site contacts"],
    resources: ["cleaning-specification-guide", "mobilisation-checklist", "statutory-compliance-calendar"],
    questions: [
      { question: "What should a school agree before contractors attend?", answer: "Agree identification, signing in, supervision, movement around pupils and any required checks with the school. Vetting requirements depend on the role, activity and setting's safeguarding arrangements; one blanket rule should not be assumed for every maintenance or cleaning visit." },
      { question: "What affects a school maintenance and cleaning quotation?", answer: "Building areas, teaching hours, holiday works, grounds, plant condition and required attendance affect scope. Identify daily cleaning separately from holiday deep cleans and larger repairs, and record any specialist tasks or additional works outside the routine contract." },
    ],
  },
  "public-sector": {
    heading: "Public sector facilities management and building security",
    description: "Public sector facilities management for civic and public-facing buildings, with cleaning, maintenance, security and specification-led evidence and reporting.",
    scope: `Services are described against an agreed specification, including variations, public access and evidence requirements. Reporting can consolidate buildings without implying a framework award, procurement approval or quantified social-value outcome. ${review}`,
    prepare: ["Building list, opening hours and public-facing areas", "Specification, procurement requirements and variation approvals", "Asset records, compliance evidence and open remedial actions", "Reporting format and any measurable social-value commitments"],
    resources: ["mobilisation-checklist", "statutory-compliance-calendar", "site-audit-checklist"],
    questions: [
      { question: "How should public sector FM proposals be compared?", answer: "Compare the same buildings, tasks, frequencies, attendance hours, evidence requirements and exclusions. Identify routine scope versus variations and specialist work; a lower headline price is not a like-for-like comparison if tasks or reporting are omitted." },
      { question: "How can contract reporting support an audit?", answer: "Tie task completion, attendance, defects, remedial decisions and spend to the agreed specification. Computer-aided facilities management (CAFM) records can support this trail, with clear owners and dates rather than unsupported performance percentages." },
    ],
  },
  "vacant-property": {
    heading: "Vacant property security, inspections and management",
    description: "Vacant property security and management with scheduled inspections, keyholding, condition reports and maintenance planning for reletting or handback.",
    scope: `Inspections, security arrangements and retained maintenance depend on the building's condition, risks and intended period of vacancy. Water-system controls are risk-assessment-led, not a universal flushing or sampling schedule. ${review}`,
    prepare: ["Building condition, utilities and expected vacancy period", "Current risk assessments and any insurer requirements", "Entry points, keys, alarms and agreed inspection route", "Water system status and reletting or handback requirements"],
    resources: ["site-audit-checklist", "water-compliance-record-sheet", "security-handover-sheet"],
    questions: [
      { question: "Who decides water-system controls in an empty building?", answer: "The dutyholder's arrangements and competent risk assessment determine whether systems remain in use, are isolated or need specific controls. Where applicable, the written scheme may include managing little-used outlets and monitoring. Vacancy alone does not establish identical tasks or frequencies for every site." },
      { question: "How often should a vacant property be inspected?", answer: "Agree frequency against the building's condition, exposure, known risks and any insurer requirements. Record the inspection route, photographs, escalation arrangements and responsibility for remedial work; there is no single inspection interval suitable for every empty property." },
    ],
    sources: [{ label: "HSE: Legionnaires' disease guidance (ACOP L8)", url: "https://www.hse.gov.uk/pubns/books/l8.htm" }],
  },
};