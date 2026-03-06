export function ArtSpaces() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">590 слов для начинающих</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Базовый словарный запас, который нужен в реальной жизни — по категориям с переводом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/fine-art-portrait-photography.jpg"
                alt="Люди и семья"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Люди и семья</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                man, woman, boy, girl, child, friend, family, mother, father, brother, sister...
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/abstract-colorful-painting-modern-art.jpg"
                alt="Действия и глаголы"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Действия</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                be, have, go, come, see, eat, drink, read, write, play, work, study, sleep...
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/digital-art-abstract-colorful-design.jpg"
                alt="Места и вещи"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Места и предметы</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                house, school, book, pen, apple, water, dog, cat, car, city, country...
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/abstract-minimalist-painting.jpg"
                alt="Время и место"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Время и место</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                now, then, here, there, always, never, sometimes, day, night, time...
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/mixed-media-collage-art.jpg"
                alt="Числа и вопросы"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Числа и вопросы</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                one–ten, who, what, where, when, why, how, yes, no, and, or, but...
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/contemporary-abstract-colorful-art.jpg"
                alt="Предлоги и союзы"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Предлоги и союзы</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                in, on, under, over, next to, between, with, without, for, from, to, because...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
