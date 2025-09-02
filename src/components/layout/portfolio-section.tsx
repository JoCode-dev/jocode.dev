
"use client";

import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const PortfolioSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Ces projets sont des exemples. Vous pouvez les remplacer par vos propres projets
    const demoProjects: Project[] = [
      {
        id: 1,
        title: "E-Commerce Mobile App",
        description: "Une application mobile de commerce électronique complète avec système de paiement, gestion des commandes et des produits.",
        image: "/portfolio/ecommerce-app.jpg", // Remplacer par une vraie image
        technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/JoCode-dev/ecommerce-app",
        liveUrl: "https://ecommerce-app.vercel.app",
        featured: true,
      },
      {
        id: 2,
        title: "Dashboard Analytics",
        description: "Tableau de bord d'analyse avec visualisations de données en temps réel pour suivre les performances commerciales.",
        image: "/portfolio/dashboard.jpg", // Remplacer par une vraie image
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js"],
        github: "https://github.com/JoCode-dev/dashboard-analytics",
        liveUrl: "https://dashboard-analytics.vercel.app",
        featured: true,
      },
      {
        id: 3,
        title: "Social Network Platform",
        description: "Plateforme de réseau social avec messagerie instantanée, partage de contenu et recommandations personnalisées.",
        image: "/portfolio/social-network.jpg", // Remplacer par une vraie image
        technologies: ["React", "Firebase", "Node.js", "Socket.io"],
        github: "https://github.com/JoCode-dev/social-network",
      },
      {
        id: 4,
        title: "AI Image Generator",
        description: "Application web qui génère des images à partir de descriptions textuelles en utilisant des modèles d'IA.",
        image: "/portfolio/ai-generator.jpg", // Remplacer par une vraie image
        technologies: ["Python", "Flask", "React", "OpenAI API"],
        liveUrl: "https://ai-image-generator.vercel.app",
      },
      {
        id: 5,
        title: "Budget Tracking App",
        description: "Application mobile pour suivre les dépenses et les revenus avec des rapports et des graphiques détaillés.",
        image: "/portfolio/budget-app.jpg", // Remplacer par une vraie image
        technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
        github: "https://github.com/JoCode-dev/budget-app",
        liveUrl: "https://budget-app.vercel.app",
      },
      {
        id: 6,
        title: "Fitness Tracker",
        description: "Application de suivi de fitness avec plans d'entraînement personnalisés et suivi des progrès.",
        image: "/portfolio/fitness-app.jpg", // Remplacer par une vraie image
        technologies: ["React Native", "TypeScript", "GraphQL", "MongoDB"],
        github: "https://github.com/JoCode-dev/fitness-tracker",
      },
    ];

    setProjects(demoProjects);
    setFilteredProjects(demoProjects);
  }, []);

  // Liste par défaut (pas de filtres pour rester minimaliste)
  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  // Pas de catégories pour un design épuré

  return (
    <section
      id="portfolio"
      className="w-full py-20 md:py-24 bg-white dark:bg-black"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white">
            Projets sélectionnés
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
            Quelques réalisations web et mobiles. Focalisées sur l’utile, la
            performance et l’expérience.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-950"
          >
            <div className="relative h-40 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              {/* Si vous avez des visuels, décommentez ci-dessous */}
              {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
            </div>

            <div className="p-4">
              <h3 className="text-base md:text-lg font-medium text-black dark:text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-3 text-gray-700 dark:text-gray-300">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black dark:hover:text-white"
                    >
                      <IconBrandGithub size={20} />
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black dark:hover:text-white"
                    >
                      <IconExternalLink size={20} />
                    </Link>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded border border-gray-200 dark:border-gray-800 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* CTA discret */}
        <div className="mt-14 border-t border-gray-200 dark:border-gray-800 pt-8 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Besoin d’un produit simple, rapide et fiable ?
          </p>
          <Link
            href="#contact"
            className="text-sm underline underline-offset-4 text-black dark:text-white hover:opacity-80"
          >
            Discutons de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
};
