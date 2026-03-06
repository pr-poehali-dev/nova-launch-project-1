export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Всё необходимое для старта — в одном месте
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                EnglishBase создан с убеждением, что выучить базовый английский можно без сложных
                учебников и дорогих курсов. Мы собрали самые нужные слова и правила так, чтобы
                любой начинающий мог сразу применять их в жизни.
              </p>
              <p>
                Наша платформа даёт полную базу: 590+ слов по категориям, 600+ прилагательных
                с примерами, все типы местоимений с разбором. Никаких лишних усилий —
                просто открываете нужный раздел и учите.
              </p>
              <p className="text-muted-foreground">
                Каждое слово сопровождается переводом и простым примером предложения,
                чтобы вы сразу понимали, как его использовать в реальной речи.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/art-gallery-interior-contemporary.jpg"
              alt="Изучение английского языка"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}