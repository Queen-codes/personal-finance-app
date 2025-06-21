"use client";
import { usePathname } from "next/navigation";
import LinkItem from "./LinkItem";

const links = [
  {
    name: "Overview",
    href: "/overview",
    icon: "/images/icon-nav-overview.svg",
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: "/images/icon-nav-transactions.svg",
  },
  {
    name: "Budgets",
    href: "/budgets",
    icon: "/images/icon-nav-budgets.svg",
  },
  {
    name: "Pots",
    href: "/pots",
    icon: "/images/icon-nav-pots.svg",
  },
  {
    name: "Recurring Bills",
    href: "/recurringbills",
    icon: "/images/icon-nav-recurring-bills.svg",
  },
];

export default function NavLinks({ isMinimized, isBottomNav }) {
  const pathName = usePathname();
  return (
    <nav aria-label={isBottomNav ? "Bottom Navigation" : "Sub-Navigation"}>
      <ul
        className={`space-y-2 mt-6 lg:mt-12 ${
          isBottomNav ? "flex justify-around items-center" : ""
        }`}
      >
        {links.map((link) => (
          <LinkItem
            key={link.name}
            link={link}
            pathName={pathName}
            isMinimized={isMinimized}
            isBottomNav={isBottomNav}
          />
        ))}
      </ul>
    </nav>
  );
}
