import { useEffect, useRef, useState } from 'react';

const PLAYLIST = [
  {
    title: 'Glimpse Of Us',
    artist: 'Joji',
    src: '/music/Glimpse of Us_spotdown.org.mp3',
  },
  {
    title: 'Golden Hour',
    artist: 'JVKE',
    src: '/music/golden hour_spotdown.org.mp3',
  },
  {
    title: 'TV',
    artist: 'Billie Eilish',
    src: '/music/TV_spotdown.org.mp3',
  },
];

function MusicPlayer() {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const track = PLAYLIST[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.src = track.src;
    audio.load();

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleEnded = () => {
      setCurrentTrack((prev) => {
        if (prev >= PLAYLIST.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('No se pudo reproducir la música:', error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const previousTrack = () => {
    setCurrentTrack((prev) => {
      if (prev === 0) {
        return PLAYLIST.length - 1;
      }

      return prev - 1;
    });
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => {
      if (prev >= PLAYLIST.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  return (
    <>
      <audio ref={audioRef} preload="metadata" />

      <div
        className="
          mt-5
          flex
          w-60
          min-w-0
          items-center
          gap-3
          sm:max-w-md
        "
      >
        {/* CONTROLES */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-0.5
            rounded-full
            border
            border-dashed
            border-zinc-300
            px-1.5
            py-1
            transition-colors
            duration-500
            dark:border-zinc-700
          "
        >
          {/* ANTERIOR */}
          <button
            type="button"
            onClick={previousTrack}
            className="
              group
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              text-zinc-400
              transition-all
              duration-200
              hover:-translate-x-0.5
              hover:text-zinc-950
              active:scale-90
              dark:text-zinc-500
              dark:hover:text-white
            "
            aria-label="Previous track"
          >
            <svg
              viewBox="0 0 10 10"
              className="h-2.5 w-2.5 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="1.3" height="8" fill="currentColor" />
              <polygon points="9,1 9,9 2.3,5" fill="currentColor" />
            </svg>
          </button>

          {/* PLAY / PAUSE */}
          <button
            type="button"
            onClick={togglePlay}
            className="
              group
              relative
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-zinc-300
              bg-zinc-50
              text-zinc-950
              transition-all
              duration-300
              hover:scale-105
              hover:border-zinc-950
              active:scale-90
              dark:border-zinc-700
              dark:bg-zinc-900
              dark:text-white
              dark:hover:border-white
            "
            aria-label={isPlaying ? 'Pause' : 'Play'}
            aria-pressed={isPlaying}
          >
            {isPlaying && (
              <span
                className="
                  absolute
                  inset-[-4px]
                  rounded-full
                  border
                  border-dashed
                  border-zinc-300
                  animate-[spin_5s_linear_infinite]
                  dark:border-zinc-700
                "
              />
            )}

            <svg
              viewBox="0 0 10 10"
              className="
                relative
                h-3
                w-3
                transition-transform
                duration-300
                group-hover:scale-110
              "
              aria-hidden="true"
            >
              {!isPlaying ? (
                <polygon points="2,1 2,9 9,5" fill="currentColor" />
              ) : (
                <path d="M1.5 1h2.5v8H1.5zm4 0H8v8H5.5z" fill="currentColor" />
              )}
            </svg>
          </button>

          {/* SIGUIENTE */}
          <button
            type="button"
            onClick={nextTrack}
            className="
              group
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              text-zinc-400
              transition-all
              duration-200
              hover:translate-x-0.5
              hover:text-zinc-950
              active:scale-90
              dark:text-zinc-500
              dark:hover:text-white
            "
            aria-label="Next track"
          >
            <svg
              viewBox="0 0 10 10"
              className="h-2.5 w-2.5 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <polygon points="1,1 1,9 7.7,5" fill="currentColor" />
              <rect x="7.7" y="1" width="1.3" height="8" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* INFORMACIÓN */}
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <b
              className="
                min-w-0
                truncate
                font-['Manrope']
                text-[10px]
                font-semibold
                leading-tight
                tracking-tight
                text-zinc-950
                transition-colors
                duration-500
                sm:text-[11px]
                dark:text-white
              "
              title={track.title}
            >
              {track.title}
            </b>
          </div>

          <div className="mt-0.5 flex items-center gap-2 pl-3.5">
            <span
              className="
                truncate
                font-['Manrope']
                text-[8px]
                leading-tight
                text-zinc-400
                transition-colors
                duration-500
                sm:text-[9px]
                dark:text-zinc-500
              "
              title={track.artist}
            >
              {track.artist}
            </span>

            <span className="text-[8px] text-zinc-300 dark:text-zinc-700">/</span>

            <span
              className="
                shrink-0
                font-['Manrope']
                text-[8px]
                uppercase
                tracking-[0.12em]
                text-zinc-400
                sm:text-[9px]
              "
            >
              {currentTrack + 1}/{PLAYLIST.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
