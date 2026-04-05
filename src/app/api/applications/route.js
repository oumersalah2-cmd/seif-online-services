import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Application storage removed. Telegram qofa fayyadamaa." },
    { status: 410 },
  );
}

export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Application storage removed. Telegram qofa fayyadamaa." },
    { status: 410 },
  );
}

export async function PATCH() {
  return NextResponse.json(
    { ok: false, message: "Application storage removed. Telegram qofa fayyadamaa." },
    { status: 410 },
  );
}
