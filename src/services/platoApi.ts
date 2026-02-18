import { PLATO_API } from "./platoConfig";

type ApiOk<T> = { ok: true } & T;
type ApiErr = { ok: false; error: string };

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { method: "GET" });
  return res.json();
}

async function postJson<T>(url: string, body: any): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

function ensureConfigured() {
  if (!PLATO_API.BASE_URL || PLATO_API.BASE_URL.includes("PASTE_")) {
    throw new Error("PLATO API не настроен: вставь BASE_URL в src/services/platoConfig.ts");
  }
  if (!PLATO_API.API_KEY || PLATO_API.API_KEY.includes("PASTE_")) {
    throw new Error("PLATO API не настроен: вставь API_KEY в src/services/platoConfig.ts");
  }
}

export type Product = {
  productId: string;
  sku4: string;
  name: string;
  barcode: string;
  qr: string;
  category: string;
  brand: string;
  model: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export async function health(): Promise<ApiOk<{ ts: string }> | ApiErr> {
  try {
    ensureConfigured();
    const url = `${PLATO_API.BASE_URL}?action=health&apiKey=${encodeURIComponent(PLATO_API.API_KEY)}`;
    return await getJson(url);
  } catch (e: any) {
    return { ok: false, error: e?.message || "health failed" };
  }
}

export async function productsSearch(q: string): Promise<ApiOk<{ found: boolean; product: Product | null }> | ApiErr> {
  try {
    ensureConfigured();
    const url = `${PLATO_API.BASE_URL}?action=products.search&apiKey=${encodeURIComponent(
      PLATO_API.API_KEY
    )}&q=${encodeURIComponent(q)}`;
    return await getJson(url);
  } catch (e: any) {
    return { ok: false, error: e?.message || "search failed" };
  }
}

export async function productsCreate(payload: {
  name: string;
  barcode?: string;
  category?: string;
  brand?: string;
  model?: string;
  notes?: string;
}): Promise<ApiOk<{ product: Product }> | ApiErr> {
  try {
    ensureConfigured();
    const url = `${PLATO_API.BASE_URL}?apiKey=${encodeURIComponent(PLATO_API.API_KEY)}`;
    return await postJson(url, { action: "products.create", ...payload });
  } catch (e: any) {
    return { ok: false, error: e?.message || "create failed" };
  }
}