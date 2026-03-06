import { Card, CardContent } from "@/components/ui/card";

interface WordCategory {
  name: string;
  description: string;
  image: string;
  examples: string;
}

const wordCategories: WordCategory[] = [
  {
    name: "Существительные",
    description:
      "Слова, обозначающие людей, предметы и места. Основа любого предложения на английском языке.",
    image: "/oil-painting-canvas-classical-style.jpg",
    examples: "man, woman, house, school, book, dog",
  },
  {
    name: "Глаголы",
    description:
      "Слова действия — основа общения. Без глаголов невозможно построить ни одного предложения.",
    image: "/abstract-colorful-painting-modern-art.jpg",
    examples: "be, have, go, see, eat, work, love",
  },
  {
    name: "Прилагательные",
    description:
      "Более 600 слов для описания людей, предметов и чувств с переводом и примерами предложений.",
    image: "/digital-art-abstract-colorful-design.jpg",
    examples: "happy, big, beautiful, new, clean, hot",
  },
  {
    name: "Наречия",
    description:
      "Слова, уточняющие действия и описания. Отвечают на вопросы «как?», «когда?» и «где?».",
    image: "/abstract-minimalist-painting.jpg",
    examples: "now, very, always, fast, here, never",
  },
  {
    name: "Местоимения",
    description:
      "Личные, объектные, притяжательные и другие типы местоимений с подробными примерами использования.",
    image: "/fine-art-black-white-photography.jpg",
    examples: "I, you, he, she, my, your, this, who",
  },
  {
    name: "Предлоги и союзы",
    description:
      "Служебные слова, которые связывают части предложения и указывают на отношения между ними.",
    image: "/charcoal-drawing-portrait-sketch.jpg",
    examples: "in, on, with, for, and, but, because",
  },
  {
    name: "Числительные",
    description:
      "Числа от одного до десяти и далее — необходимая база для счёта, дат и повседневных разговоров.",
    image: "/mixed-media-collage-art.jpg",
    examples: "one, two, three, four, five, ten",
  },
  {
    name: "Вопросительные слова",
    description:
      "Ключевые слова для построения любого вопроса на английском языке.",
    image: "/ceramic-pottery-handmade-vase.jpg",
    examples: "who, what, where, when, why, how",
  },
  {
    name: "Разговорные фразы",
    description:
      "Простые практические фразы для повседневного общения, которые можно применять сразу.",
    image: "/contemporary-abstract-colorful-art.jpg",
    examples: "Hello, Thank you, Please, I am..., I like...",
  },
];

export function ArtTypes() {
  return (
    <section id="vocabulary" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Изучайте категории слов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            590+ слов для начинающих, разбитых по категориям — с переводом и примерами предложений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wordCategories.map((cat) => (
            <Card key={cat.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-3">{cat.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-1">Примеры слов:</p>
                  <p className="text-sm text-muted-foreground italic">{cat.examples}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
