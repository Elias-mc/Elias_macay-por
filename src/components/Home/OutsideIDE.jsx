import ImageSlider from '../ImageSlider';

function OutsideIDE() {
  const hobbies = ['Cocinar', 'Gym', 'Caminar', 'Leer'];

  return (
    <section
      className="
        outside-ide-enter
        relative
        w-full
        min-w-0
        overflow-visible
        font-['Manrope']
      "
    >
      {/* Encabezado */}
      <div className="mb-8 sm:mb-10">
        <div
          className="
            outside-ide-label-enter
            mb-5
            flex
            items-center
            gap-3
            sm:mb-6
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
              font-['Manrope']
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-zinc-400
              sm:text-xs
              sm:tracking-[0.22em]
            "
          >
            Un poco sobre mí
          </span>
        </div>

        <h4
          className="
            outside-ide-title-enter
            font-['Space_Grotesk']
            text-2xl
            font-medium
            leading-tight
            tracking-[-0.03em]
            text-zinc-900
            transition-colors
            duration-500
            dark:text-white
            sm:text-3xl
            md:text-4xl
          "
        >
          Fuera del IDE
        </h4>
      </div>

      {/* Contenido */}
      <div
        className="
          grid
          min-w-0
          items-center
          gap-12
          md:grid-cols-[minmax(0,1fr)_minmax(240px,320px)]
          md:gap-10
          lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)]
          lg:gap-16
        "
      >
        {/* Texto */}
        <div
          className="
            outside-ide-content-enter
            min-w-0
            max-w-md
          "
        >
          <p
            className="
              font-['Manrope']
              text-sm
              leading-7
              text-zinc-600
              transition-colors
              duration-500
              dark:text-zinc-400
              sm:text-base
              sm:leading-8
            "
          >
            Cuando estoy fuera del mundo del desarrollo, disfruto de mis hobbies, descubro cosas
            nuevas y simplemente desconecto un poco.
          </p>

          <div
            className="
              outside-ide-hobbies-enter
              mt-6
              flex
              flex-wrap
              gap-2.5
              sm:mt-8
              sm:gap-3
            "
          >
            {hobbies.map((hobby, index) => (
              <span
                key={hobby}
                style={{
                  animationDelay: `${650 + index * 70}ms`,
                }}
                className="
                  hobby-item
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-dashed
                  border-zinc-300
                  bg-white
                  px-3.5
                  py-2
                  font-['Manrope']
                  text-xs
                  font-medium
                  text-zinc-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-zinc-500
                  hover:bg-zinc-50
                  hover:text-zinc-900
                  hover:shadow-md
                  dark:border-zinc-700
                  dark:bg-zinc-900
                  dark:text-zinc-400
                  dark:hover:border-zinc-500
                  dark:hover:bg-zinc-800
                  dark:hover:text-white
                  sm:px-4
                  sm:text-sm
                "
              >
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
                    group-hover:bg-zinc-900
                    dark:bg-zinc-600
                    dark:group-hover:bg-white
                  "
                />

                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div
          className="
            outside-ide-image-enter
            flex
            min-w-0
            w-full
            justify-center
            md:justify-end
          "
        >
          <div
            className="
              relative
              w-fit
              max-w-full
            "
          >
            <ImageSlider images={['/cock.jpg', '/code.jpg', '/Fron.jpg', '/Gym.jpg']} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutsideIDE;
