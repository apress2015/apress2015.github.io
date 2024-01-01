import React from "react";
import CardViewS2C from "../../components/CardViews/Classic/Cardview-S2-C";
import CitiesS2C from "../../components/Cities/Classic/Cities-S2-C";
import ContactUsC from "../../components/ContactUs/Classic";
import FooterS2C from "../../components/Footer/Classic/Footer-S2-C";
import HeaderS2C from "../../components/Header/Classic/Header-S2-C";
import HeroCardC from "../../components/HeroCard/Classic";
import ImageOnlyC from "../../components/ImageOnly/Classic";
import InstagramS2C from "../../components/Instagram/Classic/Instagram-S2-C";
import TextImageS2C from "../../components/TextImage/Classic/TextImage-S2-C";
import TextOnlyC from "../../components/TextOnly/Classic";

const S2CPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CardViewS2C />

      <CitiesS2C />

      <ContactUsC />

      <FooterS2C />

      <HeaderS2C />

      <HeroCardC />

      <ImageOnlyC />

      <InstagramS2C />

      <TextImageS2C />

      <TextOnlyC />
    </div>
  );
};

export default S2CPage;
