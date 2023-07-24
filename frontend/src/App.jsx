import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import MainSection from "./pages/MainSection";
import NotFound from "./pages/NotFound";
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
      <div className="appContainer">
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<MainSection key={1} categoryId={1} />} />

          <Route path="/videos/:id" element={<Video />} />

          <Route
            path="/Ciel&nuages"
            element={<MainSection key={2} categoryId={2} />}
          />
          <Route
            path="/Montagnes"
            element={<MainSection key={3} categoryId={3} />}
          />
          <Route
            path="/Forets"
            element={<MainSection key={4} categoryId={4} />}
          />
          <Route
            path="/Mer&oceans"
            element={<MainSection key={5} categoryId={5} />}
          />
          <Route
            path="/Urbain"
            element={<MainSection key={6} categoryId={6} />}
          />
          <Route
            path="/Champ"
            element={<MainSection key={7} categoryId={7} />}
          />

          {/* LOGGED USER ROUTES */}

          {/* LOGGED ADMIN ROUTES */}
          <Route
            path="/admin"
            element={
              <AdminProtectedRoutes>
                <Admin />
              </AdminProtectedRoutes>
            }
          />
          <Route>
            <Route path="dashboard" element={<Admin />} />
          </Route>

          <Route path="/videos" element={<Video />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
