import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Tools from './components/Tools/Tools';
import Top_bar from './components/top_bar';
import Home_page from './pages/Home_page';

function App() {
  const [themeChanging, setThemeChanging] = useState(false);
  const [rippleTick, setRippleTick] = useState(0);

  useEffect(() => {
    let timeout;

    const handleThemeChange = () => {
      setThemeChanging(true);

      // Forzamos un remount del destello (ver `key` más abajo) para que
      // la animación arranque de cero cada vez, incluso si el usuario
      // cambia de tema varias veces seguidas muy rápido.
      setRippleTick((tick) => tick + 1);

      clearTimeout(timeout);

      // 650ms del anillo más lento + 180ms de retraso del último = ~830ms.
      // Dejamos un pequeño margen.
      timeout = setTimeout(() => {
        setThemeChanging(false);
      }, 850);
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
      {/* Gota de agua: un flash de impacto + 3 anillos concéntricos que
          se expanden con distinto retraso, como ondas reales. */}
      <div
        key={rippleTick}
        id="theme-transition"
        className={themeChanging ? 'active' : ''}
        aria-hidden="true"
      >
        <span className="theme-ripple-flash" />
        <span className="theme-ripple-ring theme-ripple-ring-1" />
        <span className="theme-ripple-ring theme-ripple-ring-2" />
        <span className="theme-ripple-ring theme-ripple-ring-3" />
      </div>

      <div className="mx-auto max-w-4xl py-6 md:px-10 md:py-8">
        <Top_bar />

        <div className="mt-26 space-y-17">
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/Tools/Tools" element={<Tools />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
