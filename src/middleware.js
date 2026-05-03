import { NextResponse } from "next/server";

const privateRoutes = ["/tile", "/my-profile"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isPrivate = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isPrivate) {
    return NextResponse.next();
  }

  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};