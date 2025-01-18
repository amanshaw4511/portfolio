import { hero } from "@/config";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 transition-colors">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
        {hero.title}
      </h2>
      <p className="text-xl max-w-xl text-center mb-6 text-gray-700 dark:text-gray-300">
        {hero.details}
        <br />
        <span className="font-semibold">{hero.openToWorkText}</span>
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
      >
        View My Work
      </a>
    </section>
  );
}
