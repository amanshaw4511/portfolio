import { links } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-4 shadow-inner transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()}{' '}
          <a
            href={links.website}
            target="_blank"
            rel="noreferrer"
            className="ml-1 underline text-gray-800 dark:text-gray-100"
          >
            {new URL(links.website).hostname}
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}
