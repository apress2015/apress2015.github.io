import React from "react";
import CitiesS2M from "../../components/Cities/Modern/Cities-S2-M";
import ContactUsM from "../../components/ContactUs/Modern";
import FooterS2M from "../../components/Footer/Modern/Footer-S2-M";
import HeaderS2M from "../../components/Header/Modern/Header-S2-M";
import HeroCardM from "../../components/HeroCard/Modern";
import ImageOnlyM from "../../components/ImageOnly/Modern";
import InstagramS2M from "../../components/Instagram/Modern/Instagram-S2-M";
import TextImageS2M from "../../components/TextImage/Modern/TextImage-S2-M";
import TextOnlyM from "../../components/TextOnly/Modern";

const S2MPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CitiesS2M />

      <ContactUsM />

      <FooterS2M />

      <HeaderS2M />

      <HeroCardM />

      <ImageOnlyM />

      <InstagramS2M />

      <TextImageS2M />

      <TextOnlyM />
    </div>
  );
};

export default S2MPage;
