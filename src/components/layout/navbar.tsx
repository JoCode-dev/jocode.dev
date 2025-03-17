"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { BrainIcon, HomeIcon, PaletteIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import { useTheme } from "next-themes";
export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full p-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4 xl:px-10 px-4">
        <Image
          src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
          alt="logo"
          width={50}
          height={50}
          className="md:w-10 md:h-10 w-8 h-8"
        />
      </div>
      <div className="flex flex-row items-center justify-between gap-4 dark:bg-[#0B1115] bg-[#efefef] w-[13rem] px-3 py-2 rounded-xl">
        <div className="rounded-full dark:bg-[#11191E] bg-[#dee2e6] md:w-8 md:h-8 w-6 h-6 flex flex-col items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="hover:scale-110 transition-all duration-300"
                >
                  <HomeIcon className="md:w-5 md:h-5 w-4 h-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium mb-1">Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="rounded-full dark:bg-[#11191E] bg-[#dee2e6] md:w-8 md:h-8 w-6 h-6 flex flex-col items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/#about"
                  className="hover:scale-110 transition-all duration-300"
                >
                  <BrainIcon className="md:w-5 md:h-5 w-4 h-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium mb-1">About</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="rounded-full dark:bg-[#11191E] bg-[#dee2e6] md:w-8 md:h-8 w-6 h-6 flex flex-col items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/#services"
                  className="hover:scale-110 transition-all duration-300"
                >
                  <PaletteIcon className="md:w-5 md:h-5 w-4 h-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium mb-1">Services</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="rounded-full dark:bg-[#11191E] bg-[#dee2e6] md:w-8 md:h-8 w-6 h-6 flex flex-col items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/#contact"
                  className="hover:scale-110 transition-all duration-300"
                >
                  <SendIcon className="md:w-5 md:h-5 w-4 h-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium mb-1">Contact</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <ModeToggle />
      </div>
    </div>
  );
};
