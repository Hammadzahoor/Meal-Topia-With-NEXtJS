import React from "react";
import Link from "next/link";

export default function TermsAndConditions({ params }) {
  return (
    <>
      <div className="pt-35">
        <div className="container px-4 mx-auto relative z-10 flex flex-col items-center">
          {/* Breadcrumb */}
          <div className="w-full text-sm text-[#5b6c7b] mb-2">
            <Link
              href="/"
              className="hover:underline text-[#3d2257] font-semibold"
            >
              Home
            </Link>
            <span className="mx-1">/</span>
            <span className="font-semibold text-[#3d2257]">
              Terms And Conditions
            </span>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold mb-6">Terms and Conditions</h1>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                1- Parties and scope
              </h2>
              <p className="mb-4 text-sm text-gray-700">
                By using this site and by sending your personal document(s) to
                MEALTOPIA.CA (hereinafter MEALTOPIA) you acknowledge reading and
                you convey your agreement with these Terms & Conditions and the
                Privacy Statement. If you do not agree with the terms stated in
                this agreement or are dissatisfied with the site please direct
                your complaints to Contact Us page. Failure to comply with these
                Terms & Conditions may result in legal action and restriction of
                your ability to access this site. From time to time, MEALTOPIA
                may modify these Terms & Conditions. Please continue to review
                this agreement whenever accessing or using this site.
              </p>
              <p className="mb-4 text-sm text-gray-700">
                These are the terms and conditions (“Terms”) that govern the
                relationship between you, our customer (referred to as “you” in
                these terms) and MEALTOPIA for provision of services provided by
                MEALTOPIA...
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">2- Procedure</h2>
              <p className="mb-4 text-sm text-gray-700">
                While providing our services to you MEALTOPIA will endeavour to
                provide you with accurate information to the best of its ability
                to obtain, maintain and retain such information.
              </p>
            </section>

            {/* Repeat sections as needed; I’m adding a couple more as per your image */}

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                1- Parties and scope
              </h2>
              <p className="mb-4 text-sm text-gray-700">
                By using this site and by sending your personal document(s) to
                MEALTOPIA.CA (hereinafter MEALTOPIA) you acknowledge reading and
                you convey your agreement...
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">2- Procedure</h2>
              <p className="mb-4 text-sm text-gray-700">
                While providing our services to you MEALTOPIA will endeavour to
                provide you with accurate information...
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                1- Parties and scope
              </h2>
              <p className="mb-4 text-sm text-gray-700">
                By using this site and by sending your personal document(s) to
                MEALTOPIA.CA (hereinafter MEALTOPIA) you acknowledge reading and
                you convey your agreement...
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">2- Procedure</h2>
              <p className="mb-4 text-sm text-gray-700">
                While providing our services to you MEALTOPIA will endeavour to
                provide you with accurate information...
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
