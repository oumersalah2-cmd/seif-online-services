"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json();
      setError(result.message || "Seenuun hin milkoofne.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-md rounded-[2rem] border border-blue-100 bg-white p-8 shadow-2xl">
        <Link href="/" className="text-sm font-bold text-blue-600 hover:underline">
          ← Gara Manaatti
        </Link>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-blue-600">
          Admin Login
        </p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Dashboard Seensaa</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Admin qofatu as seena. Username fi password sirrii galchaa.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
              {error}
            </div>
          ) : null}

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Username</span>
            <input
              name="username"
              type="text"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Password</span>
            <input
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
          >
            {loading ? "Seenaa jira..." : "Seeni"}
          </button>
        </form>
      </div>
    </main>
  );
}
