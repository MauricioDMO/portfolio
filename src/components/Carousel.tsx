import { useState, useEffect, useCallback, useRef } from 'react';

type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: CarouselImage[];
  infinity?: boolean;
  className?: string;
  transitionName?: string;
};

const ANIMATION_DURATION = 300;

export default function Carousel({
  images,
  infinity = false,
  className = '',
  transitionName,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'out' | 'in'>(
    'idle'
  );
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const preloadedImages = useRef<Set<string>>(new Set());

  const clearAnimationTimeouts = useCallback(() => {
    animationTimeouts.current.forEach(clearTimeout);
    animationTimeouts.current = [];
  }, []);

  const getImageIndex = useCallback(
    (index: number) => {
      if (infinity) {
        return (index + images.length) % images.length;
      }

      if (index < 0 || index >= images.length) return null;
      return index;
    },
    [images.length, infinity]
  );

  const preloadImage = useCallback((src: string) => {
    if (preloadedImages.current.has(src)) return;

    preloadedImages.current.add(src);
    const image = new Image();
    image.src = src;
  }, []);

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right' = 'right') => {
      if (isAnimating) return;

      let newIndex = index;
      if (infinity) {
        if (index < 0) newIndex = images.length - 1;
        else if (index >= images.length) newIndex = 0;
      } else {
        if (index < 0) newIndex = 0;
        else if (index >= images.length) newIndex = images.length - 1;
      }

      if (newIndex === currentIndex) return;

      clearAnimationTimeouts();
      setIsAnimating(true);
      setDirection(dir);
      setTransitionPhase('out');

      animationTimeouts.current.push(
        setTimeout(() => {
          setCurrentIndex(newIndex);
          setTransitionPhase('in');
        }, ANIMATION_DURATION / 2),
        setTimeout(() => {
          setTransitionPhase('idle');
          setIsAnimating(false);
        }, ANIMATION_DURATION)
      );
    },
    [clearAnimationTimeouts, currentIndex, images.length, infinity, isAnimating]
  );

  const next = useCallback(() => {
    goTo(currentIndex + 1, 'right');
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - 1, 'left');
  }, [currentIndex, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  useEffect(() => clearAnimationTimeouts, [clearAnimationTimeouts]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isInViewport || images.length <= 1) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setIsInViewport(true);
        observer.disconnect();
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, [images.length, isInViewport]);

  useEffect(() => {
    if (!isInViewport || images.length <= 1) return;

    const preloadOffsets = images.length > 3 ? [-2, -1, 1, 2] : [-1, 1];
    const indexes = new Set(
      preloadOffsets
        .map((offset) => getImageIndex(currentIndex + offset))
        .filter((index): index is number => index !== null && index !== currentIndex)
    );

    indexes.forEach((index) => preloadImage(images[index].src));
  }, [currentIndex, getImageIndex, images, isInViewport, preloadImage]);

  const imageTransitionClass =
    transitionPhase === 'out'
      ? `opacity-0 scale-[0.99] ${direction === 'right' ? '-translate-x-2' : 'translate-x-2'}`
      : 'translate-x-0 opacity-100 scale-100';
  const imageTransitionStyle = transitionName
    ? { viewTransitionName: transitionName }
    : undefined;

  if (!images || images.length === 0) {
    return (
      <div className={`aspect-video rounded-md bg-[#16211b] ${className}`}>
        <div className="flex h-full items-center justify-center text-[#5faf7b]">
          Sin imágenes disponibles
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`aspect-video rounded-md overflow-hidden ${className}`}>
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-cover"
          style={imageTransitionStyle}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div ref={carouselRef} className={`relative ${className}`}>
      <div className="aspect-video overflow-hidden rounded-md">
        <div
          className={`h-full w-full transition-[opacity,transform] duration-150 ease-out ${imageTransitionClass}`}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="h-full w-full object-cover"
            style={imageTransitionStyle}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          disabled={!infinity && currentIndex === 0}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#26352c] bg-[#16211b]/75 text-[#9baaa0] transition-colors hover:border-[#5faf7b] hover:text-[#5faf7b] disabled:opacity-30 disabled:hover:border-[#26352c] disabled:hover:text-[#9baaa0]"
          aria-label="Imagen anterior"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 12L6 8L10 4" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index, index > currentIndex ? 'right' : 'left')}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-6 bg-[#5faf7b]'
                  : 'w-1.5 bg-[#26352c] hover:bg-[#5faf7b]/50'
                }`}
              aria-label={`Ir a imagen ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={!infinity && currentIndex === images.length - 1}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#26352c] bg-[#16211b]/75 text-[#9baaa0] transition-colors hover:border-[#5faf7b] hover:text-[#5faf7b] disabled:opacity-30 disabled:hover:border-[#26352c] disabled:hover:text-[#9baaa0]"
          aria-label="Siguiente imagen"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4L10 8L6 12" />
          </svg>
        </button>
      </div>

      <div className="mt-3 text-center font-mono text-xs text-[#9baaa0]/60">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
