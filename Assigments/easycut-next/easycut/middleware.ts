import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("easycut_session")?.value;

  const protectedRoutes = [
    "/booking/confirm-appointment",
  ];

  if (protectedRoutes.some((p) => req.nextUrl.pathname.startsWith(p)) && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
