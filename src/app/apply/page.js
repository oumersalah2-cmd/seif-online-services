"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const SERVICE_OPTIONS = [
  { value: "urgent", label: "Urgent Passpoortii", price: 25000 },
  { value: "new", label: "Passpoortii Haaraa", price: 6000 },
  { value: "renewal", label: "Haaromsaa Passpoortii", price: 6000 },
];

export default function ApplyPage() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("urgent");
  const selectedPrice = useMemo(() => {
    const service = SERVICE_OPTIONS.find((item) => item.value === selectedService);
    return service ? service.price : 0;
  }, [selectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setError("");
    setStatus("");

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let message = "Galmeen amma hin milkoofne. Irra deebi'ii yaali.";

        try {
          const result = await response.json();
          if (result?.message) {
            message = result.message;
          }
        } catch {}

        throw new Error(message);
      }

      setStatus("Galmeen keessan milkaayinaan server irratti kuufameera!");
      form.reset();
      setSelectedService("urgent");
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-xl mx-auto mb-6">
        <Link href="/" className="text-blue-600 font-bold flex items-center hover:underline">
          ← Gara Manaatti
        </Link>
      </div>

      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-[linear-gradient(135deg,#0a4bc9_0%,#229ed9_100%)] p-8 text-white text-center">
          <h1 className="text-3xl font-black italic">SEIF ONLINE</h1>
          <p className="text-blue-100 mt-1 font-medium">Unka Iyyata Passpoortii</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {status && (
            <div className="bg-green-100 text-green-800 p-4 rounded-xl font-bold text-center border border-green-200">
              {status}
            </div>
          )}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center font-bold text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Maqaa Guutuu</label>
              <input name="fullName" type="text" required placeholder="Maqaa keessan barreessaa" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 font-bold text-slate-900 outline-none placeholder:font-semibold placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Lakkoofsa Bilbilaa</label>
              <input name="phone" type="tel" required placeholder="0928340303" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 font-bold text-slate-900 outline-none placeholder:font-semibold placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Bakka Jirtan</label>
              <input name="location" type="text" required placeholder="Dodolaa yookaan naannoo keessan" className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 font-bold text-slate-900 outline-none placeholder:font-semibold placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Gosa Tajaajilaa</label>
              <select
                name="service"
                value={selectedService}
                onChange={(event) => setSelectedService(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white p-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
              >
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              <p className="mt-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
                Gatii tajaajilaa: {selectedPrice.toLocaleString()} Birr
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700">Dokumantiiwwan Barbaachisan</label>

            <div className="p-4 border-2 border-dashed border-blue-100 rounded-2xl bg-blue-50/30">
              <span className="block text-[11px] font-black text-blue-600 uppercase mb-2">1. Waraqaa Eenyummaa (Kebele ID)</span>
              <input 
                name="kebeleId"
                type="file" 
                accept="image/*,.pdf"
                required
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
              />
            </div>

            <div className="p-4 border-2 border-dashed border-green-100 rounded-2xl bg-green-50/30">
              <span className="block text-[11px] font-black text-green-600 uppercase mb-2">2. Waraqaa Dhalootaa (Birth Certificate)</span>
              <input 
                name="birthCertificate"
                type="file" 
                accept="image/*,.pdf"
                required
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-green-600 file:text-white hover:file:bg-green-700 cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-700 mb-1">Kaffaltii Qofa</label>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">CBE</p>
              <p className="mt-2 text-lg font-black text-slate-900">1000110349231</p>
            </div>
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Telebirr</p>
              <p className="mt-2 text-lg font-black text-slate-900">0910147495</p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Screenshot Kaffaltii
            </label>
            <div className="rounded-2xl border-2 border-dashed border-amber-100 bg-amber-50/40 p-4">
              <span className="mb-2 block text-[11px] font-black uppercase text-amber-700">
                Payment Screenshot
              </span>
              <input
                name="paymentScreenshot"
                type="file"
                accept="image/*,.pdf"
                required
                className="block w-full cursor-pointer text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-amber-500 file:px-4 file:py-2 file:text-xs file:font-bold file:text-white hover:file:bg-amber-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Ibsa Dabalataa</label>
            <textarea
              name="details"
              rows="4"
              placeholder="Odeeffannoo dabalataa yoo qabaattan asitti barreessaa"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 font-bold text-slate-900 outline-none placeholder:font-semibold placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://t.me/Seifa95"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[#229ED9] px-6 py-4 text-center font-black text-white transition hover:bg-[#1c80b0]"
            >
              Telegram irratti bani
            </a>
            <a
              href="/admin/login"
              className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4 text-center font-black text-blue-700 transition hover:bg-blue-100"
            >
              Admin Dashboard Ilaali
            </a>
          </div>

          <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl transition-all active:scale-95 disabled:cursor-not-allowed disabled:bg-blue-300">
            {submitting ? "Ergaa jira..." : "IYYATA ERGAA"}
          </button>
        </form>
      </div>

      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-blue-100 bg-white px-5 py-4 text-center shadow-sm">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-600">
          Developed By
        </p>
        <p className="mt-2 text-base font-black text-slate-900">Abdusalam Oumer</p>
        <a
          href="tel:+251934978247"
          className="mt-2 block text-sm font-black text-slate-700 transition hover:text-blue-600"
        >
          0934978247
        </a>
        <a
          href="https://t.me/AfewSVS"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block rounded-full bg-[#229ED9] px-4 py-2 text-sm font-black text-white transition hover:bg-[#1c80b0]"
        >
          @AfewSVS
        </a>
      </div>
    </div>
  );
}
