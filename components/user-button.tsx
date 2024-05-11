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
            <ClerkUserButton
              appearance={
                theme === "dark"
                  ? {
                      elements: {
                        userButtonAvatarBox: { width: "40px", height: "40px" },
                      },
                      baseTheme: dark,
                    }
                  : {
                      elements: {
                        userButtonAvatarBox: { width: "40px", height: "40px" },
                      },
                    }
              }
              afterSignOutUrl="/"
            />
          </div>
        </SignedIn>
      </ClerkLoaded>
    </>
  );
};
