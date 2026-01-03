import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useAuthStore } from "../store/useAuthStore";

import React from "react";
import { ToastProvider } from "@heroui/react";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuth = useAuthStore((s) => s.isAuth);
  const authReady = useAuthStore((s) => s.authReady);

  if (!authReady) return null;
  if (!isAuth) {
   return <Navigate to="/login" replace />;
  }
  else return (
    <>
      <ToastProvider/>  
      {children}
    </>
  );
}

export default PrivateRoute;
