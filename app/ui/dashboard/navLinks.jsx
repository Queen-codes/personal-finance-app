"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: "/images/icon-nav-overview.svg",
  },
  {
    name: "Transactions",
    href: "/dashboard/transactions",
    icon: "/images/icon-nav-transactions.svg",
  },
  {
    name: "Budgets",
    href: "/dashboard/budgets",
    icon: "/images/icon-nav-budgets.svg",
  },
  {
    name: "Pots",
    href: "/dashboard/pots",
    icon: "/images/icon-nav-pots.svg",
  },
  {
    name: "Recurring Bills",
    href: "/dashboard/recurringbills",
    icon: "/images/icon-nav-recurring-bills.svg",
  },
];

export default function NavLinks({ isMinimized, isBottomNav }) {
  const pathName = usePathname();
  return (
    <nav>
      <ul
        className={`space-y-2 mt-6 lg:mt-12 ${
          isBottomNav ? "flex justify-around items-center" : ""
        }`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "flex items-center gap-3.5 pb-3.5",
                isBottomNav && "flex-col items-center p-2",
                { "bg-beige-100": pathName === link.href }
              )}
            >
              <Image src={link.icon} alt={link.name} width={20} height={20} />
              {!isMinimized && !isBottomNav && (
                <span
                  className={clsx(
                    pathName === link.href ? "text-grey-900" : "text-grey-300"
                  )}
                >
                  {link.name}
                </span>
              )}
              {!isMinimized && isBottomNav && (
                <span className="hidden md:block text-grey-300 text-xs">
                  {link.name}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
