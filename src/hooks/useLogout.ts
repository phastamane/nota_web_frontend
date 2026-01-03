import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import AuthService from "@/services/AuthService";

function useLogout() {
  const clearStore = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  return async () => {
    try {
      await AuthService.logout();
      localStorage.setItem('access_token', '')
    } catch (error) {
      console.error(error);
    } finally {
      clearStore();
       window.location.replace("/");
    }
  };
}

export default useLogout;
