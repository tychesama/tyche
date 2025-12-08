import { useEffect, useState } from "react";

const COOKIE_NAME = "theme";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match?.[2] || null;
}

function setCookie(name: string, value: string) {
  const domain =
    typeof window !== "undefined" && !window.location.hostname.includes("localhost")
      ? ".example.com"
      : "";
  document.cookie = `${name}=${value}; path=/; max-age=31536000${domain}`;
}

export function useTheme() {
  const [theme, setThemeState] = useState<string | null>(null); // null = not loaded

  useEffect(() => {
    const cookieTheme = getCookie(COOKIE_NAME);
    setThemeState(cookieTheme || "professional");
  }, []);

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    setCookie(COOKIE_NAME, newTheme);
    localStorage.setItem("theme-sync", newTheme);
  };

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

