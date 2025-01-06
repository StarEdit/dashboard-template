"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return theme === "light" ? (
    <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
      <Moon />
    </Button>
  ) : (
    <Button variant="ghost" size="icon" onClick={() => setTheme("light")}>
      <Sun />
    </Button>
  );
};

export default ThemeToggle;
