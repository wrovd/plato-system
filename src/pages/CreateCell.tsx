export default function CreateCellPage() {
  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-3xl font-extrabold tracking-[-0.4px] text-black">Создать ячейку</h1>
        <p className="mt-2 text-black/60">Создаём ячейку и присваиваем ей уникальный QR/код.</p>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)] space-y-3">
          <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" placeholder="Название ячейки (например: A-01-03)" />
          <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" placeholder="Описание (опционально)" />
          <button className="w-full rounded-2xl bg-black text-white py-3 font-semibold">
            Создать и получить QR
          </button>
          <div className="text-sm text-black/60">Дальше: запись в Google Sheets + генерация QR.</div>
        </div>
      </div>
    </div>
  );
}