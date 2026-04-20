"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Heart,
  Users,
  Bot,
  CreditCard,
  Wallet,
  Settings,
  LogOut,
  LucideSubscript,
  User,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname() || "";

  const sidebarItems = [
    { name: "Dashboard", Link: "/dashboard", icon: LayoutDashboard },
    { name: "Career Roadmap", Link: "/career-roadmap", icon: MapPin },
    { name: "Session", Link: "/session", icon: Calendar },
    { name: "Mental Wellness", Link: "/mental-wellness", icon: Heart },
    {
      name: "Consultant Marketplace",
      Link: "/consultant-marketplace",
      icon: Users,
    },
    { name: "ConsulTOpen AI", Link: "/consultopen-ai", icon: Bot },
  ];
  const sidebarItems2 = [
    { name: "Subscription", Link: "/subscription", icon: LucideSubscript },
    { name: "wallet & Payments", Link: "/wallet-payments", icon: Wallet },
    { name: "Settings", Link: "/settings", icon: Settings },
    { name: "Logout", Link: "/logout", icon: LogOut },
  ];

  return (
    <div className="h-full flex flex-col  justify-between ">
      <div>
        <Link
          href="/"
          className="flex items-center p-6 border-b border-gray-200 font-semibold"
        >
          <img src="/assets/logo.png" alt="logo" />
        </Link>

        <div className="flex flex-col gap-2 px-4 py-6">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.Link);

            return (
              <Link
                key={index}
                href={item.Link}
                className={`flex items-center gap-2 px-3 py-2  rounded-md
                                    ${
                                      isActive
                                        ? "bg-[#1A9BA1] text-white"
                                        : "text-gray-700 hover:bg-[#1A9BA1] hover:text-white"
                                    }`}
              >
                <Icon size={18} />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
          <div className="border-t border-gray-200 my-4"></div>
          {sidebarItems2.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.Link);

            return (
              <Link
                key={index}
                href={item.Link}
                className={`flex items-center gap-2 px-3 py-2  rounded-md
                                    ${
                                      isActive
                                        ? "bg-[#1A9BA1] text-white"
                                        : "text-gray-700 hover:bg-[#1A9BA1] hover:text-white"
                                    }`}
              >
                <Icon size={18} />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="pb-8">
        <Link
          href="/"
          className="flex rounded-lg items-center px-1 py-0.5 border-2 border-gray-200 font-semibold"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <User className="w-4 h-4 rounded-full overflow-hidden border border-gray-100" />
              <div>
                <h3 className="text-lg font-semibold">Alex miller</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
