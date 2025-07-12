import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
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
              <ArticleCard
              key={article.id}
              slug={article.slug}
              image={article.image}
              title={article.title}
              publicationDate={article.publicationDate}
              introduction={article.introduction}
              BtnVal={"Learn more"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
