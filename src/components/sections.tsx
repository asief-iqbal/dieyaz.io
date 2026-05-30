"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  Bot,
  Brain,
  Building2,
  Code,
  Database,
  ExternalLink,
  FlaskConical,
  GitBranch,
  Globe,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Server,
} from "lucide-react";

const sectionMotion = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
} as const;

const darkSection =
  "relative overflow-hidden border-t border-white/10 bg-[#050608] py-24";
const altSection =
  "relative overflow-hidden border-t border-white/10 bg-[#090a0d] py-24";
const shell = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const eyebrow =
  "mb-3 text-sm font-black uppercase tracking-[0.22em] text-lime-200";
const title = "text-3xl font-black tracking-normal text-white sm:text-4xl";
const card =
  "rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.085]";
const lightCard =
  "rounded-lg border border-white/10 bg-white p-6 text-black shadow-[0_20px_60px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-50";
const chip =
  "rounded-md border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-bold text-zinc-300";
const lightChip =
  "rounded-md bg-black px-3 py-1.5 text-xs font-bold text-white";

function SectionHeader({
  eyebrowText,
  titleText,
  align = "center",
}: {
  eyebrowText: string;
  titleText: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mb-12 text-center" : "mb-12"}>
      <p className={eyebrow}>{eyebrowText}</p>
      <h2 className={title}>{titleText}</h2>
    </div>
  );
}

export function EducationSection() {
  const highlights = [
    "Bachelor of Science in Computer Science",
    "BRAC University, 2022 - 2026",
    "CGPA: 3.54",
    "Dean's List, Summer 2022 - Spring 2023",
  ];

  return (
    <section id="education" className={altSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Education" titleText="Academic Foundation" />
        <motion.div {...sectionMotion} className="mx-auto max-w-4xl">
          <div className={lightCard}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-black text-lime-300">
                <GraduationCap size={25} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-black">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="mt-2 text-zinc-700">
                  BRAC University | Dhaka, Bangladesh
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-md border border-black/10 bg-black/[0.03] px-4 py-3 text-sm font-semibold text-zinc-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "AI Engineering",
      description:
        "Agentic systems, LLM applications, and intelligent workflow automation.",
    },
    {
      icon: Bot,
      title: "Machine Learning",
      description:
        "Predictive and deep learning models prepared for real-world deployment.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Scalable pipelines and infrastructure for modern AI applications.",
    },
    {
      icon: Server,
      title: "Full Stack Development",
      description:
        "Reliable APIs and product architectures that hold up in production.",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Responsive, performant websites with smooth user-facing workflows.",
    },
  ];

  return (
    <section id="competencies" className={darkSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Core Competencies" titleText="What I Do" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              {...sectionMotion}
              transition={{ ...sectionMotion.transition, delay: index * 0.06 }}
              className={index === 0 ? lightCard : card}
            >
              <div
                className={
                  index === 0
                    ? "mb-5 grid h-12 w-12 place-items-center rounded-md bg-black text-lime-300"
                    : "mb-5 grid h-12 w-12 place-items-center rounded-md bg-white text-black"
                }
              >
                <Icon size={22} />
              </div>
              <h3
                className={
                  index === 0
                    ? "text-xl font-black text-black"
                    : "text-xl font-black text-white"
                }
              >
                {title}
              </h3>
              <p
                className={
                  index === 0 ? "mt-3 text-zinc-700" : "mt-3 text-zinc-400"
                }
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductionWorkSection() {
  const work = [
    {
      title: "Scorso",
      description:
        "Production AI-enabled e-commerce platform featuring virtual try-on and fast storefront flows.",
      tech: ["Next.js", "React", "Tailwind CSS", "AI/ML"],
      link: "https://scorsolifestyle.com/",
      status: "Live",
    },
    {
      title: "Funded Academy",
      description:
        "High-performance fintech platform with payment and billing integration.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://fundedacademy.com/",
      status: "Live",
    },
    {
      title: "DFyzen",
      description:
        "AI-first software studio shipping product design, automation, and engineering systems.",
      tech: ["Next.js", "React", "Node.js", "AI/ML"],
      link: "https://www.dfyzen.com/",
      status: "Live",
    },
    {
      title: "PaperTech",
      description:
        "AI-assisted corporate web presence for a leading manufacturer.",
      tech: ["Next.js", "React", "AI"],
      link: "https://dfyzen.com/",
      status: "In Progress",
    },
  ];

  return (
    <section id="production" className={altSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Production Work" titleText="Built With DFyzen" />
        <div className="grid gap-5 md:grid-cols-2">
          {work.map((item, index) => (
            <motion.article
              key={item.title}
              {...sectionMotion}
              transition={{ ...sectionMotion.transition, delay: index * 0.06 }}
              className={card}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-zinc-400">{item.description}</p>
                </div>
                <span className="w-fit rounded-md bg-lime-300 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-black">
                  {item.status}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className={chip}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-200 transition-colors hover:text-white"
              >
                Visit Live
                <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "GenWear",
      description:
        "AI-powered 3D customizable e-commerce platform with real-time previews.",
      highlight: "Second Best Project",
      technologies: ["Next.js", "React", "Tailwind CSS", "Imagine-1"],
      liveUrl: "https://genwear.vercel.app/",
      githubUrl: null,
    },
    {
      title: "Job-Portal",
      description:
        "Full-stack recruitment platform with advanced filtering and role-based access.",
      highlight: null,
      technologies: ["Node.js", "Express.js", "React", "Tailwind CSS"],
      liveUrl: "https://jobportal-chakrihobe.vercel.app/",
      githubUrl: null,
    },
    {
      title: "SnapCafe",
      description:
        "Online cafe ordering system with a streak-based discount experience.",
      highlight: null,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/asief-iqbal/SnapCafe",
    },
    {
      title: "dieyaz.codes",
      description: "Personal portfolio website.",
      highlight: null,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://dieyaz.codes/",
      githubUrl: null,
    },
  ];

  return (
    <section id="projects" className={darkSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Featured Projects" titleText="Selected Builds" />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              {...sectionMotion}
              transition={{ ...sectionMotion.transition, delay: index * 0.06 }}
              className={index === 0 ? lightCard : card}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3
                  className={
                    index === 0
                      ? "text-2xl font-black text-black"
                      : "text-2xl font-black text-white"
                  }
                >
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="w-fit rounded-md bg-black px-3 py-1.5 text-xs font-black text-lime-300">
                    {project.highlight}
                  </span>
                )}
              </div>
              <p className={index === 0 ? "mt-3 text-zinc-700" : "mt-3 text-zinc-400"}>
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className={index === 0 ? lightChip : chip}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-5 text-sm font-bold">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      index === 0
                        ? "inline-flex items-center gap-2 text-black hover:text-zinc-600"
                        : "inline-flex items-center gap-2 text-cyan-200 hover:text-white"
                    }
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-300 hover:text-white"
                  >
                    Source Code
                    <GitBranch size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchSection() {
  const research = [
    {
      title: "SPRINT",
      description:
        "Sensitivity-guided pruning for inference-time adaptation of LLMs.",
      status: "Undergraduate Thesis, 2026",
      link: "https://github.com/asief-iqbal/Thesis",
    },
    {
      title: "EEG-Based Schizophrenia Detection",
      description:
        "Comprehensive analysis of EEG models for schizophrenia classification.",
      status: "Thesis Poster Competition, Summer 2025",
      link: "https://github.com/asief-iqbal/EEG-Classification",
    },
    {
      title: "Alzheimer Classification",
      description:
        "Deep learning pipeline for Alzheimer's disease classification.",
      status: "Research Project",
      link: "https://github.com/asief-iqbal/Alzheimer-Classification",
    },
  ];

  return (
    <section id="research" className={altSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Research" titleText="Academic Exploration" />
        <div className="grid gap-5 md:grid-cols-3">
          {research.map((item, index) => (
            <motion.article
              key={item.title}
              {...sectionMotion}
              transition={{ ...sectionMotion.transition, delay: index * 0.06 }}
              className={card}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-white text-black">
                <FlaskConical size={20} />
              </div>
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.description}</p>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                {item.status}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-bold text-cyan-200 hover:text-white"
              >
                View Source
                <ExternalLink size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AchievementsSection() {
  const achievements = [
    "Second Best Project Award - Spring 2025 Semester (GenWear)",
    "Third Runner-Up - Thesis Poster Competition, Summer 2025",
    "Dean's List - Summer 2022 to Spring 2023",
    "First Place - Project Display, Prothom Alo Science Carnival 2015",
  ];

  return (
    <section id="achievements" className={darkSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Achievements" titleText="Highlights" />
        <div className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-white/[0.055] p-4 sm:p-6">
          <div className="grid gap-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item}
                {...sectionMotion}
                transition={{ ...sectionMotion.transition, delay: index * 0.05 }}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-black/35 p-4 text-zinc-300"
              >
                <Award className="mt-0.5 shrink-0 text-lime-300" size={18} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Expertise",
      skills: [
        "AI Engineering",
        "Machine Learning",
        "Generative AI",
        "Data Science",
        "Data Engineering",
        "Agentic Systems",
      ],
    },
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "PHP", "CSS3"],
    },
    {
      title: "Frameworks",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      title: "Platforms",
      skills: ["Docker", "AWS", "n8n", "Supabase"],
    },
  ];

  return (
    <section id="skills" className={altSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Technology Arsenal" titleText="Skills and Tools" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ title, skills }, index) => (
            <motion.div
              key={title}
              {...sectionMotion}
              transition={{ ...sectionMotion.transition, delay: index * 0.06 }}
              className={card}
            >
              <h3 className="mb-5 text-xl font-black text-white">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className={chip}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  const certifications = [
    "Data Engineer Certification - DataCamp",
    "AI Engineer for Data Scientists Associate - DataCamp",
    "GitHub Foundations",
    "AI Fundamentals - DataCamp",
  ];

  return (
    <section id="certifications" className={darkSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Certifications" titleText="Credentials" />
        <div className="mx-auto grid max-w-4xl gap-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              {...sectionMotion}
              transition={{ ...sectionMotion.transition, delay: index * 0.05 }}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 text-zinc-300"
            >
              <Award className="shrink-0 text-lime-300" size={18} />
              <span>{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:asiefiqbal7@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className={altSection}>
      <div className={shell}>
        <SectionHeader eyebrowText="Get in Touch" titleText="Contact Me" />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "asiefiqbal7@gmail.com",
                href: "mailto:asiefiqbal7@gmail.com",
              },
              {
                icon: Globe,
                title: "Portfolio",
                content: "dieyaz.codes",
                href: "https://dieyaz.codes/",
              },
              {
                icon: Building2,
                title: "DFyzen",
                content: "dfyzen.com",
                href: "https://dfyzen.com/",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Dhaka, Bangladesh",
              },
            ].map(({ icon: Icon, title, content, href }, index) => (
              <motion.div
                key={title}
                {...sectionMotion}
                transition={{ ...sectionMotion.transition, delay: index * 0.05 }}
                className={card}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-md bg-white text-black">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-black text-white">{title}</h3>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="mt-2 block break-words text-zinc-400 transition-colors hover:text-cyan-200"
                  >
                    {content}
                  </a>
                ) : (
                  <p className="mt-2 text-zinc-400">{content}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div {...sectionMotion} className={lightCard}>
            {submitStatus === "success" ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-md bg-black text-lime-300">
                  <Mail size={30} />
                </div>
                <h3 className="text-2xl font-black text-black">
                  Message Sent!
                </h3>
                <p className="mt-2 text-zinc-700">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-black/10 bg-black/[0.04] px-4 py-3 text-black outline-none transition-all placeholder:text-zinc-500 focus:border-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-black/10 bg-black/[0.04] px-4 py-3 text-black outline-none transition-all placeholder:text-zinc-500 focus:border-black"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-black/10 bg-black/[0.04] px-4 py-3 text-black outline-none transition-all placeholder:text-zinc-500 focus:border-black"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-md border border-black/10 bg-black/[0.04] px-4 py-3 text-black outline-none transition-all placeholder:text-zinc-500 focus:border-black"
                />
                <motion.button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-black px-5 py-3 font-black text-white transition-all duration-300 hover:bg-lime-300 hover:text-black"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={19} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className={shell}>
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <div className="mb-2 text-2xl font-black text-white">
              Dieyaz<span className="text-lime-300">.</span>
            </div>
            <p className="mb-0 text-zinc-500">
              Building intelligent systems and high-impact digital experiences.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              {
                icon: Link,
                href: "https://www.linkedin.com/in/asief-dieyaz/",
                label: "LinkedIn",
              },
              {
                icon: GitBranch,
                href: "https://github.com/asief-iqbal",
                label: "GitHub",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.05] text-zinc-300 transition-all hover:bg-white hover:text-black"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 mb-0 text-center text-sm text-zinc-600">
          &copy; 2026 Dieyaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
