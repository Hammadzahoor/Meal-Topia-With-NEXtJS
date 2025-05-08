"use client";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiZap } from "react-icons/fi";
import { careers } from "@/data/careers";

export default function CareerDetail({ params }) {
  const career = careers.find((c) => c.slug === params.slug);
  if (!career) return notFound();

  // Filter out the current career for the 'other careers' section
  const otherCareers = careers
    .filter((c) => c.slug !== params.slug)
    .slice(0, 2);

  return (
    <div className="pt-35 bg-[#f8f8fa] py-10 px-4 flex flex-col items-center relative overflow-hidden">
      {/* Decorative background pattern (optional) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[url('/pattern.svg')] bg-repeat"
        style={{ zIndex: 0 }}
      />
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        {/* Breadcrumb */}
        <div className="w-full text-sm text-[#5b6c7b] mb-2">
          <Link
            href="/careers"
            className="hover:underline text-[#5F6D7E] font-medium"
          >
            Careers
          </Link>
          <span className="mx-1">/</span>
          <span className="font-bold text-[#5F6D7E]">{career.title}</span>
        </div>
        {/* Title & Date */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#3d2257] mb-2 text-left w-full font-[MayekaBold]">
          {career.title}
        </h1>
        <div className="text-gray-400 text-sm mb-6 w-full">{career.date}</div>
        {/* Intro */}
        <p className="text-[#5b6c7b] mb-6 w-full">{career.intro}</p>
        {/* Requirements & Duties */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-semibold text-[#3d2257] mb-2">
            Requirements
          </h2>
          <ul className="list-disc ml-6 text-[#5b6c7b] mb-4">
            {career.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold text-[#3d2257] mb-2">Duties:</h2>
          <ul className="list-disc ml-6 text-[#5b6c7b]">
            {career.duties.map((duty, i) => (
              <li key={i}>{duty}</li>
            ))}
          </ul>
        </div>
        {/* Apply Now Form */}
        <div className="w-full bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#3d2257] mb-2">Apply Now!</h2>
          <p className="text-[#5b6c7b] mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col mb-2">
              <label className="mb-1 text-sm font-medium text-[#3d2257]">
                Full Name
              </label>
              <input
                type="text"
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="Input"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="mb-1 text-sm font-medium text-[#3d2257]">
                Email
              </label>
              <input
                type="email"
                className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="Input"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="mb-1 text-sm font-medium text-[#3d2257]">
                Resume
              </label>
              <input
                type="file"
                className="border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="mb-1 text-sm font-medium text-[#3d2257]">
                Portfolio
              </label>
              <input
                type="file"
                className="border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col mb-2">
              <label className="mb-1 text-sm font-medium text-[#3d2257]">
                Tell us more about yourself!
              </label>
              <textarea
                className="border rounded-md px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-green-200"
                placeholder="Hi! I am a professional..."
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center justify-between mt-2">
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
              >
                Submit
              </Button>
              <span className="text-xs text-gray-400 ml-4">
                Your request will be sent securely and remain private.
              </span>
            </div>
          </form>
        </div>
        {/* Other Careers Section */}
        <div className="w-full mt-8">
          <h2 className="text-4xl font-bold text-[#3d2257] text-center mb-2">
            Find Out Other Careers
          </h2>
          <p className="text-[#5b6c7b] text-center mx-auto mb-8 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherCareers.map((career, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4 transition-transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 mb-2">
                    <FiZap className="text-green-500 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-500 flex-1">{career.description}</p>
                  <Link
                    href={`/careers/${career.slug}`}
                    className="mt-4 text-green-600 font-semibold hover:underline flex items-center gap-1"
                  >
                    Apply Now <span className="ml-1">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Back to Careers Link */}
        <div className="w-full mt-10 flex justify-center">
          <Link
            href="/careers"
            className="text-green-600 font-semibold hover:underline"
          >
            ← Back to Careers
          </Link>
        </div>
      </div>
    </div>
  );
}
