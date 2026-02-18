export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-3xl font-extrabold tracking-[-0.4px] text-black">Настройки</h1>
        <p className="mt-2 text-black/60">Профиль, выход, параметры интерфейса.</p>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
          <div className="text-sm text-black/60">Дальше: работа с токеном/сессией.</div>
        </div>
      </div>
    </div>
  );
}