import React from "react";
import {
  Check,
  Lock,
  CheckSquare,
  ChevronRight,
  Star,
  Play,
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  Book,
  BookOpen,
} from "lucide-react";

export const CareerRoadmap = () => {
  return (
    <div>
      <div className="p-4 flex items-start gap-x-2">
      <img className="pt-2" src="/assets/session.png" alt="session" />
        <div >
          <h1 className="text-2xl font-bold text-gray-900">Sessions</h1>
          <p className="text-sm text-gray-600">
            Track your learning milestones and prepare for the PCM stream
            selection.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5">
                <div className="h-[30%] bg-[#1A9BA1]"></div>
                <div className="h-[70%] bg-gray-300"></div>
              </div>

              <div className="relative flex items-start mb-8">
                <CheckCircle className="w-8 h-8 bg-white text-[#0891B2]" />

                <div className="ml-6 flex-1 bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-x-2">
                      <h2 className="text-lg font-semibold text-gray-900">
                        Build Basics
                      </h2>
                    </div>
                    <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    You'll build a strong foundation in foundational math and{" "}
                    <br />
                    science principles.
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>3 of 6 tasks completed</span>
                      <span>50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between blur-xs p-4 bg-[#5E5E5E0F] border-2 border-gray-300 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-400">
                          Study Motion and Energy Concepts
                        </span>
                      </div>
                      <button className="px-4 py-2 text-[#2DA9E0] border-2 border-[#2DA9E0] rounded-lg text-sm font-medium">
                        Start
                      </button>
                    </div>

                    <div className="flex items-center justify-between blur-xs p-4 bg-[#5E5E5E0F] border-2 border-gray-300 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-400">
                          Study Motion and Energy Concepts
                        </span>
                      </div>
                      <button className="px-4 py-2 text-[#2DA9E0] border-2 border-[#2DA9E0] rounded-lg text-sm font-medium">
                        Start
                      </button>
                    </div>

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
                            <span className="text-xs text-red-600 bg-red-100 rounded-full px-1 py-0.5">
                              Video · 10 Mins
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start mb-8">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-gray-300 z-10">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>

                <div className="ml-6 flex-1 bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-x-2">
                      <h2 className="text-lg font-semibold text-gray-900">
                        Strengthen Concepts
                      </h2>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {" "}
                      <span>
                        <Lock className="w-3 h-3 inline mr-1" />
                      </span>
                      Locked
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Dive deeper into advanced topics to prepare for your board
                    exams.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start mb-8">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-gray-300 z-10">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>

                <div className="ml-6 flex-1 bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-x-2">
                      <h2 className="text-lg font-semibold text-gray-900">
                        Score in Boards
                      </h2>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <span>
                        <Lock className="w-3 h-3 inline mr-1" />
                      </span>
                      Locked
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Achieve target scores in preliminary and final board
                    examinations.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-gray-300 z-10">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>

                <div className="ml-6 flex-1 bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-x-2">
                      <h2 className="text-lg font-semibold text-gray-900">
                        PCM Stream Selection
                      </h2>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <span>
                        <Lock className="w-3 h-3 inline mr-1" />
                      </span>
                      Locked
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Finalize stream choice based on aptitude and board results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Journey Progress
              </h3>
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#eab308"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.35)}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">
                        35%
                      </div>
                      <div className="text-xs text-gray-500">Complete</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">3</div>
                    <div className="text-xs text-gray-500">Tasks Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">1</div>
                    <div className="text-xs text-gray-500">Milestones</div>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
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

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold flex items-center gap-x-2 text-gray-900 mb-4">
               <span><BookOpen className="w-5 h-5 text-orange-500" /></span> Quick Learning Resources
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <Play className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      Study Techniques Video
                    </div>
                    <div className="text-xs text-gray-500">
                      YouTube · 15 mins
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      Study Guide PDF
                    </div>
                    <div className="text-xs text-gray-500">
                      Download · 2.3 MB
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
