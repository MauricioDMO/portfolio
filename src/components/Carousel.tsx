import { useState, useEffect, useCallback, useRef } from 'react';

type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselLabels = {
  noImages: string;
  previousImage: string;
  nextImage: string;
  goToImage: string;
};

type CarouselProps = {
  images: CarouselImage[];
  labels: CarouselLabels;
  infinity?: boolean;
  className?: string;
  transitionName?: string;
};

const ANIMATION_DURATION = 300;
const imageCache = new Map<string, HTMLImageElement>();

export default function Carousel({
  images,
  labels,
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
    if (imageCache.has(src)) return;

    const image = new Image();
    image.src = src;
    imageCache.set(src, image);
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
      if (!carouselRef.current?.contains(document.activeElement)) return;
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

    const preloadOffsets = images.length > 5 ? [-3, -2, -1, 1, 2, 3] : [-2, -1, 1, 2];
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
      <div className={`aspect-video rounded-md bg-[var(--color-card)] ${className}`}>
        <div className="flex h-full items-center justify-center text-[var(--color-accent)]">
          {labels.noImages}
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
          loading="eager"
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
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          disabled={!infinity && currentIndex === 0}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/75 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-30 disabled:hover:border-[var(--color-border)] disabled:hover:text-[var(--color-muted)]"
          aria-label={labels.previousImage}
          data-track="carousel_navigate"
          data-track-direction="prev"
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

        <div className="flex min-w-0 flex-wrap items-center justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index, index > currentIndex ? 'right' : 'left')}
              className="group flex h-6 w-6 shrink-0 items-center justify-center"
              aria-label={`${labels.goToImage} ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
              data-track="carousel_navigate"
              data-track-direction="dot"
              data-track-index={index + 1}
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'w-6 bg-[var(--color-accent)]'
                    : 'w-1.5 bg-[var(--color-border)] group-hover:bg-[var(--color-accent)]/50'
                  }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={!infinity && currentIndex === images.length - 1}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/75 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-30 disabled:hover:border-[var(--color-border)] disabled:hover:text-[var(--color-muted)]"
          aria-label={labels.nextImage}
          data-track="carousel_navigate"
          data-track-direction="next"
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

      <div className="mt-3 text-center font-mono text-xs text-[var(--color-muted)]/60">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
