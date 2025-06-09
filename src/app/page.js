"use client";
import { MainPage } from "../components/MainPage";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <main className="relative bg-background snap-y">
        <div className="absolute inset-0 pointer-events-none transition-all duration-100" />
        <div className="relative z-10 min-h-screen">
          <MainPage />
        </div>
      </main>
    </div>
  );
}
