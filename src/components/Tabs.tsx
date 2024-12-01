"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();

  const tabs = [
    { name: "Summary", path: "/summary" },
    { name: "Chart", path: "/" },
    { name: "Statistics", path: "/statistics" },
    { name: "Analysis", path: "/analysis" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="flex overflow-x-auto border-b border-gray-200 bg-white">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.path}
          className={`flex-1 py-3 text-center text-sm font-medium transition ${
            pathname === tab.path
              ? "text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-primary hover:border-b-2 hover:border-primary"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
