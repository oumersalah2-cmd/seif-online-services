import Link from "next/link";

const TELEGRAM_USERNAME = "@Seifa95";
const TELEGRAM_URL = "https://t.me/Seifa95";
const PHONE_NUMBER = "0928340303";

const INFO_ITEMS = [
  "Maqaa guutuu",
  "Lakkoofsa bilbilaa",
  "Bakka jirtan",
  "Tajaajila barbaaddan",
  "Ibsa gabaabaa",
];

const DOCUMENT_ITEMS = [
  "Waraqaa eenyummaa (Kebele ID)",
  "Waraqaa dhalootaa",
  "Screenshot kaffaltii",
];

export default function TelegramPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-bold text-blue-600 hover:underline">
          ← Gara Manaatti
        </Link>

        <section className="mt-6 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a4bc9_0%,#229ed9_100%)] px-8 py-10 text-white shadow-2xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-100">
            Telegram Qunnamtii
          </p>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">
            Odeeffannoo fi dokumantii Telegram irratti nuuf ergaa
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">
            Admin dashboard haqneerra. Amma odeeffannoo keessan, dokumantiiwwan, fi
            screenshot kaffaltii karaa Telegram yookaan bilbilaan nu qaqqabsiisuu
            dandeessu.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-blue-700 transition hover:bg-blue-50"
            >
              Telegram Bani {TELEGRAM_USERNAME}
            </a>
            <a
              href={`tel:+251${PHONE_NUMBER.slice(1)}`}
              className="rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:bg-white/15"
            >
              Bilbilaan Qunnami {PHONE_NUMBER}
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              Odeeffannoo Ergi
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-900">
              Ergaa keessan keessatti kana barreessaa
            </h2>
            <div className="mt-5 space-y-3">
              {INFO_ITEMS.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
                >
                  <p className="text-sm font-bold text-slate-700">
                    {index + 1}. {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              Dokumantii Ergi
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-900">
              Telegram irratti attachment godhaa
            </h2>
            <div className="mt-5 space-y-3">
              {DOCUMENT_ITEMS.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
                >
                  <p className="text-sm font-bold text-slate-700">
                    {index + 1}. {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-7">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
            Kaffaltii
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white px-5 py-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                CBE
              </p>
              <p className="mt-2 text-2xl font-black text-slate-900">1000110349231</p>
            </div>
            <div className="rounded-2xl bg-white px-5 py-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                Telebirr
              </p>
              <p className="mt-2 text-2xl font-black text-slate-900">0910147495</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
            Iyyata Online
          </p>
          <h2 className="mt-3 text-2xl font-black text-slate-900">
            Yoo barbaaddan, unka online illee fayyadamuu dandeessu
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Fuula iyyataa irraa odeeffannoo guutuu galchuu dandeessu. Garuu deeggarsi fi
            qunnamtiin guddaan amma Telegram irratti taasifama.
          </p>
          <Link
            href="/apply"
            className="mt-6 inline-flex rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black text-white transition hover:bg-blue-700"
          >
            Gara Fuula Iyyataatti
          </Link>
        </section>
      </div>
    </main>
  );
}
