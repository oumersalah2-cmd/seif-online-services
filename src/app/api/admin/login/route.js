import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  createSessionValue,
  getSessionName,
  validateCredentials,
} from "@/lib/auth";

export async function POST(request) {
  const { username, password } = await request.json();

  if (!validateCredentials(username || "", password || "")) {
    return NextResponse.json(
      { ok: false, message: "Maqaa fayyadamaa yookaan password sirrii miti." },
      { status: 401 },
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(getSessionName(), createSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return NextResponse.json({ ok: true });
}
