import React from "react";
import CitiesS2B from "../../components/Cities/Boheimian/Cities-S2-B";
import ContactUsB from "../../components/ContactUs/Boheimian";
import FooterS2B from "../../components/Footer/Boheimian/Footer-S2-B";
import HeroCardB from "../../components/HeroCard/Boheimian";
import ImageOnlyB from "../../components/ImageOnly/Boheimian";
import TextImageS2B from "../../components/TextImage/Boheimian/TextImage-S2-B";
import TextOnlyB from "../../components/TextOnly/Boheimian";

const S2BPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CitiesS2B />

      <ContactUsB />

      <FooterS2B />

      <HeroCardB />

      <ImageOnlyB />

      <TextImageS2B />

      <TextOnlyB />
    </div>
  );
};

export default S2BPage;
