function Footer() {
  return (
    <footer className="mt-24 font-['Manrope']">
      {/* Línea superior */}
      <div className="border-t border-dashed border-zinc-300 transition-colors duration-500 dark:border-zinc-800" />

      <div className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Identidad */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-['Space_Grotesk']
                  text-lg
                  font-bold
                  tracking-tight
                  text-zinc-950
                  transition-colors
                  duration-500
                  dark:text-white
                "
              >
                EMC
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            </div>

            <p
              className="
                mt-2
                max-w-xs
                font-['Manrope']
                text-sm
                leading-6
                text-zinc-500
                transition-colors
                duration-500
                dark:text-zinc-400
              "
            >
              Construyendo, aprendiendo y descubriendo qué más se puede hacer con código.
            </p>
          </div>

          {/* Links */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              font-['Manrope']
              text-sm
              text-zinc-500
            "
          >
            <a
              href="mailto:macayzamora1234@gmail.com"
              className="transition-colors duration-200 hover:text-zinc-950 dark:hover:text-white"
            >
              Email
            </a>

            <a
              href="https://github.com/Elias-mc"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-zinc-950 dark:hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/elias-macay-b02753386/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-zinc-950 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-2
            border-t
            border-zinc-100
            pt-5
            font-['Manrope']
            text-xs
            text-zinc-400
            transition-colors
            duration-500
            dark:border-zinc-900
            dark:text-zinc-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>© {new Date().getFullYear()} Elias Macay</span>

          <span>Hecho con curiosidad y bastante código.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
