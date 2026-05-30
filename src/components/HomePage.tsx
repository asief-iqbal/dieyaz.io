"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { ClientOnly } from "@/components/ClientOnly";
import {
  ArrowUpRight,
  GitBranch,
  Link,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import {
  EducationSection,
  ServicesSection,
  ProductionWorkSection,
  ProjectsSection,
  ResearchSection,
  SkillsSection,
  CertificationsSection,
  AchievementsSection,
  ContactSection,
  Footer,
} from "@/components/sections";

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "Agentic Systems Builder",
  "Co-Founder at DFyzen",
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#production" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Link,
    href: "https://www.linkedin.com/in/asief-dieyaz/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:asiefiqbal7@gmail.com",
    label: "Email",
  },
  {
    icon: GitBranch,
    href: "https://github.com/asief-iqbal",
    label: "GitHub",
  },
];

const metrics = [
  { value: "5+", label: "Production builds" },
  { value: "2026", label: "CS thesis track" },
  { value: "AI", label: "Systems focus" },
];

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] text-zinc-50">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050608]/78 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-white/15 bg-white text-sm font-black text-black shadow-[0_0_30px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:-rotate-3">
              D
            </span>
            <span className="text-lg font-bold tracking-tight">Dieyaz</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://dieyaz.codes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black shadow-[0_0_32px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300"
            >
              Portfolio
              <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="inline-grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.14)] lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#050608]/95 px-4 py-5 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-zinc-200 transition-colors hover:bg-white hover:text-black"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://dieyaz.codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 font-bold text-black"
              >
                Portfolio
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden pt-28 sm:pt-32"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.16),transparent_46%),linear-gradient(160deg,rgba(6,182,212,0.12),transparent_36%),#050608]" />

        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-200">
              <Sparkles size={15} />
              Available for AI and web systems
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Asief Iqbal Dieyaz
              <span className="text-lime-300">.</span>
            </h1>

            <div className="mt-6 min-h-10 text-xl font-semibold text-zinc-200 sm:text-2xl">
              <ClientOnly fallback={<span>AI Engineer</span>}>
                <TypewriterEffect
                  roles={roles}
                  className="text-cyan-200 drop-shadow-[0_0_18px_rgba(103,232,249,0.28)]"
                />
              </ClientOnly>
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
              I build intelligent systems, scalable data pipelines, and fast
              production web experiences with a sharp eye for both model
              behavior and product polish.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#production"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 font-bold text-black shadow-[0_0_34px_rgba(255,255,255,0.16)] transition-all duration-300 hover:bg-lime-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                View Production Work
                <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-black/30 px-7 py-3.5 font-bold text-white backdrop-blur transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-200 hover:text-black"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
                <Mail size={18} />
              </motion.a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                  }
                  className="inline-grid h-11 w-11 place-items-center rounded-md border border-white/12 bg-white/[0.06] text-zinc-200 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px] lg:mx-0"
          >
            <div className="absolute inset-x-8 -top-5 h-8 rounded-md bg-white/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="relative aspect-square overflow-hidden rounded-md border border-white/10 bg-[#101114]">
                <Image
                  src="/pic.jpg"
                  alt="Asief Iqbal Dieyaz"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, (min-width: 640px) 70vw, 92vw"
                  className="object-contain object-center"
                />
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-white/10 bg-black/45 p-4"
                  >
                    <p className="mb-1 text-2xl font-black text-white">
                      {item.value}
                    </p>
                    <p className="mb-0 text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[#090a0d]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-white/10 bg-white text-black p-7 shadow-[0_25px_70px_rgba(255,255,255,0.08)]"
          >
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
              About
            </p>
            <h2 className="text-3xl font-black leading-tight text-black sm:text-4xl">
              Building intelligent systems and scalable products.
            </h2>
            <p className="mt-5 text-zinc-700">
              My work blends agentic systems, ML engineering, data pipelines,
              and full-stack delivery so teams can move from prototypes to
              reliable production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-lg border border-white/10 bg-white/[0.05] p-7 backdrop-blur"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-lime-200">
              Who I am
            </p>
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              AI Engineer, Full-Stack Developer, and Co-Founder at DFyzen.
            </h3>
            <p className="mt-5 text-zinc-300">
              Based in Dhaka, Bangladesh, I partner with ambitious teams to
              build intelligent workflows, scalable infrastructure, and fast
              customer-facing platforms.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ["Location", "Dhaka, Bangladesh"],
                ["Status", "Open to opportunities"],
                ["Focus", "LLM adaptation and AI products"],
                ["Team", "DFyzen"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md border border-white/10 bg-black/35 p-4"
                >
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                    {label}
                  </p>
                  <p className="mb-0 font-semibold text-zinc-100">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <EducationSection />
      <ServicesSection />
      <ProductionWorkSection />
      <ProjectsSection />
      <ResearchSection />
      <AchievementsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
