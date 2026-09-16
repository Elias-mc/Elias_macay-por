import { Skeleton } from 'boneyard-js/react';
import { IconGithub, IconMail, IconoLinkdin, IconVerified } from '../assets/SVG/IconosSVG';
import MusicPlayer from './MusicPlayer';
import PixelatedImage from './PixelatedImage';

function Perfil() {
  return (
    <Skeleton>
      <header className="relative">
        {/* PERFIL */}
        <div
          className="
            mb-10
            flex
            flex-col
            gap-5
            px-2
            sm:px-4
            md:flex-row
            md:items-center
            md:gap-6
          "
        >
          {/* Imagen */}
          <div
            className="
              flex
              shrink-0
              justify-center
              page-enter-soft
              page-delay-1
              md:justify-start
            "
          >
            <PixelatedImage
              imageA="/EliasPerfilcat.jpg"
              imageB="/EliasPerfil2.jpg"
              altA="Elias Macay"
              altB="Elias Macay, segunda imagen"
            />
          </div>

          {/* Información */}
          <div
            className="
              min-w-0
              w-full
              max-w-full
              md:flex-1
            "
          >
            {/* Nombre */}
            <div
              className="
                flex
                min-w-0
                items-center
                justify-center
                gap-2
                md:justify-start
              "
            >
              <h1
                className="
                  theme-pop
                  page-enter
                  page-delay-2
                  min-w-0
                  max-w-full
                  truncate
                  font-['Space_Grotesk']
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-zinc-950
                  transition-colors
                  duration-500
                  dark:text-white
                  sm:text-3xl
                  md:text-4xl
                "
              >
                Elias Macay
              </h1>

              <span
                className="
                  theme-pop
                  page-enter
                  page-delay-2
                  w-4
                  shrink-0
                  text-sky-400
                  sm:w-5
                "
              >
                <IconVerified />
              </span>
            </div>

            {/* Redes */}
            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-4
                font-['Manrope']
                text-zinc-400
                transition-colors
                duration-500
                dark:text-zinc-500
                md:justify-start
              "
            >
              <a
                href="mailto:macayzamora1234@gmail.com"
                aria-label="Enviar correo"
                className="
                  theme-pop
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:text-zinc-950
                  dark:hover:text-white
                "
              >
                <IconMail />
              </a>

              <a
                href="https://github.com/Elias-mc"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  theme-pop
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:text-zinc-950
                  dark:hover:text-white
                "
              >
                <IconGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/elias-macay-b02753386/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  theme-pop
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:text-zinc-950
                  dark:hover:text-white
                "
              >
                <IconoLinkdin />
              </a>
            </div>

            {/* Reproductor */}
            <div
              className="
                mt-3
                flex
                max-w-full
                justify-center
                overflow-hidden
                md:justify-start
              "
            >
              <MusicPlayer />
            </div>
          </div>
        </div>

        {/* PRESENTACIÓN */}
        <div>
          {/* Etiqueta */}
          <div
            className="
              page-enter
              page-delay-3
              mb-5
              flex
              items-center
              gap-3
              font-['Manrope']
            "
          >
            <span
              className="
                h-px
                w-6
                shrink-0
                bg-zinc-300
                transition-colors
                duration-500
                sm:w-8
                dark:bg-zinc-700
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-zinc-400
                sm:text-xs
                sm:tracking-[0.22em]
              "
            >
              Desarrollador web
            </span>
          </div>

          {/* Título */}
          <h2
            className="
              theme-pop
              page-enter
              page-delay-3
              max-w-3xl
              font-['Space_Grotesk']
              text-3xl
              font-light
              leading-[1.08]
              tracking-tight
              text-zinc-950
              transition-colors
              duration-500
              dark:text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Full-Stack Web Developer
          </h2>

          {/* Descripción */}
          <div
            className="
              theme-pop
              page-enter
              page-delay-4
              mt-6
              max-w-2xl
              font-['Manrope']
              text-[14px]
              leading-7
              text-zinc-600
              transition-colors
              duration-500
              sm:mt-7
              sm:text-[15px]
              dark:text-zinc-400
            "
          >
            <p>
              Me interesa crear aplicaciones, sitios web y sistemas de backend que sean funcionales,
              claros y agradables de usar. Actualmente estudio en la UNLP mientras desarrollo
              proyectos personales para seguir aprendiendo y experimentando con nuevas tecnologías.
              También estoy desarrollando{' '}
              <span
                className="
                  font-medium
                  text-zinc-950
                  transition-colors
                  duration-500
                  dark:text-white
                "
              >
                Pili
              </span>
              , mi propio proyecto de asistente de IA.
            </p>
          </div>

          {/* Acciones */}
          <div
            className="
              page-enter
              page-delay-5
              mt-7
              flex
              flex-wrap
              items-center
              gap-4
              font-['Manrope']
              sm:mt-9
              sm:gap-5
            "
          >
            <a
              href="#proyectos"
              id="button_bit"
              className="
                group
                inline-flex
                items-center
                gap-3
                whitespace-nowrap
              "
            >
              Ver mis proyectos
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            <div
              className="
                theme-pop
                flex
                items-center
                gap-2
                text-xs
                text-zinc-400
                transition-colors
                duration-500
                dark:text-zinc-500
              "
            />
          </div>
        </div>
      </header>
    </Skeleton>
  );
}

export default Perfil;
