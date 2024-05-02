import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

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
      <ClerkLoading>Loading...</ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
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
