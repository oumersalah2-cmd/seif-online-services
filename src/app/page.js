"use client";

import { useState } from "react";

const initialForm = {
  fullName: "",
  phone: "",
  service: "passport",
  location: "",
  contactMethod: "phone",
  details: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-black tracking-tighter text-blue-700 italic">
          SEIF ONLINE SERVICES
        </h1>
        <nav className="hidden space-x-8 font-semibold text-gray-600 md:flex">
          <a href="#" className="transition hover:text-blue-600">
            Hundee
          </a>
          <a href="#tajaajila" className="transition hover:text-blue-600">
            Tajaajila
          </a>
          <a href="tel:+251912345678" className="transition hover:text-blue-600">
            Bilbila
          </a>
        </nav>
        <a
          href="#iyyata-form"
          className="rounded-full bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-md transition hover:bg-blue-700"
        >
          IYYADHU
        </a>
      </header>

      <main className="mx-auto mt-12 max-w-5xl px-6 text-center">
        <div className="mb-6">
          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-bold uppercase tracking-wide text-green-700">
            Waggaa 5+ Muuxannoo
          </span>
        </div>

        <h2 className="text-4xl font-extrabold leading-tight text-gray-800 md:text-6xl">
          Tajaajila Passpoortii <br />
          <span className="text-blue-600 italic">Dodolaa fi Naannawa Isheetti</span>
        </h2>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6 text-left">
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Seif Online Services</strong> waggoota shanii oliif tajaajila amanamaa
            ta&apos;e kan kennaa ture yommuu ta&apos;u, amanamummaan hojii isaa xumuruun akka{" "}
            <strong>magaala Dodolaa fi naannawa ishiitti</strong> dhageettii fi amanamummaa
            guddaa horachuu danda&apos;eera.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 p-1 shadow-2xl transition-transform hover:scale-[1.01]">
          <div className="rounded-[22px] bg-white p-8 text-left md:p-12">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Iyyata Keessan Amma Guutaa</h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  Odeeffannoo keessan guutaa. Erga guuttanii booda bilbilaan yookaan Telegramiin isin
                  qunnamna.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="https://t.me/YOUR_FRIENDS_TELEGRAM"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-2xl bg-[#229ED9] px-6 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-[#1c80b0]"
                >
                  <span className="mr-2 text-2xl">✈️</span>
                  Telegram
                </a>
                <a
                  href="tel:+251912345678"
                  className="flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-green-700"
                >
                  <span className="mr-2 text-2xl">📞</span>
                  Bilbila
                </a>
              </div>
            </div>

            <form id="iyyata-form" className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Maqaa Guutuu</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Maqaa keessan guutuu"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Lakkoofsa Bilbilaa</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+2519..."
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Gosa Tajaajilaa</span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
                  >
                    <option value="passport">Passpoortii Haaraa</option>
                    <option value="renewal">Haaromsaa Passpoortii</option>
                    <option value="appointment">Appointment Qabsiisuu</option>
                    <option value="other">Tajaajila Biroo</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Bakka Jirtan</span>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Dodolaa yookaan naannoo keessan"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">Akka itti isin qunnamnu filadhaa</span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === "phone"}
                      onChange={handleChange}
                    />
                    <span className="font-medium text-gray-700">Bilbilaan</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="telegram"
                      checked={formData.contactMethod === "telegram"}
                      onChange={handleChange}
                    />
                    <span className="font-medium text-gray-700">Telegramiin</span>
                  </label>
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">Ibsa Dabalataa</span>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Rakkoo yookaan odeeffannoo dabalataa as keessatti barreessaa"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">Dokumantii Upload</span>
                <input
                  type="file"
                  className="w-full rounded-2xl border border-dashed border-blue-200 bg-blue-50 px-4 py-3 text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:font-semibold file:text-white"
                />
                <span className="mt-2 block text-xs text-gray-500">
                  File keessan amma filachuu dandeessu. Erguun kun marsariitii irratti qofa agarsiisa;
                  backend itti aanu keessatti walqabsiifna.
                </span>
              </label>

              <div className="flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">
                  Odeeffannoon keessan tajaajila iyyataa qofaaf ni fayyada.
                </p>
                <button
                  type="submit"
                  className="rounded-2xl bg-blue-600 px-8 py-3 text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
                >
                  Iyyata Ergi
                </button>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Iyyanni keessan galmaa&apos;eera. Tajaajilaan keenya yeroo dhihoo keessatti isin qunnamu.
                </div>
              ) : null}
            </form>
          </div>
        </div>

        <div id="tajaajila" className="mt-20 grid grid-cols-1 gap-8 border-t pb-20 pt-12 text-left md:grid-cols-3">
          <div className="p-4">
            <div className="mb-3 text-3xl font-bold text-blue-600">01</div>
            <h4 className="mb-2 border-b-2 border-blue-100 pb-1 text-lg font-bold uppercase text-gray-800">
              CBE Qofa
            </h4>
            <p className="text-sm font-medium text-gray-500">
              Kaffaltiin kessan hundi nagaa fi amanamummaan karaa{" "}
              <strong>Baankii Daldala Itiyoophiyaa (CBE)</strong> qofa raawwatama.
            </p>
          </div>
          <div className="border-l border-r border-gray-100 px-6 py-4">
            <div className="mb-3 text-3xl font-bold text-blue-600">02</div>
            <h4 className="mb-2 border-b-2 border-blue-100 pb-1 text-lg font-bold uppercase text-gray-800">
              Muuxannoo
            </h4>
            <p className="text-sm font-medium text-gray-500">
              Waggaa 5 oliif muuxannoo qabnuun dogoggora tokko malee isiniif xumurra.
            </p>
          </div>
          <div className="p-4">
            <div className="mb-3 text-3xl font-bold text-blue-600">03</div>
            <h4 className="mb-2 border-b-2 border-blue-100 pb-1 text-lg font-bold uppercase text-gray-800">
              Naannoo Dodolaa
            </h4>
            <p className="text-sm font-medium text-gray-500">
              Nuun qunnamuun baay&apos;ee salphaadha. Nutis namoota naannoo keessanii waan taaneef nu
              amanuu dandeessu.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t bg-gray-50 py-8 text-center">
        <p className="text-sm text-gray-400">
          © 2026 Seif Online Services - Dodola, Oromia, Ethiopia.
        </p>
      </footer>
    </div>
  );
}
