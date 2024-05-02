import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// The following is an example to protect routes

// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth().protect();
//   }
// });

const isPublicRoute = createRouteMatcher(["/"]);
const isAuthRoute = createRouteMatcher(["/auth(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req) && !isAuthRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
