import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';

import CitiesS1C from "./components/Cities/Classic/Cities-S1-C";
import CitiesS3C from "./components/Cities/Classic/Cities-S3-C";
import CitiesS1M from "./components/Cities/Modern/Cities-S1-M";
import CitiesS2M from "./components/Cities/Modern/Cities-S2-M";
import CitiesS3M from "./components/Cities/Modern/Cities-S3-M";
import CitiesS1B from "./components/Cities/Boheimian/Cities-S1-B";
import CitiesS2B from "./components/Cities/Boheimian/Cities-S2-B";
import CitiesS3B from "./components/Cities/Boheimian/Cities-S3-B";
import InstagramS1C from "./components/Instagram/Classic/Instagram-S1-C";
import InstagramS2C from "./components/Instagram/Classic/Instagram-S2-C";
import InstagramS3C from "./components/Instagram/Classic/Instagram-S3-C";
import InstagramS1M from "./components/Instagram/Modern/Instagram-S1-M";
import InstagramS2M from "./components/Instagram/Modern/Instagram-S2-M";
import InstagramS3M from "./components/Instagram/Modern/Instagram-S3-M";
import ContactUsC from "./components/ContactUs/Classic/index";
import ContactUsM from "./components/ContactUs/Modern";
import ContactUsB from "./components/ContactUs/Boheimian";

import HeroCardC from "./components/HeroCard/Classic/index";
import HeroCardM from "./components/HeroCard/Modern/index";
import HeroCardB from "./components/HeroCard/Boheimian/index";


import TextOnlyC from "./components/TextOnly/Classic/index";
import TextOnlyM from "./components/TextOnly/Modern/index";
import TextOnlyB from "./components/TextOnly/Boheimian";
import ImageOnlyC from "./components/ImageOnly/Classic/index";
import ImageOnlyM from "./components/ImageOnly/Modern/index";
import ImageOnlyB from "./components/ImageOnly/Boheimian/index";


import FooterS1B from "./components/Footer/Boheimian/Footer-S1-B"
import FooterS2B from "./components/Footer/Boheimian/Footer-S2-B"
import FooterS3B from "./components/Footer/Boheimian/Footer-S3-B"


import FooterS1M from "./components/Footer/Modern/Footer-S1-M"
import FooterS2M from "./components/Footer/Modern/Footer-S2-M"
import FooterS3M from "./components/Footer/Modern/Footer-S3-M"


import FooterS1C from "./components/Footer/Classic/Footer-S1-C"
import FooterS2C from "./components/Footer/Classic/Footer-S2-C"
import FooterS3C from "./components/Footer/Classic/Footer-S3-C"
import TextImageS1C from "./components/TextImage/Classic/TextImage-S1-C";
import TextImageS2C from "./components/TextImage/Classic/TextImage-S2-C";
import TextImageS3C from "./components/TextImage/Classic/TextImage-S3-C";
import TextImageS1M from "./components/TextImage/Modern/TextImage-S1-M";
import TextImageS2M from "./components/TextImage/Modern/TextImage-S2-M";
import TextImageS3M from "./components/TextImage/Modern/TextImage-S3-M";
import TextImageS1B from "./components/TextImage/Boheimian/TextImage-S1-B";
import TextImageS2B from "./components/TextImage/Boheimian/TextImage-S2-B";
import TextImageS3B from "./components/TextImage/Boheimian/TextImage-S3-B";
import CardviewS1C from "./components/CardViews/Classic/CardView-S1-C";
import CardviewS2C from "./components/CardViews/Classic/Cardview-S2-C";
import CardviewS3C from "./components/CardViews/Classic/Cardview-S3-C";
import CitiesS2C from "./components/Cities/Classic/Cities-S2-C";
import HeaderS11C from "./components/Header/Classic/Header-S1-1-C";
import HeaderS12C from "./components/Header/Classic/Header-S1-2-C";
import HeaderS13C from "./components/Header/Classic/Header-S1-3-C";
import HeaderS2C from "./components/Header/Classic/Header-S2-C";
import HeaderS3C from "./components/Header/Classic/Header-S3-C";
import HeaderS11M from "./components/Header/Modern/Header-S1-1-M";
import HeaderS12M from "./components/Header/Modern/Header-S1-2-M";
import HeaderS13M from "./components/Header/Modern/Header-S1-3-M";
import HeaderS2M from "./components/Header/Modern/Header-S2-M";
import HeaderS3M from "./components/Header/Modern/Header-S3-M";



function App() {
  return (
    <div className="App flex flex-col gap-20">
        <CardviewS2C/>

        <CardviewS1C/>
        <CardviewS3C/>
        <HeaderS11M/>
        <HeaderS12M/>
        <HeaderS13M/>
        <HeaderS2M/>
        <HeaderS3M/>
        <HeaderS11C/>
        <HeaderS12C/>
        <HeaderS13C/>
        <HeaderS2C/>
        <HeaderS3C/>

        <TextImageS1C/>
        <TextImageS2C/>
        <TextImageS3C/>
        <TextImageS1M/>
        <TextImageS2M/>
        <TextImageS3M/>
        <TextImageS1B/>
        <TextImageS2B/>
        {/*<TextImageS3B/>*/}

        <ContactUsC />
        <ContactUsM />
        <ContactUsB />

        <HeroCardC />
        <HeroCardM />
        <HeroCardB />


        <ImageOnlyC />
        <ImageOnlyM />
        <ImageOnlyB />

        <TextOnlyC />
        <TextOnlyM />
        <TextOnlyB />

      <FooterS1C/>
      <FooterS2C/>
      <FooterS3C/>
      <FooterS1M/>
      <FooterS2M/>
      <FooterS3M/>
      <FooterS1B/>
      <FooterS2B/>
      <FooterS3B/>



      {/**/}
        <CitiesS1M/>
        <CitiesS2M/>
        <CitiesS3M/>
        <CitiesS1C/>
        <CitiesS2C/>
        <CitiesS3C/>

        <CitiesS1B/>
        <CitiesS2B/>
        <CitiesS3B/>

        <InstagramS1C/>
        <InstagramS2C/>
        <InstagramS3C/>

        <InstagramS1M/>
        <InstagramS2M/>
        <InstagramS3M/>










    </div>


  );
}

export default App;

