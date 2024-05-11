import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "@/components/user-button";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold">E Survey</h1>
    </Link>
  );
};

const NavMenus = () => {
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Protected",
      href: "/protected",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <div className="flex items-center gap-6">
      {navLinks.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="hover:underline underline-offset-2"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-10">
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
