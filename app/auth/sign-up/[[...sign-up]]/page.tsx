"use client";

import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  const { theme } = useTheme();

  return (
    <SignUp
      appearance={theme === "dark" ? { baseTheme: dark } : {}}
      path="/auth/sign-up"
    />
  );
};

export default SignUpPage;
