import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      id: 1,
      text: "Access for medical practitioners and dietitians, who can use the application to track their patients' intake,",
    },
    {
      id: 2,
      text: "Access for chefs, who can promote themselves by posting their recipes",
    },
    {
      id: 3,
      text: "Recommendations on adding all the ingredients available at home",
    },
    {
      id: 4,
      text: "Assistance to losing or controlling users' weight, monitoring their calories intake.",
    },
    {
      id: 5,
      text: "Recommendations on vendors based on the available offers (depleted ingredients).",
    },
    {
      id: 6,
      text: "Assistance to losing or controlling users' weight, monitoring their calories intake.",
    },
    {
      id: 7,
      text: "Assistance in monitoring the expiry of the items.",
    },
    {
      id: 8,
      text: "Assistance on saving money by avoiding having expired ingredients and buying ready-made meals.",
    },
    {
      id: 9,
      text: "Recipes recommendations based on the available items",
    },
    {
      id: 10,
      text: "Recipes with calories outcome classified by difficulty of preparation,",
    },
    {
      id: 11,
      text: "Recipes that address users' health concerns and conditions (i.e. diabetes, allergies and intolerances, etc.), Exposure to meals from various culture",
    },
  ];

  return (
    <>
      <section className="w-full bg-[url(/aboutbg.png)] flex justify-center py-20 mt-10 md:py-24">
        <div className="container px-5">
          {/* Section Header */}
          <div className=" mb-12 flex flex-col justify-center items-center  ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#412B59] mb-6">
              About Company
            </h2>

            <div className=" mb-16 space-y-6">
              <p className="text-gray-600 text-lg">
                Our Web Application is an all-encompassing, user-friendly
                "advisor" that combines and considers all of the preferences and
                concerns and creates an individual meal plan for every customer.
              </p>
              <p className="text-gray-600 text-lg">
                Mealtopia provides nutritional value data about foods available
                in grocery stores, food markets, and restaurants to assist our
                customers in making informed decisions about what foods to buy.
                Also, it offers a variety of recipes for healthy meals and
                snacks to help control calorie intake.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Features List */}
            <div className="flex-1">
              <div className="space-y-5">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-[#00CB71]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-base">{feature.text}</p>
                  </div>
                ))}

                <div className="pt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center px-6 py-2.5 bg-[#00CB71] text-white text-sm rounded-lg hover:bg-[#00b564] transition-colors"
                  >
                    Start now
                    <svg
                      className="w-4 h-4 ml-2"
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
              </div>
            </div>

            {/* Illustration */}
            <div className="flex-1">
              <Image
                src="/homemade-recipe.png"
                alt="MealTopia Recipe Steps"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
