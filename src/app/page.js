import Taskbar from "./components/Taskbar";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";

export default function Home() {
  return (
    <main className="bg-background overflow-hidden">
      <Taskbar></Taskbar>
      <HomePage />
      <ProjectPage />
      <EducationPage />
      <ContactPage />
    </main>
  );
}
