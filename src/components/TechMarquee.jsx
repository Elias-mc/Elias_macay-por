import { useState } from 'react';
import {
  IconCSS,
  IconElectron,
  IconFastAPI,
  IconFigma,
  IconGit,
  IconGithub,
  IconGodot,
  IconHTML,
  IconJavaScript,
  IconLinux,
  IconNodeJS,
  IconPython,
  IconReact,
  IconSQL,
  IconTailwind,
  IconView,
  IconVite,
  IconVSCode,
} from '../assets/SVG/IconosSVG';

const technologyRows = [
  {
    technologies: [
      { name: 'React', icon: IconReact },
      { name: 'GitHub', icon: IconGithub },
      { name: 'Python', icon: IconPython },
      { name: 'Tailwind CSS', icon: IconTailwind },
      { name: 'Godot', icon: IconGodot },
      { name: 'JavaScript', icon: IconJavaScript },
    ],
    direction: 'left',
    speed: '28s',
  },
  {
    technologies: [
      { name: 'FastAPI', icon: IconFastAPI },
      { name: 'CSS', icon: IconCSS },
      { name: 'Git', icon: IconGit },
      { name: 'Electron', icon: IconElectron },
      { name: 'Vite', icon: IconVite },
      { name: 'SQL', icon: IconSQL },
    ],
    direction: 'right',
    speed: '32s',
  },
  {
    technologies: [
      { name: 'HTML', icon: IconHTML },
      { name: 'Node.js', icon: IconNodeJS },
      { name: 'Figma', icon: IconFigma },
      { name: 'VS Code', icon: IconVSCode },
      { name: 'Linux', icon: IconLinux },
    ],
    direction: 'left',
    speed: '35s',
  },
];

function TechMarquee() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (rowIndex, technology) => {
    if (selected?.row === rowIndex && selected?.technology === technology) {
      setSelected(null);
      return;
    }

    setSelected({
      row: rowIndex,
      technology,
    });
  };

  return (
    <section
      id="tecnologias"
      className="
        page-enter
        page-delay-2
        relative
      "
    >
      {/* Encabezado */}
      <div className="mb-5 flex items-center gap-3">
        <span
          className="
            h-px
            w-8
            bg-zinc-300
            transition-colors
            duration-500
            dark:bg-zinc-700
          "
        />

        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-zinc-400
            dark:text-zinc-500
          "
        >
          Tecnologías
        </span>
      </div>

      {/* Título + acción */}
      <div className="mb-9 flex items-end justify-between gap-6">
        <div>
          <h4
            className="
              text-3xl
              font-medium
              tracking-[-0.03em]
              text-zinc-900
              transition-colors
              duration-500
              dark:text-white
              md:text-4xl
            "
          >
            Herramientas de trabajo
          </h4>
        </div>

        <a
          href="#"
          className="
            group/view
            hidden
            shrink-0
            items-center
            gap-2
            border-b
            border-dashed
            border-zinc-300
            pb-1
            text-xs
            font-medium
            text-zinc-500
            transition-all
            duration-300
            hover:border-zinc-900
            hover:text-zinc-950
            dark:border-zinc-700
            dark:text-zinc-400
            dark:hover:border-white
            dark:hover:text-white
            sm:flex
          "
        >
          <span
            className="
              flex
              h-4
              w-4
              items-center
              justify-center
              transition-transform
              duration-300
              group-hover/view:scale-110
            "
          >
            <IconView />
          </span>

          <span>Ver todos</span>
        </a>
      </div>

      {/* Cintas */}
      <div className="space-y-3">
        {technologyRows.map((row, rowIndex) => {
          const isRowSelected = selected?.row === rowIndex;

          return (
            <div
              key={rowIndex}
              className="
                group
                relative
                overflow-hidden
                py-1.5
              "
            >
              {/* Máscara izquierda */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  z-20
                  w-16
                  bg-gradient-to-r
                  from-white
                  via-white/95
                  to-transparent
                  dark:from-zinc-950
                  dark:via-zinc-950/95
                "
              />

              {/* Máscara derecha */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  z-20
                  w-16
                  bg-gradient-to-l
                  from-white
                  via-white/95
                  to-transparent
                  dark:from-zinc-950
                  dark:via-zinc-950/95
                "
              />

              {/* Track */}
              <div className="overflow-hidden">
                <div
                  style={{
                    '--tech-speed': row.speed,
                  }}
                  className={`
                    flex
                    w-max
                    items-center
                    gap-2.5

                    ${
                      row.direction === 'right'
                        ? 'animate-[techRowRight_var(--tech-speed)_linear_infinite]'
                        : 'animate-[techRowLeft_var(--tech-speed)_linear_infinite]'
                    }

                    group-hover:[animation-play-state:paused]

                    ${isRowSelected ? '[animation-play-state:paused]' : ''}
                  `}
                >
                  {row.technologies.map((technology, index) => (
                    <TechnologyCard
                      key={`${technology.name}-first-${index}`}
                      technology={technology}
                      rowIndex={rowIndex}
                      selected={
                        selected?.row === rowIndex && selected?.technology === technology.name
                      }
                      onSelect={handleSelect}
                    />
                  ))}

                  {row.technologies.map((technology, index) => (
                    <TechnologyCard
                      key={`${technology.name}-second-${index}`}
                      technology={technology}
                      rowIndex={rowIndex}
                      selected={
                        selected?.row === rowIndex && selected?.technology === technology.name
                      }
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Estado */}
      <div className="mt-6 flex items-center justify-between">
        <a
          href="#"
          className="
            flex
            items-center
            gap-1.5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.14em]
            text-zinc-400
            transition-colors
            duration-300
            hover:text-zinc-900
            dark:text-zinc-500
            dark:hover:text-white
            sm:hidden
          "
        >
          <IconView />
          Ver todos
        </a>
      </div>
    </section>
  );
}

function TechnologyCard({ technology, rowIndex, selected, onSelect }) {
  const Icon = technology.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(rowIndex, technology.name)}
      aria-pressed={selected}
      aria-label={`Seleccionar ${technology.name}`}
      className={`
        group/card
        relative
        flex
        h-10
        w-36
        shrink-0
        cursor-pointer
        items-center
        gap-2.5
        overflow-hidden
        rounded-4xl
        border
        border-dashed
        px-4
        outline-none

        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]

        focus-visible:ring-2
        focus-visible:ring-zinc-900/20
        dark:focus-visible:ring-white/30

        ${
          selected
            ? `
              scale-[1.035]
              border-zinc-900
              bg-zinc-900
              text-white
              shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]

              dark:border-white
              dark:bg-white
              dark:text-zinc-950
              dark:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.7)]
            `
            : `
              border-zinc-200/90
              bg-white
              text-zinc-600

              hover:-translate-y-0.5
              hover:border-zinc-400
              hover:text-zinc-950
              hover:shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)]

              dark:border-zinc-800
              dark:bg-zinc-900/40
              dark:text-zinc-400

              dark:hover:border-zinc-600
              dark:hover:text-white
              dark:hover:shadow-[0_8px_20px_-12px_rgba(0,0,0,0.7)]
            `
        }
      `}
    >
      {/* Reflejo */}
      <span
        className={`
          pointer-events-none
          absolute
          -left-12
          top-0
          h-full
          w-8
          -skew-x-12
          opacity-0
          transition-all
          duration-700
          ease-out

          ${
            selected
              ? `
                left-[120%]
                opacity-100
                bg-white/20
                dark:bg-zinc-900/10
              `
              : `
                group-hover/card:left-[120%]
                group-hover/card:opacity-100
                bg-zinc-900/5
                dark:bg-white/10
              `
          }
        `}
      />

      {/* Icono */}
      <span
        className="
          relative
          z-10
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          transition-transform
          duration-300
          group-hover/card:scale-110
        "
      >
        <Icon />
      </span>

      {/* Nombre */}
      <span
        className="
          relative
          z-10
          truncate
          text-xs
          font-medium
          tracking-[-0.01em]
        "
      >
        {technology.name}
      </span>

      {/* Indicador */}
      <span
        className={`
          absolute
          right-3
          h-1
          w-1
          rounded-full
          transition-all
          duration-300

          ${
            selected
              ? `
                scale-125
                bg-green-400
                shadow-[0_0_7px_rgba(74,222,128,0.65)]
              `
              : `
                bg-zinc-300
                dark:bg-zinc-700
              `
          }
        `}
      />
    </button>
  );
}

export default TechMarquee;
