interface Adjective {
  word: string;
  translation: string;
  example: string;
  category: string;
}

const adjectives: Adjective[] = [
  { word: "happy", translation: "счастливый", example: "I am happy.", category: "Чувства" },
  { word: "sad", translation: "грустный", example: "She is sad.", category: "Чувства" },
  { word: "big", translation: "большой", example: "This house is big.", category: "Размер" },
  { word: "small", translation: "маленький", example: "The dog is small.", category: "Размер" },
  { word: "tall", translation: "высокий", example: "He is tall.", category: "Размер" },
  { word: "beautiful", translation: "красивый", example: "She is beautiful.", category: "Внешность" },
  { word: "new", translation: "новый", example: "I bought a new book.", category: "Состояние" },
  { word: "old", translation: "старый", example: "This chair is old.", category: "Состояние" },
  { word: "clean", translation: "чистый", example: "The room is clean.", category: "Состояние" },
  { word: "hot", translation: "горячий", example: "The tea is hot.", category: "Температура" },
  { word: "cold", translation: "холодный", example: "The water is cold.", category: "Температура" },
  { word: "fast", translation: "быстрый", example: "The car is fast.", category: "Скорость" },
];

export function ArtworkGrid() {
  return (
    <section id="adjectives" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">600+ прилагательных</h2>
          <p className="text-muted-foreground text-lg">
            Полный список с переводом и примерами — от описания людей до характеристик предметов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {adjectives.map((adj, index) => (
            <div key={index} className="group bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-2xl font-light">{adj.word}</h3>
                  <p className="text-muted-foreground mt-1">{adj.translation}</p>
                </div>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  {adj.category}
                </span>
              </div>
              <div className="border-t pt-3 mt-3">
                <p className="text-sm italic text-muted-foreground">→ {adj.example}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-muted/40 rounded-xl">
          <p className="font-serif text-2xl font-light mb-2">
            Это лишь начало — всего в списке более 600 прилагательных
          </p>
          <p className="text-muted-foreground">
            Прилагательные о людях, чувствах, вещах, цветах, еде, размерах, характере и многом другом
          </p>
        </div>
      </div>
    </section>
  );
}
