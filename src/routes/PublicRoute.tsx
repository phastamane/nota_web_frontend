import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useAuthStore } from "../store/useAuthStore";

function PublicRoute({ children }: { children: JSX.Element }) {
  const isAuth = useAuthStore((s) => s.isAuth);
  const authReady = useAuthStore((s) => s.authReady);

  if (!authReady) return null;
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PublicRoute;
