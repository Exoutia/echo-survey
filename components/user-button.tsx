"use client";

import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton as ClerkUserButton,
} from "@clerk/nextjs";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export const UserButton = () => {
  const { theme } = useTheme();

  return (
    <>
      <ClerkLoading>
        <Skeleton className="size-[34px] rounded-full bg-gray-400" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <Button size="sm" asChild>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <ClerkUserButton
            appearance={{
              elements: {
                userButtonAvatarBox: { width: "34px", height: "34px" },
              },
              baseTheme: theme === "dark" ? dark : undefined,
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
      </ClerkLoaded>
    </>
  );
};
