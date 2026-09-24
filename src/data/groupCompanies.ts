import logoCstm from "@/assets/logo-cstm.png";
import logoAirportStaffing from "@/assets/logo-airport-staffing.png";
import logoGardeo from "@/assets/logo-gardeo.png";
import logoServionsoft from "@/assets/logo-servionsoft.png";

export type GroupCompany = {
  id: string;
  name: string;
  descriptor: string;
  url?: string;
  logoSrc?: string;
  blurb?: string;
  featured?: boolean;
};

export const groupCompanies: GroupCompany[] = [
  {
    id: "cstm-services",
    name: "CSTM Services",
    descriptor: "Security Delivery — SIA ACS Approved",
    logoSrc: logoCstm,
    blurb:
      "Delivers Allied Force Group's manned guarding, patrols and keyholding",
    featured: true,
  },
  {
    id: "airport-staffing",
    name: "Airport Staffing",
    descriptor: "Aviation & Airport Staffing",
    logoSrc: logoAirportStaffing,
    url: "https://airport-staffing.com",
  },
  {
    id: "gardeo",
    name: "Gardeo",
    descriptor: "Workforce Management Software",
    logoSrc: logoGardeo,
    url: "https://gardeo.co.uk",
    blurb:
      "Enterprise workforce management platform for the security and workforce industries",
  },
  {
    id: "servionsoft",
    name: "Servionsoft",
    descriptor: "Software Development",
    logoSrc: logoServionsoft,
    url: "https://servionsoft.com",
  },
];
