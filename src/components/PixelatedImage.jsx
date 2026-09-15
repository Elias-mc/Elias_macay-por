import { useEffect, useMemo, useState } from 'react';

function PixelatedImage({ imageA, imageB, alt = 'Elias Macay' }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(0);

  // Imagen que se ve en el mosaico durante el hover. Solo se sincroniza
  // cuando el mosaico está completamente oculto (ver useEffect abajo),
  // así un click en pleno hover nunca produce un salto visual: antes,
  // como el mosaico usaba `nextImage` (derivado en vivo de `selected`),
  // clickear mientras el mouse seguía encima cambiaba la imagen visible
  // de golpe, sin transición.
  const [overlaySelected, setOverlaySelected] = useState(1);

  const [reducedMotion, setReducedMotion] = useState(false);

  const gridSize = 12;

  // Respeta la preferencia de movimiento reducido del sistema.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);

    const handleChange = (event) => setReducedMotion(event.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  // Recién cuando se deja de hacer hover, la imagen del mosaico se
  // actualiza para pasar a ser "la otra" respecto a la nueva selección.
  // En ese momento el mosaico tiene opacity 0, así que el cambio es invisible.
  useEffect(() => {
    if (!hovered) {
      setOverlaySelected(selected === 0 ? 1 : 0);
    }
  }, [hovered, selected]);

  // Geometría de la grilla + distancia al centro, calculado una sola vez.
  // La distancia se usa como "progreso" para el barrido circular.
  const pixelGeometry = useMemo(() => {
    const center = (gridSize - 1) / 2;
    const maxDistance = Math.sqrt(2) * center;

    return Array.from({ length: gridSize * gridSize }, (_, index) => {
      const row = Math.floor(index / gridSize);
      const column = index % gridSize;
      const distance = Math.hypot(row - center, column - center);

      return { row, column, progress: maxDistance ? distance / maxDistance : 0 };
    });
  }, [gridSize]);

  const currentImage = selected === 0 ? imageA : imageB;
  const overlayImage = overlaySelected === 0 ? imageA : imageB;

  const handleClick = () => {
    setSelected((current) => (current === 0 ? 1 : 0));
  };

  const size = 100 / gridSize;

  // Entrada más lenta y "orgánica" (materializa), salida más rápida y seca
  // (se repliega). Usar tiempos y easings distintos para cada dirección es
  // lo que hace que la animación se sienta intencional y no simétrica/plana.
  const enterDuration = reducedMotion ? 120 : 480;
  const exitDuration = reducedMotion ? 120 : 260;
  const maxStagger = reducedMotion ? 0 : 240;

  const motionClasses = reducedMotion ? '' : 'hover:scale-110 active:scale-95';

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={handleClick}
      className={`
        group relative h-40 w-40 overflow-hidden rounded-full
        shadow-md shadow-zinc-950/50
        transition-transform duration-300 ease-out
        ${motionClasses}
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2
      `}
      aria-label="Cambiar imagen de perfil"
    >
      {/* Imagen que está seleccionada */}
      <img
        src={currentImage}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Imagen alternativa dividida en píxeles */}
      <div className="pointer-events-none absolute inset-0">
        {pixelGeometry.map(({ row, column, progress }, index) => {
          // Entrada: onda circular que nace en el centro y crece hacia
          // afuera (como un iris abriéndose).
          // Salida: se invierte — el borde se repliega primero y el
          // centro es lo último en desaparecer — para que abrir y cerrar
          // se sientan como el mismo gesto en direcciones opuestas.
          const delay = hovered ? progress * maxStagger : (1 - progress) * maxStagger * 0.6;

          const duration = hovered ? enterDuration : exitDuration;
          const easing = hovered ? 'cubic-bezier(0.22, 1, 0.36, 1)' : 'cubic-bezier(0.4, 0, 1, 1)';

          return (
            <div
              key={index}
              className="absolute overflow-hidden"
              style={{
                width: `${size}%`,
                height: `${size}%`,
                left: `${column * size}%`,
                top: `${row * size}%`,
                opacity: hovered ? 1 : 0,
                transform: reducedMotion ? 'none' : hovered ? 'scale(1)' : 'scale(0.2)',
                willChange: 'opacity, transform',
                transition: `
                  opacity ${duration}ms ${easing} ${delay}ms,
                  transform ${Math.max(duration, 300)}ms ${easing} ${delay}ms
                `,
              }}
            >
              <img
                src={overlayImage}
                alt=""
                aria-hidden="true"
                className="absolute max-w-none object-cover"
                style={{
                  width: `${gridSize * 100}%`,
                  height: `${gridSize * 100}%`,
                  left: `-${column * 100}%`,
                  top: `-${row * 100}%`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Brillo sutil al hacer hover (antes era un no-op: bg-transparent
          hacía que el toggle de opacity no tuviera ningún efecto visible) */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute inset-0 rounded-full
          bg-white/10
          transition-opacity duration-500 ease-out
          ${hovered ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </button>
  );
}

export default PixelatedImage;
