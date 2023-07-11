import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Category from "./pages/Category";
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
        <Route path="/" element={<Category key={1} category={1} />} />
        <Route path="/videos/:id" element={<Video />} />
        {/* <Route path="/connexion" element={<SignIn />}> */}
        {/* <Route path="/profile" element={<Profile />}> */}
        {/* <Route path="/Favorites" element={<Favorites />}> */}
        <Route
          path="/Ciel&nuages"
          element={<Category key={2} category={2} />}
        />
        <Route path="/Montagnes" element={<Category key={3} category={3} />} />
        <Route path="/Forets" element={<Category key={4} category={4} />} />
        <Route path="/Mer&oceans" element={<Category key={5} category={5} />} />
        <Route path="/Urbain" element={<Category key={6} category={6} />} />
        <Route path="/Champ" element={<Category key={7} category={7} />} />

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
    </BrowserRouter>
  );
}

export default App;
