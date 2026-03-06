export function WhatIsArt() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/classical-art-museum-painting.jpg"
                alt="Изучение английского языка"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-balance">
                Зачем учить английский с нами?
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Английский — это язык, который открывает двери по всему миру. Но часто начинающие
                  тратят время на поиск подходящих материалов, разбросанных по десяткам сайтов.
                  Мы собрали всё необходимое в одном месте.
                </p>

                <p>
                  На EnglishBase вы найдёте полные словари с переводом и примерами предложений —
                  существительные, глаголы, прилагательные, наречия, местоимения, предлоги и союзы.
                  Всё структурировано так, чтобы учиться было легко и приятно.
                </p>

                <p>
                  Каждое слово сопровождается простым примером использования в реальном предложении.
                  Больше не нужно гадать, как применить слово на практике — примеры показывают это сразу.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Наш подход — это «всё в одном месте»: от первых базовых слов до полных списков прилагательных
              и подробного разбора местоимений. Вы строите прочный фундамент, который действительно
              нужен в повседневной жизни — для общения, чтения и письма.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">О платформе EnglishBase</h3>
              <p>
                EnglishBase создан для тех, кто только начинает изучать английский и хочет получить
                надёжную базу быстро. Мы верим, что язык должен быть доступным и понятным. Наша миссия —
                дать вам полный набор слов и грамматических конструкций, которые реально используются
                в повседневной жизни, с чёткими примерами и без лишней воды.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}