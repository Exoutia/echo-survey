import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return <SignIn path="/auth/sign-in" />;
};

export default SignInPage;
