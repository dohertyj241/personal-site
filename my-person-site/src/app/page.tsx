'use client';

import React from "react";
import Navbar from "./components/UI/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import TechstackSection from "./components/Techstack/TechStackSection";
import AboutMeSection from "./components/Aboutme";
import FooterSection from "./components/Footer";
import ServicesSection from "./components/Services/ServicesSection";
import Contact from "./components/Contact/contact";
export default function Home() {
  return (
    <div>
       <Navbar />
        <HeroSection />
        <AboutMeSection />
        <ServicesSection />
        <SkillsSection />
        <TechstackSection />
        <ProjectsSection />
        <Contact/>
        <FooterSection />
        
    </div>
  );
}
