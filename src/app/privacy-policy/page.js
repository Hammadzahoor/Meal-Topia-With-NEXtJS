import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            <span className="font-semibold text-[#3d2257]">Privacy Policy</span>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
            <section className="mb-6">
              <p className="mb-4 text-sm text-gray-700">
                We, at MEALTOPIA LIFESTYLE CORP. (hereinafter MEALTOPIA)
                recognize the importance of client privacy and the sensitivity
                of the personal information that we may have concerning any
                individual. We have a professional and ethical obligation to
                keep confidential all information we receive from the client
                subject to the client’s instructions to provide our services.
                Further, we are committed to safeguarding the personal
                information we have or control concerning any individual.
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
