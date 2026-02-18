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
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white
                 shadow-[0_10px_28px_rgba(0,0,0,0.08)]
                 grid place-items-center
                 active:scale-[0.98] transition"
    >
      <span className="text-black">{icon}</span>
    </button>
  );
}

function SectionHeader({
  title,
}: {
  title: string;
}) {
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
      className={[
        "w-full flex items-center gap-3",
        "rounded-full bg-white px-5 py-4",
        "shadow-[0_10px_28px_rgba(0,0,0,0.08)]",
        "transition active:scale-[0.99]",
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)]",
      ].join(" ")}
      title={disabled && hint ? hint : undefined}
    >
      <span className="w-8 h-8 grid place-items-center text-black">
        {icon}
      </span>

      <span className="text-[15px] md:text-[16px] font-semibold text-black">
        {title}
      </span>

      {disabled && hint && (
        <span className="ml-auto text-xs font-semibold text-black/50">
          {hint}
        </span>
      )}
    </button>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

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

          <div className="flex items-center gap-3 pt-2">
            <IconCircleButton
              icon={<LayoutGrid className="w-5 h-5" />}
              label="Схема"
              onClick={() => navigate("/search")}
            />
            <IconCircleButton
              icon={<Search className="w-5 h-5" />}
              label="Поиск"
              onClick={() => navigate("/search")}
            />
          </div>
        </div>

        {/* Быстрые действия */}
        <SectionHeader title="Быстрые действия" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<QrCode className="w-6 h-6" />}
            title="Сканировать QR-код"
            onClick={() => navigate("/search")}
          />
          <ActionPill
            icon={<Barcode className="w-6 h-6" />}
            title="Сканировать штрихкод"
            onClick={() => navigate("/search")}
          />
        </div>

        {/* Сборка заказов */}
        <SectionHeader title="Сборка заказов" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<ClipboardList className="w-6 h-6" />}
            title="Система сборщика"
            disabled
            hint="скоро"
          />
          <ActionPill
            icon={<History className="w-6 h-6" />}
            title="История действий"
            onClick={() => navigate("/history")}
          />
        </div>

        {/* Поиск товаров */}
        <SectionHeader title="Поиск товаров" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<PackageSearch className="w-6 h-6" />}
            title="Глобальный поиск"
            onClick={() => navigate("/search")}
          />
          <ActionPill
            icon={<Map className="w-6 h-6" />}
            title="Найти коробку"
            onClick={() => navigate("/search")}
          />
        </div>

        {/* Прочее */}
        <SectionHeader title="Прочее" />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<Boxes className="w-6 h-6" />}
            title="Создать коробку"
            onClick={() => navigate("/boxes/new")}
          />
          <ActionPill
            icon={<LayoutGrid className="w-6 h-6" />}
            title="Создать ячейку"
            onClick={() => navigate("/cells/new")}
          />
          <ActionPill
            icon={<Printer className="w-6 h-6" />}
            title="Печать этикеток"
            disabled={isMobile}
            hint={isMobile ? "только ПК" : undefined}
            onClick={() => navigate("/print")}
          />
          <ActionPill
            icon={<BarChart3 className="w-6 h-6" />}
            title="Статистика"
            onClick={() => navigate("/stats")}
          />
          <ActionPill
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Роли и доступы"
            onClick={() => navigate("/roles")}
          />
          <ActionPill
            icon={<Settings className="w-6 h-6" />}
            title="Настройки"
            onClick={() => navigate("/settings")}
          />
        </div>
      </div>
    </div>
  );
}