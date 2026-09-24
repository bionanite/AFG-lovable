export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "planned-maintenance-what-good-looks-like",
    title: "Planned maintenance: what good actually looks like",
    excerpt:
      "Completion figures are easy to report and hard to trust. The evidence trail behind them is what matters.",
    date: "2026-08-12",
    readingTime: "6 min read",
    category: "Engineering",
    body: [
      "A planned maintenance figure is only as good as the asset register behind it. If tasks are logged against a building rather than a tagged asset, a high completion rate tells you very little about the plant that keeps the site running.",
      "A useful contract opens with an asset verification survey: every item of plant tagged, photographed and given an owner, a frequency and a statutory reference where one applies. Completion is then reported per asset, not per visit.",
      "The second discipline is evidence. Each closed task should carry a timestamp, an engineer identity, parts used and a photograph where the work is not otherwise visible. That record is what turns a monthly report into something an auditor can accept without a follow-up meeting.",
      "Finally, misses should be published as clearly as hits. A deferred task with a documented reason and a new date is a healthier signal than a perfect score nobody can evidence.",
    ],
  },
  {
    slug: "screening-in-practice-not-just-on-paper",
    title: "Personnel screening in practice, not just on paper",
    excerpt:
      "Screening is a baseline, not a badge. What matters is how quickly gaps are found and how status stays live after day one.",
    date: "2026-07-03",
    readingTime: "5 min read",
    category: "Compliance",
    body: [
      "Screening for site-based personnel covers identity, right to work, employment history and the resolution of any gaps in that history. Getting a file signed off on day one is the easy part.",
      "The part most organisations underestimate is the ongoing obligation. People change address, certifications lapse, circumstances shift. Status has to stay live so a deployment never rests on a check completed years ago.",
      "A sensible mobilisation standard is simple: nobody attends a client site until their file is complete and countersigned. Where a gap cannot be resolved, the individual is not deployed — there is no provisional category.",
    ],
  },
  {
    slug: "working-inside-a-change-window",
    title: "Working inside a change window",
    excerpt:
      "On a live site, the task is rarely the hard part. Getting the sequence and the paperwork right is.",
    date: "2026-06-18",
    readingTime: "7 min read",
    category: "Operations",
    body: [
      "On an occupied site, the risk usually sits in the sequence rather than the task. Isolating the wrong circuit, working outside the agreed window or skipping a verification step can matter more than the servicing itself.",
      "That is why change control comes before the calendar. Each intervention is written up with its isolation, its verification step and its rollback, and reviewed with the site before anyone attends.",
      "The same applies to access. Escorts, inductions and permits are arranged in advance, so the engineer arriving on site is able to start rather than negotiate.",
    ],
  },
  {
    slug: "cutting-waste-without-cutting-corners",
    title: "Cutting waste without cutting corners",
    excerpt:
      "Waste reporting works best when streams are measured at the bin, not estimated at the invoice.",
    date: "2026-05-29",
    readingTime: "4 min read",
    category: "Sustainability",
    body: [
      "Waste reporting built from contractor invoices tends to flatter everyone. Weighing at the point of collection, by stream, is slower to set up and far harder to argue with.",
      "Tracking general, dry mixed recycling and food streams separately, with diversion from landfill reported alongside the operational figures rather than in a separate annex, keeps the conversation honest.",
      "The operational benefit is immediate: once a site can see its own contamination rate, segregation improves without any new equipment.",
    ],
  },
  {
    slug: "mobilising-a-multi-site-contract",
    title: "Mobilising a multi-site contract",
    excerpt:
      "A disciplined mobilisation is mostly sequencing. This is the order of work that keeps it clean.",
    date: "2026-04-14",
    readingTime: "8 min read",
    category: "Integrated support",
    body: [
      "An estate transfers cleanly when the first week is spent on people and data rather than on uniforms and launch events.",
      "Week one covers staff transfer consultation, screening status review and the asset verification survey. Week two builds the maintenance calendar and the helpdesk configuration. Week three trains on site and shadows the outgoing provider. Week four runs live with the previous supplier still contactable.",
      "The measure of a good mobilisation is that the first monthly report looks exactly like the twelfth.",
    ],
  },
  {
    slug: "what-clients-should-ask-for-in-a-review",
    title: "What clients should ask for in a contract review",
    excerpt:
      "Six questions that separate a governance meeting from a status update.",
    date: "2026-03-05",
    readingTime: "5 min read",
    category: "Governance",
    body: [
      "Ask for completion by asset, not by contract. Ask for every priority incident with a timeline. Ask which tasks were deferred and who authorised it.",
      "Ask for the clearance status of everyone who attended site. Ask for the open risk register with owners and dates. Ask what changed since last time.",
      "If a provider cannot answer those six without going away to prepare something, the reporting is being assembled rather than recorded.",
    ],
  },
  {
    slug: "keyholding-and-alarm-response",
    title: "Keyholding and alarm response, without the guesswork",
    excerpt:
      "An activation at 03:00 is a process question long before it is a manning question.",
    date: "2026-02-19",
    readingTime: "5 min read",
    category: "Security",
    body: [
      "Alarm response only works when the instruction set is written before the first activation. Who is called, in what order, what the responder is authorised to do on arrival and what happens if the site cannot be secured — all of that belongs on paper, agreed with the client.",
      "The second half is the record. Every activation should close with a time of call, a time of arrival, what was found, what action was taken and who was informed. Without that, a pattern of repeat activations never gets diagnosed.",
      "Most sites that complain about false alarms have a detection problem rather than a response problem. Reviewing activations by zone over a quarter usually points straight at the cause.",
    ],
  },
  {
    slug: "statutory-compliance-who-owns-what",
    title: "Statutory compliance: who owns what",
    excerpt:
      "Most compliance gaps are not missed tasks. They are tasks nobody was clearly assigned.",
    date: "2026-02-04",
    readingTime: "6 min read",
    category: "Compliance",
    body: [
      "On a typical occupied building, statutory duties are split between landlord, tenant, managing agent and service provider. The gaps appear where that split was assumed rather than documented.",
      "A simple matrix fixes most of it: each obligation listed once, with the duty holder, the delivering party, the frequency and where the record is filed. It takes an afternoon and removes the most common audit finding.",
      "Applicable obligations depend on the building, its plant and its use. Ours are confirmed with the client following a site review rather than assumed from a template.",
    ],
  },
  {
    slug: "writing-a-cleaning-specification",
    title: "Writing a cleaning specification people can measure",
    excerpt:
      "Describe the outcome and the frequency, not just the activity, and the monthly meeting gets shorter.",
    date: "2026-01-21",
    readingTime: "5 min read",
    category: "Soft services",
    body: [
      "Specifications written as a list of rooms invite disagreement, because nobody stated what finished looks like. Specifications written as zones, tasks, frequencies and outcomes are checkable by both sides.",
      "Zone by use and traffic rather than by floor. A reception and a back-of-house corridor on the same level need different frequencies and different standards.",
      "Then agree the inspection: how often, by whom, against what, and what happens when a check fails. That last clause is the one that changes behaviour.",
    ],
  },
  {
    slug: "front-of-house-as-part-of-security",
    title: "Front of house is part of your security model",
    excerpt:
      "The reception desk is where most access decisions are actually made.",
    date: "2026-01-08",
    readingTime: "4 min read",
    category: "Security",
    body: [
      "Visitor management, contractor sign-in and delivery handling all happen at the same desk that greets clients. Treating that role as hospitality only leaves the access decisions undefined.",
      "The practical fix is a written process: how visitors are verified, how contractors are matched to an expected works list, what happens when someone arrives unannounced and how an escalation is raised without confrontation.",
      "Done well, it improves both sides at once. Visitors are handled faster because the person at the desk is not improvising.",
    ],
  },
  {
    slug: "reactive-works-that-do-not-drift",
    title: "Reactive works that do not drift",
    excerpt:
      "Priority codes are only useful if the clock starts when the user reports, not when someone accepts the job.",
    date: "2025-12-11",
    readingTime: "5 min read",
    category: "Operations",
    body: [
      "Reactive performance reporting is easy to flatter. If the timer starts on acceptance rather than on the original report, the figure describes the helpdesk rather than the user's experience.",
      "Priority codes should be defined against consequence — safety, security, business interruption, comfort — and agreed in writing before mobilisation, so triage is not a judgement call at the point of the call.",
      "Jobs that are attended but not resolved need their own category. Counting a first visit as a fix is the single most common reason a report and a building disagree.",
    ],
  },
  {
    slug: "energy-and-waste-quick-wins",
    title: "Energy and waste: the quick wins worth doing first",
    excerpt:
      "Before any capital project, most estates have a year of savings sitting in schedules and settings.",
    date: "2025-11-27",
    readingTime: "5 min read",
    category: "Sustainability",
    body: [
      "Plant running outside occupied hours is the most common finding on a first energy walk. Time clocks set during a previous occupancy pattern quietly cost money for years.",
      "Set points come next: heating and cooling fighting each other in the same zone, or a building held tighter than anyone asked for.",
      "On waste, segregation and bin placement usually move contamination more than any change of contractor. Measure at the point of collection by stream, and the conversation becomes factual.",
    ],
  },
  {
    slug: "technology-that-earns-its-place",
    title: "Facilities technology that earns its place",
    excerpt:
      "A system is worth having when it captures evidence where the work happens, not afterwards.",
    date: "2025-11-06",
    readingTime: "6 min read",
    category: "Technology",
    body: [
      "The test for any facilities system is simple: does it record the work at the point it is done, by the person doing it, with a time and a location attached? Anything that requires re-keying later produces a report rather than a record.",
      "That means mobile task closure, photographs against assets, and permits and inductions visible to the engineer before attendance rather than filed in an office.",
      "The client-facing half matters as much. One reporting pack, drawn from the same records, so the monthly meeting reviews the same data both sides already had.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
