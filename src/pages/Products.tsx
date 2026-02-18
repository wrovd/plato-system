import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsSearch, type Product, health } from "../services/platoApi";
import { Search, Plus, ArrowLeft } from "lucide-react";

export default function ProductsPage() {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [msg, setMsg] = useState<string>("");

  const canSearch = useMemo(() => q.trim().length > 0, [q]);

  const onHealth = async () => {
    setMsg("");
    const r = await health();
    if (!r.ok) setMsg(`API не отвечает: ${r.error}`);
    else setMsg(`API OK: ${r.ts}`);
  };

  const onSearch = async () => {
    if (!canSearch) return;
    setLoading(true);
    setMsg("");
    setProduct(null);

    const r = await productsSearch(q.trim());
    if (!r.ok) {
      setMsg(r.error);
    } else if (!r.found || !r.product) {
      setMsg("Не найдено. Проверь код/название.");
    } else {
      setProduct(r.product);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center justify-between">
          <button
            className="inline-flex items-center gap-2 text-black/70 hover:text-black font-semibold"
            onClick={() => nav("/home")}
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </button>

          <div className="flex items-center gap-2">
            <button
              className="rounded-full bg-white px-4 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.08)] font-semibold"
              onClick={onHealth}
            >
              Проверить API
            </button>

            <button
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 font-semibold"
              onClick={() => nav("/products/new")}
            >
              <Plus className="w-4 h-4" />
              Создать
            </button>
          </div>
        </div>

        <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.4px] text-black">Товары</h1>
        <p className="mt-2 text-black/60">
          Поиск по: <b>sku4</b>, штрихкоду, QR, названию.
        </p>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full rounded-2xl border border-black/10 pl-11 pr-4 py-3 outline-none"
                placeholder="Например: 0001 / 460... / 'чехол iphone 15' / QR-P0001"
              />
            </div>

            <button
              onClick={onSearch}
              disabled={!canSearch || loading}
              className={[
                "rounded-2xl px-5 py-3 font-semibold",
                !canSearch || loading ? "bg-black/20 text-black/50 cursor-not-allowed" : "bg-black text-white",
              ].join(" ")}
            >
              {loading ? "Ищу..." : "Найти"}
            </button>
          </div>

          {msg ? <div className="mt-4 text-sm text-black/70">{msg}</div> : null}

          {product ? (
            <div className="mt-5 rounded-2xl border border-black/10 p-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-semibold text-black">SKU4:</span>
                <span className="text-sm text-black/80">{product.sku4}</span>

                <span className="ml-4 text-sm font-semibold text-black">ID:</span>
                <span className="text-sm text-black/80">{product.productId}</span>
              </div>

              <div className="mt-2 text-lg font-extrabold text-black">{product.name || "Без названия"}</div>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-[#F4F3F1] px-3 py-2">
                  <div className="text-black/60">Штрихкод</div>
                  <div className="font-semibold text-black">{product.barcode || "—"}</div>
                </div>
                <div className="rounded-xl bg-[#F4F3F1] px-3 py-2">
                  <div className="text-black/60">QR</div>
                  <div className="font-semibold text-black">{product.qr || "—"}</div>
                </div>
                <div className="rounded-xl bg-[#F4F3F1] px-3 py-2">
                  <div className="text-black/60">Категория</div>
                  <div className="font-semibold text-black">{product.category || "—"}</div>
                </div>
                <div className="rounded-xl bg-[#F4F3F1] px-3 py-2">
                  <div className="text-black/60">Бренд / модель</div>
                  <div className="font-semibold text-black">
                    {(product.brand || "—") + " / " + (product.model || "—")}
                  </div>
                </div>
              </div>

              {product.notes ? (
                <div className="mt-3 text-sm text-black/70 whitespace-pre-wrap">{product.notes}</div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}