import Header from "../components/Header/Header";
import BasicSlider from "../components/HeroSlider";
import LeftNavBar from "../components/navBar/LeftNavBar";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer/Footer";
import "./home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flexContainer">
        <LeftNavBar />
        <MainSection />
      </div>
      <Footer />
    </>
  );
}
