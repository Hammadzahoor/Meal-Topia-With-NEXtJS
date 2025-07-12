import Link from "next/link";
import { FiZap } from "react-icons/fi";

const CareerCard = (props) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-8 flex flex-col gap-4 transition-transform hover:scale-101 ${props.className || ""}`}
    >
      {/* Icon (default: FiZap) */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 mb-2">
        {props.icon || <FiZap className="text-green-500 text-3xl" />}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-purple-700 mb-2 font-[MayekaDemiBold]">
        {props.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 flex-1">{props.description}</p>

      {/* Button / Link */}
      <Link
        href={`/careers/${props.slug}`}
        className="mt-4 text-green-600 font-semibold hover:underline flex items-center gap-1"
      >
        {props.buttonLabel || "Apply Now"} <span className="ml-1">→</span>
      </Link>
    </div>
  );
};

export default CareerCard;
