import Image from "next/image";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

interface Skill {
  id: number;
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    icon: "/skills/react.png",
  },
  {
    id: 2,
    name: "Next.js",
    icon: "/skills/nextjs.png",
  },
  {
    id: 3,
    name: "Typescript",
    icon: "/skills/typescript.png",
  },
  {
    id: 4,
    name: "Tailwind",
    icon: "/skills/tailwindcss.png",
  },
  {
    id: 5,
    name: "Node.js",
    icon: "/skills/nodejs.png",
  },
  {
    id: 6,
    name: "NestJS",
    icon: "/skills/nestjs.png",
  },
  {
    id: 7,
    name: "Database",
    icon: "/skills/db.png",
  },
  {
    id: 8,
    name: "Git",
    icon: "/skills/git.png",
  },
  {
    id: 9,
    name: "Docker",
    icon: "/skills/docker.png",
  },
  /* {
    id: 10,
    name: "AWS",
    icon: "/skills/aws.png",
  }, */
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="h-screen dark:bg-[#090C16] bg-white flex flex-col items-center justify-center"
    >
      <div className="rounded-full lg:h-48 lg:w-48 h-32 w-32 relative">
        <Image
          src="/User.png"
          alt="JoCode"
          className="object-cover w-full h-full"
          width={300}
          height={300}
        />
        <Image
          src="/Code.png"
          alt="code"
          className="object-cover absolute bottom-0 right-0"
          width={70}
          height={70}
        />
      </div>

      <div className="dark:text-white text-black text-center">
        <p
          className={`${inconsolata.className} lg:text-3xl md:text-xl text-lg`}
        >
          Hello World! Je suis{" "}
          <span className="font-bold text-[#595CFF]">
            Ange Cédric Joël DUAKON
          </span>{" "}
          (JoCode)
        </p>

        <h1 className="dark:text-white text-black lg:text-8xl md:text-4xl text-3xl font-bold my-2">
          Développeur FullStack
        </h1>

        <p className="lg:text-xl md:text-lg text-base lg:w-1/2 md:w-1/2 w-full mx-auto text-[#878EA1] my-2 px-4">
          Je transforme les besoins en applications réelles, évolutives et
          fonctionnelles. Je développe des systèmes grâce à ma passion pour la
          technologie, en apportant des solutions innovantes et efficaces à des
          défis complexes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-row items-center justify-center dark:bg-[#292C34] bg-gray-200 rounded-full p-2 px-4 gap-2"
          >
            <Image
              key={skill.id}
              src={skill.icon}
              alt={skill.name}
              width={20}
              height={20}
              className="object-contain lg:h-7 lg:w-7 h-5 w-5"
            />
            <p className="text-sm dark:text-gray-300 text-black">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
