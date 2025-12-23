// src/App.tsx
import { HeroUIProvider } from "@heroui/react";
import { Routes, Route } from "react-router";
import { ReactLenis } from "lenis/react";
import NavBar from "../common/NavBar";
import MainLayout from "../common/MainLayout";
import MainPage from "../pages/MainPage";
import Auth from "../pages/Auth/LoginPage";
import { Swagger } from "../Swagger";
import { useEffect } from "react";
import useMe from "../hooks/useMe";
import { useAuthStore } from "../store/useAuthStore";
import AccountPage from "../pages/account/Account";
import PrivateRoute from "./PrivateRoute";
// import NotFound from "../pages/NotFound";

export default function App() {
  const token = localStorage.getItem("access_token");
  const { data: me, isError } = useMe(!!token);

  useEffect(() => {
    if (me) useAuthStore.getState().setUser(me);
    if (isError) {
      localStorage.removeItem("access_token");
      useAuthStore.getState().logout();
    }
  }, [me, isError]);

  return (
    <HeroUIProvider>
      <NavBar />
      <ReactLenis root options={{ anchors: true }}>
        <Routes>
          <Route path="/swagger" element={<Swagger />}></Route>
          <Route element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <AccountPage />
                </PrivateRoute>
              }
            />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </ReactLenis>
    </HeroUIProvider>
  );
}
