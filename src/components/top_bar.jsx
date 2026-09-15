import { useEffect, useState } from 'react';
import { IconMoon, IconSoul } from '../assets/SVG/IconosSVG';

function Top_bar() {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <nav
      className={`
        fixed
        left-1/2
        z-50
        w-[calc(100%-3rem)]
        max-w-5xl
        -translate-x-1/2
        transition-all
        duration-500
        ease-out
        ${
          scrolled
            ? 'top-4 rounded-2xl border border-zinc-200/70 bg-white/75 px-5 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/75 dark:shadow-black/20'
            : 'top-0 border-b border-zinc-200/80 bg-white px-0 py-5 dark:border-zinc-800 dark:bg-zinc-950'
        }
      `}
    >
      <div
        className={`
          flex
          items-center
          justify-between
          transition-all
          duration-500
          ${scrolled ? 'py-3' : 'py-0'}
        `}
      >
        {/* Logo */}
        <a
          href="/"
          className="
            text-lg
            font-black
            tracking-tight
            text-zinc-950
            transition-colors
            duration-500
            dark:text-white
          "
        >
          EMC
        </a>

        {/* Navegación */}
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm text-zinc-500 sm:flex dark:text-zinc-400">
            <a
              href="#proyectos"
              className="
                relative
                py-1
                transition-colors
                duration-200
                hover:text-zinc-950
                dark:hover:text-white
                after:absolute
                after:bottom-0
                after:left-0
                after:h-px
                after:w-0
                after:bg-zinc-950
                after:transition-all
                after:duration-300
                hover:after:w-full
                dark:after:bg-white
              "
            >
              Proyectos
            </a>

            <a
              href="#experiencia"
              className="
                relative
                py-1
                transition-colors
                duration-200
                hover:text-zinc-950
                dark:hover:text-white
                after:absolute
                after:bottom-0
                after:left-0
                after:h-px
                after:w-0
                after:bg-zinc-950
                after:transition-all
                after:duration-300
                hover:after:w-full
                dark:after:bg-white
              "
            >
              Experiencia
            </a>

            <a
              href="#eventos"
              className="
                relative
                py-1
                transition-colors
                duration-200
                hover:text-zinc-950
                dark:hover:text-white
                after:absolute
                after:bottom-0
                after:left-0
                after:h-px
                after:w-0
                after:bg-zinc-950
                after:transition-all
                after:duration-300
                hover:after:w-full
                dark:after:bg-white
              "
            >
              Eventos
            </a>
          </div>

          {/* Tema */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-pressed={darkMode}
            className="
              flex
              items-center
              justify-center
              border-l
              border-zinc-200
              pl-5
              text-zinc-950
              outline-none
              transition-colors
              duration-500
              hover:text-zinc-600
              dark:border-zinc-800
              dark:text-white
              dark:hover:text-zinc-300
            "
          >
            <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
              {darkMode ? (
                <span
                  key="moon"
                  className="
                    absolute
                    animate-[themeIconDown_400ms_ease-out]
                    transition-transform
                    duration-300
                    hover:rotate-12
                  "
                >
                  <IconMoon />
                </span>
              ) : (
                <span
                  key="sun"
                  className="
                    absolute
                    animate-[themeIconUp_400ms_ease-out]
                    transition-transform
                    duration-300
                    hover:rotate-12
                  "
                >
                  <IconSoul />
                </span>
              )}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Top_bar;
