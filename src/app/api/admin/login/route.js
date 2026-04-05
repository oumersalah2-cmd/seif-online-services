import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Admin dashboard removed. Telegram qofa fayyadamaa." },
    { status: 410 },
  );
}
