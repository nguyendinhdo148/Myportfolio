import { ThemeToggle } from "@/component/ThemeToggle";
import { StarBackground } from "@/component/StarBackground";
import { Navbar } from "@/component/Navbar";
import { Introduce } from "@/component/Introduce";
import { Skills } from "@/component/Skills";
import { Project } from "@/component/Project";
import { useEffect } from "react";
import Certificate from "../component/Certificate";
import WorkExperience from "../component/WorkExperience";

export const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />
      {/* (sau này có thể thêm gradient / blur / particles) */}

      {/* Navbar */}
      <Navbar/>
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 pt-32">
        <Introduce />
        <Skills />
        <Project />
        <Certificate/>
        <WorkExperience />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};
