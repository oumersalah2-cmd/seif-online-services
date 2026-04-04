import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-600">
              Dodola, Oromia
            </p>
            <h1 className="text-2xl font-black italic tracking-tight text-slate-900">
              SEIF ONLINE SERVICES
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#waaee" className="transition hover:text-blue-600">
              Waa&apos;ee
            </a>
            <a href="#qunnamtii" className="transition hover:text-blue-600">
              Qunnamtii
            </a>
            <a href="#kaffaltii" className="transition hover:text-blue-600">
              Kaffaltii
            </a>
          </nav>

          <Link
            href="/apply"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            IYYADHU
          </Link>
        </div>
      </header>

      <main>
        <section className="overflow-hidden bg-[linear-gradient(135deg,#083baf_0%,#1967d2_42%,#67d4ff_100%)] px-6 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="rounded-full bg-white/15 px-4 py-1 text-xs font-black uppercase tracking-[0.25em] text-blue-50 ring-1 ring-white/25">
                Tajaajila Amanamaa fi Saffisaa
              </span>

              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Seif Online Services
                <span className="block text-cyan-200">Passpoortii fi Tajaajila Online</span>
              </h2>

              <p
                id="waaee"
                className="mt-6 max-w-3xl rounded-[1.75rem] bg-white/10 p-6 text-lg leading-8 text-blue-50 ring-1 ring-white/15 backdrop-blur-sm"
              >
                <strong>Seif Online Services</strong>{" "}waggoota 5 oliif magaalaa Dodolaa
                keessatti amanamummaan tajaajilaa tureera. Yeroo kana keessatti passpoortii
                1000 ol ta&apos;u namootaaf haala mijeessee xumursiiseera. Akkasumas gorsa
                waa&apos;ee agensiilee alaa tokko tokkoon walqabatan ni kenna; check-up
                yeroo gara garaatti passpoortii irratti godhamuufis deeggarsa sirrii ni
                taasisa.
              </p>
              <p className="mt-4 max-w-3xl text-base font-bold leading-7 text-cyan-100">
                Tajaajila kan bakka barbaaddanitti argachuu dandeessu; mana keessan teettanii
                salphaatti nu qunnamuun tajaajila barbaaddan argachuu ni dandeessu.
              </p>

              <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/12 p-5 ring-1 ring-white/20 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
                    Muuxannoo
                  </p>
                  <p className="mt-3 text-3xl font-black">5+</p>
                  <p className="mt-2 text-sm leading-6 text-blue-50">
                    Waggoota tajaajila amanamaa
                  </p>
                </div>
                <div className="rounded-3xl bg-white/12 p-5 ring-1 ring-white/20 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
                    Passpoortii
                  </p>
                  <p className="mt-3 text-3xl font-black">1000+</p>
                  <p className="mt-2 text-sm leading-6 text-blue-50">
                    Namootaaf haala mijeessee xumursiise
                  </p>
                </div>
                <div className="rounded-3xl bg-white/12 p-5 ring-1 ring-white/20 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
                    Gorsa
                  </p>
                  <p className="mt-3 text-3xl font-black">Amanamaa</p>
                  <p className="mt-2 text-sm leading-6 text-blue-50">
                    Agensii fi check-up irratti gorsa sirrii
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/apply"
                  className="inline-flex rounded-2xl bg-white px-8 py-4 text-base font-black text-blue-700 shadow-2xl transition hover:bg-blue-50"
                >
                  Amma Iyyadhu
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl ring-1 ring-blue-100">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
                Waa&apos;ee Tajaajilaa
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                    Tajaajila Ijoo
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Iyyata passpoortii, haaromsaa, check-up, fi gorsa hojii online
                    walqabatan irratti deeggarsa ni kenna.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                    Agensii fi Gorsa
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Agensiilee alaa tokko tokkoon walqabatan irratti odeeffannoo fi
                    kallattii sirrii ni kenna.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                    Check-Up
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Yeroo gara garaatti passpoortii irratti check-up godhamu hordofee
                    odeeffannoo barbaachisaa ni laata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="qunnamtii"
          className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <div className="text-3xl font-black text-blue-600">01</div>
            <h3 className="mt-4 text-xl font-black text-slate-900">Teessoo</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Iddoon argama keenyaa magaalaa Dodolaa, Baankii Daldala Itoophiyaa damee
              Nasrii cinaatti nu argachuu dandeessu.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <div className="text-3xl font-black text-blue-600">02</div>
            <h3 className="mt-4 text-xl font-black text-slate-900">Qunnamtii</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Odeeffannoo dabalataa barbaaddan bilbilaan 0928340303 irratti qunnamaa
              yookaan Telegram irratti @Seifa95 fayyadamaa.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+251928340303"
                className="rounded-2xl bg-blue-600 px-5 py-4 text-center font-black text-white transition hover:bg-blue-700"
              >
                0928340303
              </a>
              <a
                href="https://t.me/Seifa95"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#229ED9] px-5 py-4 text-center font-black text-white transition hover:bg-[#1c80b0]"
              >
                @Seifa95
              </a>
            </div>
          </div>
        </section>

        <section id="kaffaltii" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-[2rem] border border-blue-100 bg-cyan-50 p-8 shadow-sm">
            <div className="text-3xl font-black text-blue-600">03</div>
            <h3 className="mt-4 text-xl font-black text-slate-900">Kaffaltii</h3>
            <p className="mt-3 leading-7 text-slate-600">
              CBE fi Telebirr odeeffannoo kaffaltii asitti qofa argitu:
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <p className="rounded-2xl bg-white px-4 py-4 text-lg font-black tracking-wide text-slate-900">
                CBE: 1000110349231
              </p>
              <p className="rounded-2xl bg-white px-4 py-4 text-lg font-black tracking-wide text-slate-900">
                Telebirr: 0910147495
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-[linear-gradient(135deg,#0a4bc9_0%,#229ed9_100%)] px-8 py-12 text-center text-white shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-100">
              Iyyata Online
            </p>
            <h3 className="mt-4 text-3xl font-black md:text-4xl">
              Iyyata guutuuf fuula addaa qopheessineerra
            </h3>
            <p className="mt-4 text-base leading-7 text-blue-50">
              Fuula jalqabaa irratti waa&apos;ee tajaajila keenya fi qunnamtii qofa ni
              argitu. Namni iyyachuu barbaadu button <strong>IYYADHU</strong> jedhu
              xuquun gara fuula iyyataa seena.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-base font-black text-blue-700 transition hover:bg-blue-50"
            >
              Gara Fuula Iyyataatti
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center">
        <p className="text-sm text-slate-500">
          © 2026 Seif Online Services, Dodola, Oromia, fuuldura Buufata Konkolaataa
        </p>
      </footer>
    </div>
  );
}
