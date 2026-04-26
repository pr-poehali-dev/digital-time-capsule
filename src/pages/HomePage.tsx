interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 delay-100 animate-fade-in-up">
            Капсулы времени для выпускников
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight mb-8 delay-200 animate-fade-in-up">
            Письма
            <br />
            <em className="italic">будущему</em>
            <br />
            себе
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground font-light max-w-md mx-auto mb-12 delay-300 animate-fade-in-up">
            Пишешь сейчас — читаешь через несколько лет. Можно себе, другу или всему классу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center delay-400 animate-fade-in-up">
            <button
              onClick={() => onNavigate("create")}
              className="px-8 py-3.5 bg-foreground text-background font-body text-sm font-light tracking-wide hover:opacity-80 transition-opacity"
            >
              Создать капсулу
            </button>
            <button
              onClick={() => onNavigate("gallery")}
              className="px-8 py-3.5 border border-border font-body text-sm font-light tracking-wide text-foreground hover:bg-secondary transition-colors"
            >
              Смотреть галерею
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-fade-in delay-600">
          <div className="w-px h-12 bg-border" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              {
                number: "01",
                title: "Пишете письмо",
                text: "Выбираете дату — когда капсула откроется. Хоть через полгода, хоть через восемь лет.",
              },
              {
                number: "02",
                title: "За неделю — напоминание",
                text: "Придёт письмо на почту. Чтобы не пропустить и, если нужно, предупредить получателя.",
              },
              {
                number: "03",
                title: "Капсула открывается",
                text: "Вы или адресат читает то, что было написано. Без возможности изменить ни слова.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="font-display text-4xl font-light text-muted-foreground/40">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-light">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-light italic mb-6">
            «Дорогой я через десять лет...»
          </h2>
          <button
            onClick={() => onNavigate("create")}
            className="px-8 py-3.5 bg-background text-foreground font-body text-sm font-light tracking-wide hover:bg-background/90 transition-colors"
          >
            Начать сейчас
          </button>
        </div>
      </section>


    </div>
  );
}