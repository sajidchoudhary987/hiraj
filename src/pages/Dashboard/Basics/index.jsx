import React from "react";
import {
  Check,
  Lock,
  Wind,
  Zap,
  Armchair,
  RefreshCw,
  Star,
  Calendar,
  TrendingUp,
  ChevronRight,
  SquareCheck,
  CheckSquare,
  Calculator,
  FlaskConical,
} from "lucide-react";

export const Basics = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Build Basics and Mind Gym */}
        <div className="col-span-2 space-y-6">
          {/* Build Basics Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-x-2 pb-2">
              <CheckSquare className="w-5 h-5 text-[#2DA9E0]" />
              <h2 className="text-lg font-semibold text-gray-900">
                Build Basics
              </h2>
            </div>

            <div className="space-y-4">
              {/* Locked Items */}
              <div className="flex items-center justify-between blur-xs p-4 bg-[#5E5E5E0F] border-2 border-gray-300 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Complete</span>
                </div>
                <button className="px-4 py-2 text-[#2DA9E0] border-2 border-[#2DA9E0] rounded-lg text-sm font-medium">
                  Start
                </button>
              </div>

              <div className="flex items-center justify-between blur-xs p-4 bg-[#5E5E5E0F] border-2 border-gray-300 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">
                    Complete Foundation Course
                  </span>
                </div>
                <button className="px-4 py-2 text-[#2DA9E0] border-2 border-[#2DA9E0] rounded-lg text-sm font-medium">
                  Start
                </button>
              </div>

              {/* Current Item */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-[#6A3E00] rounded"></div>
                  <div>
                    <span className="text-gray-900 font-medium">
                      Study Motion and Energy Concepts
                    </span>
                    <div className="flex items-center mt-1">
                      <span className="px-2 py-1 bg-gray-100 text-[#6A3E00] text-xs rounded-full mr-2">
                        Science
                      </span>
                    </div>
                  </div>
                </div>
                <button className="px-2 py-1 border border-[#1A9BA1] text-[#1A9BA1] rounded-full text-sm font-medium">
                  Continue
                </button>
              </div>

              {/* Completed Items */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#1A9BA1] rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <span className="text-gray-900">
                      Solve 20 Maths Question Daily
                    </span>
                    <div className="flex items-center mt-1">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full mr-2">
                        Maths
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#1A9BA1] rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <span className="text-gray-900">
                      Watch a Science Concept Video
                    </span>
                    <div className="flex items-center mt-1">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full mr-2">
                        Exploration
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-[#1A9BA1] rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <span className="text-gray-900">
                      Follow a Weekly Study Plan
                    </span>
                    <div className="flex items-center mt-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full mr-2">
                        Habit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mind Gym Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Mind Gym
              </h2>
              <p className="text-sm text-gray-600">
                Quick exercises to boost your mental fitness and focus
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Breathing Exercises */}
              <div className="bg-linear-to-br from-[#C7E9FF] to-[#E4FFFF] rounded-lg p-6 border border-blue-200">
                <div className="flex items-center justify-between ">
                  <div className="font-semibold flex gap-x-2 text-gray-900 mb-1">
                    <Wind className="w-8 bg-white rounded-lg p-2 h-8 text-blue-600" />

                    <div>
                      <h3> Breathing Exercises</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Calm and relax
                      </p>
                    </div>

                  </div>
                </div>

                <div className="flex justify-between border border-[#FFFFFF45] rounded-lg p-3 items-center">
                     <span className="text-xs text-gray-600 font-medium">
                    3-5 minutes
                  </span>
                  <button className="flex items-center bg-white border rounded-full border-gray-200 p-2 text-black text-sm font-medium">
                    Start <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
               
                </div>
              </div>

              {/* Focus Exercises */}
              <div className="bg-linear-to-br from-[#FEEF7B] to-[#FEF5DC] rounded-lg p-6 border border-purple-200">
                <div className="flex items-center justify-between ">
                  <div className="font-semibold flex gap-x-2 text-gray-900 mb-1">
                    <Zap className="w-8 bg-white rounded-lg p-2 h-8 text-purple-600" />

                    <div>
                      <h3> Focus Exercises</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Boost concentration
                      </p>
                    </div>

                  </div>
                </div>

                <div className="flex justify-between border border-[#FFFFFF45] rounded-lg p-3 items-center">
                     <span className="text-xs text-gray-600 font-medium">
                    5-10 minutes
                  </span>
                  <button className="flex items-center bg-white border rounded-full border-gray-200 p-2 text-black text-sm font-medium">
                    Start <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
               
                </div>
              </div>

              {/* Muscle Relaxation */}
              <div className="bg-linear-to-br from-[#CEC3FF] to-[#F3E8FF] rounded-lg p-6 border border-green-200">
                <div className="flex items-center justify-between ">
                  <div className="font-semibold flex gap-x-2 text-gray-900 mb-1">
                    <Armchair className="w-8 bg-white rounded-lg p-2 h-8 text-green-600" />

                    <div>
                      <h3> Muscle Relaxation</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Release body tension
                      </p>
                    </div>

                  </div>
                </div>

                <div className="flex justify-between border border-[#FFFFFF45] rounded-lg p-3 items-center">
                     <span className="text-xs text-gray-600 font-medium">
                    25-30 minutes
                  </span>
                  <button className="flex items-center bg-white border rounded-full border-gray-200 p-2 text-black text-sm font-medium">
                    Start <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
               
                </div>
              </div>

              {/* Study Focus Reset */}
              <div className="bg-linear-to-br from-[#FFD1EB] to-[#FAE8FF]] rounded-lg p-6 border border-orange-200">
                <div className="flex items-center justify-between ">
                  <div className="font-semibold flex gap-x-2 text-gray-900 mb-1">
                    <RefreshCw className="w-8 bg-white rounded-lg p-2 h-8 text-red-600" />

                    <div>
                      <h3> Study Focus Reset</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Sharpen your mind
                      </p>
                    </div>

                  </div>
                </div>

                <div className="flex justify-between border border-[#FFFFFF45] rounded-lg p-3 items-center">
                     <span className="text-xs text-gray-600 font-medium">
                    3 minutes
                  </span>
                  <button className="flex items-center bg-white border rounded-full border-gray-200 p-2 text-black text-sm font-medium">
                    Start <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
               
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Mood & Activity Trends and Skills Progress */}
        <div className="col-span-1 space-y-6">
          {/* Mood & Activity Trends */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Mood & Activity Trends
              </h3>
              <span className="text-sm text-gray-500">This Week</span>
            </div>

            {/* Bar Chart */}
            <div className="py-6">
              <div className="flex items-end justify-between h-32 ">
                <div className="flex flex-col items-center flex-1">
                  <img src="/assets/calm2.png" alt="Calm" className="w-6 h-6" />
                  <div className="w-6 bg-linear-to-t from-[#9159CB] to-[#E3B3F2] rounded-t rounded-b rounded-lg h-28"></div>
                  <span className="text-xs text-gray-500 mt-1">Mon</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <img src="/assets/calm.png" alt="Calm" className="w-6 h-6" />
                  <div className="w-6 bg-linear-to-t from-[#82B95A] to-[#C5E489] rounded-t rounded-b rounded-lg h-28"></div>
                  <span className="text-xs text-gray-500 mt-1">Tue</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <img src="/assets/calm3.png" alt="Calm" className="w-6 h-6" />
                  <div className="w-6 bg-linear-to-t from-[#C23587] to-[#FB98CF] rounded-t rounded-b rounded-lg h-28"></div>
                  <span className="text-xs text-gray-500 mt-1">Wed</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <img src="/assets/calm4.png" alt="Calm" className="w-6 h-6" />
                  <div className="w-6 bg-linear-to-t from-[#00BEBF] to-[#8FF7F4] rounded-t rounded-b rounded-lg h-28"></div>
                  <span className="text-xs text-gray-500 mt-1">Thu</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <img src="/assets/calm5.png" alt="Calm" className="w-6 h-6" />
                  <div className="w-6 bg-linear-to-t from-[#EC4242] to-[#FF9393] rounded-t rounded-b rounded-lg h-28"></div>
                  <span className="text-xs text-gray-500 mt-1">Fri</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-6 bg-linear-to-t from-gray-300 to-gray-200 rounded-t rounded-b rounded-lg h-28"></div>
                  <span className="text-xs text-gray-500 mt-1">Sat</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-6 bg-linear-to-t from-gray-100 to-gray-50 rounded-t rounded-b rounded-lg h-28"></div>
                  <span className="text-xs text-gray-500 mt-1">Sun</span>
                </div>
              </div>
            </div>

            {/* Warning Message */}
            <div className="py-4">
              <p className="text-sm text-gray-400 font-bold">
                Your mood this week suggests increased stress related to your
                future.
              </p>
            </div>

            {/* Recommended for You */}
            <div className="border-t border-gray-200 text-center py-8">
              <h5 className="text-sm text-[#EC4899] bg-[#FDDBFF] rounded-full px-3 py-1 inline-block">
                Based on mood log
              </h5>
              <h4 className="text-lg font-semibold text-[#EC4899] py-2">
                Recommended for You
              </h4>
              <div className="flex items-center flex-col space-x-3 mb-3">
                <img
                  src="/assets/user.png"
                  alt="Therapist"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-gray-900">
                    Mukund Tyagi
                  </h5>
                  <p className="text-xs text-gray-500">
                    '(Student Wellbeing Therapist)'
                  </p>
                  <div className="flex items-center justify-center mt-1">
                    <div className="flex text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <span className="text-xs text-yellow-500 ">4.9</span>
                    <span className="text-sm text-gray-500 ">
                      (120+ session)
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-[#EC4899] mt-6 text-white rounded-lg text-sm font-medium">
                Book a Therapy Session{" "}
                <ChevronRight className="w-4 h-4 inline ml-1" />
              </button>
            </div>
          </div>

          {/* Skills Progress */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-x-2">
              <img src="/assets/beat.png" alt="" />
              <h3 className="text-lg font-semibold text-gray-900 ">
                Skills Progress
              </h3>
            </div>
            <div className="flex flex-col gap-4 py-6">
              <div className="flex items-center gap-x-2">
                <div className="bg-[#F4ECFB] rounded-lg p-2">
                  <Calculator className="w-6 h-6 text-purple-500" />
                </div>
                <div className="w-full">
                  <div className="flex items-center  justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Math Problem Solving
                    </span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#229E91] h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <div className="bg-yellow-100 rounded-lg p-2">
                  <FlaskConical className="w-6 h-6 text-orange-500" />
                </div>
                <div className="w-full">
                  <div className="flex items-center  justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Science Concepts
                    </span>
                    <span className="text-sm text-gray-500">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#229E91] h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Basics;
