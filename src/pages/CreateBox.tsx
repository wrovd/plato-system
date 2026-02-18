export default function CreateBoxPage() {
  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-3xl font-extrabold tracking-[-0.4px] text-black">Создать коробку</h1>
        <p className="mt-2 text-black/60">Коробка поставки с уникальным кодом и местом хранения.</p>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)] space-y-3">
          <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" placeholder="Название/номер коробки (опционально)" />
          <input className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none" placeholder="Где находится (ячейка/зона)" />
          <textarea className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none min-h-[110px]" placeholder="Что внутри (позиции/комментарий)"></textarea>

          <button className="w-full rounded-2xl bg-black text-white py-3 font-semibold">
            Создать коробку и код
          </button>
          <div className="text-sm text-black/60">Дальше: привязка позиций внутри коробки + поиск.</div>
        </div>
      </div>
    </div>
  );
}