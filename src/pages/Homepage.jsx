import React from "react";
import logo from "../assets/svg/ic_logo.svg";
import profile from "../assets/svg/Frame 177.svg";
import comments from "../assets/png/Frame 5916.png";

const Homepage = () => {
  return (
    <div className="md:px-64">
      <div>
        {/* navbar */}
        <div className=" flex justify-between items-center mt-6 mx-4 md:mx-0">
          {/* logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* profile */}
          <div className="flex items-center space-x-3">
            <p className=" font-medium">Welcome!</p>
            <img src={profile} alt="" />
          </div>
        </div>
        {/* body */}
        <div className="flex justify-between">
          {/* write-up */}
          <div className="mt-48 md:mt-64 max-w-lg mx-4 md:mx-0">
            <h1 className=" font-bold text-5xl md:text-6xl mb-8">
              Find a place you <br /> will love to live!
            </h1>
            <p className="md:text-xl mb-5 md:mb-10">
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </p>
            <div className="mb-5">
              <form class="max-w-full ">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Address"
                    required
                  />
                </div>
              </form>
            </div>
            <button className="bg-[#3366FF] text-white font-semibold px-7 py-2 rounded-md ">
              SEARCH
            </button>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <img src={comments} alt="" className="max-h-[90vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
