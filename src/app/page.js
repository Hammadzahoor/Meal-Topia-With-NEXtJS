import PlayStoreButton from "@/components/PlayStoreButton";
import AppStoreButton from "@/components/AppStoreButton";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import { trimText } from "@/lib/trimText";

const values = [
  {
    id: 1,
    title: "Value",
    description: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
  },
  {
    id: 2,
    title: "Value",
    description: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
  },
  {
    id: 3,
    title: "Value",
    description: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
  },
  {
    id: 4,
    title: "Value",
    description: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
  },
  {
    id: 5,
    title: "Value",
    description: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
  },
  {
    id: 6,
    title: "Value",
    description: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="py-20 lg:py-24 px-4 flex items-center min-h-screen w-full bg-[url(/hero-img.png)] bg-no-repeat bg-left md:bg-center bg-cover ">
        <div className="container px-0 xl:px-4 my-0 md:my-0 lg:my-12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left content column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-5">
              <div className="w-full max-w-[368px]">
                <Image
                  src="/logo2.svg"
                  alt="Logo"
                  width={368}
                  height={60}
                  className="object-cover w-[260px] md:w-[320px] lg:w-full h-auto lg:h-15 md:h-12"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:w-md lg:w-lg capitalize font-[MayekaBold] text-[#00CB71] font-bold">
                your guide to economic, healthy lifestyle
              </h1>
              <p className="text-base sm:text-lg w-full lg:w-[85%] md:w-1/2 mb-2 lg:mb-4 text-[#5F6D7E]">
                Eating healthy can be a challenge in today's fast-paced world.
                However, choosing healthy food without overspending is possible,
                and made easier with our application.
              </p>
              <div className="flex flex-col  gap-4">
                <AppStoreButton />
                <PlayStoreButton />
              </div>
            </div>

            {/* Right column - empty for image background */}
            <div className="hidden lg:block lg:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full flex justify-center py-16 md:py-24">
        <div className="container px-4">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-[#412B59] mb-16">
            What MealTopia Gives To You!
          </h2>

          {/* Values Grid */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex">
                  <div className="w-14 h-14 rounded-full border-1 border-[#DAE0E6] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <svg
                      className="w-7 h-7 text-[#00CB71]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M13 2L4 13H11L11 22L20 11H13L13 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#412B59] font-semibold font-[MayekaDemiBold] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="w-full flex justify-center py-16 md:py-24 bg-[url(/servicebg.png)] bg-no-repeat bg-cover">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#663698] leading-tight">
                THE MAIN SERVICE
                <br />
                MEALTOPIA OFFERS
              </h2>

              <p className="text-gray-600 text-lg">
                We provide a lot of information for customers to make their
                choices on what to buy and what to cook: Nutritional food value
                in grocery stores, food markets, restaurants, etc.
              </p>

              <div className="flex flex-col gap-4 font-[AbdoMasterRegular]">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-[#00CB71]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-600">Register in the app.</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-[#00CB71]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Enter all the ingredients you have in your house.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-[#00CB71]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Get all nutritional information for each ingredient in the
                    house.
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <button className="inline-flex items-center gap-2 bg-[#00CB71] text-white px-6 py-3 rounded-lg hover:bg-[#00b564] transition-colors">
                  Start now
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/chef-illustration.png"
                alt="Chef cooking illustration"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full flex justify-center py-16 md:py-24">
        <div className="container px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#412B59] mb-6">
              Our Latest Articles & Events
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              people find it very difficult to find the time to cook their food.
              cooking food can be costly if you don't know what ingredients to
              buy and what to cook.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                    <h2 className="text-[#4C1D95] text-xl font-semibold mb-3 hover:text-[#00CB71] transition-colors line-clamp-1">
                      {/* {trimText(article.title, 25)} */}
                      {article.title}
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
      </section>
    </main>
  );
}
