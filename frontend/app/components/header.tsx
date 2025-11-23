import {
  ChevronDown,
  Heart,
  Phone,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { NavbarDropdown } from "./NavbarDropdown";
import Image from "next/image";
import Logo from "./logo";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Category",
    href: "/category",
    subItems: [
      {
        label: "Category 1",
        href: "/category/1",
      },
      {
        label: "Category 2",
        href: "/category/2",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    subItems: [
      {
        label: "Product 1",
        href: "/product/1",
      },
      {
        label: "Product 2",
        href: "/product/2",
      },
    ],
  },

  {
    label: "Pages",
    href: "/pages",
    subItems: [
      {
        label: "Page 1",
        href: "/page/1",
      },
      {
        label: "Page 2",
        href: "/page/2",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    subItems: [
      {
        label: "Blog 1",
        href: "/blog/1",
      },
      {
        label: "Blog 2",
        href: "/blog/2",
      },
    ],
  },
  {
    label: "Elements",
    href: "/elements",
    subItems: [
      {
        label: "Element 1",
        href: "/element/1",
      },
      {
        label: "Element 2",
        href: "/element/2",
      },
    ],
  },
];

const SubMenuItems = [
  {
    label: "Account",
    href: "/account",
    icon: <User className="w-5 h-5" />,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
];

const Header = () => {
  return (
    <header className="bg-white h-[100px] w-full">
      <div className="   mx-auto shadow-md ">
        <div className=" container mx-auto px-4 py-2 flex justify-between items-center">
          <button className="flex items-center justify-center border border-gray-300 rounded-md p-2">
            <img src="/MenuIcon.svg" alt="logo" width={20} height={20} />
          </button>

          <div className="flex items-center">
            {navItems.map((item) => (
              <NavbarDropdown
                key={item.label}
                label={item.label}
                items={item.subItems || []}
              />
            ))}
          </div>
          <a href="tel:+123456789" className="flex items-center gap-2 text-sm">
            <Phone className="w-5 h-5" />
            +123 (456) (789)
          </a>
        </div>
      </div>
      <div className=" mx-auto shadow-md ">
        <div className="flex items-center justify-between container mx-auto px-4 py-2">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search For Items..."
              className="w-[300px] h-10 rounded-l-md border border-green-500 p-2 focus:outline-none placeholder:text-gray-500"
            />
            <select className=" h-10 text-gray-600 border border-green-500 p-2 outline-none  border-x-0 placeholder:text-gray-500">
              <option value="all" selected className="text-gray-500">
                All Categories
              </option>
              <option value="category">Category</option>
              <option value="product">All Products</option>
              <option value="blog">All Blogs</option>
              <option value="element">All Elements</option>
            </select>
            <button className="flex items-center justify-center bg-red-500 text-white rounded-r-md h-10 w-10">
              <Search className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-4">
            {SubMenuItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="flex items-center justify-center gap-2 "
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
