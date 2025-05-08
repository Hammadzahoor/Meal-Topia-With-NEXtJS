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
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col space-y-6">
            {/* Breadcrumb - Always present */}
            <div className="w-full text-sm text-[#5b6c7b] mb-2">
              <Link
                href="/articles"
                className="hover:underline text-[#5F6D7E] font-medium"
              >
                Articles & Events
              </Link>
              <span className="mx-1">/</span>
              <span className="font-bold text-[#5F6D7E]">{article.title}</span>
            </div>

            {/* Main Heading - Always present */}
            <h1 className="text-3xl md:text-4xl font-bold font-[MayekaBold] text-[#412B59]">
              {article.title}
            </h1>

            {/* Publication date - Optional */}
            {article.publicationDate && (
              <div className="text-sm text-gray-500">
                <time dateTime={article.dateTime}>
                  {article.publicationDate}
                </time>
              </div>
            )}

            {/* Introduction - Optional */}
            {article.introduction && (
              <p className="text-lg text-gray-700">{article.introduction}</p>
            )}
            {article.content && (
              <p className="text-lg text-gray-700">{article.content}</p>
            )}

            {/* Main Image - Optional */}
            {article.image && (
              <div className="my-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={1050}
                  height={550}
                  className="w-full rounded-lg shadow-lg"
                />
                {article.imageCaption && (
                  <p className="text-gray-600 italic text-sm mt-2">
                    {article.imageCaption}
                  </p>
                )}
              </div>
            )}

            {/* Content Sections - Optional */}
            {article.sections &&
              article.sections.map((section, index) => (
                <div key={index} className="mt-6">
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">
                      {section.heading}
                    </h2>
                  )}

                  {section.content && (
                    <div className="space-y-4 text-gray-700">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}

                      {section.quote && (
                        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 text-blue-600 italic">
                          "{section.quote}"
                        </blockquote>
                      )}
                    </div>
                  )}
                </div>
              ))}

            {/* List section - Optional */}
            {article.listSection && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {article.listSection.heading}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {article.listSection.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conclusion - Optional */}
            {article.conclusion && (
              <p className="text-gray-700 mt-6">{article.conclusion}</p>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
