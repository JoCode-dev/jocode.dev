"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-5">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}

// TODO: Remplacer par les vraies données de projets plus tard

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Aperçu du projet.
              </span>{" "}
              Détails et captures viendront plus tard. Stack habituelle: Next.js,
              NestJS, PostgreSQL/Prisma, React Native, Tailwind CSS, AWS. Fonctionnalités
              fréquentes: authentification (JWT/OAuth), rôles et permissions,
              stockage de fichiers, temps réel (WebSocket), CI/CD.
            </p>
            <Image
              src="/Code.png"
              alt="Illustration de code"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Web App",
    title: "JoCode.tech — Portfolio & Blog (Next.js)",
    src: "/logo-light.png",
    content: <DummyContent />,
  },
  {
    category: "Web App",
    title: "TaskFlow — Gestion de projets (Next.js + NestJS)",
    src: "/window.svg",
    content: <DummyContent />,
  },
  {
    category: "Mobile App",
    title: "FitTrack — Coaching & Fitness (React Native)",
    src: "/User.png",
    content: <DummyContent />,
  },
  {
    category: "E‑commerce",
    title: "Shoply — Headless Storefront (Next.js + Stripe)",
    src: "/Code.png",
    content: <DummyContent />,
  },
  {
    category: "Backend",
    title: "ApiLink — API Gateway & Auth (NestJS + PostgreSQL)",
    src: "/skills/nodejs.png",
    content: <DummyContent />,
  },
  {
    category: "Temps réel",
    title: "LiveMeet — Visioconférence (WebRTC + Socket.io)",
    src: "/globe.svg",
    content: <DummyContent />,
  },
  {
    category: "Mobile App",
    title: "Fincheck — Suivi des dépenses (React Native)",
    src: "/next.svg",
    content: <DummyContent />,
  },
  {
    category: "DevOps",
    title: "CloudSync — Storage & CDN (AWS + Docker)",
    src: "/skills/aws.png",
    content: <DummyContent />,
  },
];
