"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const STATUS_OPTIONS = ["Haaraa", "Hojii irra jira", "Xumurame"];

export default function AdminPage() {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadDashboard() {
      const sessionResponse = await fetch("/api/admin/session", {
        cache: "no-store",
      });
      const session = await sessionResponse.json();

      if (!session.authenticated) {
        router.replace("/admin/login");
        return;
      }

      const response = await fetch("/api/applications", {
        cache: "no-store",
      });

      if (!response.ok) {
        if (!cancelled) {
          setError("Galmee admin fe'uun hin milkoofne.");
          setLoading(false);
        }
        return;
      }

      const result = await response.json();

      if (!cancelled) {
        setApplications(result.applications || []);
        setLoading(false);
      }
    }

    loadDashboard();

    return () => {
      cancelled = true;
    };
  }, [router]);

  const stats = useMemo(() => {
    const total = applications.length;
    const pending = applications.filter((item) => item.status === "Haaraa").length;
    const inProgress = applications.filter((item) => item.status === "Hojii irra jira").length;
    const completed = applications.filter((item) => item.status === "Xumurame").length;

    return { total, pending, inProgress, completed };
  }, [applications]);

  async function updateStatus(id, status) {
    const response = await fetch("/api/applications", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    if (!response.ok) {
      setError("Status jijjiiruun hin milkoofne.");
      return;
    }

    setApplications((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  }

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-600">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Seif Online Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Fuula kana keessatti iyyata galan ilaalu, status jijjiiru, fi hojii hordofuu
              dandeessa. Galmeen amma server irratti kuufama, kanaaf device biroo irras
              ilaaluu dandeessa.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-2xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Gara Manaatti
            </Link>
            <Link
              href="/apply"
              className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
            >
              Gara Iyyataatti
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Ba&apos;i
            </button>
          </div>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          <StatCard label="Waliigala" value={stats.total} color="blue" />
          <StatCard label="Haaraa" value={stats.pending} color="amber" />
          <StatCard label="Hojii irra jira" value={stats.inProgress} color="cyan" />
          <StatCard label="Xumurame" value={stats.completed} color="green" />
        </section>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <h2 className="text-xl font-black text-slate-900">Iyyata Galan</h2>
          </div>

          {loading ? (
            <div className="px-6 py-16 text-center">
              <p className="text-lg font-bold text-slate-700">Fe&apos;aa jira...</p>
            </div>
          ) : error ? (
            <div className="px-6 py-16 text-center">
              <p className="text-lg font-bold text-red-700">{error}</p>
            </div>
          ) : applications.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-lg font-bold text-slate-700">Ammaaf iyyanni hin jiru.</p>
              <p className="mt-2 text-sm text-slate-500">
                Namni tokko fuula `/apply` irraa erguun booda asitti ni mul&apos;ata.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {applications.map((application) => (
                <article key={application.id} className="grid gap-6 px-6 py-6 lg:grid-cols-[1.25fr_0.85fr_0.9fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-black text-slate-900">
                        {application.fullName}
                      </h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-blue-700">
                        {application.service}
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-slate-600">
                      <p>Bilbila: {application.phone}</p>
                      <p>Bakka: {application.location}</p>
                      <p>
                        Yeroo Galmaa&apos;e:{" "}
                        {new Date(application.submittedAt).toLocaleString()}
                      </p>
                      <p>Ibsa: {application.note || "Hin jiru"}</p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        {application.kebeleIdUrl ? (
                          <a
                            href={application.kebeleIdUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-blue-700"
                          >
                            Kebele ID
                          </a>
                        ) : null}
                        {application.birthCertificateUrl ? (
                          <a
                            href={application.birthCertificateUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-green-50 px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-green-700"
                          >
                            Birth Certificate
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      Kaffaltii
                    </p>
                    <p className="mt-3 text-2xl font-black text-slate-900">
                      {Number(application.amount).toLocaleString()} Birr
                    </p>
                    {application.paymentScreenshotUrl ? (
                      <a
                        href={application.paymentScreenshotUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex rounded-2xl bg-amber-500 px-4 py-3 text-sm font-black text-white transition hover:bg-amber-600"
                      >
                        Screenshot Kaffaltii Ilaali
                      </a>
                    ) : (
                      <p className="mt-4 text-sm font-bold text-slate-400">
                        Screenshot kaffaltii hin jiru.
                      </p>
                    )}
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      Status
                    </p>
                    <select
                      value={application.status}
                      onChange={(event) => updateStatus(application.id, event.target.value)}
                      className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700 outline-none focus:border-blue-500"
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value, color }) {
  const styles = {
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
    cyan: "bg-cyan-50 border-cyan-100 text-cyan-700",
    green: "bg-green-50 border-green-100 text-green-700",
  };

  return (
    <div className={`rounded-3xl border p-6 ${styles[color]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">{label}</p>
      <p className="mt-3 text-4xl font-black">{value}</p>
    </div>
  );
}
