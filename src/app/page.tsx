// src/app/page.tsx
"use client"; // Essential for client-side interactivity

import React from 'react';
import { Mail, Phone, MapPin, Globe, Code, Briefcase, GraduationCap, Folder, User, Zap, GitBranch, Cloud, Database, Cpu, ShoppingCart, Search, Lightbulb, Bot, FileText, BarChart, HardHat, Factory, ScrollText, HeartHandshake, Award } from 'lucide-react';

// Define TypeScript interfaces for better type safety and clarity
interface Contact {
  email: string;
  phone: string;
  location: string;
  website: string;
}

interface Skills {
  programmingLanguages: string[];
  webFrameworksCMS: string[];
  databases: string[];
  versionControl: string[];
  cloudDeployment: string[];
  otherTools: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string;
}

interface SubProject {
  name: string;
  description: string;
}

interface ProjectItem {
  name: string;
  description: string;
  icon: JSX.Element; // LucideReact icons are JSX elements
  subProjects?: SubProject[]; // Optional sub-projects
}

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

interface PortfolioData {
  name: string;
  titles: string[];
  aboutMe: string;
  contact: Contact;
  skills: Skills;
  specializations: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[]; // Projects array is now empty
  education: EducationItem[];
}

// This component is designed to be the content for your page.tsx
const PortfolioPageContent: React.FC = () => {
  // Define the data for the portfolio, adhering to the PortfolioData interface
  const portfolioData: PortfolioData = {
    name: "Arief Novanda Z",
    titles: ["Software Developer", "Full Stack Developer", "Backend Developer"],
    aboutMe: "Has tasted various fields of work and is now focusing on software developer work, Has more than 7 years of experience as a Software Developer. My main job is to planning software development, after that we build them and make sure it's run. So the summary is: to make everything related to the IT department work well. Have strong skillsets in Development of software, especially about integration from one source to multi platform And R&D. Write code by PHP, Javascript, Visual Basic, golang and lastly Python,. and been using framework laravel, prestashop, code igniter, Vue, wordpress(woocomerce), Express.js, next.js, React, flask, gin. Currently making a living, by converting tons of coffee into script code to become useable product",
    contact: {
      email: "arief.novanda.zulvan@gmail.com",
      phone: "+62 81311399700",
      location: "Jakarta, Indonesia",
      website: "http://sipalingtech.com/",
    },
    skills: {
      programmingLanguages: ["PHP: 7+ Years", "JavaScript: 6.5+ Years", "Python: 4+ Years", "Golang: 1 Years", "VB.Net: 2 Years", "Typescript: 2 Years"],
      webFrameworksCMS: ["Laravel: 5 Years", "React.js: 2 Years", "Express.js: 2 Years", "PrestaShop: 3 Years", "Codeigniter: 1 Years", "Flask: 2 Years", "Next.js: 2 years", "Wordpress: 1 Years"],
      databases: ["MySQL: 7+ Years", "SQL Server: 2 Years", "Postgres: 2 Years", "MongoDB: 2 Years"],
      versionControl: ["GIT: 7+ Years"],
      cloudDeployment: ["AWS/Server (General Server Management): 6.5+ Years", "Docker: 2 Years", "Nginx: 5 years", "Apache: 2 Years"],
      otherTools: ["Google Tag Manager", "Google Analytics", "Selenium (Web Scraping)", "Tailwind", "Bootstraps", "n8n"],
    },
    specializations: [
      "Project Management: 7+ Years",
      "Backend Development (Web & API): 7+ Years",
      "Software Architecture & Microservices: 7+ Years",
      "Software Research & Development (R&D): 7+ Years",
      "Web Development (Full-Stack): 5+ Years",
      "Machine Learning & Data-Driven Product Development: 4 Years",
      "E-commerce Optimization & Development: 3.5+ Years",
      "IoT Backend Development: 2 Years",
      "Desktop Software Development: 1 Year",
      "SEO Optimization : 3 Years",
    ],
    experience: [
      {
        company: "OPPO INDONESIA",
        role: "System & Software Development",
        dates: "Febuary 2025 - Now",
        description: "Leveraging PHP, Python, Go, and JavaScript, I developed and maintained essential business and financial systems for OPPO Indonesia. My work included exploring and implementing Al solutions, such as gender prediction and KTP text extraction, and building robust APIs for survey data collection during major product launches.",
      },
      {
        company: "PT Bahagia Teknologi Selalu (Antara ETP)",
        role: "Freelance Backend & System Architecture",
        dates: "May 2024 - June 2025",
        description: "As a backend engineer for ANTARA's Legalize program, I developed critical API infrastructure and automated tasks. My key contributions included building a powerful task manager and parsing engine to extract and structure legal documents from raw PDFs into logically sorted, readable formats. I also designed and implemented a custom Role-Based Access Control (RBAC) module and enforced role-based API access with tokenization, ensuring granular permissions and secure system access. I set up comprehensive notification systems (email and in-app alerts) and activity logs. I designed the database structure and led the transition from a monolithic to a modular microservices architecture, integrating Legalize, Izisign, and other services under a unified Single Sign-On (SSO) for a seamless user experience and improved scalability. I collaborated closely with DevOps and frontend teams for smooth integration and performance.",
      },
      {
        company: "Sipaling Tech",
        role: "Freelance Project Lead",
        dates: "Febuary 2024 - June 2025",
        description: "Have a strong track record of leading and executing full-cycle web development projects, from initial concept to deployment. For the Gentri Project (gentri.id), I built and launched the company website from scratch using WordPress, managing everything from design to hosting. I then initiated and led the EVORIA Project (evoria.id), completely revamping an existing company website into a fast, responsive platform using React and Express.js. This included implementing key features like a gamification system, a real-time points and rewards system, a scalable architecture, and a full CMS for content management. I oversaw the entire development lifecycle and team coordination, contributing directly to the code. Additionally, I initiated, pitched, and directed the Duta Pratama Engineering Project (dutapratama.co.id - not yet published), transforming an outdated website into a modern, high-performance platform. Leading a small agile team, I delivered a refreshed, responsive site with measurable performance improvements and a full CMS, ensuring technical goals aligned with business needs and actively contributed to the codebase.",
      },
      {
        company: "PT Higo Fiture Indonesia",
        role: "Freelance Fullstack",
        dates: "April 2024 - Oktober 2024",
        description: "I conducted R&D and developed new product features focusing on data-driven insights and IoT solutions. This included researching and implementing a Socioeconomic Status (SES) classification system as a Python-based cron job, utilizing MongoDB for dynamic data processing. I also performed R&D to identify nearby business opportunities by analyzing Higo's Wi-Fi hotspots and surrounding businesses, providing location intelligence to the business team for potential partnerships. For an IoT-based product, I developed a system to detect nearby device MAC addresses in public areas. I then collected this anonymized device presence data to analyze foot traffic patterns and generate location-based business insights, always adhering to privacy and regulatory considerations.",
      },
      {
        company: "Skintifique France",
        role: "Freelance Fullstack",
        dates: "May 2024 - November 2024",
        description: "Collaborated directly with stakeholders to identify system bugs, discuss potential solutions, and propose improvements based on technical insights and business needs. Managed and contributed to both backend and frontend development, ensuring consistent performance, maintainability, and user experience across the entire system. Led the migration process from PrestaShop 1.7 to 8.1, carefully handling compatibility issues, data integrity, and feature adaptation during the upgrade. Resolved all system bugs, improving platform stability and ensuring a seamless user experience. Optimized the website for SEO, enhancing visibility on search engines and contributing to increased organic traffic. Streamlined the entire purchasing flow, ensuring that every step-from product selection to checkout-was fast, intuitive, and error-free for clients.",
      },
      {
        company: "Decathlon Indonesia",
        role: "Backend Developer",
        dates: "Sep 2020 - Jan 2024",
        description: "At Decathlon Indonesia, I excelled at bridging the gap between technical and non-technical teams, translating user stories into actionable system flows and delivering working features. I collaborated closely with mobile app teams, guiding them through API consumption and integration, ensuring smooth data flow to both iOS and Android apps. I also managed third-party vendor integrations, leading successful partnerships that directly contributed to a 10%+ revenue increase from new modules. I acted as the primary integration bridge between third-party systems and the company's core platform, ensuring seamless data and service communication. Crucially, I developed numerous modules within PrestaShop and integrated them with APIs to support these initiatives. My responsibilities extended to optimizing Google Tag Manager and Google Analytics for enhanced tracking and marketing performance. Furthermore, I supported and directly contributed to international teams (Lithuania, Greece, Malaysia, Cambodia) by developing and customizing localized modules tailored to their specific needs and workflows.",
      },
      {
        company: "Higo Fitur Indonesia",
        role: "Software Developer",
        dates: "Nov 2018 - Agu 2020",
        description: "Initially hired as a frontend developer, my role expanded into full-stack development, where I built a company website from scratch using Laravel (PHP), prioritizing clean design and user experience. I also developed its blog and CMS, collaborating with content writers to optimize for SEO. As part of the initial product team, I contributed to R&D for a Wi-Fi captive portal, including implementing an autoplay video feature and deploying it within the website for seamless free Wi-Fi access. This MVP product is currently in use by over 10,000 users in locations such as TransJakarta, MRT, ports, and more. I also executed SMS blast campaigns, managing content and delivery. A significant focus of my R&D involved data-driven product enhancements: Gender detection from user names in the captive portal to auto-fill information and improve the login experience. Socioeconomic Status (SES) classification, translating academic research into a working logic model and developing methods to estimate SES from user agent strings (phone models). Scraping external websites using Python and Selenium to gather real-world data (device prices, location-based pricing, hotel rates) to support SES analysis and business decisions. I developed APIs using Lumen (Laravel micro-framework), centralizing services for seamless integration across web, mobile, and third-party platforms. I also built various dashboards and data scrapers, providing actionable insights through structured data presentation.",
      },
      {
        company: "PT Pharos Indonesia",
        role: "Software Developer (IOT)",
        dates: "Nov 2017 - Nov 2018",
        description: "As a Web Developer (June 2018 - Nov 2018) assigned to Pharmanet, I focused on e-commerce solutions. I developed and enhanced existing B2B e-commerce platforms, including creating a cron job for database synchronization with headquarters, adding new functionalities, and resolving system bugs. I also assisted other teams in developing APIs for a new B2C Android app and conducted R&D for new web e-commerce solutions. My tech stack included VB.net, PHP, SQL Server, and CodeIgniter. In my role as an Automation & Mechatronic Software Developer (Nov 2017 - Nov 2018), I was responsible for designing and developing automation software and providing logic for automation machines. I built user interfaces (UI) for applications (using VB and Python), web-based software, and systems for sending commands to robotic items. Notably, I developed an air supply automation program for the Nourish Skin pharmacy factory. My work involved VB, Python, and SQL Server.",
      },
      {
        company: "Early Career / Foundational Experience",
        role: "Various Roles",
        dates: "Sep 2014 - Mar 2017 (and earlier)",
        description: "My early professional journey includes diverse roles in technical support, entrepreneurship, and various part-time positions. At PT. Visionet Data Internasional (September 2014 - February 2016), I worked as a Technical Support Engineer. My responsibilities involved troubleshooting issues in computer and banking servers (Windows OS) and controlling/assisting field engineers with hardware and software repairs. Subsequently, I ventured into entrepreneurship as the Business Owner of 'Dikopikita' (August 2016 - March 2017), where I built and operated a coffee shop in Summarecon Serpong Mall. Earlier, I gained varied experience through roles such as Freelance Telemarketing at LP3i Indonesia (Jan - Mar 2013), Kitchen Helper at FISH&CO (Jun 2011 - Jul 2012), and various freelance positions and an internship from 2009-2011.",
      },
    ],
    projects: [], // Projects array is now empty
    education: [
      {
        institution: "Mecubuana University",
        degree: "Bachelor Degree, Computer Science",
        year: "Completed in 2021",
      },
      {
        institution: "LP31",
        degree: "Associate Degree, Computer Science",
        year: "Completed in 2016",
      },
    ],
  };

  // Helper function for smooth scrolling
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // The outermost div now only includes min-h-screen, as bg, text, and font styles are in layout.tsx
    <div className="min-h-screen">
      {/* Navigation Bar - Kept here as it's part of the single-page portfolio's internal navigation */}
      <nav className="fixed w-full bg-neutral-800 bg-opacity-90 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-green-400">
            <span className="text-neutral-300">&lt;</span>AriefNZ<span className="text-neutral-300">/&gt;</span>
          </div>
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => scrollToSection('hero')} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('education')} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                Education
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 pt-20"> {/* pt-20 remains for spacing below the fixed nav */}
        {/* Hero Section */}
        <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center py-16">
          <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-green-400">
              {/* Placeholder for profile picture */}
              <img
                src="https://placehold.co/128x128/10B981/FFFFFF?text=AZ"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/128x128/333/FFF?text=AZ"; }}
              />
            </div>
            <h1 className="text-5xl font-bold text-green-400 mb-2">{portfolioData.name}</h1>
            <p className="text-2xl text-neutral-400 mb-6">
              {portfolioData.titles.join(' | ')}
            </p>
            <p className="text-lg max-w-3xl mx-auto text-neutral-300 leading-relaxed">
              {portfolioData.aboutMe}
            </p>
          </div>
        </section>

        {/* About Me Section (expanded from Hero) */}
        <section id="about" className="py-16">
          <h2 className="text-4xl font-bold text-green-400 mb-8 border-b-2 border-green-700 pb-2 flex items-center">
            <User className="mr-3" /> About Me
          </h2>
          <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              {portfolioData.aboutMe}
            </p>
            <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
              <Zap className="mr-2" /> Specializations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.specializations.map((spec, index) => (
                <div key={index} className="bg-neutral-700 p-4 rounded-md border border-green-800">
                  <p className="text-neutral-300">{spec}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-4xl font-bold text-green-400 mb-8 border-b-2 border-green-700 pb-2 flex items-center">
            <Code className="mr-3" /> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
                <Code className="mr-2" /> Programming Languages
              </h3>
              <ul className="list-disc list-inside text-neutral-300">
                {portfolioData.skills.programmingLanguages.map((skill, index) => (
                  <li key={index} className="mb-2">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Web Frameworks & CMS */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
                <Globe className="mr-2" /> Web Frameworks & CMS
              </h3>
              <ul className="list-disc list-inside text-neutral-300">
                {portfolioData.skills.webFrameworksCMS.map((skill, index) => (
                  <li key={index} className="mb-2">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Databases */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
                <Database className="mr-2" /> Databases
              </h3>
              <ul className="list-disc list-inside text-neutral-300">
                {portfolioData.skills.databases.map((skill, index) => (
                  <li key={index} className="mb-2">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Version Control */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
                <GitBranch className="mr-2" /> Version Control
              </h3>
              <ul className="list-disc list-inside text-neutral-300">
                {portfolioData.skills.versionControl.map((skill, index) => (
                  <li key={index} className="mb-2">{skill}</li>
                ))}
                </ul>
            </div>

            {/* Cloud & Deployment */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
                <Cloud className="mr-2" /> Cloud & Deployment
              </h3>
              <ul className="list-disc list-inside text-neutral-300">
                {portfolioData.skills.cloudDeployment.map((skill, index) => (
                  <li key={index} className="mb-2">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Other Tools */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
                <Cpu className="mr-2" /> Other Tools
              </h3>
              <ul className="list-disc list-inside text-neutral-300">
                {portfolioData.skills.otherTools.map((skill, index) => (
                  <li key={index} className="mb-2">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-4xl font-bold text-green-400 mb-8 border-b-2 border-green-700 pb-2 flex items-center">
            <Briefcase className="mr-3" /> Experience
          </h2>
          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
                <h3 className="text-2xl font-semibold text-green-400 mb-2">{job.role}</h3>
                <p className="text-xl text-neutral-300 mb-2">{job.company}</p>
                <p className="text-neutral-400 text-sm mb-4">{job.dates}</p>
                <p className="text-neutral-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-green-400 mb-8 border-b-2 border-green-700 pb-2 flex items-center">
            <Folder className="mr-3" /> Projects
          </h2>
          {/* Display message if no projects */}
          {portfolioData.projects.length === 0 ? (
            <p className="text-neutral-400 text-lg text-center">No projects to display yet. Start adding your amazing work!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
                  <h3 className="text-2xl font-semibold text-green-400 mb-2 flex items-center">
                    {project.icon} <span className="ml-2">{project.name}</span>
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                  {project.subProjects && (
                    <div className="mt-4">
                      <p className="text-neutral-400 font-semibold mb-2">Sub-Projects:</p>
                      <ul className="list-disc list-inside text-neutral-300 text-sm">
                        {project.subProjects.map((sub, subIndex) => (
                          <li key={subIndex}>{sub.name}: {sub.description}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <h2 className="text-4xl font-bold text-green-400 mb-8 border-b-2 border-green-700 pb-2 flex items-center">
            <GraduationCap className="mr-3" /> Education
          </h2>
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50">
                <h3 className="text-2xl font-semibold text-green-400 mb-2">{edu.institution}</h3>
                <p className="text-xl text-neutral-300 mb-2">{edu.degree}</p>
                <p className="text-neutral-400 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-4xl font-bold text-green-400 mb-8 border-b-2 border-green-700 pb-2 flex items-center">
            <Mail className="mr-3" /> Contact
          </h2>
          <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-green-700/50 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <Mail className="text-green-400 mr-4" size={24} />
              <a href={`mailto:${portfolioData.contact.email}`} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                {portfolioData.contact.email}
              </a>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="text-green-400 mr-4" size={24} />
              <a href={`tel:${portfolioData.contact.phone}`} className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                {portfolioData.contact.phone}
              </a>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="text-green-400 mr-4" size={24} />
              <p className="text-neutral-300">{portfolioData.contact.location}</p>
            </div>
            <div className="flex items-center">
              <Globe className="text-green-400 mr-4" size={24} />
              <a href={portfolioData.contact.website} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-green-400 transition-colors duration-300">
                {portfolioData.contact.website}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Kept here as it's part of the single-page portfolio's content */}
      <footer className="bg-neutral-800 py-6 text-center text-neutral-400 text-sm">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPageContent;