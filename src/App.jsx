import { useContext } from "react";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { AuthContext } from "./Context/AuthProvider";
import SaleContextProvider from "./Context/SaleContext";
import CommentsProvider from "./Context/CommentsProvider";
import FavoritesProvider from "./Context/FavoritesProvider";

import Loader from "./components/Loader";
import Navbar from "./components/navbar/Navbar";
import { Private } from "./components/routesProtection/Private";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Gallery from "./Pages/Gallery";
import Register from "./Pages/Register";
import InfoClase from "./Pages/InfoClase";

/* Routes Profile Matias */
import Perfil from "./Pages/profile/Perfil";
import DatosPerfil from "./Pages/profile/DatosPerfil";
import Favoritos from "./Pages/profile/Favoritos";
import PortalDePago from "./Pages/profile/PortalDePago";
import CrearPublicacion from "./Pages/profile/CrearPublicacion"
import MisPosts from "./Pages/profile/MisPosts"









import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Favorites from "./Pages/Favorites";
import MyClasses from "./Pages/MyClasses";
import CreatePost from "./Pages/CreatePost";
import ModifyPost from "./Pages/ModifyPost";
import EditProfile from "./Pages/EditProfile";
import ProfileDashboard from "./Pages/ProfileDashboard";
import UserClassesProvider from "./Context/UserClassesProvider";
import NotFound from "./Pages/NotFound";
import Sale from "./Pages/Sale";
import { PetStoreContext } from "./Context/PetStoreContext";

export default function App() {
  const { user, loading } = useContext(AuthContext);

  return (
    <>
      <SaleContextProvider>
        {!user && loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />

            <FavoritesProvider>
              <UserClassesProvider>
                <CommentsProvider>
                  <Container
                    color="primary"
                    sx={{ p: { xs: "0" }, maxWidth: { xs: "100%" } }}
                  >
                    <Routes>
                      <Route sx={{zIndex: 1000}}path="/cart"></Route>
                      <Route path="/" element={<Home />} />
                      <Route path="/gallery" element={<Gallery />} />
                      <Route path="/infoClase/:id" element={<InfoClase />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/profile"></Route>
                      <Route path="/login" element={<Login />} />

                      <Route path="/Perfil" element={<Perfil />} />
                      <Route path="/DatosPerfil" element={<DatosPerfil />} />
                      <Route path="/Favoritos" element={<Favoritos />} />
                      <Route path="/MisPosts" element={<MisPosts />} />
                      <Route path="/CrearPublicacion" element={<CrearPublicacion />} />
                      <Route path="/PortalDePago" element={<PortalDePago />} />


                      <Route
                        path="/dashboard"
                        element={
                          <Private>
                            <Dashboard />
                          </Private>
                        }
                      >
                        <Route path="sale" element={<Sale />} />
                        <Route path="" element={<ProfileDashboard />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="editprofile" element={<EditProfile />} />
                        <Route path="favorites" element={<Favorites />} />
                        <Route path="createpost" element={<CreatePost />} />
                        <Route path="modifypost/:id" element={<ModifyPost />} />
                        <Route path="classes" element={<MyClasses />} />

                        <Route path="editprofile" element={<EditProfile />} />
                        <Route path="favorites" element={<Favorites />} />
                        <Route path="createpost" element={<CreatePost />} />
                        <Route path="modifypost/:id" element={<ModifyPost />} />
                        <Route path="classes" element={<MyClasses />} />
                        
                      </Route>
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Container>
                </CommentsProvider>
              </UserClassesProvider>
            </FavoritesProvider>
          </>
        )}
      </SaleContextProvider>
    </>
  );
}
