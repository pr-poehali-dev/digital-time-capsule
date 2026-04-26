import Icon from "@/components/ui/icon";

function getDaysLeft(date: Date) {
  const diff = date.getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function StatusBadge({ status, openDate }: { status: string; openDate: Date }) {
  const days = getDaysLeft(openDate);

  if (status === "opened") {
    return (
      <span className="font-body text-xs text-muted-foreground border border-border px-3 py-1">
        Открыта
      </span>
    );
  }
  if (status === "reminder" || (days > 0 && days <= 7)) {
    return (
      <span className="font-body text-xs bg-foreground text-background px-3 py-1 flex items-center gap-1.5">
        <Icon name="Bell" size={10} />
        Напоминание через {days} дн.
      </span>
    );
  }
  return (
    <span className="font-body text-xs border border-border px-3 py-1 text-muted-foreground">
      Запечатана · {days > 0 ? `${days} дн.` : "скоро"}
    </span>
  );
}

export default function CabinetPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Личный кабинет
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light">
            Мои капсулы
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in-up delay-100">
          <div className="w-16 h-16 border border-border flex items-center justify-center mb-8">
            <Icon name="Package" size={24} className="text-muted-foreground" />
          </div>
          <h2 className="font-display text-3xl font-light mb-3">Пока пусто</h2>
          <p className="font-body text-sm text-muted-foreground font-light max-w-xs">
            Здесь будут ваши капсулы. Создайте первую — и она появится в этом кабинете.
          </p>
        </div>
      </div>
    </div>
  );
}
