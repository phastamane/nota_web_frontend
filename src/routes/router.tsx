// src/App.tsx
import { HeroUIProvider } from "@heroui/react";
import { Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import PublicLayout from "../common/PublicLayout";
import MainLayout from "../common/MainLayout";
import MainPage from "../pages/MainPage";
import Auth from "../pages/Auth/Auth";
import { Swagger } from "../Swagger";
import useAuthBootstrap from "../hooks/useAuthBootstrap";
import AccountPage from "../pages/account/Account";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useAuthStore } from "@/store/useAuthStore";
import AdminAccount from "@/pages/account/AdminAccount";

export default function App() {
  const { isLoading, token } = useAuthBootstrap();
  const user = useAuthStore((s) => s.user)

  if (token && isLoading) return null;

  return (
    <HeroUIProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route element={<MainLayout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Auth mode='login'/>
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Auth mode="register" />
            </PublicRoute>
          }
        />

        <Route
          path="/account"
          element={
            <PrivateRoute>
              {user?.role !== 'admin' ? <AccountPage /> : <AdminAccount/>}
            </PrivateRoute>
          }
        />

        <Route path="/swagger" element={<Swagger />} />
      </Routes>
    </HeroUIProvider>
  );
}
