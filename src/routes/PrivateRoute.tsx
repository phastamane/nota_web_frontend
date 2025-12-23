import { Navigate } from "react-router";
import type { JSX } from "react";
import { useAuthStore } from "../store/useAuthStore";

import React from "react";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuth = useAuthStore((s) => s.isAuth);

  if (!isAuth) {
   return <Navigate to="/login" replace />;
  }
  else return children;
}

export default PrivateRoute;
