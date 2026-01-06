import { Button, Chip, Spinner } from "@heroui/react";
import { ArrowLeftIcon, UserAccountIcon } from "@/shared/Icons";
import { useNavigate } from "react-router-dom";
import useLogout from "@/hooks/useLogout";
import { useAuthStore } from "@/store/useAuthStore";
import AddServicesCatForm from "@/components/ui/forms/AddServicesCatForm";

export default function AdminAccount() {
  const navigate = useNavigate();
  const logout = useLogout();
  const user = useAuthStore((s) => s.user);
  if (!user)
    return (
      <>
        <div className="flex w-full h-screen items-center justify-center">
          <Spinner color="warning" size="lg" variant="gradient" />
        </div>
      </>
    );

  return (
    <div className="flex flex-col p-10 gap-10">
      <Button
        color="warning"
        startContent={<ArrowLeftIcon />}
        className="mr-auto text-lg "
        onPress={() => navigate("/")}
      >
        На главную
      </Button>
      <div className="bg-gray-200 p-5 rounded-4xl">
        <div className="flex items-center gap-10">
          <div className="bg-[#F5A523] rounded-full p-5">
            <UserAccountIcon />
          </div>
          <div className="flex flex-col gap-3">
            <Chip color="danger">
                Администратор
            </Chip>
            <p className="text-4xl">{`${user?.username}`}</p>
            <p className="text-xl text-blue-600">Система под вашим контролем</p>
          </div>
          <Button
            color="danger"
            className="ml-auto mb-auto mr-5"
            onPress={logout}
          >
            Выйти
          </Button>
        </div>
      </div>

      <AddServicesCatForm mode={'create'}/>
    </div>
  );
}
