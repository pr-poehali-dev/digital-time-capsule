import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Можно ли редактировать письмо после создания?",
    a: "До момента отправки — да. После того как капсула «запечатана» и дата наступила, письмо становится неизменным. Это сделано намеренно.",
  },
  {
    q: "Что происходит, если получатель не откроет письмо?",
    a: "Письмо остаётся доступным в течение 30 дней после даты открытия. После этого оно архивируется.",
  },
  {
    q: "Как работает напоминание за 7 дней?",
    a: "За неделю до открытия система автоматически отправляет email-уведомление на адрес, указанный при регистрации. Вы можете отключить эту опцию при создании капсулы.",
  },
  {
    q: "Могу ли я удалить капсулу?",
    a: "Да. Зайдите в личный кабинет, откройте нужную капсулу и выберите «Удалить». Восстановить удалённую капсулу невозможно.",
  },
  {
    q: "Как попасть в публичную галерею?",
    a: "При создании капсулы включите опцию «Добавить в галерею». Письмо появится анонимно — без имени, email и города, если вы не укажете их явно.",
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
            Не нашли ответ? Опишите вопрос — ответим в течение суток.
          </p>

          {sent ? (
            <div className="border border-border p-10 text-center animate-scale-in">
              <div className="w-12 h-12 border border-border flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={18} />
              </div>
              <h3 className="font-display text-2xl font-light mb-2">Сообщение отправлено</h3>
              <p className="font-body text-sm text-muted-foreground font-light">
                Мы ответим в течение 24 часов на {form.email}
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
              <p className="font-body text-xs text-muted-foreground">До 24 часов в рабочие дни</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
