import { Skeleton } from 'boneyard-js/react';
import { IconGithub, IconMail, IconoLinkdin, IconVerified } from '../assets/SVG/IconosSVG';
import PixelatedImage from './PixelatedImage';

function Home_page() {
  return (
    <Skeleton>
      <header className="relative">
        {/* Perfil */}
        <div className="mb-10 mx-4 flex items-center gap-6">
          <div className="shrink-0 page-enter-soft page-delay-1">
            <PixelatedImage
              imageA="/EliasPerfilcat.jpg"
              imageB="/EliasPerfil2.jpg"
              altA="Elias Macay"
              altB="Elias Macay, segunda imagen"
            />
          </div>

          <div>
            {/* Nombre */}
            <div className="flex items-center gap-2">
              <h1
                className="
                  theme-pop
                  page-enter
                  page-delay-2
                  text-3xl
                  font-black
                  tracking-tight
                  text-zinc-950
                  transition-colors
                  duration-500
                  dark:text-white
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
                  w-5
                  text-sky-400
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
                gap-3
                text-zinc-400
                transition-colors
                duration-500
                dark:text-zinc-500
              "
            >
              <a
                href="mailto:macayzamora1234@gmail.com"
                aria-label="Enviar correo"
                className="
                  theme-pop
                  w-5
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
                  w-5
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
                  w-5
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
          </div>
        </div>

        {/* Presentación */}
        <div>
          <div
            className="
              page-enter
              page-delay-3
              mb-5
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-zinc-300 transition-colors duration-500 dark:bg-zinc-700" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Desarrollador web
            </span>
          </div>

          <h2
            className="
              theme-pop
              page-enter
              page-delay-3
              text-4xl
              font-light
              leading-[1.08]
              tracking-tight
              text-zinc-950
              transition-colors
              duration-500
              dark:text-white
              md:text-5xl
            "
          >
            Full-Stack Web Developer
          </h2>

          <div
            className="
              theme-pop
              page-enter
              page-delay-4
              mt-7
              space-y-4
              text-[15px]
              leading-7
              text-zinc-600
              transition-colors
              duration-500
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
              mt-9
              flex
              flex-wrap
              items-center
              gap-5
            "
          >
            <a href="#proyectos" id="button_bit" className="group inline-flex items-center gap-3">
              Ver mis proyectos
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Aprendiendo y construyendo
            </div>
          </div>
        </div>
      </header>
    </Skeleton>
  );
}

export default Home_page;
