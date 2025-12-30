import { Navigate } from "react-router";
import type { JSX } from "react";
import { useAuthStore } from "../store/useAuthStore";

function PublicRoute({ children }: { children: JSX.Element }) {
  const isAuth = useAuthStore((s) => s.isAuth);

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PublicRoute;
