import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseMiddlewareClient } from "@/lib/supabase";

export async function proxy(request: NextRequest) {
  const { supabase, supabaseResponse } = await createSupabaseMiddlewareClient(
    request
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const requestPath = request.nextUrl.pathname;

  const isAuthRoute = requestPath.startsWith("/auth");
  const isAdminRoute = requestPath.startsWith("/admin");

  if (!user && isAdminRoute)
    return NextResponse.redirect(new URL("/auth", request.url));

  if (user && isAuthRoute)
    return NextResponse.redirect(new URL("/admin", request.url));

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    "/((?!_next/static|_next/image|api/webhooks|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};