import React from "react";

const page = () => {
  return (
    <div className=" mt-20 px-4 w-full bg-[url(/aboutbg.png)] bg-cover bg-no-repeat flex flex-col items-center bg-gray-50">
      <div className="container flex flex-col items-center px-2 sm:px-4 md:px-6 lg:px-8 py-16">
        <div>
          {/* Team Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#412B59] mb-6 mt-2">
            Quick Contact
          </h1>

          {/* Team Description */}
          <p className="text-gray-600 mb-12 text-center capitalize">
            Send us a message
          </p>
        </div>
        {/* Contact Form */}
        <div className="w-full bg-white px-3 py-6 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-16 rounded-lg shadow-md">
          <form className="w-full bg-[#F8F9FB] rounded-lg shadow-md p-3 sm:p-6 md:p-8 flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="mb-1 font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Input"
                  className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#412B59]"
                />
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="mb-1 font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Input"
                  className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#412B59]"
                />
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="mb-1 font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+000"
                  className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#412B59]"
                />
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <label className="mb-1 font-medium text-gray-700">
                  Get In Touch With Us
                </label>
                <select className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#412B59]">
                  <option>Dropdown</option>
                  <option>Support</option>
                  <option>Sales</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1 font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                placeholder="Hi! We are MealTopia..."
                className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#412B59] resize-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="privacy" className="w-4 h-4" />
              <label htmlFor="privacy" className="text-gray-700 text-sm">
                I agree with MealTopia Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-md flex items-center gap-2 w-fit"
            >
              Submit <span className="text-xl">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
