import AboutUsSection from "../components/sections/AboutUsSection";
import TeamCard from "../components/cards/TeamCard";
import DevTeamCard from "../components/cards/DevTeamCard";
import AcademicCollaborationCard from "../components/cards/AcademicCollaboCard";

import { team } from "../data/teamData";
import { academicCollaboration } from "../data/academicCollaborationData";
import { webDesign } from "../data/webDesignData";

import { useTranslation } from "react-i18next";


export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="w-full px-6 md:px-20 py-12">
      <h1 className="text-center text-purple-950 text-4xl font-bold mb-10">
        {t("aboutUsPage.whoAreWe")}
      </h1>
      <p className="max-w-3xl mx-auto text-center text-lg mb-16 text-purple-900">
        {t("aboutUsPage.intro")}
      </p>
      <AboutUsSection title={t("aboutUsPage.team")} items={team} CardComponent={TeamCard} />
      <AboutUsSection 
        title={t("aboutUsPage.academicCollaboration")} 
        items={academicCollaboration} 
        CardComponent={AcademicCollaborationCard}
      />
      <AboutUsSection 
        title={t("aboutUsPage.webDesign")} 
        items={webDesign} 
        CardComponent={DevTeamCard}
      />
    </div>
  );
}
