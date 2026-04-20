import { Clock, Road, CheckCircle, Lock, Target, Check } from "lucide-react";
import React from "react";

export const StudyMotion = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Today's Focus Card */}
        <div className="bg-white rounded-lg col-span-2">
          <div className="flex items-center gap-x-2 mb-4">
            <img
              src="/assets/iconify-icon.png"
              alt="Checkmark"
              className="w-4 h-4 flex-shrink-0 mt-1"
            />

            <h2 className="text-lg font-semibold text-gray-800">
              Today's Focus!
            </h2>
          </div>

          <div className="space-y-4 border border-gray-200 p-5 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Study Motion and Energy Concepts
            </h3>
            <div className="flex items-start space-x-3">
              <img
                src="/assets/right-direction.png"
                alt="Clock"
                className="w-4 h-4 flex-shrink-0 mt-1"
              />
              <p className="text-gray-700">
                Understand speed, velocity, and acceleration
              </p>
            </div>

            <div className="border border-dotted border-gray-300 "></div>

            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4" />
              <p className="text-gray-700">
                Solve 5-10 basic numerical problems
              </p>
            </div>
          </div>
        </div>

        {/* You Are Calm Today Card */}
        <div className="rounded-lg relative overflow-hidden">
          <div className="relative z-10">
            {/* Calm Character */}
            <div className="flex justify-center mb-4">
              <img
                src="/assets/calm.png"
                alt="Calm Character"
                className="w-24 h-24 object-contain"
              />
            </div>

            <h2 className="text-xl font-bold text-green-700 text-center mb-3">
              You Are Calm Today
            </h2>

            <p className="text-gray-600 text-sm text-center leading-relaxed">
              Staying calm helps you think clearly and make better decisions.
              Take a deep breath and continue your day with a peaceful mind.
            </p>
          </div>

          {/* Corner gradients */}
          <div className="absolute top-0 -left-10 w-44 h-44 bg-linear-to-br from-[#E9FFC2] to-transparent opacity-50 rounded-bl-full"></div>
          <div className="absolute bottom-0 -right-10 w-44 h-44 bg-linear-to-tl from-[#E9FFC2] to-transparent opacity-50 rounded-tr-full"></div>

          {/* Leaf decorations at bottom */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between ">
            <img
              src="/assets/leaf2.png"
              alt="Leaf 2"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/assets/leaf1.png"
              alt="Leaf 1"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-x-2">
                <Road className="w-5 h-5 text-teal-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Career Roadmap
                </h3>
              </div>
              <button className="text-teal-600 text-sm font-medium px-3 py-1 rounded-full bg-teal-50 hover:bg-teal-100 transition-colors duration-200">
                View Full Roadmap
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center justify-between relative mb-8">
              <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded-full top-1/2 -translate-y-1/2"></div>
              <div className="absolute left-0 h-1 bg-teal-500 rounded-full top-1/2 -translate-y-1/2 w-[25%]"></div>

              {/* Step 1: Build Basics (Completed) */}
              <div className="relative flex flex-col items-center z-10">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mb-2">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-gray-700 font-medium text-center">
                  Build Basics
                </span>
              </div>

              {/* Step 2: Strengthen Concepts (Locked) */}
              <div className="relative flex flex-col items-center z-10">
                <div className="w-10 h-10 border-2 border-gray-300 bg-white rounded-full flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <span className="text-xs text-gray-500 font-medium text-center">
                  Strengthen Concepts
                </span>
              </div>

              {/* Step 3: Score in Boards (Locked) */}
              <div className="relative flex flex-col items-center z-10">
                <div className="w-10 h-10 border-2 border-gray-300 bg-white rounded-full flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <span className="text-xs text-gray-500 font-medium text-center">
                  Score in Boards
                </span>
              </div>

              {/* Step 4: PCM Stream (Locked) */}
              <div className="relative flex flex-col items-center z-10">
                <div className="w-10 h-10 border-2 border-gray-300 bg-white rounded-full flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <span className="text-xs text-gray-500 font-medium text-center">
                  PCM Stream
                </span>
              </div>
            </div>

            {/* Next Milestone */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-4 border border-teal-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Next Milestone: Strengthen Concepts
                    </h4>
                    <p className="text-xs text-gray-600">
                      Complete 65% to unlock next stage
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600">65%</div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyMotion;
