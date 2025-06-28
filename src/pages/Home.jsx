import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Card className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Easy Task!</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          This is a simple, responsive React app built with Tailwind CSS. Manage
          your tasks, explore API data, and enjoy light/dark mode.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Go to Task Manager
            </Button>
          </Link>
          <Link to="/api">
            <Button variant="secondary" size="lg">
              View API Data
            </Button>
          </Link>
        </div>
      </Card>
      <Card className="max-w-xl w-full text-center bg-blue-50 dark:bg-blue-900">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-700 dark:text-gray-200">
          <li>Task management with add, complete, delete, and filter</li>
          <li>Persistent tasks using localStorage</li>
          <li>API data fetching with search and pagination</li>
          <li>Responsive design for all devices</li>
          <li>Light/Dark mode theme toggle</li>
        </ul>
      </Card>
    </div>
  );
}