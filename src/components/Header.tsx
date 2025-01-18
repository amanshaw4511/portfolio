import { links, personal } from "@/config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          <a href={links.website} target="_blank" rel="noreferrer">
            {personal.name}
          </a>
        </h1>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <a
                href="#about"
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                Blogs
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={links.github}
                className="text-gray-800 dark:text-gray-200 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
