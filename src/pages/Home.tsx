import React from "react";
import {
  ChevronRight,
  Search,
  Map,
  QrCode,
  Barcode,
  PackageSearch,
  Boxes,
  LayoutGrid,
  History,
  BarChart3,
  Settings,
  Printer,
  ShieldCheck,
  ClipboardList,
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
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex items-center justify-between mt-7 mb-3">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 text-black font-semibold text-[18px] md:text-[20px]"
      >
        {title}
        <ChevronRight className="w-5 h-5 text-black/70" />
      </button>
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
        disabled ? "opacity-45 cursor-not-allowed" : "hover:shadow-[0_14px_32px_rgba(0,0,0,0.10)]",
      ].join(" ")}
      title={disabled && hint ? hint : undefined}
    >
      <span className="w-8 h-8 grid place-items-center text-black">{icon}</span>
      <span className="text-[15px] md:text-[16px] font-semibold text-black leading-tight">
        {title}
      </span>

      {disabled && hint ? (
        <span className="ml-auto text-xs font-semibold text-black/50">{hint}</span>
      ) : null}
    </button>
  );
}

function NoticeCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="mt-7 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
      <div className="text-sm font-semibold text-black">{title}</div>
      <div className="text-sm text-black/70 mt-1 leading-relaxed">{text}</div>
    </div>
  );
}

export default function Home() {
  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

  // Здесь позже подключим реальные переходы/модалки.
  const toast = (msg: string) => alert(msg);

  const onPrintLabels = () => {
    if (isMobile) {
      toast("Печать этикеток доступна только с ПК. Открой Plato на компьютере.");
      return;
    }
    toast("Открываем модуль печати (в разработке).");
  };

  return (
    <div className="min-h-screen bg-[#F4F3F1]">
      <div className="max-w-[980px] mx-auto px-4 pb-10">
        {/* Top bar */}
        <div className="pt-10 flex items-start justify-between">
          <div>
            <h1 className="text-[40px] md:text-[44px] font-extrabold tracking-[-0.8px] text-black">
              Главная
            </h1>
            <div className="mt-2 text-[15px] md:text-[16px] text-black/60">
              Plato — система поиска товаров по QR/штрихкодам.
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <IconCircleButton
              icon={<LayoutGrid className="w-5 h-5" />}
              label="Схема"
              onClick={() => toast("Схема/карта склада (в разработке)")}
            />
            <IconCircleButton
              icon={<Search className="w-5 h-5" />}
              label="Поиск"
              onClick={() => toast("Глобальный поиск (в разработке)")}
            />
          </div>
        </div>

        {/* Быстрые действия */}
        <SectionHeader
          title="Быстрые действия"
          onClick={() => toast("Раздел: Быстрые действия")}
        />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<QrCode className="w-6 h-6" />}
            title="Сканировать QR-код"
            onClick={() => toast("Сканер QR (в разработке)")}
          />
          <ActionPill
            icon={<Barcode className="w-6 h-6" />}
            title="Сканировать штрихкод"
            onClick={() => toast("Сканер штрихкодов (в разработке)")}
          />
        </div>

        {/* Сборка заказов */}
        <SectionHeader
          title="Сборка заказов"
          onClick={() => toast("Раздел: Сборка заказов")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<ClipboardList className="w-6 h-6" />}
            title="Открыть систему сборщика"
            onClick={() => toast("Контур сборщика (в разработке)")}
          />
          <ActionPill
            icon={<History className="w-6 h-6" />}
            title="История последних действий"
            onClick={() => toast("История действий (в разработке)")}
          />
        </div>

        {/* Поиск товаров */}
        <SectionHeader
          title="Поиск товаров"
          onClick={() => toast("Раздел: Поиск товаров")}
        />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<PackageSearch className="w-6 h-6" />}
            title="Глобальный поиск"
            onClick={() => toast("Глобальный поиск (в разработке)")}
          />
          <ActionPill
            icon={<Map className="w-6 h-6" />}
            title="Найти коробку / место"
            onClick={() => toast("Поиск коробок/мест (в разработке)")}
          />
        </div>

        {/* Прочее */}
        <SectionHeader
          title="Прочее"
          onClick={() => toast("Раздел: Прочее")}
        />
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <ActionPill
            icon={<Boxes className="w-6 h-6" />}
            title="Создать коробку поставки"
            onClick={() => toast("Создание коробки (в разработке)")}
          />
          <ActionPill
            icon={<LayoutGrid className="w-6 h-6" />}
            title="Создать ячейку"
            onClick={() => toast("Создание ячейки (в разработке)")}
          />
          <ActionPill
            icon={<Printer className="w-6 h-6" />}
            title="Печать этикеток (QR/штрихкод)"
            disabled={isMobile}
            hint={isMobile ? "только ПК" : undefined}
            onClick={onPrintLabels}
          />
          <ActionPill
            icon={<BarChart3 className="w-6 h-6" />}
            title="Статистика использований"
            onClick={() => toast("Статистика (в разработке)")}
          />
          <ActionPill
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Роли и доступы"
            onClick={() => toast("Роли/доступы (в разработке)")}
          />
          <ActionPill
            icon={<Settings className="w-6 h-6" />}
            title="Настройки"
            onClick={() => toast("Настройки (в разработке)")}
          />
        </div>

        {/* Уведомления */}
        <NoticeCard
          title="Важное"
          text="Печать этикеток (QR/штрихкод) доступна только с ПК. На мобильной версии кнопка будет заблокирована и покажет подсказку."
        />
        <NoticeCard
          title="Безопасность"
          text="Регистрация доступна только по заявке. Аккаунт активируется администратором после подтверждения."
        />
      </div>
    </div>
  );
}