export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header / Navigation */}
      <header className="flex justify-between items-center p-6 border-b bg-white sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-black text-blue-700 tracking-tighter italic">SEIF ONLINE SERVICES</h1>
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">Hundee</a>
          <a href="#tajaajila" className="hover:text-blue-600 transition">Tajaajila</a>
          <a href="tel:+251912345678" className="hover:text-blue-600 transition">Bilbila</a>
        </nav>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 shadow-md transition text-sm">
          IYYADHU
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto mt-12 px-6 text-center">
        <div className="mb-6">
           <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
            Waggaa 5+ Muuxannoo
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800">
          Tajaajila Passpoortii <br /> 
          <span className="text-blue-600 italic">Dodolaa fi Naannawa Isheetti</span>
        </h2>

        {/* The History Section You Requested */}
        <div className="mt-10 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 max-w-3xl mx-auto text-left">
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Seif Online Services</strong> waggoota shanii oliif tajaajila amanamaa ta’e kan kennaa ture yommuu ta’u, amanamummaan hojii isaa xumuruun akka <strong>magaala Dodolaa fi naannawa ishiitti</strong> dhageettii fi amanamummaa guddaa horachuu danda’eera.
          </p>
        </div>
        
        {/* Main Action Card */}
        <div className="mt-12 p-1 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 rounded-3xl shadow-2xl max-w-3xl mx-auto transition-transform hover:scale-[1.01]">
          <div className="bg-white p-8 md:p-12 rounded-[22px] text-center">
            <h3 className="text-2xl font-bold mb-4">Iyyata Keessan Amma Jalqabaa</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Telegram Button */}
              <a 
                href="https://t.me/YOUR_FRIENDS_TELEGRAM" 
                target="_blank" 
                className="bg-[#229ED9] text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-[#1c80b0] transition-all flex items-center justify-center shadow-lg"
              >
                <span className="mr-2 text-2xl">✈️</span> Telegram
              </a>

              {/* Phone Button */}
              <a 
                href="tel:+251912345678" 
                className="bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center shadow-lg"
              >
                <span className="mr-2 text-2xl">📞</span> Bilbila
              </a>
            </div>
            
            <button className="mt-8 w-full border-2 border-dashed border-blue-200 text-blue-400 py-4 rounded-xl font-bold cursor-not-allowed">
              📄 Dokumantii Upload Godhaa (Dhiyootti...)
            </button>
          </div>
        </div>

        {/* Local Trust Badges */}
        <div id="tajaajila" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 border-t pt-12 text-left">
          <div className="p-4">
            <div className="text-3xl mb-3 font-bold text-blue-600">01</div>
            <h4 className="font-bold text-lg mb-2 uppercase text-gray-800 border-b-2 border-blue-100 pb-1">CBE Qofa</h4>
            <p className="text-sm text-gray-500 font-medium">Kaffaltiin kessan hundi nagaa fi amanamummaan karaa <strong>Baankii Daldala Itiyoophiyaa (CBE)</strong> qofa raawwatama.</p>
          </div>
          <div className="p-4 border-l border-r border-gray-100 px-6">
            <div className="text-3xl mb-3 font-bold text-blue-600">02</div>
            <h4 className="font-bold text-lg mb-2 uppercase text-gray-800 border-b-2 border-blue-100 pb-1">Muuxannoo</h4>
            <p className="text-sm text-gray-500 font-medium">Waggaa 5 oliif muuxannoo qabnuun dogoggora tokko malee isiniif xumurra.</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-3 font-bold text-blue-600">03</div>
            <h4 className="font-bold text-lg mb-2 uppercase text-gray-800 border-b-2 border-blue-100 pb-1">Naannoo Dodolaa</h4>
            <p className="text-sm text-gray-500 font-medium">Nuun qunnamuun baay'ee salphaadha. Nutis namoota naannoo keessanii waan taaneef nu amanuu dandeessu.</p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-8 text-center border-t">
        <p className="text-gray-400 text-sm">© 2026 Seif Online Services - Dodola, Oromia, Ethiopia.</p>
      </footer>
    </div>
  );
}