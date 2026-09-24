import loopCommercial from "@/assets/loop-commercial.mp4.asset.json";
import loopHealthcare from "@/assets/loop-healthcare.mp4.asset.json";
import loopEducation from "@/assets/loop-education.mp4.asset.json";
import loopLogistics from "@/assets/loop-logistics.mp4.asset.json";
import loopPublicSector from "@/assets/loop-public-sector.mp4.asset.json";
import loopVacantProperty from "@/assets/loop-vacant-property.mp4.asset.json";
import loopDataCentres from "@/assets/loop-data-centres.mp4.asset.json";
import loopRail from "@/assets/loop-rail.mp4.asset.json";
import loopIntegratedFm from "@/assets/loop-integrated-fm.mp4.asset.json";
import loopHardFm from "@/assets/loop-hard-fm.mp4.asset.json";
import loopSoftServices from "@/assets/loop-soft-services.mp4.asset.json";
import loopSecurity from "@/assets/loop-security.mp4.asset.json";

/** Background loops shown behind the hero photo on sector pages. */
export const sectorLoops: Record<string, string> = {
  commercial: loopCommercial.url,
  healthcare: loopHealthcare.url,
  education: loopEducation.url,
  "logistics-industrial": loopLogistics.url,
  "public-sector": loopPublicSector.url,
  "vacant-property": loopVacantProperty.url,
  "data-centres": loopDataCentres.url,
  rail: loopRail.url,
};

/** Background loops shown behind the hero photo on service pages. */
export const serviceLoops: Record<string, string> = {
  "integrated-fm": loopIntegratedFm.url,
  "hard-fm": loopHardFm.url,
  "soft-services": loopSoftServices.url,
  "security-personnel": loopSecurity.url,
};
