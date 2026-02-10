import CarpetCTA from "./CarpetCTA";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Pranje stakala",
    description:
      "Profesionalno pranje svih vrsta staklenih površina – prozori, staklene fasade, balkonske ograde, krovni svetlarnici. Koristimo teleskopske sisteme i profesionalna sredstva za blistavo čist rezultat.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Mašinsko pranje podova",
    description:
      "Čišćenje podova industrijskim mašinama visokih performansi. Savršeno za poslovne prostore, fabrike, tržne centre, bolnice i sve veće površine. Efikasno, brzo i temeljno.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Dubinsko pranje",
    description:
      "Dubinsko pranje mekih površina – nameštaj, sofe, fotelje, madrace, auto-sedišta. Koristimo paro-ekstrakciju koja uklanja prljavštinu, alergene i bakterije iz samih vlakana.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Generalno čišćenje",
    description:
      "Sveobuhvatno generalno čišćenje celog objekta – od stropa do poda. Idealno jednom ili dva puta godišnje: čišćenje prozora, ormara, kupatila, kuhinje, poda i svih površina.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Čišćenje stanova i kuća",
    description:
      "Redovno ili jednokratno čišćenje stanova i kuća. Pranje podova, brisanje prašine, čišćenje kupatila i kuhinje, usisavanje tepiha. Dolazimo kad vama odgovara.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Pranje garaža",
    description:
      "Čišćenje podzemnih i nadzemnih garaža – pranje podova pod pritiskom, uklanjanje uljnih mrlja, pranje rampi i zidova. Vraćamo garažama čist i uredan izgled.",
    highlight: false,
  },
  // --- CarpetCTA goes here (after 6 = 2 rows × 3 cols) ---
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Održavanje stambenih zgrada",
    description:
      "Redovno ili povremeno čišćenje ulaza, stepeništa, lifta i zajedničkih prostorija. Ugovaramo mesečne servise za stambene zajednice po povoljnim cenama.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Čišćenje poslovnih prostora",
    description:
      "Čišćenje kancelarija, maloprodajnih objekata, restorana, hotela i fabrika. Prilagođavamo raspored i učestalost vašim poslovnim potrebama.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Čišćenje posle gradnje",
    description:
      "Uklanjanje građevinskog prašine, boje, maltera i nalepnica sa svih površina. Priprema prostora za useljenje odmah nakon renoviranja ili gradnje.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Pranje fasada",
    description:
      "Čišćenje fasada zgrada i kuća pod pritiskom vode. Uklanjamo prašinu, mahevinu, naslage i grafite. Vaša zgrada sija kao nova.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Čišćenje tavanica i podruma",
    description:
      "Čišćenje i uređivanje tavanica, podruma i zajedničkih prostorija. Uklanjanje prljavštine, vlage i neprijatnih mirisa. Prostor koji ponovo diše.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Redovno održavanje",
    description:
      "Dnevno, nedeljno ili mesečno čišćenje na osnovu ugovora. Uvek čist prostor bez vaše brige – mi se staramo da vaš objekat izgleda besprekorno.",
    highlight: false,
  },
];

const SPLIT = 6; // 2 rows × 3 cols before the CarpetCTA

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div
      className={`card-hover relative rounded-2xl p-6 border transition-all duration-300 ${
        service.highlight
          ? "bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-200"
          : "bg-white text-gray-800 border-gray-100 shadow-sm hover:border-blue-200"
      }`}
    >
      {service.highlight && (
        <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full">
          Popularno
        </span>
      )}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
          service.highlight ? "bg-white/20" : "bg-blue-50"
        }`}
      >
        <div className={service.highlight ? "text-white" : "text-blue-600"}>
          {service.icon}
        </div>
      </div>
      <h3 className={`text-lg font-bold mb-2 ${service.highlight ? "text-white" : "text-gray-900"}`}>
        {service.title}
      </h3>
      <p className={`text-sm leading-relaxed ${service.highlight ? "text-blue-100" : "text-gray-500"}`}>
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const firstBlock = services.slice(0, SPLIT);
  const secondBlock = services.slice(SPLIT);

  return (
    <section id="usluge" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Šta nudimo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Naše usluge
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kompletna rešenja za čišćenje i održavanje – od jedne posete do dugotrajnog partnerstva
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First 2 rows */}
          {firstBlock.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}

          {/* Full-width CarpetCTA */}
          <CarpetCTA />

          {/* Remaining rows */}
          {secondBlock.map((service, i) => (
            <ServiceCard key={i + SPLIT} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Zatražite ponudu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
