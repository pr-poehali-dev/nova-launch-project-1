import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PronounGroup {
  name: string;
  subtitle: string;
  image: string;
  description: string;
  pronouns: { word: string; translation: string; example: string }[];
}

const pronounGroups: PronounGroup[] = [
  {
    name: "Личные местоимения",
    subtitle: "Subject Pronouns",
    image: "/fine-art-portrait-photography.jpg",
    description: "Используются как подлежащее в предложении — кто совершает действие.",
    pronouns: [
      { word: "I", translation: "я", example: "I am a student." },
      { word: "You", translation: "ты / вы", example: "You are my friend." },
      { word: "He", translation: "он", example: "He is tall." },
      { word: "She", translation: "она", example: "She is happy." },
      { word: "It", translation: "оно", example: "It is a dog." },
      { word: "We", translation: "мы", example: "We are at school." },
      { word: "They", translation: "они", example: "They are my friends." },
    ],
  },
  {
    name: "Объектные местоимения",
    subtitle: "Object Pronouns",
    image: "/fine-art-black-white-photography.jpg",
    description: "Используются как дополнение — на кого направлено действие.",
    pronouns: [
      { word: "Me", translation: "меня / мне", example: "Give me the book." },
      { word: "You", translation: "тебя / тебе", example: "I see you." },
      { word: "Him", translation: "его / ему", example: "I know him." },
      { word: "Her", translation: "её / ей", example: "Tell her the truth." },
      { word: "It", translation: "его / её", example: "I like it." },
      { word: "Us", translation: "нас / нам", example: "Help us, please." },
      { word: "Them", translation: "их / им", example: "I see them." },
    ],
  },
  {
    name: "Притяжательные местоимения",
    subtitle: "Possessive Pronouns",
    image: "/portrait-of-frida-kahlo-with-flowers-in-hair.jpg",
    description: "Показывают принадлежность — чьи предметы или люди.",
    pronouns: [
      { word: "My", translation: "мой / моя", example: "This is my pen." },
      { word: "Your", translation: "твой / ваш", example: "Is this your book?" },
      { word: "His", translation: "его", example: "His name is Tom." },
      { word: "Her", translation: "её", example: "Her cat is white." },
      { word: "Its", translation: "его / её", example: "Its color is red." },
      { word: "Our", translation: "наш / наша", example: "This is our house." },
      { word: "Their", translation: "их", example: "Their dog is big." },
    ],
  },
  {
    name: "Возвратные местоимения",
    subtitle: "Reflexive Pronouns",
    image: "/portrait-of-pablo-picasso-spanish-artist.jpg",
    description: "Используются, когда субъект и объект действия — одно и то же лицо.",
    pronouns: [
      { word: "Myself", translation: "себя (я)", example: "I wash myself." },
      { word: "Yourself", translation: "себя (ты)", example: "Help yourself." },
      { word: "Himself", translation: "себя (он)", example: "He hurt himself." },
      { word: "Herself", translation: "себя (она)", example: "She talks to herself." },
      { word: "Itself", translation: "себя (оно)", example: "The cat cleaned itself." },
      { word: "Ourselves", translation: "себя (мы)", example: "We cooked ourselves." },
      { word: "Themselves", translation: "себя (они)", example: "They helped themselves." },
    ],
  },
  {
    name: "Указательные местоимения",
    subtitle: "Demonstrative Pronouns",
    image: "/portrait-of-claude-monet-with-white-beard-impressi.jpg",
    description: "Указывают на конкретные предметы или людей — близкие или далёкие.",
    pronouns: [
      { word: "This", translation: "это (близко)", example: "This is my bag." },
      { word: "That", translation: "то / это (далеко)", example: "That is a car." },
      { word: "These", translation: "эти (близко)", example: "These are my books." },
      { word: "Those", translation: "те (далеко)", example: "Those are old photos." },
    ],
  },
  {
    name: "Вопросительные местоимения",
    subtitle: "Interrogative Pronouns",
    image: "/portrait-of-vincent-van-gogh-with-red-beard.jpg",
    description: "Используются для построения вопросов — «кто?», «что?», «чей?».",
    pronouns: [
      { word: "Who", translation: "кто", example: "Who is she?" },
      { word: "Whom", translation: "кого / кому", example: "Whom did you call?" },
      { word: "What", translation: "что / какой", example: "What is this?" },
      { word: "Which", translation: "который / какой", example: "Which book is yours?" },
      { word: "Whose", translation: "чей", example: "Whose pen is this?" },
    ],
  },
  {
    name: "Неопределённые местоимения",
    subtitle: "Indefinite Pronouns",
    image: "/portrait-of-rembrandt-van-rijn-dutch-baroque-paint.jpg",
    description: "Указывают на неопределённых людей или предметы.",
    pronouns: [
      { word: "Someone", translation: "кто-то", example: "Someone is at the door." },
      { word: "Something", translation: "что-то", example: "Something is wrong." },
      { word: "Everyone", translation: "все", example: "Everyone is happy." },
      { word: "Nobody", translation: "никто", example: "Nobody knows." },
      { word: "Anything", translation: "что-нибудь", example: "Do you need anything?" },
      { word: "Everything", translation: "всё", example: "Everything is fine." },
    ],
  },
];

export function FeaturedArtists() {
  return (
    <section id="pronouns" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">
            Английские местоимения
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Все типы местоимений с переводом и практическими примерами — нажмите на карточку, чтобы изучить подробно
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {pronounGroups.map((group) => (
            <Dialog key={group.name}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-light leading-tight">{group.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{group.subtitle}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl font-light">{group.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{group.description}</p>
                  <div className="space-y-3">
                    {group.pronouns.map((p) => (
                      <div key={p.word} className="border rounded-lg p-3">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="font-semibold text-lg">{p.word}</span>
                          <span className="text-muted-foreground">— {p.translation}</span>
                        </div>
                        <p className="text-sm italic text-muted-foreground">{p.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
