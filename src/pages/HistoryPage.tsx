import Icon from "@/components/ui/icon";

const history = [
  {
    id: 1,
    type: "reminder",
    title: "Напоминание: «Другу Артёму»",
    text: "Капсула откроется через 7 дней. Не забудьте — письмо уйдёт получателю 1 сентября 2026.",
    date: "25 августа 2026",
    time: "09:00",
    icon: "Bell",
  },
  {
    id: 2,
    type: "sent",
    title: "Капсула «Выпускной 2023» доставлена",
    text: "Письмо успешно отправлено всем участникам класса 11А. Получателей: 28 человек.",
    date: "20 июня 2026",
    time: "12:00",
    icon: "Send",
  },
  {
    id: 3,
    type: "created",
    title: "Создана капсула «Мне в 30 лет»",
    text: "Капсула запечатана и будет ждать вас до 1 июня 2029.",
    date: "12 мая 2024",
    time: "18:35",
    icon: "Package",
  },
  {
    id: 4,
    type: "reminder",
    title: "Напоминание: «Выпускной 2023»",
    text: "Осталась одна неделя. Скоро капсула откроется для всего класса.",
    date: "13 июня 2023",
    time: "09:00",
    icon: "Bell",
  },
  {
    id: 5,
    type: "created",
    title: "Создана капсула «Выпускной 2023»",
    text: "Капсула создана и адресована 28 выпускникам класса 11А.",
    date: "20 июня 2023",
    time: "14:22",
    icon: "Package",
  },
];

const typeColors: Record<string, string> = {
  reminder: "bg-foreground text-background",
  sent: "border border-foreground",
  created: "border border-border",
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Хронология
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light">
            История
          </h1>
        </div>

        <div className="relative animate-fade-in-up delay-100">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {history.map((item, idx) => (
              <div
                key={item.id}
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s`, animationFillMode: "both" }}
              >
                <div className={`relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center ${typeColors[item.type]}`}>
                  <Icon name={item.icon} fallback="Circle" size={14} />
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl font-light leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <p className="font-body text-xs text-muted-foreground">{item.date}</p>
                      <p className="font-body text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                    {item.text}
                  </p>

                  {item.type === "reminder" && (
                    <div className="mt-4 flex items-center gap-2 font-body text-xs text-foreground">
                      <Icon name="Bell" size={12} />
                      Уведомление отправлено на email
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 border border-border animate-fade-in-up delay-500">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
              <Icon name="Info" size={14} className="text-muted-foreground" />
            </div>
            <div>
              <h4 className="font-display text-lg font-light mb-1">О напоминаниях</h4>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Система автоматически отправляет уведомление на ваш email за 7 дней
                до даты открытия капсулы. Это позволяет подготовиться к получению
                письма или предупредить адресата.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}