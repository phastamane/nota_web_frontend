import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "@heroui/react";
import { UserAccountIcon } from "@/shared/Icons";
import { ArrowLeftIcon } from "@/shared/Icons";
import useLogout from "@/hooks/useLogout";
function AccountPage() {
  const user = useAuthStore((s) => s.user);
  const customer = useAuthStore((s) => s.customer);
  const notary = useAuthStore((s) => s.notary);
  const navigate = useNavigate();
  const logout = useLogout();

  if (!user)
    return (
      <>
        <div className="flex w-full h-screen items-center justify-center">
          <Spinner color="warning" size="lg" variant="gradient" />
        </div>
      </>
    );
  const profile = user.role === "notary" ? notary : customer;
  const role = defineRole(user.role);
  const isNotaryProfile =
    user.role === "notary" &&
    profile &&
    "license_number" in profile &&
    "inn" in profile;

  if (user.role === "admin") {
    return (
      <div className="flex flex-col p-10 gap-10">
        <Button
          color="primary"
          startContent={<ArrowLeftIcon />}
          className="mr-auto text-lg "
          onPress={() => navigate("/")}
        >
          На главную
        </Button>
        <div className="bg-gray-200 p-5 rounded-4xl">
          <div className="flex items-center gap-10">
            <div className="bg-[#ffba00] rounded-full p-5">
              <UserAccountIcon />
            </div>
            <div className="flex flex-col gap-3">
              <span
                className={`rounded-3xl text-center mr-auto px-3 py-1 ${role.styles}`}
              >
                {role.role}
              </span>
              <p className="text-4xl">{`${user.username}`}</p>
              <p className="text-xl text-blue-600">
                Система под вашим контролем
              </p>
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
      </div>
    );
  } else if (!profile)
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
        color="primary"
        startContent={<ArrowLeftIcon />}
        className="mr-auto text-lg "
        onPress={() => navigate("/")}
      >
        На главную
      </Button>
      <div className="bg-gray-200 p-5 rounded-4xl">
        <div className="flex items-center gap-10">
          <div className="bg-[#ffba00] rounded-full p-5">
            <UserAccountIcon />
          </div>
          <div className="flex flex-col gap-3">
            <span
              className={`rounded-3xl text-center mr-auto px-3 py-1 ${role.styles}`}
            >
              {role.role}
            </span>
            <p className="text-4xl">{`${profile.first_name} ${profile.last_name}`}</p>
            <p className="text-xl text-blue-600">{profile.phone_number}</p>
            {isNotaryProfile && (
              <>
                <p className="text-xl">{`Лицензия: ${profile.license_number}`}</p>
                <p className="text-xl">{`ИНН: ${profile.inn}`}</p>
              </>
            )}
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
    </div>
  );
}

export default AccountPage;

function defineRole(role: string) {
  if (role === "notary") {
    return { role: "Нотариус", styles: "bg-[#ffba00]", notaryData: true };
  } else if (role === "admin") {
    return {
      role: "Администратор",
      styles: "bg-red-600 text-white",
      notaryData: null,
    };
  } else {
    return {
      role: "Покупатель",
      styles: "bg-gray-600 text-white",
      notaryData: null,
    };
  }
}
