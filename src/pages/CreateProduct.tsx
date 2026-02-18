import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsCreate } from "../services/platoApi";
import { ArrowLeft } from "lucide-react";

export default function CreateProductPage() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [name, setName] = useState("");
  const [barcode, setBarcode] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [notes, setNotes] = useState("");

  const onCreate = async () => {
    setMsg("");
    if (!name.trim()) {
      setMsg("Название обязательно.");
      return;
    }
    setLoading(true);

    const r = await productsCreate({
      name: name.trim(),
      barcode: barcode.trim() || undefined,
      category: category.trim() || undefined,
      brand: brand.trim() || undefined,
      model: model.trim() || undefined,
      notes: notes.trim() || undefined,
    });

    if (!r.ok) {
      setMsg(r.error);
      setLoading(false);
      return;
    }

    setMsg(`Создано: SKU4 ${r.product.sku4} / ID ${r.product.productId}`);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <button
          className="inline-flex items-center gap-2 text-black/70 hover:text-black font-semibold"
          onClick={() => nav("/products")}
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </button>

        <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.4px] text-black">Создать товар</h1>
        <p className="mt-2 text-black/60">
          Система сама выдаст <b>sku4</b> (0001, 0002…) и productId (P0001…)
        </p>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)] space-y-3">
          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Название товара *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Штрихкод (опционально)"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none"
              placeholder="Категория"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none"
              placeholder="Бренд"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          <input
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none"
            placeholder="Модель"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <textarea
            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none min-h-[110px]"
            placeholder="Примечания"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button
            className={[
              "w-full rounded-2xl py-3 font-semibold",
              loading ? "bg-black/20 text-black/50 cursor-not-allowed" : "bg-black text-white",
            ].join(" ")}
            onClick={onCreate}
            disabled={loading}
          >
            {loading ? "Создаю..." : "Создать"}
          </button>

          {msg ? <div className="text-sm text-black/70">{msg}</div> : null}
        </div>
      </div>
    </div>
  );
}