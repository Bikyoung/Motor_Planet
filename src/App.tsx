import { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Hero from "./components/sections/hero/Hero";
import Difference from "./components/sections/difference/Difference";
import Inspection from "./components/sections/inspection/Inspection";
import Recommend from "./components/sections/recommend/Recommend";
import Review from "./components/sections/review/Review";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/layout/Footer";
import MobileMenu from "./components/layout/MobileMenu";
import PrivacyModal from "./components/ui/modal/PrivacyModal";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);                // 모달 열림 여부
  const [isShow, setIsShow] = useState(false);                // 모바일 메뉴 열림 여부

  const openModal = () => setIsOpen(true);                    // 모달 여는 함수
  const closeModal = () => setIsOpen(false);                  // 모달 닫는 함수
  const openMobileMenu = () => setIsShow(true);               // 모바일 메뉴 여는 함수
  const closeMobileMenu = () => setIsShow(false);             // 모바일 메뉴 닫는 함수

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 0
    });
  }, []);

  // 모달 열림 여부에 따라 body 스크롤 제어
  useEffect(() => {
      if(isOpen) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "";
      }
  }, [isOpen]); 

  return (
    <>
      <Header openMobileMenu={openMobileMenu} />
      <Hero />
      <Difference />
      <Inspection />
      <Recommend />
      <Review />
      <Contact openModal={openModal} />
      <Footer openModal={openModal} />

      <MobileMenu isShow={isShow} closeMobileMenu={closeMobileMenu} />
      <PrivacyModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default App
