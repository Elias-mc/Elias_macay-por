import { useEffect, useState } from 'react';

import Top_bar from './components/top_bar';
import Home_page from './pages/Home_page';

function App() {
  const [themeChanging, setThemeChanging] = useState(false);

  useEffect(() => {
    let timeout;

    const handleThemeChange = () => {
      setThemeChanging(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setThemeChanging(false);
      }, 720);
    };

    window.addEventListener('theme-change', handleThemeChange);

    return () => {
      window.removeEventListener('theme-change', handleThemeChange);
      clearTimeout(timeout);
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

      <div className="mx-auto max-w-4xl  py-6 md:px-10 md:py-8">
        <Top_bar />

        <div className="mt-26 space-y-17">
          <Home_page />
        </div>
      </div>
    </main>
  );
}

export default App;
