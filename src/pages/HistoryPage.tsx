import Icon from "@/components/ui/icon";

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

        <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in-up delay-100">
          <div className="w-16 h-16 border border-border flex items-center justify-center mb-8">
            <Icon name="Clock" size={24} className="text-muted-foreground" />
          </div>
          <h2 className="font-display text-3xl font-light mb-3">История пуста</h2>
          <p className="font-body text-sm text-muted-foreground font-light max-w-xs">
            Все события — создание капсул, напоминания и открытия — будут отображаться здесь.
          </p>
        </div>

        <div className="p-6 border border-border animate-fade-in-up delay-200">
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
