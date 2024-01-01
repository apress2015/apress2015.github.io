import React from "react";
import CardViewS3C from "../../components/CardViews/Classic/Cardview-S3-C";
import CitiesS3C from "../../components/Cities/Classic/Cities-S3-C";
import ContactUsC from "../../components/ContactUs/Classic";
import FooterS3C from "../../components/Footer/Classic/Footer-S3-C";
import HeaderS3C from "../../components/Header/Classic/Header-S3-C";
import HeroCardC from "../../components/HeroCard/Classic";
import ImageOnlyC from "../../components/ImageOnly/Classic";
import InstagramS3C from "../../components/Instagram/Classic/Instagram-S3-C";
import TextImageS3C from "../../components/TextImage/Classic/TextImage-S3-C";
import TextOnlyC from "../../components/TextOnly/Classic";

const S3CPage = () => {
  return (
    <div className="App flex flex-col gap-20">
      <CardViewS3C />

      <CitiesS3C />

      <ContactUsC />

      <FooterS3C />

      <HeaderS3C />

      <HeroCardC />

      <ImageOnlyC />

      <InstagramS3C />

      <TextImageS3C />

      <TextOnlyC />
    </div>
  );
};

export default S3CPage;
