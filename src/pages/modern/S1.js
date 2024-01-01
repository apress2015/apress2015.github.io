import React from "react";
import CardViewS1M from "../../components/CardViews/Modern/CardView-S1-M";
import CitiesS1M from "../../components/Cities/Modern/Cities-S1-M";
import ContactUsM from "../../components/ContactUs/Modern";
import FooterS1M from "../../components/Footer/Modern/Footer-S1-M";
import HeaderS11M from "../../components/Header/Modern/Header-S1-1-M";
import HeaderS12M from "../../components/Header/Modern/Header-S1-2-M";
import HeaderS13M from "../../components/Header/Modern/Header-S1-3-M";
import HeroCardM from "../../components/HeroCard/Modern";
import ImageOnlyM from "../../components/ImageOnly/Modern";
import InstagramS1M from "../../components/Instagram/Modern/Instagram-S1-M";
import TextImageS1M from "../../components/TextImage/Modern/TextImage-S1-M";
import TextOnlyM from "../../components/TextOnly/Modern";

const S1MPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CardViewS1M />

      <CitiesS1M />

      <ContactUsM />

      <FooterS1M />

      <HeaderS11M />
      <HeaderS12M />
      <HeaderS13M />

      <HeroCardM />

      <ImageOnlyM />

      <InstagramS1M />

      <TextImageS1M />

      <TextOnlyM />
    </div>
  );
};

export default S1MPage;
