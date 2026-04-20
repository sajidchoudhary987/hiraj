"use client";

import { Send, Hand } from "lucide-react";

export default function DashboardAI() {
  const suggestedQuestions = [
    "What are the future benefits of choosing PCM in 11th?",
    "How to balance board exams and competitive prep?"
  ];

  return (
    <section className="p-6 max-w-7xl mx-auto">
       <h1 className="text-3xl font-bold text-[#1A9BA1] mb-2">
          Good morning, Alex! <Hand className="inline-block ml-2 text-yellow-500" size={28} />
        </h1>
      <div className=" mb-8 border-l-4 border-[#1A9BA1] bg-gradient-to-r from-[#E6F7F5] via-[#F9FFF9] to-[#EDFBE9] p-4 rounded-lg">
       
        <p className="text-gray-600 italic">
          "The future belongs to those who believe in the beauty of their dreams." <br />
          - Eleanor Roosevelt
        </p>
      </div>

      <div className="bg-linear-to-b border border-gray-200 from-[#FFFFFF] to-[#FEF8FB] rounded-2xl p-6">
        <div className="mb-6">
          <img src="/assets/logo1.png" alt="" />
        </div>

        <div className="mb-6 h-[300px] rounded-lg p-4">
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3 justify-end flex-wrap">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-700 text-sm hover:bg-gray-50 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Type your specific question here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A9BA1] focus:border-transparent pr-12"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[#1A9BA1] text-white rounded-lg hover:bg-[#158A90] transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}