import { createHash, timingSafeEqual } from "node:crypto";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "seif12345";
const SESSION_NAME = "seif_admin_session";

function hashValue(value) {
  return createHash("sha256").update(value).digest("hex");
}

function safeCompare(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function validateCredentials(username, password) {
  return (
    safeCompare(hashValue(username), hashValue(ADMIN_USERNAME)) &&
    safeCompare(hashValue(password), hashValue(ADMIN_PASSWORD))
  );
}

export function createSessionValue() {
  return hashValue(`${ADMIN_USERNAME}:${ADMIN_PASSWORD}`);
}

export function isValidSession(session) {
  return Boolean(session) && safeCompare(session, createSessionValue());
}

export function getSessionName() {
  return SESSION_NAME;
}
