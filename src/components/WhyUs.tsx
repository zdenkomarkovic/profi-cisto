const steps = [
  {
    num: "01",
    title: "Kontaktirajte nas",
    desc: "Pozovite ili pošaljite poruku – besplatna procena na licu mesta ili telefonom.",
  },
  {
    num: "02",
    title: "Dogovaramo termin",
    desc: "Prilagođavamo se vašem rasporedu. Radimo svaki dan, uključujući vikende.",
  },
  {
    num: "03",
    title: "Čistimo",
    desc: "Naš tim dolazi sa kompletnom opremom i profesionalnim sredstvima.",
  },
  {
    num: "04",
    title: "Vi uživate",
    desc: "Blistav, čist prostor – bez stresa i bez vašeg angažovanja.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-blue-600 text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/30 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-700/30 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/20 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Kako radimo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Jednostavno kao 1-2-3
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Ceo proces je brz i bezboljan – vi se ne morate ni o čemu brinuti
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/20 -translate-y-px z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 border-2 border-white/30 text-white font-bold text-xl mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial-like block */}
        <div className="mt-16 bg-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto border border-white/20">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-white text-lg italic mb-3">
            "Profi Čisto radi za nas već 2 godine. Uvek tačni, temeljni i profesionalni. Naš objekat nikad nije izgledao bolje."
          </blockquote>
          <p className="text-blue-200 font-medium">— Uprava stambene zajednice, Novi Beograd</p>
        </div>
      </div>
    </section>
  );
}
