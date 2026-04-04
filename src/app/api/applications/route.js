import { writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  createApplication,
  getUploadsDirectory,
  listApplications,
  updateApplicationStatus,
} from "@/lib/applications-store";
import { getSessionName, isValidSession } from "@/lib/auth";

const SERVICES = {
  urgent: { label: "Urgent Passpoortii", amount: 25000 },
  new: { label: "Passpoortii Haaraa", amount: 6000 },
  renewal: { label: "Haaromsaa Passpoortii", amount: 6000 },
};

async function requireAdmin() {
  const cookieStore = await cookies();
  const session = cookieStore.get(getSessionName())?.value;
  return isValidSession(session);
}

async function saveUpload(file, prefix) {
  if (!(file instanceof File) || file.size === 0) {
    return "";
  }

  const uploadDirectory = getUploadsDirectory();
  const extension = path.extname(file.name) || "";
  const fileName = `${prefix}-${randomUUID()}${extension}`;
  const filePath = path.join(uploadDirectory, fileName);
  const buffer = Buffer.from(await file.arrayBuffer());

  await writeFile(filePath, buffer);
  return `/uploads/${fileName}`;
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ message: "Hin eeyyamamne." }, { status: 401 });
  }

  const applications = await listApplications();
  return NextResponse.json({ applications });
}

export async function POST(request) {
  const formData = await request.formData();
  const serviceKey = String(formData.get("service") || "urgent");
  const service = SERVICES[serviceKey] || SERVICES.urgent;

  const kebeleIdUrl = await saveUpload(formData.get("kebeleId"), "kebele-id");
  const birthCertificateUrl = await saveUpload(
    formData.get("birthCertificate"),
    "birth-certificate",
  );
  const paymentScreenshotUrl = await saveUpload(
    formData.get("paymentScreenshot"),
    "payment-screenshot",
  );

  const application = await createApplication({
    fullName: String(formData.get("fullName") || ""),
    phone: String(formData.get("phone") || ""),
    location: String(formData.get("location") || ""),
    service: service.label,
    amount: service.amount,
    note: String(formData.get("details") || ""),
    kebeleIdUrl,
    birthCertificateUrl,
    paymentScreenshotUrl,
  });

  return NextResponse.json({ ok: true, application });
}

export async function PATCH(request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ message: "Hin eeyyamamne." }, { status: 401 });
  }

  const { id, status } = await request.json();
  const application = await updateApplicationStatus(id, status);

  if (!application) {
    return NextResponse.json({ message: "Galmeen hin argamne." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, application });
}
