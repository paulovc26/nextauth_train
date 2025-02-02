import {
  NextResponse,
  type MiddlewareConfig,
  type NextRequest,
} from "next/server";

const publicRoutes = [];

const REDIRECT_IF_NOT_AUTHENTICATED = "/sign-in";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// todo terminar middleware, rocketseat
// https://www.youtube.com/watch?v=J0D4Kwq6J5w&list=PL85ITvJ7FLohhULgUFkYBf2xcXCG6yfVV&index=5

export const config: MiddlewareConfig = {
  matcher: [],
};
