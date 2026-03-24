import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Difference from "./components/Difference/Difference";
import Inspection from "./components/Inspection/Inspection";
import Recommend from "./components/Recommend/Recommend";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (ms)
      once: false,    // 스크롤 올릴 때 다시 실행되게 할지 여부
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Difference />
        <Inspection />
        <Recommend />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
