import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN || "/sign-in";
const signUpUrl = process.env.NEXT_PUBLIC_SIGN_UP || "/sign-up";
const publicRoutes = [signInUrl, signUpUrl];

export default clerkMiddleware((auth, request) => {
  const pathname = request.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return;
  }

  if (!auth) {
    return NextResponse.redirect(new URL(signInUrl, request.url));
  }
});

export const config = {
  matcher: ["/((?!_next|_static|favicon.ico|.*\\..*).*)"],
};
