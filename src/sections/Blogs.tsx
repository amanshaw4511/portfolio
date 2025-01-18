import { blogs } from "@/config";
import { DevToArticle } from "@/types";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const url = `https://dev.to/api/articles?username=${blogs.devtoUsername}`;

    const fetchArticles = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Loading articles...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Blogs
          </h2>
          <p className="text-red-600 dark:text-red-400">
            Failed to load articles: {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blogs"
      className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Blogs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Published on:{" "}
                {new Date(article.published_at).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {article.description}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
