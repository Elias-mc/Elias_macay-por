import { useEffect, useMemo, useState } from 'react';

function PixelatedImage({ imageA, imageB, alt = 'Elias Macay' }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(0);
  const [overlaySelected, setOverlaySelected] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  const gridSize = 14;

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');

    setReducedMotion(query.matches);

    const handleChange = (event) => {
      setReducedMotion(event.matches);
    };

    query.addEventListener('change', handleChange);

    return () => {
      query.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (!hovered) {
      const timer = setTimeout(() => {
        setOverlaySelected(selected === 0 ? 1 : 0);
      }, 180);

      return () => clearTimeout(timer);
    }
  }, [hovered, selected]);

  const pixelGeometry = useMemo(() => {
    const center = (gridSize - 1) / 2;
    const maxDistance = Math.sqrt(2) * center;

    return Array.from({ length: gridSize * gridSize }, (_, index) => {
      const row = Math.floor(index / gridSize);
      const column = index % gridSize;

      const distance = Math.hypot(row - center, column - center);

      const normalizedDistance = maxDistance > 0 ? distance / maxDistance : 0;

      const noise = ((index * 37) % 100) / 100;

      return {
        row,
        column,
        progress: normalizedDistance,
        noise,
      };
    });
  }, []);

  const currentImage = selected === 0 ? imageA : imageB;

  const overlayImage = overlaySelected === 0 ? imageA : imageB;

  const handleClick = () => {
    setSelected((current) => (current === 0 ? 1 : 0));
  };

  const size = 100 / gridSize;

  const enterDuration = reducedMotion ? 120 : 520;
  const exitDuration = reducedMotion ? 120 : 320;

  const maxStagger = reducedMotion ? 0 : 300;

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={handleClick}
      aria-label="Cambiar imagen de perfil"
      className="
        profile-pixel
        group
        relative
        h-40
        w-40
        shrink-0
        overflow-hidden
        rounded-full

        bg-zinc-950

        shadow-[0_12px_40px_rgba(0,0,0,0.22)]
        dark:shadow-[0_14px_45px_rgba(0,0,0,0.55)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:scale-[1.025]

        active:scale-[0.97]

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-zinc-400
        focus-visible:ring-offset-4
        focus-visible:ring-offset-white
        dark:focus-visible:ring-zinc-600
        dark:focus-visible:ring-offset-zinc-950
      "
    >
      <img
        src={currentImage}
        alt={alt}
        draggable="false"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center

          transition-transform
          duration-700
          ease-out

          group-hover:scale-[1.045]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {pixelGeometry.map(({ row, column, progress, noise }, index) => {
          const randomOffset = noise * 55;

          const delay = hovered
            ? progress * maxStagger + randomOffset
            : (1 - progress) * maxStagger * 0.45;

          const duration = hovered ? enterDuration : exitDuration;

          const easing = hovered
            ? 'cubic-bezier(0.16, 1, 0.3, 1)'
            : 'cubic-bezier(0.7, 0, 0.84, 0)';

          return (
            <div
              key={index}
              className="
                  absolute
                  overflow-hidden
                "
              style={{
                width: `${size}%`,
                height: `${size}%`,
                left: `${column * size}%`,
                top: `${row * size}%`,

                opacity: hovered ? 1 : 0,

                transform: reducedMotion
                  ? 'none'
                  : hovered
                    ? 'scale(1)'
                    : 'scale(0.15) rotate(4deg)',

                filter: reducedMotion ? 'none' : hovered ? 'blur(0px)' : 'blur(2px)',

                willChange: 'opacity, transform, filter',

                transition: `
                    opacity ${duration}ms ${easing} ${delay}ms,
                    transform ${duration + 80}ms ${easing} ${delay}ms,
                    filter ${duration}ms ${easing} ${delay}ms
                  `,
              }}
            >
              <img
                src={overlayImage}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="
                    absolute
                    max-w-none
                    object-cover
                  "
                style={{
                  width: `${gridSize * 100}%`,
                  height: `${gridSize * 100}%`,
                  left: `-${column * 100}%`,
                  top: `-${row * 100}%`,
                }}
              />

              {/* Brillo individual del píxel */}
              <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-white
                    opacity-0
                    mix-blend-screen
                    transition-opacity
                    duration-300
                  "
                style={{
                  opacity: hovered && noise > 0.82 ? 0.12 : 0,
                }}
              />
            </div>
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-x-0
          h-px
          bg-white/70
          blur-[0.5px]

          transition-opacity
          duration-300

          ${hovered ? 'animate-pixel-scan opacity-70' : 'opacity-0'}
        `}
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0

          opacity-0

          ${hovered ? 'animate-pixel-flash' : ''}
        `}
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: `
            ${100 / gridSize}% ${100 / gridSize}%
          `,
        }}
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-[-20%]

          rounded-full

          bg-white/10
          blur-2xl

          transition-all
          duration-700
          ease-out

          ${hovered ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
        `}
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0

          rounded-full

          border
          border-white/0

          transition-all
          duration-500

          ${hovered ? 'border-white/30' : 'border-transparent'}
        `}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.28)_100%)]

          opacity-80
        "
      />

      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          bottom-3
          right-3

          h-2
          w-2

          rounded-full

          bg-green-400

          shadow-[0_0_0_3px_rgba(34,197,94,0.12),0_0_12px_rgba(34,197,94,0.6)]

          transition-all
          duration-500

          ${hovered ? 'scale-125 opacity-100' : 'scale-75 opacity-70'}
        `}
      />
    </button>
  );
}

export default PixelatedImage;
