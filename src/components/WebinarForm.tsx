import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export function WebinarForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="webinar" className="py-16 lg:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm uppercase tracking-widest opacity-60 mb-4">Бесплатный вебинар</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Начните говорить на английском за 30 дней
            </h2>
            <p className="opacity-70 leading-relaxed mb-8">
              На вебинаре разберём самые частые ошибки начинающих, покажем как использовать
              базовые слова в реальных разговорах и дадим план на первый месяц обучения.
            </p>

            <a
              href="https://t.me/Кровавая собака"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-background/10 hover:bg-background/20 transition-colors border border-background/20 rounded-lg px-5 py-3"
            >
              <Icon name="Send" size={20} />
              <span className="font-medium">Наш Telegram-канал</span>
              <Icon name="ArrowRight" size={16} className="opacity-60" />
            </a>
          </div>

          <div className="bg-background/10 rounded-2xl p-8 border border-background/20">
            {submitted ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} className="mx-auto mb-4 opacity-80" />
                <h3 className="font-serif text-2xl font-light mb-2">Вы зарегистрированы!</h3>
                <p className="opacity-70">Мы свяжемся с вами перед вебинаром. До встречи!</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-light mb-6">Записаться на вебинар</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm opacity-70 mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-background/60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm opacity-70 mb-2">Телефон или email</label>
                    <Input
                      type="text"
                      placeholder="+7 900 000 00 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-background/60"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-background text-foreground hover:bg-background/90 mt-2"
                    size="lg"
                  >
                    Записаться бесплатно
                  </Button>
                  <p className="text-xs opacity-50 text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
