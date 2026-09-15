import { useEffect, useRef, useState } from 'react';

// Parámetros físicos del resorte de "volver al centro".
const SPRING_TENSION = 210;
const SPRING_FRICTION = 20;
const SPRING_MASS = 1;
const REST_DISTANCE = 0.4;
const REST_VELOCITY = 20;
const MAX_DT = 1 / 20;

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  const startPosition = useRef({ x: 0, y: 0 });
  const lastMove = useRef({ x: 0, y: 0, t: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const springFrame = useRef(null);

  useEffect(() => {
    return () => {
      if (springFrame.current) cancelAnimationFrame(springFrame.current);
    };
  }, []);

  const handlePointerDown = (event) => {
    if (isSwiping || isReturning) return;

    setIsDragging(true);

    startPosition.current = {
      x: event.clientX,
      y: event.clientY,
    };

    lastMove.current = {
      x: event.clientX,
      y: event.clientY,
      t: performance.now(),
    };

    velocity.current = { x: 0, y: 0 };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging || isSwiping) return;

    const x = event.clientX - startPosition.current.x;
    const y = event.clientY - startPosition.current.y;

    const now = performance.now();
    const dt = now - lastMove.current.t;

    if (dt > 0) {
      velocity.current = {
        x: (event.clientX - lastMove.current.x) / dt,
        y: (event.clientY - lastMove.current.y) / dt,
      };
    }

    lastMove.current = {
      x: event.clientX,
      y: event.clientY,
      t: now,
    };

    setPosition({ x, y });
  };

  const springBack = () => {
    setIsReturning(true);

    let posX = position.x;
    let posY = position.y;

    let velX = velocity.current.x * 1000;
    let velY = velocity.current.y * 1000;

    let lastTime = performance.now();

    const step = (now) => {
      const dt = Math.min((now - lastTime) / 1000, MAX_DT);

      lastTime = now;

      const accX = (-SPRING_TENSION * posX - SPRING_FRICTION * velX) / SPRING_MASS;

      const accY = (-SPRING_TENSION * posY - SPRING_FRICTION * velY) / SPRING_MASS;

      velX += accX * dt;
      velY += accY * dt;

      posX += velX * dt;
      posY += velY * dt;

      const atRest =
        Math.abs(posX) < REST_DISTANCE &&
        Math.abs(posY) < REST_DISTANCE &&
        Math.abs(velX) < REST_VELOCITY &&
        Math.abs(velY) < REST_VELOCITY;

      if (atRest) {
        setPosition({ x: 0, y: 0 });
        setIsReturning(false);
        springFrame.current = null;
        return;
      }

      setPosition({
        x: posX,
        y: posY,
      });

      springFrame.current = requestAnimationFrame(step);
    };

    springFrame.current = requestAnimationFrame(step);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    const threshold = 120;

    if (Math.abs(position.x) > threshold) {
      setIsSwiping(true);

      const direction = position.x > 0 ? 1 : -1;

      setPosition({
        x: direction * 380,
        y: position.y - 20,
      });

      setTimeout(() => {
        setPosition({
          x: direction * 180,
          y: 50,
        });
      }, 220);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);

        setPosition({
          x: 0,
          y: 0,
        });

        setIsSwiping(false);
      }, 600);
    } else {
      springBack();
    }
  };

  const rotation = position.x * 0.08;

  return (
    <div
      className="relative mx-auto h-[250px] w-[250px] touch-none"
      style={{
        perspective: '1000px',
      }}
    >
      {images.map((image, index) => {
        const positionInStack = (index - current + images.length) % images.length;

        if (positionInStack > 2) return null;

        const isTop = positionInStack === 0;

        const scale = positionInStack === 0 ? 1 : positionInStack === 1 ? 0.94 : 0.88;

        const translateY = positionInStack === 0 ? 0 : positionInStack === 1 ? 18 : 36;

        const rotationBehind = positionInStack === 0 ? 0 : positionInStack === 1 ? -4 : -8;

        const flipRotation = isSwiping && isTop ? Math.min(Math.abs(position.x) * 0.45, 180) : 0;

        return (
          <div
            key={`${image}-${index}`}
            className={`
              absolute
              inset-0
              overflow-hidden
              rounded-3xl
              transition-colors
              duration-500
              ${isTop ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}
            `}
            style={{
              zIndex: images.length - positionInStack,
              transformStyle: 'preserve-3d',

              transform: isTop
                ? isSwiping
                  ? `
                    translate(${position.x}px, ${position.y}px)
                    scale(${position.x === 0 ? 1 : 0.9})
                    rotate(${rotation}deg)
                    rotateY(${flipRotation}deg)
                  `
                  : `
                    translate(${position.x}px, ${position.y}px)
                    rotate(${rotation}deg)
                  `
                : `
                    translateY(${translateY}px)
                    scale(${scale})
                    rotate(${rotationBehind}deg)
                  `,

              transition:
                (isDragging || isReturning) && isTop
                  ? 'none'
                  : 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onPointerDown={isTop ? handlePointerDown : undefined}
            onPointerMove={isTop ? handlePointerMove : undefined}
            onPointerUp={isTop ? handlePointerUp : undefined}
            onPointerCancel={isTop ? handlePointerUp : undefined}
          >
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              draggable="false"
              className="
                h-full
                w-full
                select-none
                object-cover
                border
                border-zinc-200
                transition-colors
                duration-500
                dark:border-zinc-700
              "
            />
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
