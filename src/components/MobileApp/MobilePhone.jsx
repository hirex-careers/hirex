import {
  FaSearch,
  FaBell,
  FaHeart,
} from "react-icons/fa";

import FloatingCards from "./FloatingCards";

function MobilePhone() {
  return (
    <div className="relative flex justify-center">

      {/* Glow */}

      <div className="absolute w-[430px] h-[430px] rounded-full bg-cyan-400/20 blur-[100px]"></div>

      {/* Phone */}

      <div className="relative w-[340px] h-[690px] rounded-[48px] border-[10px] border-black bg-white overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,.35)]">

        {/* Dynamic Island */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl"></div>

        {/* Screen */}

        <div className="pt-12 px-5 bg-slate-50 h-full">

          {/* Header */}

          <div className="flex justify-between items-center">

            <div>

              <h3 className="text-2xl font-bold text-blue-600">
                HireX
              </h3>

              <p className="text-gray-500 text-sm">
                Good Morning 👋
              </p>

            </div>

            <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

              S

            </div>

          </div>

          {/* Search */}

          <div className="mt-6 bg-white rounded-2xl shadow-md px-4 py-4 flex items-center gap-3">

            <FaSearch className="text-blue-600"/>

            <span className="text-gray-400">
              Search Jobs...
            </span>

            <div className="ml-auto">

              <FaBell className="text-gray-500"/>

            </div>

          </div>

          {/* Card 1 */}

          <div className="mt-6 bg-white rounded-3xl p-5 shadow-lg">

            <div className="flex justify-between">

              <div>

                <h4 className="font-bold">
                  Frontend Developer
                </h4>

                <p className="text-blue-600">
                  Google
                </p>

              </div>

              <FaHeart className="text-red-500"/>

            </div>

            <div className="flex justify-between mt-5">

              <span>₹18 LPA</span>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">

                Apply

              </button>

            </div>

          </div>

          {/* Card 2 */}

          <div className="mt-5 bg-white rounded-3xl p-5 shadow-lg">

            <div className="flex justify-between">

              <div>

                <h4 className="font-bold">
                  Data Analyst
                </h4>

                <p className="text-blue-600">
                  Microsoft
                </p>

              </div>

              <FaHeart className="text-pink-500"/>

            </div>

            <div className="flex justify-between mt-5">

              <span>₹15 LPA</span>

              <button className="bg-cyan-500 text-white px-4 py-2 rounded-xl">

                Apply

              </button>

            </div>

          </div>

          {/* Card 3 */}

          <div className="mt-5 bg-white rounded-3xl p-5 shadow-lg">

            <div className="flex justify-between">

              <div>

                <h4 className="font-bold">
                  UI / UX Designer
                </h4>

                <p className="text-blue-600">
                  Adobe
                </p>

              </div>

              <FaHeart className="text-gray-400"/>

            </div>

            <div className="flex justify-between mt-5">

              <span>₹14 LPA</span>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl">

                Apply

              </button>

            </div>

          </div>

        </div>

      </div>

      <FloatingCards />

    </div>
  );
}

export default MobilePhone;