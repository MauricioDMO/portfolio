import { useEffect, useRef, useState } from 'react';

export type ProjectDetailsNavItem = {
  id: string;
  number: string;
  label: string;
};

type ProjectDetailsNavProps = {
  items: ProjectDetailsNavItem[];
  lang?: 'es' | 'en';
};

const navAriaLabels = {
  es: 'Navegación del caso de estudio',
  en: 'Case study navigation',
};

export default function ProjectDetailsNav({ items, lang = 'es' }: ProjectDetailsNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (!items.length) return;

    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
            return;
          }

          visibleSections.delete(entry.target.id);
        });

        const [mostVisible] = [...visibleSections.entries()].sort(
          (a, b) => b[1] - a[1]
        );

        if (mostVisible) setActiveId(mostVisible[0]);
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6, 0.85],
      }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeId];
    const navList = activeItem?.closest('ol');

    if (!activeItem || !navList || navList.scrollWidth <= navList.clientWidth) {
      return;
    }

    const itemRect = activeItem.getBoundingClientRect();
    const listRect = navList.getBoundingClientRect();
    navList.scrollTo({
      left: navList.scrollLeft + itemRect.left - listRect.left - (listRect.width - itemRect.width) / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }, [activeId]);

  return (
    <nav aria-label={navAriaLabels[lang]}>
      <p className="font-mono text-xs text-[var(--color-muted)] md:hidden">
        {lang === 'es' ? 'Contenido · desliza para ver más' : 'Contents · swipe for more'}
      </p>
      <ol className="flex gap-2 overflow-x-auto border-b border-[var(--color-border)]/70 bg-[var(--color-bg)]/90 py-3 md:block md:space-y-1 md:overflow-visible md:border-b-0 md:bg-transparent md:py-0">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id} className="shrink-0 list-none">
              <a
                ref={(node) => {
                  itemRefs.current[item.id] = node;
                }}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                data-track="project_section"
                data-track-section={item.id}
                className={`flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] no-underline transition md:whitespace-normal md:rounded-none md:border-l md:px-3 md:py-2 ${
                  isActive
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-text)]'
                    : 'border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                <span className={isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent)]/65'}>
                  {item.number}
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
