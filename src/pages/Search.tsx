export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-3xl font-extrabold tracking-[-0.4px] text-black">Глобальный поиск</h1>
        <p className="mt-2 text-black/60">Поиск по: позиции, коду, наименованию, коробке, ячейке.</p>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Введите код / название / позицию…"
          />
          <div className="mt-4 text-sm text-black/60">
            Дальше подключим Google Sheets и быстрый поиск по индексу.
          </div>
        </div>
      </div>
    </div>
  );
}