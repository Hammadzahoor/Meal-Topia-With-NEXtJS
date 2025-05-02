import Link from "next/link";
import { FiZap } from "react-icons/fi";
import { careers } from "@/data/careers";

const Careers = () => {
  return (
    <div className="pt-35 bg-[#f8f8fa] py-16 px-4 flex flex-col items-center relative overflow-hidden">
      {/* Decorative background pattern (optional) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[url('/pattern.svg')] bg-repeat"
        style={{ zIndex: 0 }}
      />
      <div className="container relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#3d2257] mb-6 mt-2">
          Careers
        </h1>
        <p className="text-[#5b6c7b] mb-12 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {careers.map((career, idx) => (
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
  );
};

export default Careers;
