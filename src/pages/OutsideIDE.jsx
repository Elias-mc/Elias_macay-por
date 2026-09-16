import ImageSlider from '../components/ImageSlider';

function OutsideIDE() {
  const hobbies = ['Cocinar', 'Gym', 'Caminar', 'Leer'];

  return (
    <section className="relative font-['Manrope']">
      {/* Encabezado */}
      <div className="mb-5">
        <div className="mb-6 flex items-center gap-3">
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
              font-['Manrope']
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-zinc-400
            "
          >
            Un poco sobre mí
          </span>
        </div>

        <div className="flex items-center gap-4">
          <h4
            className="
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
            Fuera del IDE
          </h4>
        </div>
      </div>

      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Texto */}
        <div className="max-w-md">
          <p
            className="
              font-['Manrope']
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
                  font-['Manrope']
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

        {/* Imágenes */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <ImageSlider images={['/cock.jpg', '/code.jpg', '/Fron.jpg', '/Gym.jpg']} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutsideIDE;
