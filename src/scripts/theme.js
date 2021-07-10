import { getQuery } from "./utils";

function storeTheme(theme) {
  return localStorage.setItem("theme", theme);
}

export function toggleTheme() {
  const html = getQuery("html");
  const header = getQuery(".header");

  html.classList.contains("dark") ? storeTheme("light") : storeTheme("dark");
  header.classList.toggle("light");
  html.classList.toggle("dark");
}

export function getInitialTheme() {
  const theme = localStorage.getItem("theme");
  const html = getQuery("html");
  const header = getQuery(".header");

  if (theme == null) {
    return;
  }

  if (theme === "light") {
    html.classList.toggle("dark");
    header.classList.toggle("light");
  }
}
