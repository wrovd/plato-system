import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F4F3F1] grid place-items-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
        <h1 className="text-2xl font-extrabold">Вход</h1>
        <div className="mt-5 space-y-3">
          <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" placeholder="Email" />
          <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" placeholder="Пароль" type="password" />
          <button className="w-full rounded-2xl bg-black text-white py-3 font-semibold">Войти</button>

          <div className="text-sm text-black/60">
            Нет аккаунта?{" "}
            <Link className="text-black font-semibold" to="/register">
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}