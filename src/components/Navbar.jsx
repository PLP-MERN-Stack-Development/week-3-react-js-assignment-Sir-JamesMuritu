import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <span className="font-bold text-lg">Easy Task</span>
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/tasks" className="mr-4 hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API Data</Link>
        <button
          onClick={toggleTheme}
          className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}