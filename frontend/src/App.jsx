import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LeftNavBar from "./components/navBar/LeftNavBar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <LeftNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/inscription" element={<SignUp />}></Route>
        <Route path="/connexion" element={<SignIn />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Favorites" element={<Favorites />}></Route>
        <Route path="/Ciel&nuages" element={<Sky />}></Route>
        <Route path="/Montagnes" element={<Mountain />}></Route>
        <Route path="/Forets" element={<Forest />}></Route>
        <Route path="/Mer&oceans" element={<Sea />}></Route>
        <Route path="/Urbain" element={<Urban />}></Route>
        <Route path="/Champ" element={<Field />}></Route> */}
        <Route path="/videos" element={<Video />} />
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
