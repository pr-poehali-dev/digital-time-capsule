import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Можно поменять письмо после того, как создал капсулу?",
    a: "Пока дата не наступила — да, можно зайти и отредактировать. Как только капсула открылась, всё, что там написано, уже не изменить.",
  },
  {
    q: "Получатель не зашёл — что будет с письмом?",
    a: "Письмо будет ждать ещё 30 дней. Если так и не откроют — уйдёт в архив. Написать нам, если нужно восстановить.",
  },
  {
    q: "Напоминание — это обязательно?",
    a: "Нет. При создании капсулы можно просто выключить этот пункт. Но по умолчанию за неделю придёт письмо на почту — чтобы не пропустить.",
  },
  {
    q: "Хочу удалить капсулу — как?",
    a: "В личном кабинете откройте капсулу и там найдёте кнопку удаления. Обратно уже не вернуть, так что лучше убедиться заранее.",
  },
  {
    q: "Как письмо попадает в галерею?",
    a: "Только если вы сами включили эту опцию при создании. Имя и контакты не показываются — только текст и год выпуска.",
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Помощь
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light">
            Поддержка
          </h1>
        </div>

        <div className="mb-20 animate-fade-in-up delay-100">
          <h2 className="font-display text-2xl font-light mb-8">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-1">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="font-body text-sm font-light">{faq.q}</span>
                  <Icon
                    name={openFaq === idx ? "Minus" : "Plus"}
                    size={14}
                    className="flex-shrink-0 text-muted-foreground"
                  />
                </button>
                {openFaq === idx && (
                  <div className="pb-5 animate-fade-in">
                    <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up delay-200">
          <h2 className="font-display text-2xl font-light mb-2">Написать нам</h2>
          <p className="font-body text-sm text-muted-foreground font-light mb-8">
            Если что-то пошло не так или остался вопрос — напишите, разберёмся.
          </p>

          {sent ? (
            <div className="border border-border p-10 text-center animate-scale-in">
              <div className="w-12 h-12 border border-border flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={18} />
              </div>
              <h3 className="font-display text-2xl font-light mb-2">Сообщение отправлено</h3>
              <p className="font-body text-sm text-muted-foreground font-light">
                Ответим на {form.email} — обычно в тот же день
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-sm font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-sm font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Сообщение
                </label>
                <textarea
                  placeholder="Опишите ваш вопрос или проблему..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  className="w-full bg-transparent border border-border p-4 font-body text-sm font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <button
                onClick={() => setSent(true)}
                className="px-8 py-3 bg-foreground text-background font-body text-sm font-light hover:opacity-80 transition-opacity"
              >
                Отправить
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up delay-300">
          <div className="border border-border p-6 flex items-start gap-4">
            <Icon name="Mail" size={16} className="text-muted-foreground mt-0.5" />
            <div>
              <p className="font-body text-sm font-light mb-1">Email</p>
              <p className="font-body text-xs text-muted-foreground">hello@capsule.ru</p>
            </div>
          </div>
          <div className="border border-border p-6 flex items-start gap-4">
            <Icon name="Clock" size={16} className="text-muted-foreground mt-0.5" />
            <div>
              <p className="font-body text-sm font-light mb-1">Время ответа</p>
              <p className="font-body text-xs text-muted-foreground">Обычно в тот же день</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}