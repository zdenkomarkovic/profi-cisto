import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ciscenje (5).jpg"
          alt="Profi Čisto – čišćenje"
          fill
          className="w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/40 to-blue-600/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-5-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Beograd i okolina
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Agencija za čišćenje
          <span className="block text-blue-300 mt-1 font-extrabold">
            Profi Čisto
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white mb-5 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Brzo, temeljno i pouzdano čišćenje poslovnih i stambenih objekata u
          Beogradu. Moderna oprema, provereni rezultati.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+381616407717"
            className="flex items-center gap-3 bg-white text-blue-800 font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Pozovite nas
          </a>
          <a
            href="#usluge"
            className="hidden md:flex items-center gap-2 border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Pogledajte usluge
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-6 md:mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { number: "500+", label: "Završenih projekata" },
            { number: "5+", label: "Godina iskustva" },
            { number: "100%", label: "Zadovoljnih klijenata" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
