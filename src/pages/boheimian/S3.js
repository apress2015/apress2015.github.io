import React from "react";
import CitiesS3B from "../../components/Cities/Boheimian/Cities-S3-B";
import ContactUsB from "../../components/ContactUs/Boheimian";
import FooterS3B from "../../components/Footer/Boheimian/Footer-S3-B";
import HeroCardB from "../../components/HeroCard/Boheimian";
import ImageOnlyB from "../../components/ImageOnly/Boheimian";
import TextImageS3B from "../../components/TextImage/Boheimian/TextImage-S3-B";
import TextOnlyB from "../../components/TextOnly/Boheimian";

const S3BPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CitiesS3B />

      <ContactUsB />

      <FooterS3B />

      <HeroCardB />

      <ImageOnlyB />

      <TextImageS3B />

      <TextOnlyB />
    </div>
  );
};

export default S3BPage;
