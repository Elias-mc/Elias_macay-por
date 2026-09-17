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
    <section id="github" className="github-activity-enter">
      {/* Encabezado */}
      <div className="mb-8 sm:mb-10">
        <div className="mb-4 flex items-center gap-3 github-activity-label-enter">
          <span className="h-px w-6 shrink-0 bg-zinc-300 transition-colors duration-500 dark:bg-zinc-700 sm:w-8" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:text-xs sm:tracking-[0.22em]">
            Código y constancia
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              className="
                github-activity-title-enter
                text-2xl
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-zinc-950
                transition-colors
                duration-500
                dark:text-white
                sm:text-3xl
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
          github-activity-calendar-enter
          relative
          overflow-hidden
          border-y
          border-dashed
          border-zinc-300
          py-6
          transition-colors
          duration-500
          dark:border-zinc-700
          sm:py-8
        "
      >
        {/* Detalles */}
        <span
          className="
            github-detail-enter
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
            github-detail-enter
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
          style={{ animationDelay: '600ms' }}
        />

        <span
          className="
            github-detail-enter
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
          style={{ animationDelay: '650ms' }}
        />

        <span
          className="
            github-detail-enter
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
          style={{ animationDelay: '700ms' }}
        />

        {/* Calendario */}
        <div className="github-calendar-content overflow-x-auto pb-2">
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
