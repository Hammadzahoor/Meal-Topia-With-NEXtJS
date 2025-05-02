import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

export default function ArticlePage({ params }) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[url('/bg-pattern.png')] bg-repeat">
      <article className="py-24">
        <div className="container px-4">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <time dateTime={article.date}>{article.date}</time>
              <span>•</span>
              <span>By {article.author}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#4C1D95] mb-6">
              {article.title}
            </h1>
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Back Link */}
          <div className="mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center text-[#4C1D95] hover:text-[#3b1773]"
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
