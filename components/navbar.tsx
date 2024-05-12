"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "@/components/user-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold">ES</h1>
    </Link>
  );
};

const NavMenus = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Surveys",
      href: "/surveys",
    },
  ];

  return (
    <div className="flex items-center gap-8">
      {navLinks.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={cn(
            "text-muted-foreground hover:text-primary font-medium",
            pathname === item.href && "text-primary font-semibold"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className="h-16 sticky top-0 border-b flex items-center justify-between px-6 bg-background">
      <div className="flex items-center gap-16">
        <Logo />
        <NavMenus />
      </div>

      <div className="flex items-center justify-center gap-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </header>
  );
};
