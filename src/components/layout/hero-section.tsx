"use client";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Link from "next/link";
import { MouseIcon } from "lucide-react";

export function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-tight text-center mx-auto uppercase"
      >
        Transformez vos idées en univers numériques car{" "}
        <Highlight className="text-black dark:text-white">
          chaque projet est unique
        </Highlight>
        <p className="text-neutral-700 dark:text-white text-center mx-auto lowercase lg:text-[1.4rem] text-sm tracking-tight mt-4">
          Chaque ligne de code est une brique, chaque idée un nouveau souffle.
        </p>
      </motion.h1>

      <div className="flex justify-center items-center mt-12">
        <Link href={"#contact"} className="cursor-pointer">
          <Button className="bg-[#595CFF] hover:bg-[#595CFF]/90 text-white font-bold text-lg py-6 rounded-lg transition-all duration-300 tracking-tight cursor-pointer">
            Discutons de votre projet
          </Button>
        </Link>
      </div>

      <div className="flex justify-center items-center mt-20">
        <MouseIcon className="w-10 h-10 text-neutral-700 dark:text-white animate-bounce animate-duration-1000 animate-ease-in-out " />
      </div>
    </HeroHighlight>
  );
}
