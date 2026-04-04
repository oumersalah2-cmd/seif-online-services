import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSessionName, isValidSession } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(getSessionName())?.value;

  return NextResponse.json({
    authenticated: isValidSession(session),
  });
}
