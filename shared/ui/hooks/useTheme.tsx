import { useEffect, useState } from "react";

const COOKIE_NAME = "theme";

function getCookie(name: string) {
  if (typeof document === "undefined") return null; // server-safe
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match?.[2] || null;
}

function setCookie(name: string, value: string) {
  if (typeof document === "undefined") return; // server-safe
  const domain =
    typeof window !== "undefined" && window.location.hostname.includes("localhost")
      ? ""
      : ".tyche01.fun";
  document.cookie = `${name}=${value}; path=/; max-age=31536000${domain}`;
}

export function useTheme() {
  const [theme, setThemeState] = useState<string>("professional");

  useEffect(() => {
    // Read cookie on client only
    const cookieTheme = getCookie(COOKIE_NAME);
    if (cookieTheme) setThemeState(cookieTheme);
  }, []);

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    setCookie(COOKIE_NAME, newTheme);
    localStorage.setItem("theme-sync", newTheme);
  };

  // Listen to storage event
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === "theme-sync" && e.newValue && e.newValue !== theme) {
        setThemeState(e.newValue);
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [theme]);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
