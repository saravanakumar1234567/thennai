import React from "react";
import SuperHeaderTamil from "../components/SuperHeaderTamil";
import NavBarTamil from "../components/NavBarTamil";
import AboutUsTamil from "../components/AboutUsTamil";
import ProductSectionTamil from "../components/ProductSectionTamil";
import FarmingGuideTamil from "../components/FarmingGuideTamil";
import BenefitsOfCoconutTamil from "../components/BenefitsOfCoconutTamil";
import FromTheBlogTamil from "../components/FromTheBlogTamil";
import TamilNaduMapTamil from "../components/TamilNaduMapTamil";
import ContactUsTamil from "../components/ContactUsTamil";
import FooterTamil from "../components/FooterTamil";
import WhatsAppButtonTamil from "../components/WhatsAppButtonTamil";
import PopupTamil from "../components/PopupTamil";



const HomePageTamil = () => {
  return (
    <div>
      <NavBarTamil />
      <SuperHeaderTamil />
      <AboutUsTamil />
      <ProductSectionTamil />
      <FarmingGuideTamil />
      <br />
      <BenefitsOfCoconutTamil />
      <FromTheBlogTamil/>
      <TamilNaduMapTamil/>
      <ContactUsTamil/>
      <FooterTamil/>
      <WhatsAppButtonTamil/>
     <PopupTamil/>
      
    </div>
  );
};

export default HomePageTamil;
