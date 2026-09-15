import { useEffect, useState } from 'react';

import GithubActivity from './components/GithubAcivity';
import Home_page from './components/home_page';
import Top_bar from './components/top_bar';
import Experience from './pages/Experience';
import OutsideIDE from './pages/OutsideIDE';

function App() {
  const [themeChanging, setThemeChanging] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setThemeChanging(true);

      const timeout = setTimeout(() => {
        setThemeChanging(false);
      }, 720);

      return () => clearTimeout(timeout);
    };

    window.addEventListener('theme-change', handleThemeChange);

    return () => {
      window.removeEventListener('theme-change', handleThemeChange);
    };
  }, []);

  return (
    <main
      className={`
        relative
        min-h-screen
        overflow-x-hidden
        bg-white
        text-zinc-950
        transition-colors
        duration-500
        dark:bg-zinc-950
        dark:text-white
        ${themeChanging ? 'theme-changing' : ''}
      `}
    >
      {/* Barrido vertical del cambio de tema */}
      <div id="theme-transition" className={themeChanging ? 'active' : ''} aria-hidden="true" />

      <div className="mx-auto max-w-5xl px-6 py-6 md:px-10 md:py-8">
        <Top_bar />

        <div className="mt-32 space-y-17">
          {/* Entrada escalonada */}
          <div className="page-enter page-delay-1">
            <Home_page />
          </div>

          <div className="page-enter page-delay-2">
            <Experience />
          </div>

          <div className="page-enter page-delay-3">
            <GithubActivity />
          </div>

          <div className="page-enter page-delay-4">
            <OutsideIDE />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
