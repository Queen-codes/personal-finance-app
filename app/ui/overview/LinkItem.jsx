"use client";

import OverviewIcon from "../../../public/images/icon-nav-overview.svg";
import TransactionIcon from "../../../public/images/icon-nav-transactions.svg";
import BudgetIcon from "../../../public/images/icon-nav-budgets.svg";
import PotIcon from "../../../public/images/icon-nav-pots.svg";
import BillsIcon from "../../../public/images/icon-nav-recurring-bills.svg";
import Link from "next/link";
import clsx from "clsx";
//import { usePathname } from "next/navigation";

const navIcons = {
  "/images/icon-nav-overview.svg": OverviewIcon,
  "/images/icon-nav-transactions.svg": TransactionIcon,
  "/images/icon-nav-budgets.svg": BudgetIcon,
  "/images/icon-nav-pots.svg": PotIcon,
  "/images/icon-nav-recurring-bills.svg": BillsIcon,
};

export default function LinkItem({ isMinimized, isBottomNav, link, pathName }) {
  //const pathName = usePathname()
  const NavIconComponent = navIcons[link.icon];
  const isActive = pathName === link.href;

  return (
    <li key={link.name}>
      <Link
        href={link.href}
        className={clsx(
          // Base styles for all links
          "flex items-center gap-3.5 py-4 pr-4 pl-8",

          // Styles for bottom navigation (mobile)
          isBottomNav && "flex-col items-center p-2 text-xs",

          // Styles when the sidebar is minimized (desktop)
          !isBottomNav &&
            isMinimized &&
            "px-4 justify-center pl-4 pr-8 bg-transparent border-none", // Center icon when no text, reduced padding

          // Active state styling
          {
            // Active state for standard sidebar (desktop)
            "bg-beige-100 rounded-r-xl border-l-[4px] border-l-green text-grey-900":
              isActive && !isBottomNav,
            // Active state for bottom nav (mobile)
            "text-green": isActive && isBottomNav, // Text color for bottom nav active
          },

          // Inactive state text color
          !isActive && "text-grey-300 hover:text-grey-100" // Hover effect for inactive links
        )}
        aria-current={isActive ? "page" : undefined} // ARIA attribute for active page
      >
        {NavIconComponent && (
          <NavIconComponent
            className={clsx(
              "w-5 h-5 flex-shrink-0 transition-colors duration-200",
              isActive
                ? "text-green"
                : "text-grey-300 group-hover:text-grey-100"
            )}
          />
        )}

        {/* Display link name based on various conditions */}
        {!isMinimized && !isBottomNav && (
          <span className="truncate">{link.name}</span>
        )}

        {!isMinimized && isBottomNav && (
          <span className="hidden md:block truncate">{link.name}</span>
        )}
      </Link>
    </li>
  );
}
