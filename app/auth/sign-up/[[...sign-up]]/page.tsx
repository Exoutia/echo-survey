import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return <SignUp path="/auth/sign-up" />;
};

export default SignUpPage;
