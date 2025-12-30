
import LoginForm from "../../components/ui/LoginForm";
import RegisterForm from "../../components/ui/RegisterForm";
export default function Auth({mode}: {mode: 'login' | 'register'}) {

  if (mode === 'login') {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-10 items-center bg-gray-300 p-15 rounded-xl">
            <p className="font-bold text-3xl">Авторизация</p>
          <LoginForm />
        </div>
      </div>
    </>
  );
} else {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-10 items-center bg-gray-300 p-15 rounded-xl">
            <p className="font-bold text-3xl">Регистрация</p>
          <RegisterForm />
        </div>
      </div>
    </>
    )
}
}