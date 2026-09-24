export type Area = {
  slug: string;
  number: string;
  name: string;
  line: string;
  intro: string;
  places: string[];
};

export const areas: Area[] = [
  {
    slug: "greater-london",
    number: "01",
    name: "Greater London",
    line: "Offices, campuses and mixed estates across the capital and the M25.",
    intro:
      "Dense, access-controlled buildings where attendance has to be planned around occupancy, deliveries and neighbouring tenants.",
    places: ["City of London", "Westminster", "Canary Wharf", "Croydon", "Heathrow corridor"],
  },
  {
    slug: "south-east",
    number: "02",
    name: "South East",
    line: "Business parks, schools and distribution sites across the South East.",
    intro:
      "Multi-site portfolios where one coordinated team travelling between buildings is more practical than separate local contracts.",
    places: ["Surrey", "Kent", "Sussex", "Berkshire", "Hampshire"],
  },
  {
    slug: "east-of-england",
    number: "03",
    name: "East of England",
    line: "Industrial, education and public sector estates across the eastern counties.",
    intro:
      "Sites spread across a wide area, supported with planned visits and reactive attendance agreed in advance.",
    places: ["Essex", "Hertfordshire", "Cambridgeshire", "Norfolk", "Suffolk"],
  },
  {
    slug: "midlands",
    number: "04",
    name: "Midlands",
    line: "Logistics, manufacturing and commercial estates across the Midlands.",
    intro:
      "Shift-driven operations where cover is built around gate flow, production hours and vehicle movements.",
    places: ["Birmingham", "Coventry", "Leicester", "Nottingham", "Northampton"],
  },
  {
    slug: "north-west",
    number: "05",
    name: "North West",
    line: "City-centre buildings and regional distribution sites across the North West.",
    intro:
      "Mixed portfolios combining occupied offices with warehousing, supported under a single point of contact.",
    places: ["Manchester", "Liverpool", "Warrington", "Preston", "Cheshire"],
  },
  {
    slug: "yorkshire",
    number: "06",
    name: "Yorkshire",
    line: "Public sector, education and commercial estates across Yorkshire.",
    intro:
      "Estates with strong seasonal patterns, planned around term dates, public opening hours and periodic works.",
    places: ["Leeds", "Sheffield", "York", "Bradford", "Hull"],
  },
  {
    slug: "north-east",
    number: "07",
    name: "North East",
    line: "Industrial and civic estates across the North East.",
    intro:
      "Regional sites supported with scheduled attendance and documented reporting against the agreed scope.",
    places: ["Newcastle", "Sunderland", "Durham", "Middlesbrough", "Teesside"],
  },
  {
    slug: "south-west",
    number: "08",
    name: "South West",
    line: "Commercial, education and vacant property across the South West.",
    intro:
      "Dispersed estates where planned inspection routes and clear records matter more than constant presence.",
    places: ["Bristol", "Bath", "Exeter", "Plymouth", "Swindon"],
  },
  {
    slug: "wales",
    number: "09",
    name: "Wales",
    line: "Public sector, education and industrial sites across Wales.",
    intro:
      "Coverage across the main population centres, with scope and travel arrangements confirmed following a site review.",
    places: ["Cardiff", "Newport", "Swansea", "Wrexham", "Bangor"],
  },
  {
    slug: "scotland",
    number: "10",
    name: "Scotland",
    line: "Commercial and public estates across the central belt and beyond.",
    intro:
      "Scottish sites supported with locally arranged attendance and the same written scope and reporting used elsewhere.",
    places: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling"],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
