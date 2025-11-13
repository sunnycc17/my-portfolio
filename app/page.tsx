import WelcomeSection from "../components/WelcomeSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
