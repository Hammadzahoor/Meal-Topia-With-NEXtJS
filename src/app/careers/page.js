import Link from "next/link";
import { FiZap } from "react-icons/fi";
import { careers } from "@/data/careers";
import CareerCard from "@/components/CareerCard";

const Careers = () => {
  return (
    <div className="pt-35 bg-[url(/aboutbg.png)] bg-cover bg-no-repeat py-16 px-4 flex flex-col items-center relative overflow-hidden">
      <div className="container px-5 relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#412B59] mb-6 mt-2">
          Careers
        </h2>
        <p className="text-[#5b6c7b] mb-12 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {careers.map((career, idx) => (
            <CareerCard
            key={idx}
            title={career.title}
            description={career.description}
            slug={career.slug}
            icon={<FiZap size={30} className="text-green-500" />}
            buttonLabel="Apply Now"
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
