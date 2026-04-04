import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSessionName } from "@/lib/auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(getSessionName());
  return NextResponse.json({ ok: true });
}
