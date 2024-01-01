import React from "react";
import CitiesS1B from "../../components/Cities/Boheimian/Cities-S1-B";
import ContactUsB from "../../components/ContactUs/Boheimian";
import FooterS1B from "../../components/Footer/Boheimian/Footer-S1-B";
import HeroCardB from "../../components/HeroCard/Boheimian";
import ImageOnlyB from "../../components/ImageOnly/Boheimian";
import TextImageS1B from "../../components/TextImage/Boheimian/TextImage-S1-B";
import TextOnlyB from "../../components/TextOnly/Boheimian";

const S1BPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CitiesS1B />

      <ContactUsB />

      <FooterS1B />

      <HeroCardB />

      <ImageOnlyB />

      <TextImageS1B />

      <TextOnlyB />
    </div>
  );
};

export default S1BPage;
