import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold">E Survey</h1>
    </Link>
  );
};

const AuthButton = () => {
  return (
    <>
      <ClerkLoading>
        <Skeleton className="size-10 rounded-full bg-gray-400" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <Button size="sm" asChild>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <div className="size-10 flex items-center justify-center">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: { width: "40px", height: "40px" },
                },
              }}
              afterSignOutUrl="/"
            />
          </div>
        </SignedIn>
      </ClerkLoaded>
    </>
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
      <div>
        <AuthButton />
      </div>
    </header>
  );
};
