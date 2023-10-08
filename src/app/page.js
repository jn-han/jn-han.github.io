"use client";
import Taskbar from "./components/Taskbar";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  console.log(pathname);
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
