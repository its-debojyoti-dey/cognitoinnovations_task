"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavbarDropdownProps {
  label: string;
  items: DropdownItem[];
}

export const NavbarDropdown = ({ label, items }: NavbarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!items || items.length === 0) {
    return (
      <Link
        href="#"
        className="px-4 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="px-4 py-2 text-sm font-medium flex items-center gap-1 hover:text-gray-600 transition-colors">
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className="z-10 absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
