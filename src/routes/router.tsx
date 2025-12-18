// src/App.tsx
import { HeroUIProvider } from "@heroui/react";
import { Routes, Route } from "react-router";
import { ReactLenis } from "lenis/react";
import NavBar from "../common/NavBar";
import MainLayout from "../common/MainLayout";
import MainPage from "../pages/MainPage";
import Auth from "../pages/Auth/LoginPage";
import { Swagger } from "../Swagger";
// import NotFound from "../pages/NotFound";

export default function App() {
  return (
    <HeroUIProvider>
      <NavBar/>
      <ReactLenis root options={{ anchors: true }}>
        <Routes>
          <Route path="/swagger" element={<Swagger/>}></Route>
          <Route element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<Auth />} />
            <Route path="register" element={<Auth />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </ReactLenis>
    </HeroUIProvider>
  );
}
