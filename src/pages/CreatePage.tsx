import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function CreatePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "",
    recipient: "self",
    recipientName: "",
    recipientEmail: "",
    letter: "",
    openDate: "",
    isPublic: false,
    reminders: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mb-8">
          <Icon name="Check" size={24} className="text-foreground" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
          Капсула запечатана
        </h2>
        <p className="font-body text-sm text-muted-foreground font-light max-w-sm mb-2">
          Ваше письмо сохранено. Оно откроется{" "}
          <strong className="text-foreground font-normal">
            {form.openDate
              ? new Date(form.openDate).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "в указанную дату"}
          </strong>
          .
        </p>
        {form.reminders && (
          <p className="font-body text-sm text-muted-foreground font-light max-w-sm mb-12">
            За 7 дней до открытия мы пришлём вам напоминание.
          </p>
        )}
        <button
          onClick={() => { setSubmitted(false); setStep(1); setForm({ title: "", recipient: "self", recipientName: "", recipientEmail: "", letter: "", openDate: "", isPublic: false, reminders: true }); }}
          className="px-8 py-3 border border-border font-body text-sm font-light hover:bg-secondary transition-colors"
        >
          Создать ещё одну
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Создание капсулы
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light">
            Шаг {step} из 3
          </h1>

          <div className="flex gap-2 mt-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-px flex-1 transition-colors duration-500 ${
                  s <= step ? "bg-foreground" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Название капсулы
              </label>
              <input
                type="text"
                placeholder="Например: «Мне в 30 лет»"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 font-display text-2xl font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Кому адресовано
              </label>
              <div className="flex flex-col gap-3">
                {[
                  { value: "self", label: "Себе" },
                  { value: "friend", label: "Другу или подруге" },
                  { value: "class", label: "Всему классу" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setForm({ ...form, recipient: opt.value })}
                    className={`flex items-center gap-4 p-4 border text-left transition-all ${
                      form.recipient === opt.value
                        ? "border-foreground bg-secondary"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      form.recipient === opt.value ? "border-foreground" : "border-border"
                    }`}>
                      {form.recipient === opt.value && (
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      )}
                    </div>
                    <span className="font-body text-sm font-light">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {form.recipient !== "self" && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Имя получателя
                  </label>
                  <input
                    type="text"
                    placeholder="Имя"
                    value={form.recipientName}
                    onChange={(e) => setForm({ ...form, recipientName: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-base font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Email получателя
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={form.recipientEmail}
                    onChange={(e) => setForm({ ...form, recipientEmail: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-base font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Ваше письмо
              </label>
              <textarea
                placeholder="Дорогой я через пять лет..."
                value={form.letter}
                onChange={(e) => setForm({ ...form, letter: e.target.value })}
                rows={14}
                className="w-full bg-transparent border border-border p-6 font-display text-lg font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors resize-none leading-relaxed"
              />
              <div className="mt-2 text-right">
                <span className="font-body text-xs text-muted-foreground">
                  {form.letter.length} символов
                </span>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-10 animate-fade-in-up">
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Дата открытия капсулы
              </label>
              <input
                type="date"
                value={form.openDate}
                min={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                onChange={(e) => setForm({ ...form, openDate: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 font-body text-base font-light focus:outline-none focus:border-foreground transition-colors"
              />
              {form.openDate && (
                <p className="mt-3 font-body text-xs text-muted-foreground">
                  Капсула откроется{" "}
                  {new Date(form.openDate).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Настройки
              </label>

              <button
                onClick={() => setForm({ ...form, reminders: !form.reminders })}
                className="flex items-center justify-between w-full p-5 border border-border hover:bg-secondary transition-colors"
              >
                <div className="text-left">
                  <p className="font-body text-sm font-light">Напоминание за 7 дней</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    Пришлём письмо на вашу почту до открытия капсулы
                  </p>
                </div>
                <div className={`w-10 h-5 rounded-full transition-colors relative ${
                  form.reminders ? "bg-foreground" : "bg-border"
                }`}>
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${
                    form.reminders ? "left-5.5 left-[22px]" : "left-0.5"
                  }`} />
                </div>
              </button>

              <button
                onClick={() => setForm({ ...form, isPublic: !form.isPublic })}
                className="flex items-center justify-between w-full p-5 border border-border hover:bg-secondary transition-colors"
              >
                <div className="text-left">
                  <p className="font-body text-sm font-light">Добавить в публичную галерею</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    Анонимно — без имени и контактов
                  </p>
                </div>
                <div className={`w-10 h-5 rounded-full transition-colors relative ${
                  form.isPublic ? "bg-foreground" : "bg-border"
                }`}>
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${
                    form.isPublic ? "left-[22px]" : "left-0.5"
                  }`} />
                </div>
              </button>
            </div>

            <div className="p-6 bg-secondary border border-border">
              <h3 className="font-display text-lg font-light mb-3">Итог</h3>
              <div className="space-y-2">
                <div className="flex justify-between font-body text-sm font-light">
                  <span className="text-muted-foreground">Название</span>
                  <span>{form.title || "—"}</span>
                </div>
                <div className="flex justify-between font-body text-sm font-light">
                  <span className="text-muted-foreground">Адресат</span>
                  <span>{form.recipient === "self" ? "Себе" : form.recipient === "friend" ? form.recipientName || "Другу" : "Всему классу"}</span>
                </div>
                <div className="flex justify-between font-body text-sm font-light">
                  <span className="text-muted-foreground">Дата открытия</span>
                  <span>
                    {form.openDate
                      ? new Date(form.openDate).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "—"}
                  </span>
                </div>
                <div className="flex justify-between font-body text-sm font-light">
                  <span className="text-muted-foreground">Напоминание</span>
                  <span>{form.reminders ? "За 7 дней" : "Нет"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-12">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={14} />
              Назад
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-foreground text-background font-body text-sm font-light hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            {step === 3 ? "Запечатать капсулу" : "Продолжить"}
            <Icon name="ArrowRight" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
