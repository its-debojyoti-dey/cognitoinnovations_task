// "use client";

// import type React from "react";
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { cn } from "../utils/utils";

// export interface NavDropdownItem {
//   label: string;
//   href?: string;
//   icon?: React.ReactNode;
//   subItems?: NavDropdownItem[];
// }

// interface NavbarDropdownProps {
//   label: string;
//   items: NavDropdownItem[];
//   icon?: React.ReactNode;
//   className?: string;
// }

// const NestedDropdown: React.FC<{
//   items: NavDropdownItem[];
//   level?: number;
// }> = ({ items, level = 1 }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div className="py-1">
//       {items &&
//         items.length > 0 &&
//         items.map((item, index) => (
//           <div
//             key={index}
//             className="relative group bg-white"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <button
//               className={cn(
//                 "w-full flex items-center justify-between px-3 py-2 text-sm",
//                 "text-foreground hover:bg-gray-100 rounded-sm",
//                 "transition-colors duration-150 hover:bg-gray-100"
//               )}
//             >
//               <div className="flex items-center gap-2">
//                 {item.icon && (
//                   <span className="text-muted-foreground">{item.icon}</span>
//                 )}
//                 <span>{item.label}</span>
//               </div>
//               {item.subItems && item.subItems.length > 0 && (
//                 <ChevronDown
//                   size={16}
//                   className={cn(
//                     "text-muted-foreground transition-transform duration-200",
//                     hoveredIndex === index && "rotate-180"
//                   )}
//                 />
//               )}
//             </button>

//             {/* Nested submenu */}
//             {item.subItems && item.subItems.length > 0 && (
//               <div
//                 className={cn(
//                   "absolute left-full top-0 ml-1 min-w-[200px]",
//                   "bg-card border border-border rounded-md shadow-md",
//                   "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
//                   "transition-all duration-200 z-50"
//                 )}
//               >
//                 <NestedDropdown items={item.subItems} level={level + 1} />
//               </div>
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export function NavbarDropdown({
//   label,
//   items,
//   icon,
//   className,
// }: NavbarDropdownProps) {
//   return (
//     <div className={cn("relative group", className)}>
//       <button
//         className={cn(
//           "flex items-center  px-3 py-2 text-sm font-medium",
//           "text-foreground hover:text-primary transition-colors duration-150",
//           "rounded-md hover:bg-muted/50"
//         )}
//       >
//         {icon && <span>{icon}</span>}
//         <span>{label}</span>
//         {items && items.length > 0 && (
//           <ChevronDown
//             size={16}
//             className="text-muted-foreground group-hover:text-foreground transition-colors"
//           />
//         )}
//       </button>

//       {/* Main dropdown menu */}
//       {items && items.length > 0 && (
//         <div
//           className={cn(
//             "absolute left-0 top-full mt-1 min-w-[150px]",
//             "bg-white rounded-md shadow-lg",
//             "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
//             "transition-all duration-200 z-50"
//           )}
//         >
//           <NestedDropdown items={items} />
//         </div>
//       )}
//     </div>
//   );
// }
