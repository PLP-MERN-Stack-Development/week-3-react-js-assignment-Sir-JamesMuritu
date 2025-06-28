import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer component with links and copyright
 */
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 text-center mt-8">
      <div>
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/tasks" className="mx-2 hover:underline">Tasks</Link>
        <Link to="/api" className="mx-2 hover:underline">API Data</Link>
      </div>
      <div className="mt-2 text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</div>
    </footer>
  );
}