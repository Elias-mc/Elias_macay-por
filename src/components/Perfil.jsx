import { Skeleton } from 'boneyard-js/react';
import {
  IconCaretRight,
  IconGithub,
  IconMail,
  IconoLinkdin,
  IconVerified,
} from '../assets/SVG/IconosSVG';

import MusicPlayer from './MusicPlayer';
import PixelatedImage from './PixelatedImage';

function Perfil() {
  const socialLinks = [
    {
      label: 'Enviar correo',
      href: 'mailto:macayzamora1234@gmail.com',
      icon: <IconMail />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Elias-mc',
      icon: <IconGithub />,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/elias-macay-b02753386/',
      icon: <IconoLinkdin />,
      external: true,
    },
  ];

  return (
    <Skeleton>
      <header className="relative font-['Manrope']">
        {/* PERFIL */}
        <div
          className="
            mb-12
            flex
            flex-col
            gap-6
            px-2
            sm:px-4
            md:flex-row
            md:items-center
            md:gap-7
            lg:gap-8
          "
        >
          {/* IMAGEN */}
          <div
            className="
              flex
              shrink-0
              justify-center
              md:justify-start
            "
          >
            <div className="profile-image-enter">
              <PixelatedImage
                imageA="/Perfil/catPerfil.png"
                imageB="/EliasPerfil2.jpg"
                altA="Elias Macay"
                altB="Elias Macay, segunda imagen"
              />
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div
            className="
              min-w-0
              w-full
              md:flex-1
            "
          >
            {/* NOMBRE */}
            <div
              className="
                flex
                min-w-0
                items-center
                justify-center
                gap-2.5
                md:justify-start
              "
            >
              <h1
                className="
                  page-enter
                  page-delay-2
                  min-w-0
                  max-w-full
                  truncate
                  font-['Space_Grotesk']
                  text-2xl
                  font-bold
                  leading-none
                  tracking-[-0.035em]
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
                  page-enter
                  page-delay-2
                  flex
                  w-4
                  shrink-0
                  text-sky-400
                  sm:w-5
                "
                aria-label="Perfil verificado"
              >
                <IconVerified />
              </span>
            </div>

            {/* REDES SOCIALES */}
            <nav
              aria-label="Redes sociales"
              className="
                profile-socials-enter
                mt-4
                flex
                items-center
                justify-center
                gap-1
                md:justify-start
              "
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="
                    social-item
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-transparent
                    text-zinc-400
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-zinc-200
                    hover:bg-zinc-50
                    hover:text-zinc-950
                    active:scale-95
                    dark:text-zinc-500
                    dark:hover:border-zinc-800
                    dark:hover:bg-zinc-900
                    dark:hover:text-white
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
                      group-hover:scale-105
                    "
                  >
                    {social.icon}
                  </span>
                </a>
              ))}
            </nav>

            {/* REPRODUCTOR */}
            <div
              className="
                profile-music-enter
                flex
                w-full
                max-w-full
                items-center
                justify-center
                overflow-visible
                md:justify-start
              "
            >
              <MusicPlayer />
            </div>
          </div>
        </div>

        {/* PRESENTACIÓN */}
        <div>
          <div
            className="
              presentation-label-enter
              mb-5
              flex
              items-center
              gap-3
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
                dark:bg-zinc-700
                sm:w-8
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

          {/* TÍTULO */}
          <h2
            className="
              presentation-title-enter
              max-w-3xl
              font-['Space_Grotesk']
              text-3xl
              font-light
              leading-[1.08]
              tracking-[-0.04em]
              text-zinc-950
              transition-colors
              duration-500
              dark:text-white
              sm:text-4xl
              md:text-5xl
              lg:text-[3.4rem]
            "
          >
            Full-Stack Web Developer
          </h2>

          {/* DESCRIPCIÓN */}
          <div
            className="
              presentation-description-enter

              mt-6

              text-[14px]
              leading-7
              text-zinc-600
              transition-colors
              duration-500
              dark:text-zinc-400
              sm:mt-7
              sm:text-[15px]
              sm:leading-8
            "
          >
            <p>
              Me interesa crear aplicaciones, sitios web y sistemas de backend que sean funcionales,
              claros y agradables de usar. Actualmente estudio en la UNLP (UNIVERSIDAD DE LA PLATA)
              mientras desarrollo proyectos personales para seguir aprendiendo y experimentando con
              nuevas tecnologías. También estoy desarrollando{' '}
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

          {/* ACCIONES */}
          <div
            className="
              presentation-actions-enter
              mt-8
              flex
              flex-wrap
              items-center
              gap-4
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
              <span>Ver mis proyectos</span>

              <span
                aria-hidden="true"
                className="
                  w-4
                  inline-flex
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <IconCaretRight />
              </span>
            </a>
          </div>
        </div>
      </header>
    </Skeleton>
  );
}

export default Perfil;
