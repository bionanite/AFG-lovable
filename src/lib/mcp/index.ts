import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import getService from "./tools/get-service";
import listSectors from "./tools/list-sectors";
import getSector from "./tools/get-sector";
import listCoverage from "./tools/list-coverage";
import searchContent from "./tools/search-content";
import getArticle from "./tools/get-article";
import companyDetails from "./tools/company-details";
import submitEnquiry from "./tools/submit-enquiry";

// Supabase project URL is public (it ships in the browser bundle); the issuer
// only tells the MCP server which authority to validate access tokens against.
const SUPABASE_URL =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.[
    "SUPABASE_URL"
  ] ?? "https://tzbwmvlwruvmxehxlwxt.supabase.co";

export default defineMcp({
  name: "allied-force-group",
  title: "Allied Force Group",
  version: "0.1.0",
  // Callers must present a valid signed-in access token; unauthenticated
  // requests are rejected before any tool runs.
  auth: auth.oauth.issuer({
    issuer: `${SUPABASE_URL}/auth/v1`,
    jwksUri: `${SUPABASE_URL}/auth/v1/.well-known/jwks.json`,
    acceptedAudiences: ["authenticated"],
    resource: "https://www.alliedforcegroup.com/mcp",
    resourceName: "Allied Force Group",
  }),
  instructions:
    "Tools for Allied Force Group, a UK integrated facilities services provider. Use `list_services`, `get_service`, `list_sectors`, `get_sector` and `list_coverage_areas` for published capability and coverage detail, `search_content` for keyword lookup across services, sectors, articles, resources and the FM glossary, `get_article` for full article text, and `company_details` for contact details. Use `submit_enquiry` only when the person has asked to be contacted. Scope and delivery arrangements for any site are confirmed following a site review; do not state accreditations, response times or performance figures.",
  tools: [
    listServices,
    getService,
    listSectors,
    getSector,
    listCoverage,
    searchContent,
    getArticle,
    companyDetails,
    submitEnquiry,
  ],
});
