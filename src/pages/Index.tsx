import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIsArt } from "@/components/WhatIsArt";
import { FeaturedArtists } from "@/components/FeaturedArtists";
import { ArtTypes } from "@/components/ArtTypes";
import { ArtSpaces } from "@/components/ArtSpaces";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { WordList } from "@/components/WordList";
import { WebinarForm } from "@/components/WebinarForm";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsArt />
      <ArtTypes />
      <ArtSpaces />
      <ArtworkGrid />
      <WordList />
      <FeaturedArtists />
      <WebinarForm />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
