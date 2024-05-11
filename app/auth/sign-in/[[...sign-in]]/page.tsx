"use client";

import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  const { theme } = useTheme();

  return (
    <SignIn
      appearance={theme === "dark" ? { baseTheme: dark } : {}}
      path="/auth/sign-in"
    />
  );
};

export default SignInPage;
