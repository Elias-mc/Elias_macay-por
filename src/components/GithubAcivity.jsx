import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

function GithubActivity() {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const theme = {
    light: ['#f4f4f5', '#dcfce7', '#86efac', '#22c55e', '#15803d'],
    dark: ['#27272a', '#14532d', '#166534', '#22c55e', '#86efac'],
  };

  return (
    <section id="github">
      {/* Encabezado */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-zinc-300 transition-colors duration-500 dark:bg-zinc-700" />

          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Código y constancia
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              className="
                text-3xl
                font-medium
                tracking-tight
                text-zinc-950
                transition-colors
                duration-500
                dark:text-white
                md:text-4xl
              "
            >
              GitHub Activity
            </h2>
          </div>
        </div>
      </div>

      {/* Calendario */}
      <div
        className="
          relative
          overflow-hidden
          border-y
          border-dashed
          border-zinc-300
          py-8
          transition-colors
          duration-500
          dark:border-zinc-700
        "
      >
        {/* Detalles */}
        <span
          className="
            absolute
            left-0
            top-0
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
            right-0
            top-0
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
            bottom-0
            left-0
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
            bottom-0
            right-0
            h-1.5
            w-1.5
            rounded-full
            bg-zinc-300
            transition-colors
            duration-500
            dark:bg-zinc-600
          "
        />

        {/* Calendario */}
        <div className="overflow-x-auto pb-2">
          <GitHubCalendar
            username="Elias-mc"
            colorScheme={darkMode ? 'dark' : 'light'}
            theme={theme}
            blockSize={12}
            blockMargin={4}
            blockRadius={3}
            fontSize={13}
            showWeekdayLabels
            showMonthLabels
            showTotalCount
          />
        </div>
      </div>
    </section>
  );
}

export default GithubActivity;
