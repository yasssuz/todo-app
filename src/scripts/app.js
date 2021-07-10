import { getInitialTheme, toggleTheme } from "./theme";
import { getQuery } from "./utils";

getQuery("#toggle-theme-btn").addEventListener("click", toggleTheme);
window.addEventListener("load", getInitialTheme);
