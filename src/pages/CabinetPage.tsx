import Icon from "@/components/ui/icon";

const capsules = [
  {
    id: 1,
    title: "Мне в 30 лет",
    recipient: "Себе",
    created: "12 мая 2024",
    openDate: new Date("2029-06-01"),
    status: "sealed",
    letter: "Дорогой я через пять лет...",
  },
  {
    id: 2,
    title: "Другу Артёму",
    recipient: "Артём К.",
    created: "3 сентября 2023",
    openDate: new Date("2026-09-01"),
    status: "reminder",
    letter: "Привет, Тём! Если ты читаешь это...",
  },
  {
    id: 3,
    title: "Выпускной 2023",
    recipient: "Всему классу",
    created: "20 июня 2023",
    openDate: new Date("2026-06-20"),
    status: "opened",
    letter: "Дорогой 11А...",
  },
];

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
          <div className="flex items-end justify-between">
            <h1 className="font-display text-5xl md:text-6xl font-light">
              Мои капсулы
            </h1>
            <span className="font-body text-sm text-muted-foreground mb-2">
              {capsules.length} капсулы
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up delay-100">
          {[
            { label: "Всего капсул", value: "3" },
            { label: "Активных", value: "2" },
            { label: "Открытых", value: "1" },
          ].map((stat) => (
            <div key={stat.label} className="border border-border p-6">
              <p className="font-display text-4xl font-light mb-2">{stat.value}</p>
              <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 animate-fade-in-up delay-200">
          {capsules.map((capsule) => {
            const days = getDaysLeft(capsule.openDate);
            return (
              <div
                key={capsule.id}
                className={`border p-6 md:p-8 transition-all hover:shadow-sm ${
                  capsule.status === "reminder"
                    ? "border-foreground bg-secondary"
                    : "border-border"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-2xl font-light">
                        {capsule.title}
                      </h3>
                    </div>
                    <p className="font-body text-xs text-muted-foreground mb-4">
                      Создана {capsule.created} · {capsule.recipient}
                    </p>
                    <p className="font-display text-base font-light italic text-muted-foreground line-clamp-2">
                      «{capsule.letter}»
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-3">
                    <StatusBadge status={capsule.status} openDate={capsule.openDate} />
                    <p className="font-body text-xs text-muted-foreground">
                      {capsule.openDate.toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>

                    {capsule.status !== "opened" && days > 0 && (
                      <div className="w-full md:w-32">
                        <div className="h-px bg-border mb-1 relative overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-foreground transition-all"
                            style={{ width: `${Math.min(100, ((365 - days) / 365) * 100)}%` }}
                          />
                        </div>
                        <p className="font-body text-xs text-muted-foreground text-right">
                          {Math.round(((365 - days) / 365) * 100)}% пути
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {capsule.status === "reminder" && (
                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                    <Icon name="Bell" size={14} className="text-foreground" />
                    <p className="font-body text-xs text-foreground">
                      Напоминание: письмо уйдёт получателю через {days} дней. Проверьте текст заранее.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
