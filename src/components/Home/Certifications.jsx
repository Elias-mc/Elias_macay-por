import { useEffect, useState } from 'react';

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: 'Diseño Web Profesional',
      issuer: 'Udemy',
      date: 'Abr 2026',
      img: '/certificado/UC-073b0f17-0cf2-4ba9-bc0b-518bebb72d43.jpg',
    },
  ];

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      <section className="relative font-['Manrope']">
        {/* Encabezado */}
        <div className="mb-10">
          <div
            className="
              certification-header-line
              mb-6
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8
                shrink-0
                bg-zinc-300
                transition-colors
                duration-500
                dark:bg-zinc-700
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-zinc-400
              "
            >
              Formación
            </span>
          </div>

          <h2
            className="
              certification-title
              font-['Space_Grotesk']
              text-3xl
              font-medium
              tracking-tight
              text-zinc-900
              transition-colors
              duration-500
              dark:text-white
              md:text-4xl
            "
          >
            Certificaciones
          </h2>

          <p
            className="
              certification-description
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-zinc-500
              transition-colors
              duration-500
              dark:text-zinc-400
            "
          >
            Algunos cursos y certificaciones que forman parte de mi proceso de aprendizaje y
            desarrollo.
          </p>
        </div>

        {/* Certificaciones */}
        <div
          className="
            certification-list
            divide-y
            divide-dashed
            divide-zinc-200
            border-y
            border-dashed
            border-zinc-200
            transition-colors
            duration-500
            dark:divide-zinc-800
            dark:border-zinc-800
          "
        >
          {certifications.map((certification, index) => (
            <article
              key={`${certification.title}-${index}`}
              style={{
                '--cert-delay': `${index * 100}ms`,
              }}
              className="
                certification-item
                group
                flex
                flex-col
                gap-6
                py-6
                transition-all
                duration-300
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* Parte izquierda */}
              <div className="flex min-w-0 items-center gap-4">
                {/* Imagen */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(certification)}
                  className="
                    group/image
                    relative
                    h-16
                    w-24
                    shrink-0
                    cursor-zoom-in
                    overflow-hidden
                    rounded-lg
                    border
                    border-zinc-200
                    bg-zinc-100
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-zinc-400
                    hover:shadow-md
                    active:scale-[0.97]
                    dark:border-zinc-800
                    dark:bg-zinc-900
                    dark:hover:border-zinc-600
                  "
                  aria-label={`Ver certificado de ${certification.title}`}
                >
                  <img
                    src={certification.img}
                    alt={`Certificado de ${certification.title}`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover/image:scale-110
                    "
                  />

                  {/* Overlay */}
                  <span
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      text-white
                      opacity-0
                      transition-all
                      duration-300
                      group-hover/image:bg-black/35
                      group-hover/image:opacity-100
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        scale-75
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/60
                        bg-black/20
                        backdrop-blur-sm
                        transition-transform
                        duration-300
                        group-hover/image:scale-100
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M9 21H3v-6" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 21l7-7" />
                      </svg>
                    </span>
                  </span>
                </button>

                {/* Información */}
                <div className="min-w-0">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-zinc-300
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:bg-green-500
                        dark:bg-zinc-700
                        dark:group-hover:bg-green-500
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-zinc-400
                      "
                    >
                      Certificación
                    </span>
                  </div>

                  <h3
                    className="
                      truncate
                      font-['Space_Grotesk']
                      text-base
                      font-medium
                      tracking-tight
                      text-zinc-900
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:text-zinc-600
                      dark:text-white
                      dark:group-hover:text-zinc-300
                      sm:text-lg
                    "
                  >
                    {certification.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-zinc-500
                      transition-colors
                      duration-500
                      dark:text-zinc-400
                      sm:text-sm
                    "
                  >
                    {certification.issuer}
                  </p>
                </div>
              </div>

              {/* Fecha */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  pl-[112px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:pl-0
                "
              >
                <span
                  className="
                    h-px
                    w-4
                    bg-zinc-200
                    transition-all
                    duration-300
                    group-hover:w-6
                    group-hover:bg-zinc-400
                    dark:bg-zinc-800
                    dark:group-hover:bg-zinc-600
                  "
                />

                <span
                  className="
                    text-xs
                    font-medium
                    tracking-wide
                    text-zinc-400
                    transition-colors
                    duration-300
                    group-hover:text-zinc-700
                    dark:group-hover:text-zinc-300
                  "
                >
                  {certification.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="
            certification-lightbox
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-zinc-950/85
            p-4
            backdrop-blur-sm
            sm:p-8
          "
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del certificado"
        >
          {/* Contenedor de imagen */}
          <div
            className="
              certification-lightbox-content
              relative
              flex
              max-h-[90vh]
              max-w-5xl
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.img}
              alt={`Certificado de ${selectedImage.title}`}
              className="
                max-h-[85vh]
                max-w-full
                rounded-xl
                object-contain
                shadow-2xl
              "
            />

            {/* Botón cerrar */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                -right-2
                -top-2
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-zinc-950/80
                text-zinc-300
                backdrop-blur-sm
                transition-all
                duration-200
                hover:scale-105
                hover:border-white/40
                hover:text-white
                active:scale-90
                sm:-right-4
                sm:-top-4
              "
              aria-label="Cerrar imagen"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;
