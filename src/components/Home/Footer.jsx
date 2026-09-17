import { useEffect, useState } from 'react';

const GOATCOUNTER_CODE = 'TU_CODIGO';

function Footer() {
  const [visits, setVisits] = useState(null);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    let animationFrame;

    const fetchVisits = async () => {
      try {
        const response = await fetch(
          `https://${GOATCOUNTER_CODE}.goatcounter.com/counter/TU_DOMINIO.json`
        );

        if (!response.ok) {
          throw new Error('No se pudo obtener el contador');
        }

        const data = await response.json();

        const totalVisits = Number(data.count || 0);

        setCounting(true);

        const startTime = performance.now();
        const duration = 900;

        const animate = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);

          const eased = 1 - Math.pow(1 - progress, 3);

          setVisits(Math.floor(totalVisits * eased));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setVisits(totalVisits);
            setCounting(false);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Error obteniendo visitas:', error);
        setVisits(null);
        setCounting(false);
      }
    };

    fetchVisits();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <footer className="mt-10 font-['Manrope']">
      {/* Línea superior */}
      <div
        className="
          border-t
          border-dashed
          border-zinc-300
          transition-colors
          duration-500
          dark:border-zinc-700
        "
      />

      <div className="py-7 sm:py-8">
        <div
          className="
            flex
            flex-col
            gap-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:gap-8
            "
          >
            {/* Contador */}
            <div
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                rounded-lg
                border
                border-dashed
                border-zinc-300
                px-3
                py-2
                transition-all
                duration-300
                hover:border-zinc-500
                hover:bg-zinc-50
                dark:border-zinc-700
                dark:hover:border-zinc-500
                dark:hover:bg-zinc-900/50
              "
            >
              <span
                className="
                  relative
                  flex
                  h-1.5
                  w-1.5
                  items-center
                  justify-center
                "
              >
                <span
                  className={`
                    absolute
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-green-500
                    transition-all
                    duration-500
                    dark:bg-green-400
                    ${counting ? 'animate-ping opacity-60' : 'opacity-100'}
                  `}
                />

                <span
                  className="
                    relative
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-green-500
                    dark:bg-green-400
                  "
                />
              </span>

              <span
                className="
                  font-['Space_Grotesk']
                  text-sm
                  font-semibold
                  tabular-nums
                  text-zinc-900
                  transition-colors
                  duration-500
                  dark:text-white
                "
              >
                {visits === null ? '—' : visits.toLocaleString('es-AR')}
              </span>

              <span
                className="
                  h-3
                  w-px
                  bg-zinc-300
                  transition-colors
                  duration-500
                  dark:bg-zinc-700
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-zinc-400
                "
              >
                visitas
              </span>
            </div>

            {/* Links */}
            <nav
              aria-label="Enlaces del footer"
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                text-sm
                text-zinc-500
              "
            >
              <a
                href="mailto:macayzamora1234@gmail.com"
                className="
                  transition-colors
                  duration-200
                  hover:text-zinc-950
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-zinc-400
                  focus-visible:ring-offset-4
                  dark:hover:text-white
                  dark:focus-visible:ring-zinc-600
                  dark:focus-visible:ring-offset-zinc-950
                "
              >
                Email
              </a>

              <a
                href="https://github.com/Elias-mc"
                target="_blank"
                rel="noreferrer"
                className="
                  transition-colors
                  duration-200
                  hover:text-zinc-950
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-zinc-400
                  focus-visible:ring-offset-4
                  dark:hover:text-white
                  dark:focus-visible:ring-zinc-600
                  dark:focus-visible:ring-offset-zinc-950
                "
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/elias-macay-b02753386/"
                target="_blank"
                rel="noreferrer"
                className="
                  transition-colors
                  duration-200
                  hover:text-zinc-950
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-zinc-400
                  focus-visible:ring-offset-4
                  dark:hover:text-white
                  dark:focus-visible:ring-zinc-600
                  dark:focus-visible:ring-offset-zinc-950
                "
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div
        className="
          border-t
          border-dashed
          border-zinc-200
          transition-colors
          duration-500
          dark:border-zinc-800
        "
      />

      {/* Copyright */}
      <div
        className="
          flex
          flex-col
          gap-2
          py-4
          text-[10px]
          tracking-wide
          text-zinc-400
          transition-colors
          duration-500
          dark:text-zinc-500
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <span>© {new Date().getFullYear()} Elias Macay</span>

        <span>Hecho con curiosidad y bastante código.</span>
      </div>
    </footer>
  );
}

export default Footer;
