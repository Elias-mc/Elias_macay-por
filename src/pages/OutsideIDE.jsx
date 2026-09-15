import ImageSlider from '../components/ImageSlider';

function OutsideIDE() {
  const hobbies = ['Cocinar', 'Gym', 'Caminar', 'Leer'];

  return (
    <section className="relative">
      {/* Encabezado */}
      <div className="mb-14">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Un poco de mí
        </span>

        <div className="flex items-center gap-4">
          <h4
            className="
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
            Fuera del IDE
          </h4>
        </div>

        <div
          className="
            mt-5
            h-px
            w-20
            bg-gradient-to-r
            from-zinc-900/30
            to-transparent
            transition-all
            duration-500
            dark:from-white/30
          "
        />
      </div>

      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Texto */}
        <div className="max-w-md">
          <p
            className="
              text-base
              leading-8
              text-zinc-600
              transition-colors
              duration-500
              dark:text-zinc-400
            "
          >
            Cuando estoy fuera del mundo del desarrollo, disfruto de mis hobbies, descubro cosas
            nuevas y simplemente desconecto un poco.
          </p>

          {/* Hobbies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-dashed
                  border-zinc-300
                  bg-white
                  px-4
                  py-2
                  text-sm
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
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
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

        {/* Cartas */}
        <div className="relative flex justify-center md:justify-end">
          {/* Decoración superior */}
          <div
            className="
              pointer-events-none
              absolute
              -right-5
              -top-5
              -z-10
              h-32
              w-32
              rounded-full
              border
              border-dashed
              border-zinc-300
              opacity-70
              transition-colors
              duration-500
              dark:border-zinc-700
            "
          />

          {/* Decoración inferior */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-5
              -left-5
              -z-10
              h-20
              w-20
              rounded-full
              border
              border-dashed
              border-zinc-300
              opacity-70
              transition-colors
              duration-500
              dark:border-zinc-700
            "
          />

          {/* Pequeños detalles */}
          <span
            className="
              absolute
              -right-2
              top-1/2
              h-1.5
              w-1.5
              rounded-full
              bg-zinc-300
              transition-colors
              duration-500
              dark:bg-zinc-600
            "
          />

          <span
            className="
              absolute
              -left-2
              top-1/3
              h-1.5
              w-1.5
              rounded-full
              bg-zinc-300
              transition-colors
              duration-500
              dark:bg-zinc-600
            "
          />

          <div className="relative">
            <ImageSlider images={['/cock.jpg', '/code.jpg', '/Fron.jpg', '/Gym.jpg']} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutsideIDE;
