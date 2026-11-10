/**
 * Group office locations.
 *
 * NOTE: the Germany and United States records use PLACEHOLDER street addresses
 * and telephone numbers supplied for layout purposes only. Replace the values
 * in this file with the confirmed details — every page reads from here.
 */

export type OfficeLocation = {
  slug: string;
  city: string;
  country: string;
  countryCode: string;
  label: string;
  role: string;
  addressLines: string[];
  postalCode: string;
  region?: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  coverage: string;
  /** True while the address and phone number are placeholders. */
  placeholder: boolean;
};

export const locations: OfficeLocation[] = [
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    countryCode: "GB",
    label: "London — Group headquarters",
    role: "Trading address",
    addressLines: ["167-169 Great Portland Street, 5th Floor", "London"],
    postalCode: "W1W 5PF",
    phoneDisplay: "020 7183 9055",
    phoneHref: "tel:+442071839055",
    email: "sales@alliedforcegroup.com",
    coverage:
      "Contracting entity for UK work and the base for operations, compliance and mobilisation. Sites are supported UK-wide across ten regions.",
    placeholder: false,
  },
  {
    slug: "frankfurt",
    city: "Frankfurt am Main",
    country: "Germany",
    countryCode: "DE",
    label: "Frankfurt — Central Europe",
    role: "Central Europe office",
    addressLines: ["Taunusanlage 8", "Frankfurt am Main"],
    postalCode: "60329",
    phoneDisplay: "+49 69 2222 0000",
    phoneHref: "tel:+496922220000",
    email: "sales@alliedforcegroup.com",
    coverage:
      "Point of contact for enquiries in Germany and neighbouring markets. Scope, attendance and local delivery arrangements are confirmed following a site review.",
    placeholder: true,
  },
  {
    slug: "new-york",
    city: "New York",
    country: "United States",
    countryCode: "US",
    region: "NY",
    label: "New York — North America",
    role: "North America office",
    addressLines: ["1330 Avenue of the Americas", "Suite 23A, New York"],
    postalCode: "NY 10019",
    phoneDisplay: "+1 212 555 0100",
    phoneHref: "tel:+12125550100",
    email: "sales@alliedforcegroup.com",
    coverage:
      "Point of contact for enquiries in the United States. Scope, attendance and local delivery arrangements are confirmed following a site review.",
    placeholder: true,
  },
];

export const locationCitiesLine = locations
  .map((location) => location.city.replace(" am Main", ""))
  .join(" · ");
