interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-20 animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            О проекте
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight">
            Как это
            <br />
            <em className="italic">работает</em>
          </h1>
        </div>

        <div className="space-y-20 animate-fade-in-up delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-display text-6xl font-light text-muted-foreground/20 block mb-4">01</span>
              <h2 className="font-display text-3xl font-light mb-4">Зарегистрируйтесь</h2>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Нужен только email. Имя — по желанию. Мы не просим ничего лишнего.
              </p>
            </div>
            <div className="h-48 border border-border flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-4xl font-light mb-2">✉️</p>
                <p className="font-body text-xs text-muted-foreground">Быстрая регистрация</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-48 border border-border flex items-center justify-center md:order-first order-last">
              <div className="text-center">
                <p className="font-display text-4xl font-light mb-2">📝</p>
                <p className="font-body text-xs text-muted-foreground">Свободный формат письма</p>
              </div>
            </div>
            <div>
              <span className="font-display text-6xl font-light text-muted-foreground/20 block mb-4">02</span>
              <h2 className="font-display text-3xl font-light mb-4">Напишите письмо</h2>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Себе, другу, всему классу. Длина — любая. Дата открытия — от трёх месяцев до десяти лет вперёд.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-display text-6xl font-light text-muted-foreground/20 block mb-4">03</span>
              <h2 className="font-display text-3xl font-light mb-4">Напоминание за 7 дней</h2>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                За семь дней до открытия придёт письмо на почту. Можно предупредить адресата — или промолчать, пусть будет сюрприз.
              </p>
            </div>
            <div className="h-48 border border-border flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-4xl font-light mb-2">🔔</p>
                <p className="font-body text-xs text-muted-foreground">Уведомление за 7 дней</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-48 border border-border flex items-center justify-center md:order-first order-last">
              <div className="text-center">
                <p className="font-display text-4xl font-light mb-2">🎁</p>
                <p className="font-body text-xs text-muted-foreground">Момент открытия</p>
              </div>
            </div>
            <div>
              <span className="font-display text-6xl font-light text-muted-foreground/20 block mb-4">04</span>
              <h2 className="font-display text-3xl font-light mb-4">Капсула открывается</h2>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                В нужный день письмо уходит получателю. Если капсула публичная — появляется в галерее анонимно. Редактировать уже нельзя.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 p-10 bg-foreground text-background animate-fade-in-up delay-300">
          <h2 className="font-display text-3xl font-light mb-4">Зачем это вообще нужно</h2>
          <p className="font-body text-sm font-light leading-relaxed text-background/80 mb-8 max-w-xl">
            Выпускной — странное время. Всё заканчивается и начинается одновременно.
            Капсула — это способ зафиксировать, каким ты был в этот момент. Не для ленты, не для лайков. Просто для себя.
          </p>
          <button
            onClick={() => onNavigate("create")}
            className="px-8 py-3 bg-background text-foreground font-body text-sm font-light hover:bg-background/90 transition-colors"
          >
            Создать первую капсулу
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in-up delay-400">
          {[
            { value: "3 мин", label: "Среднее время создания" },
            { value: "до 10 лет", label: "Максимальный срок" },
            { value: "анонимно", label: "Публикация в галерее" },
          ].map((stat) => (
            <div key={stat.label} className="text-center border border-border p-6">
              <p className="font-display text-3xl font-light mb-1">{stat.value}</p>
              <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}