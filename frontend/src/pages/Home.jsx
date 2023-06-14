import Header from "../components/Header/Header";
import LeftNavBar from "../components/navBar/LeftNavBar";
import MainSection from "../components/mainSection";
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
