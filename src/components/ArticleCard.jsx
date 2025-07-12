import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ArticleCard = (props) => {
  return (
    <div key={props.id} className="flex flex-col">
                  {/* Article Image */}
                  <Link
                    href={`/articles/${props.slug}`}
                    className="block relative h-[260px] rounded-2xl overflow-hidden mb-6"
                  >
                    <Image
                      src={props.image}
                      alt={props.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Article Meta */}
                  <div className="text-gray-500 text-sm mb-2">
                  {props.publicationDate}
                  </div>

                  {/* Article Title */}
                  <Link href={`/articles/${props.slug}`}>
                    <h2 className="text-[#4C1D95] text-xl font-semibold mb-3 hover:text-[#00CB71] transition-colors line-clamp-1">
                      {/* {trimText(article.title, 25)} */}
                      {props.title}
                    </h2>
                  </Link>

                  {/* Article Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {props.introduction}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={`/articles/${props.slug}`}
                    className="text-[#00CB71] font-medium inline-flex items-center hover:text-[#00b564] transition-colors mt-auto"
                  >
                    {props.BtnVal}
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
  )
}

export default ArticleCard
