import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Video from "./pages/Video";

import Header from "./components/Header/Header";
import LeftNavBar from "./components/navBar/LeftNavBar";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <LeftNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/connexion" element={<SignIn />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/Admin" element={<Admin />} />
        {/* <Route path="/Favorites" element={<Favorites />} /> */}
        {/* <Route path="/Ciel&nuages" element={<Sky />} /> */}
        {/* <Route path="/Montagnes" element={<Mountain />} /> */}
        {/* <Route path="/Forets" element={<Forest />} /> */}
        {/* <Route path="/Mer&oceans" element={<Sea />} /> */}
        {/* <Route path="/Urbain" element={<Urban />} /> */}
        {/* <Route path="/Champ" element={<Field />} /> */}
        <Route path="/videos" element={<Video />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
