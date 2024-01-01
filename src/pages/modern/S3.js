import React from "react";
import CitiesS3M from "../../components/Cities/Modern/Cities-S3-M";
import ContactUsM from "../../components/ContactUs/Modern";
import FooterS3M from "../../components/Footer/Modern/Footer-S3-M";
import HeaderS3M from "../../components/Header/Modern/Header-S3-M";
import HeroCardM from "../../components/HeroCard/Modern";
import ImageOnlyM from "../../components/ImageOnly/Modern";
import InstagramS3M from "../../components/Instagram/Modern/Instagram-S3-M";
import TextImageS3M from "../../components/TextImage/Modern/TextImage-S3-M";
import TextOnlyM from "../../components/TextOnly/Modern";

const S3MPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CitiesS3M />

      <ContactUsM />

      <FooterS3M />

      <HeaderS3M />

      <HeroCardM />

      <ImageOnlyM />

      <InstagramS3M />

      <TextImageS3M />

      <TextOnlyM />
    </div>
  );
};

export default S3MPage;
