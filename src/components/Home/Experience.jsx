function Experience() {
  return (
    <section
      id="experiencia"
      className="
        page-enter
        page-delay-2
        relative
      "
    >
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
            text-xs
            font-semibold
            uppercase
            tracking-[0.22em]
            text-zinc-400
          "
        >
          Trayectoria
        </span>
      </div>

      <h1
        className="
          text-4xl
          font-light
          tracking-tight
          text-zinc-950
          transition-colors
          duration-500
          dark:text-white
          md:text-5xl
        "
      >
        Experiencia
      </h1>

      <p
        className="
          mt-5
          max-w-2xl
          text-[15px]
          leading-7
          text-zinc-600
          transition-colors
          duration-500
          dark:text-zinc-400
        "
      >
        Una mirada a los proyectos y experiencias que forman parte de mi camino como desarrollador.
      </p>
    </section>
  );
}

export default Experience;
