import WelcomeSection from "../components/welcome/WelcomeSection.jsx";
import AboutSection from "../components/about/AboutSection.jsx";
import SkillsSection from "../components/skills/SkillsSection.jsx";
import ProjectsSection from "../components/projects/ProjectsSection.jsx";
import ContactSection from "../components/contact/ContactSection.jsx";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <Header />

      <div className="w-full max-w-[1400px] px-4 md:px-6">
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
