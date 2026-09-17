import { Link } from 'react-router-dom';

import {
  IconCaretLeft,
  IconCSS,
  IconFastAPI,
  IconGit,
  IconGithub,
  IconHTML,
  IconJavaScript,
  IconLinux,
  IconPython,
  IconReact,
  IconTailwind,
  IconVite,
  IconVSCode,
} from '../../assets/SVG/IconosSVG';

function Tools() {
  const categories = [
    {
      title: 'Frontend',
      tools: [
        { name: 'JavaScript', icon: IconJavaScript },
        { name: 'React', icon: IconReact },
        { name: 'HTML', icon: IconHTML },
        { name: 'CSS', icon: IconCSS },
        { name: 'Tailwind CSS', icon: IconTailwind },
        { name: 'Vite', icon: IconVite },
      ],
    },
    {
      title: 'Backend',
      tools: [
        { name: 'Python', icon: IconPython },
        { name: 'FastAPI', icon: IconFastAPI },
      ],
    },
    {
      title: 'Herramientas',
      tools: [
        { name: 'Git', icon: IconGit },
        { name: 'GitHub', icon: IconGithub },
        { name: 'VS Code', icon: IconVSCode },
      ],
    },
    {
      title: 'Entorno',
      tools: [{ name: 'Linux', icon: IconLinux }],
    },
  ];

  const totalTechnologies = categories.reduce(
    (total, category) => total + category.tools.length,
    0
  );

  return (
    <section
      className="
        relative
        w-full
        min-w-0
        font-['Manrope']
        text-zinc-950
        dark:text-white
        animate-[toolsEnter_700ms_ease-out_both]
      "
    >
      {/* Navegación */}

      <nav
        className="
          mb-8
          flex
          w-full
          items-center
          justify-between
          animate-[toolsFadeDown_600ms_ease-out_both]
          sm:mb-10
        "
      >
        <Link
          to="/"
          className="
            group
            inline-flex
            items-center
            gap-2
            text-xs
            font-medium
            text-zinc-500
            transition-colors
            duration-300
            hover:text-zinc-950
            focus:outline-none
            focus-visible:text-zinc-950
            dark:text-zinc-500
            dark:hover:text-white
            dark:focus-visible:text-white
          "
        >
          <span
            className="
              flex
              h-4
              w-4
              shrink-0
              items-center
              justify-center
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          >
            <IconCaretLeft />
          </span>

          <span>Volver</span>
        </Link>
      </nav>

      {/* Encabezado */}

      <header
        className="
          mb-10
          animate-[toolsFadeUp_700ms_100ms_ease-out_both]
          sm:mb-14
        "
      >
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span
            className="
              h-px
              w-6
              shrink-0
              bg-zinc-300
              dark:bg-zinc-700
              sm:w-8
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-zinc-400
              sm:text-[10px]
            "
          >
            Stack
          </span>
        </div>

        <div
          className="
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-end
            sm:justify-between
            sm:gap-6
          "
        >
          <h1
            className="
              min-w-0
              font-['Space_Grotesk']
              text-3xl
              font-medium
              leading-none
              tracking-[-0.05em]
              text-zinc-950
              dark:text-white
              sm:text-4xl
            "
          >
            Herramientas
          </h1>

          <span
            className="
              shrink-0
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-zinc-400
              sm:text-[10px]
            "
          >
            {String(totalTechnologies).padStart(2, '0')} tecnologías
          </span>
        </div>
      </header>

      {/* Categorías */}

      <div className="w-full">
        {categories.map((category, categoryIndex) => (
          <article
            key={category.title}
            className="
              w-full
              min-w-0
              border-b
              border-dashed
              border-zinc-200
              py-7
              animate-[toolsFadeUp_700ms_ease-out_both]
              dark:border-zinc-800
              sm:py-9
            "
            style={{
              animationDelay: `${250 + categoryIndex * 100}ms`,
            }}
          >
            {/* Categoría */}

            <div className="mb-4 sm:mb-5">
              <h2
                className="
                  font-['Space_Grotesk']
                  text-base
                  font-medium
                  tracking-tight
                  text-zinc-900
                  dark:text-white
                  sm:text-lg
                "
              >
                {category.title}
              </h2>
            </div>

            {/* Tecnologías */}

            <div
              className="
                flex
                w-full
                min-w-0
                flex-wrap
                items-center
                gap-2
              "
            >
              {category.tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={tool.name}
                    className="
                      group
                      relative
                      inline-flex
                      max-w-full
                      items-center
                      gap-2
                      overflow-hidden
                      rounded-4xl
                      border
                      border-zinc-200
                      px-3
                      py-2
                      transition-all
                      duration-300
                      hover:-translate-y-px
                      hover:border-zinc-400
                      hover:bg-zinc-50
                      dark:border-zinc-800
                      dark:hover:border-zinc-600
                      dark:hover:bg-zinc-800/60
                      sm:px-3.5
                    "
                  >
                    {/* Línea inferior */}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-px
                        w-0
                        -translate-x-1/2
                        bg-zinc-950
                        transition-all
                        duration-300
                        group-hover:w-1/2
                        dark:bg-white
                      "
                    />

                    {/* Icono */}

                    <span
                      className="
                        flex
                        h-4
                        w-4
                        shrink-0
                        items-center
                        justify-center
                        text-zinc-400
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:text-zinc-900
                        dark:text-zinc-500
                        dark:group-hover:text-white
                      "
                    >
                      <Icon />
                    </span>

                    {/* Nombre */}

                    <span
                      className="
                        min-w-0
                        truncate
                        text-xs
                        font-medium
                        text-zinc-600
                        transition-colors
                        duration-300
                        group-hover:text-zinc-950
                        dark:text-zinc-400
                        dark:group-hover:text-white
                      "
                    >
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tools;
