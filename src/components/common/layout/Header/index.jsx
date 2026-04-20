"use client";

import { Search, Bell, MessageSquare, Crown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search internships, certifications, consultants..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A9BA1] focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-[#1A9BA1] transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="relative p-2 text-gray-600 hover:text-[#1A9BA1] transition-colors">
            <MessageSquare size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
            <span className="font-medium">Upgrade Plan</span>
          </button>
        </div>
      </div>
    </header>
  );
}
