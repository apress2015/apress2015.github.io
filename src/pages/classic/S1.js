import React from "react";
import CardViewS1C from "../../components/CardViews/Classic/CardView-S1-C";
import CitiesS1C from "../../components/Cities/Classic/Cities-S1-C";
import ContactUsC from "../../components/ContactUs/Classic";
import FooterS1C from "../../components/Footer/Classic/Footer-S1-C";
import HeaderS11C from "../../components/Header/Classic/Header-S1-1-C";
import HeaderS12C from "../../components/Header/Classic/Header-S1-2-C";
import HeaderS13C from "../../components/Header/Classic/Header-S1-3-C";
import HeroCardC from "../../components/HeroCard/Classic";
import ImageOnlyC from "../../components/ImageOnly/Classic";
import InstagramS1C from "../../components/Instagram/Classic/Instagram-S1-C";
import TextImageS1C from "../../components/TextImage/Classic/TextImage-S1-C";
import TextOnlyC from "../../components/TextOnly/Classic";

const S1CPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CardViewS1C />

      <CitiesS1C />

      <ContactUsC />

      <FooterS1C />

      <HeaderS11C />
      <HeaderS12C />
      <HeaderS13C />

      <HeroCardC />

      <ImageOnlyC />

      <InstagramS1C />

      <TextImageS1C />

      <TextOnlyC />
    </div>
  );
};

export default S1CPage;
