import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { EventsSection } from "./components/EventsSection";
import { JobsSection } from "./components/JobsSection";
import { StudySection } from "./components/StudySection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroBanner />
        <EventsSection />
        <JobsSection />
        <StudySection />
      </main>
      <Footer />
    </div>
  );
}