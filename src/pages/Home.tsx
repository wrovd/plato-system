import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Search,
  LayoutGrid,
  QrCode,
  Barcode,
  PackageSearch,
  Boxes,
  History,
  BarChart3,
  Settings,
  Printer,
  ShieldCheck,
  ClipboardList,
  Map,
  Package,
  Plus,
} from "lucide-react";

type PillProps = {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  hint?: string;
};

function IconCircleButton({
  icon,
  label,
  onClick,
  disabled,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  hint?: string;
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      aria-label={label}
      title={disabled && hint ? hint : undefined}
      className={[
        "w-11 h-11 md:w-12 md:h-12 rounded-full bg-white",
        "shadow-[0_10px_28px_rgba(0,0,0,0.08)]",
        "grid place-items-center transition active:scale-[0.98]",
        disabled ? "opacity-40 cursor-not-allowed" : "",
      ].join(" ")}
    >
      <span className="text-black">{icon}</span>
    </button>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between mt-8 mb-3">
      <div className="inline-flex items-center gap-2 text-black font-semibold text-[18px] md:text-[20px]">
        {title}
        <ChevronRight className="w-5 h-5 text-black/70" />
      </div>
    </div>
  );
}

function ActionPill({ icon, title, onClick, disabled, hint }: PillProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      title={disabled && hint ? hint : undefined}
      className={[
        "w-full flex items-center gap-3",
        "rounded-full bg-white px-5 py-4",
        "shadow-[0_10px_28px_rgba(0,0,0,0.08)]",
        "transition active:scale-[0.99]",
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)]",
      ].join(" ")}
    >
      <span className="w-8 h-8 grid place-items-center text-black">{icon}</span>
      <span className="text-[15px] md:text-[16px] font-semibold text-black">
        {title}
      </span>

      {disabled && hint ? (
        <span className="ml-auto text-xs font-semibold text-black/50">
          {hint}
        </span>
      ) : null}
    </button>
  );
}

function NoticeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-7 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
      <div className="text-sm font-semibold text-black">{title}</div>
      <div className="text-sm text-black/70 mt-1 leading-relaxed">{text}</div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

  // Всё выключено, кроме модуля "Товары"
  const ALL_DISABLED = true;
  const hintCommon = "в разработке";

  return (
    <div className="min-h-screen bg-[#F4F3F1]">
      <div className="max-w-[980px] mx-auto px-4 pb-10">
        {/* Верхняя панель */}
        <div className="pt-10 flex items-start justify-between">
          <div>
            <h1 className="text-[40px] md:text-[44px] font-extrabold tracking-[-0.8px] text-black">
              Главная
            </h1>
            <div className="mt-2 text-[15px] md:text-[16px] text-black/60">
              Plato — система поиска товаров и управления складом.
            </div>
          </div>

          {/* Верхние кнопки сейчас выключены */}
          <div className="flex items-center gap-3 pt-2">
            <IconCircleButton
              icon={<LayoutGrid className="w-5 h-5" />}
              label="Схема"
              disabled={true}
              hint={hintCommon}
            />
            <IconCircleButton
              icon={<Search className="w-5 h-5" />}
              label="Поиск"
              disabled={true}
              hint={hintCommon}
            />
          </div>
        </div>

        {/* Товары — ЕДИНСТВЕННЫЙ активный модуль */}
        <SectionHeader title="Товары" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<Package className="w-6 h-6" />}
            title="Найти товар"
            onClick={() => navigate("/products")}
          />
          <ActionPill
            icon={<Plus className="w-6 h-6" />}
            title="Создать товар"
            onClick={() => navigate("/products/new")}
          />
        </div>

        {/* Остальное — выключено */}
        <SectionHeader title="Быстрые действия" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<QrCode className="w-6 h-6" />}
            title="Сканировать QR-код"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
          <ActionPill
            icon={<Barcode className="w-6 h-6" />}
            title="Сканировать штрихкод"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
        </div>

        <SectionHeader title="Сборка заказов" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<ClipboardList className="w-6 h-6" />}
            title="Система сборщика"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
          <ActionPill
            icon={<History className="w-6 h-6" />}
            title="История действий"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
        </div>

        <SectionHeader title="Поиск товаров" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<PackageSearch className="w-6 h-6" />}
            title="Глобальный поиск"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
          <ActionPill
            icon={<Map className="w-6 h-6" />}
            title="Найти коробку"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
        </div>

        <SectionHeader title="Прочее" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<Boxes className="w-6 h-6" />}
            title="Создать коробку"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
          <ActionPill
            icon={<LayoutGrid className="w-6 h-6" />}
            title="Создать ячейку"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
          <ActionPill
            icon={<Printer className="w-6 h-6" />}
            title="Печать этикеток"
            disabled={true}
            hint={isMobile ? "только ПК" : hintCommon}
          />
          <ActionPill
            icon={<BarChart3 className="w-6 h-6" />}
            title="Статистика"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
          <ActionPill
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Роли и доступы"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
          <ActionPill
            icon={<Settings className="w-6 h-6" />}
            title="Настройки"
            disabled={ALL_DISABLED}
            hint={hintCommon}
          />
        </div>

        <NoticeCard
          title="Статус"
          text="Сейчас активен только модуль «Товары». Все остальные разделы выключены и будут включаться поэтапно после внедрения базы и логики."
        />
        <NoticeCard
          title="Правило мобильной версии"
          text="Печать этикеток (QR/штрихкод) будет доступна только на ПК. На телефоне функция всегда будет заблокирована с подсказкой."
        />
      </div>
    </div>
  );
}