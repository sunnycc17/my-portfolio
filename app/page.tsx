import React, { FC } from "react";
import WelcomeSection from "../components/welcome/WelcomeSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ContactSection from "../components/contact/ContactSection";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Home: FC = () => {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <Header />

      <div className="w-full max-w-[1400px] px-4 md:px-6">
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
