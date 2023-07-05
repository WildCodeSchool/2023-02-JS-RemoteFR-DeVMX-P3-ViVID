import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Video from "./pages/Video";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LeftNavBar from "./components/navBar/LeftNavBar";

import AdminProtectedRoutes from "./layouts/AdminProtectedRoutes";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LeftNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Video />} />

        {/* LOGGED ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoutes>
              <Admin />
            </AdminProtectedRoutes>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
