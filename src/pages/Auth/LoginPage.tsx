
import LoginForm from "../../common/LoginForm";
export default function Auth() {

  return (
    <>
      <div className="h-screen flex h-full items-center justify-center">
        <div className="flex flex-col gap-10 items-center bg-yellow-300 p-15 rounded-xl">
            <p className="font-bold text-3xl">Авторизация</p>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
