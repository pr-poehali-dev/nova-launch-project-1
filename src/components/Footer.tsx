export function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-light mb-4">EnglishBase</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Платформа для начинающих изучать английский язык — всё в одном месте.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Разделы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#vocabulary" className="hover:text-foreground transition-colors">
                  Словарь по категориям
                </a>
              </li>
              <li>
                <a href="#adjectives" className="hover:text-foreground transition-colors">
                  600+ прилагательных
                </a>
              </li>
              <li>
                <a href="#pronouns" className="hover:text-foreground transition-colors">
                  Местоимения
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Связаться</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Телеграм
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Рассылка
                </a>
              </li>
              <li>
                <a href="mailto:hello@englishbase.ru" className="hover:text-foreground transition-colors">
                  hello@englishbase.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EnglishBase. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}