import WelcomeSection from "../components/welcome/WelcomeSection.jsx";
import AboutSection from "../components/about/AboutSection.jsx";
import SkillsSection from "../components/skills/SkillsSection.jsx";
import ProjectsSection from "../components/projects/ProjectsSection.jsx";
import ContactSection from "../components/contact/ContactSection.jsx";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

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
