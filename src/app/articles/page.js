import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import { trimText } from "@/lib/trimText";

export default function ArticlesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url(/articlesbg.png)] pt-35 pb-16">
      {/* Page Header */}
      <div className="container px-5 mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#412B59] text-center mb-4">
          Our Latest Articles & Events
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          people find it very difficult to find the time to cook their food.
          cooking food can be costly if you don't know what ingredients to buy
          and what to cook.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col">
              {/* Article Image */}
              <Link
                href={`/articles/${article.slug}`}
                className="block relative h-[260px] rounded-2xl overflow-hidden mb-6"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Article Meta */}
              <div className="text-gray-500 text-sm mb-2">
                {article.publicationDate}
              </div>

              {/* Article Title */}
              <Link href={`/articles/${article.slug}`}>
                <h2
                  className="text-[#4C1D95] text-xl font-semibold mb-3 hover:text-[#00CB71] transition-colors title={article.title}"
                  title={article.title}
                >
                  {/* {article.title} */}
                  {trimText(article.title, 25)}
                </h2>
              </Link>

              {/* Article Description */}
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.introduction}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/articles/${article.slug}`}
                className="text-[#00CB71] font-medium inline-flex items-center hover:text-[#00b564] transition-colors mt-auto"
              >
                Learn more
                <svg
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
