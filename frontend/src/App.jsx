import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import LeftNavBar from "./components/navBar/LeftNavBar";
import Footer from "./components/Footer/Footer";

import AdminProtectedRoutes from "./layouts/AdminProtectedRoutes";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LeftNavBar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/videos" element={<Video />} /> */}
        <Route path="/videos/:id" element={<Video />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/connexion" element={<SignIn />}> */}
        {/* <Route path="/profile" element={<Profile />}> */}
        {/* <Route path="/Favorites" element={<Favorites />}> */}
        {/* <Route path="/Ciel&nuages" element={<Sky />}> */}
        {/* <Route path="/Montagnes" element={<Mountain />}> */}
        {/* <Route path="/Forets" element={<Forest />}> */}
        {/* <Route path="/Mer&oceans" element={<Sea />}> */}
        {/* <Route path="/Urbain" element={<Urban />}> */}
        {/* <Route path="/Champ" element={<Field />}> */}

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
        {/* <Route path="/connexion" element={<SignIn />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/Admin" element={<Admin />} /> */}
        {/* <Route path="/Favorites" element={<Favorites />} /> */}
        {/* <Route path="/Ciel&nuages" element={<Sky />} /> */}
        {/* <Route path="/Montagnes" element={<Mountain />} /> */}
        {/* <Route path="/Forets" element={<Forest />} /> */}
        {/* <Route path="/Mer&oceans" element={<Sea />} /> */}
        {/* <Route path="/Urbain" element={<Urban />} /> */}
        {/* <Route path="/Champ" element={<Field />} /> */}
        <Route path="/videos" element={<Video />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
