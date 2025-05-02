import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Image or Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.svg"
              alt="MealTopia Logo"
              width={200}
              height={60}
              className="h-auto"
            />
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold text-[#4C1D95] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#4C1D95] mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#00CB71] text-white rounded-lg hover:bg-[#00b564] transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
