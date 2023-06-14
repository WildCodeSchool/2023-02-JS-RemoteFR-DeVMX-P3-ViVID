import Header from "../components/Header/Header";
import LeftNavBar from "../components/navBar/LeftNavBar";
import MainSection from "../components/MainSection";
import "./home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flexContainer">
        <LeftNavBar />
        <MainSection />
      </div>
    </>
  );
}
