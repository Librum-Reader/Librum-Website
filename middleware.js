import { NextResponse } from "next/server";

export function middleware(request) {
  const tokenCookie = request.cookies.get("token");

  if (!tokenCookie?.value) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/profile/:path",
};
