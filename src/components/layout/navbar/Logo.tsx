"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Logo = () => {
  const { theme } = useTheme();
  const [logo, setLogo] = useState<string>("/logo-dark.png");

  useEffect(() => {
    setLogo(theme === "dark" ? "/logo-dark.png" : "/logo-light.png");
  }, [theme]);

  return (
    <React.Fragment>
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="md:w-10 md:h-10 w-8 h-8"
      />
    </React.Fragment>
  );
};
