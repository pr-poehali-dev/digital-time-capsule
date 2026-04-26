import { useState } from "react";
import Icon from "@/components/ui/icon";

const capsules = [
  {
    id: 1,
    year: "2024",
    excerpt: "Надеюсь, что к тому времени я всё-таки научился просить о помощи. Это моя главная задача.",
    openIn: "2029",
    city: "Москва",
    mood: "задумчивое",
  },
  {
    id: 2,
    year: "2023",
    excerpt: "Ты добился этого. Помнишь, как боялся? Теперь оглянись назад и улыбнись.",
    openIn: "2026",
    city: "Санкт-Петербург",
    mood: "вдохновляющее",
  },
  {
    id: 3,
    year: "2022",
    excerpt: "Пусть ты не помнишь, что значит быть молодым. Тогда перечитай это письмо ещё раз.",
    openIn: "2027",
    city: "Казань",
    mood: "ностальгическое",
  },
  {
    id: 4,
    year: "2024",
    excerpt: "Мы обещали друг другу никогда не терять связь. Надеюсь, мы сдержали слово.",
    openIn: "2030",
    city: "Екатеринбург",
    mood: "трогательное",
  },
  {
    id: 5,
    year: "2023",
    excerpt: "К 2030-му году человечество точно найдёт способ делать кофе, который не остывает.",
    openIn: "2030",
    city: "Новосибирск",
    mood: "юмористическое",
  },
  {
    id: 6,
    year: "2024",
    excerpt: "Я хочу, чтобы ты знал: каждый выбор, который ты сделал, привёл тебя именно туда, где надо.",
    openIn: "2034",
    city: "Нижний Новгород",
    mood: "принимающее",
  },
];

const filters = ["Все", "2022", "2023", "2024"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeFilter === "Все"
    ? capsules
    : capsules.filter((c) => c.year === activeFilter);

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

        <div className="flex gap-2 mb-12 animate-fade-in-up delay-100">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 font-body text-sm font-light transition-all ${
                activeFilter === f
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 animate-fade-in-up delay-200">
          {filtered.map((capsule, idx) => (
            <div
              key={capsule.id}
              className="break-inside-avoid mb-6 border border-border p-6 cursor-pointer hover:bg-secondary transition-all group"
              onClick={() => setExpanded(expanded === capsule.id ? null : capsule.id)}
              style={{ animationDelay: `${idx * 0.05 + 0.3}s`, animationFillMode: "both" }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-body text-xs tracking-[0.2em] text-muted-foreground">
                  Выпуск {capsule.year}
                </span>
                <Icon
                  name={expanded === capsule.id ? "ChevronUp" : "ChevronDown"}
                  size={14}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </div>

              <p className="font-display text-base font-light italic leading-relaxed">
                «{capsule.excerpt}»
              </p>

              {expanded === capsule.id && (
                <div className="mt-4 pt-4 border-t border-border space-y-2 animate-fade-in">
                  <div className="flex justify-between font-body text-xs text-muted-foreground">
                    <span>Город</span>
                    <span>{capsule.city}</span>
                  </div>
                  <div className="flex justify-between font-body text-xs text-muted-foreground">
                    <span>Откроется</span>
                    <span>в {capsule.openIn}</span>
                  </div>
                  <div className="flex justify-between font-body text-xs text-muted-foreground">
                    <span>Настроение</span>
                    <span>{capsule.mood}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up delay-400">
          <p className="font-display text-2xl font-light italic text-muted-foreground mb-6">
            Хотите поделиться своим письмом?
          </p>
          <p className="font-body text-sm text-muted-foreground font-light mb-8">
            При создании капсулы включите опцию «Добавить в галерею»
          </p>
        </div>
      </div>
    </div>
  );
}
