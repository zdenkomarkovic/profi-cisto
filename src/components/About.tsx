import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Provereni i pouzdani",
    desc: "Svaki naš radnik je provjeren i obučen. Vaš prostor je u sigurnim rukama.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Brz odgovor",
    desc: "Hitne intervencije i fleksibilni termini – prilagođavamo se vašem rasporedu.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Profesionalna oprema",
    desc: "Koristimo savremene industrijske mašine i ekološki prihvatljiva sredstva.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Povoljne cene",
    desc: "Transparentne cene bez skrivenih troškova. Tražite besplatnu procenu.",
  },
];

export default function About() {
  return (
    <section id="o-nama" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/ciscenje (5).jpg"
                  alt="Mašinska oprema za čišćenje"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="space-y-3 pt-6">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/ciscenje (6).jpg"
                    alt="Pranje stakla"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/ciscenje (3).jpg"
                    alt="Mašinsko čišćenje"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-blue-200 text-sm font-medium">godina iskustva</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              Ko smo mi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Agencija za čišćenje<br />
              <span className="text-blue-600">koja isporučuje rezultate</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              <strong>Profi Čisto</strong> je beogradska agencija za profesionalno čišćenje i
              održavanje poslovnih i stambenih objekata. Sa više od 5 godina iskustva, opslužujemo
              kompanije, stambene zajednice i privatne klijente širom Beograda.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Naš tim je obučen za rad sa savremenom industrijskom opremom. Koristimo
              ekološki prihvatljiva sredstva koja su bezbedna za vaše zaposlene i stanare.
              Svaki projekat završavamo temeljno i na vreme.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{f.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+381616407717"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
