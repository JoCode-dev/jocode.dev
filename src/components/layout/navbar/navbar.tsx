import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { BrainIcon, HomeIcon, PaletteIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../../theme/mode-toggle";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 w-full p-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4 xl:px-10 px-4">
        <Logo />
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
                  href="/#portfolio"
                  className="hover:scale-110 transition-all duration-300"
                >
                  <PaletteIcon className="md:w-5 md:h-5 w-4 h-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium mb-1">Portfolio</p>
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
