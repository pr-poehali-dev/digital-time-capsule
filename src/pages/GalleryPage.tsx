import Icon from "@/components/ui/icon";

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Анонимные капсулы
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">
            Галерея
          </h1>
          <p className="font-body text-sm text-muted-foreground font-light max-w-lg">
            Выпускники со всей страны делятся частичкой себя. Все письма анонимны
            и публикуются только с разрешения автора.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in-up delay-100">
          <div className="w-16 h-16 border border-border flex items-center justify-center mb-8">
            <Icon name="BookOpen" size={24} className="text-muted-foreground" />
          </div>
          <h2 className="font-display text-3xl font-light mb-3">Галерея пуста</h2>
          <p className="font-body text-sm text-muted-foreground font-light max-w-xs">
            Здесь будут анонимные отрывки из капсул выпускников, которые выбрали поделиться.
          </p>
        </div>

        <div className="mt-8 text-center animate-fade-in-up delay-200">
          <p className="font-display text-xl font-light italic text-muted-foreground mb-3">
            Хотите поделиться своим письмом?
          </p>
          <p className="font-body text-sm text-muted-foreground font-light">
            При создании капсулы включите опцию «Добавить в галерею»
          </p>
        </div>
      </div>
    </div>
  );
}
