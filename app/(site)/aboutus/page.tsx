import Breadcrumb from "@/app/_components/modules/Breadcrumb/Breadcrumb";
import CompanyInformation from "@/app/_components/templates/aboutus/CompanyInformation/CompanyInformation";
import CompanyStory from "@/app/_components/templates/aboutus/CompanyStory/CompanyStory";
import MembersIntroduction from "@/app/_components/templates/aboutus/MembersIntroduction/MembersIntroduction";
import React from "react";


export default async function AboutUs() {
    
    
    return (
        <>
            <Breadcrumb title="درباره ما" />
            <CompanyInformation />
            <CompanyStory />
            <MembersIntroduction />
        </>
    );
}
