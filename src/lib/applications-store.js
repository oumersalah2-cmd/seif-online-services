import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const dataDirectory = path.join(process.cwd(), "data");
const uploadsDirectory = path.join(process.cwd(), "public", "uploads");
const applicationsFile = path.join(dataDirectory, "applications.json");

async function ensureStorage() {
  await mkdir(dataDirectory, { recursive: true });
  await mkdir(uploadsDirectory, { recursive: true });

  try {
    await readFile(applicationsFile, "utf8");
  } catch {
    await writeFile(applicationsFile, "[]", "utf8");
  }
}

export async function listApplications() {
  await ensureStorage();
  const raw = await readFile(applicationsFile, "utf8");

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveApplications(applications) {
  await ensureStorage();
  await writeFile(applicationsFile, JSON.stringify(applications, null, 2), "utf8");
}

export async function createApplication(payload) {
  const applications = await listApplications();
  const application = {
    id: randomUUID(),
    status: "Haaraa",
    submittedAt: new Date().toISOString(),
    ...payload,
  };

  applications.unshift(application);
  await saveApplications(applications);
  return application;
}

export async function updateApplicationStatus(id, status) {
  const applications = await listApplications();
  const updatedApplications = applications.map((application) =>
    application.id === id ? { ...application, status } : application,
  );

  await saveApplications(updatedApplications);
  return updatedApplications.find((application) => application.id === id) || null;
}

export async function clearApplications() {
  await saveApplications([]);
}

export function getUploadsDirectory() {
  return uploadsDirectory;
}
