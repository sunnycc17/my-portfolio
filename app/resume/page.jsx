import Education from "../../components/resume/Education";
import WorkExperience from "../../components/resume/WorkExperience";
import Qualifications from "../../components/resume/Qualifications";
import Aspirations from "../../components/resume/Aspirations";
import Skills from "../../components/resume/Skills";

export default function Resume() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24 mt-8 text-white/90">
      <Education />
      <WorkExperience />
      <Skills />
      <Qualifications />
      <Aspirations />
      <div className="flex items-center justify-start mt-12">
        <a
          href="/"
          className="text-sm sm:text-base text-white/80 hover:text-white border border-purple-500 px-4 py-1 rounded transition-colors duration-200"
        >
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
}
