import { useEffect, useRef, useState } from 'react';

export type ProjectDetailsNavItem = {
  id: string;
  number: string;
  label: string;
};

type ProjectDetailsNavProps = {
  items: ProjectDetailsNavItem[];
};

export default function ProjectDetailsNav({ items }: ProjectDetailsNavProps) {
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

    activeItem?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeId]);

  return (
    <nav aria-label="Navegacion del caso de estudio">
      <ol className="flex gap-2 overflow-x-auto border-b border-[#26352c]/70 bg-[#0d1210]/90 py-3 md:block md:space-y-1 md:overflow-visible md:border-b-0 md:bg-transparent md:py-0">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id} className="list-none">
              <a
                ref={(node) => {
                  itemRefs.current[item.id] = node;
                }}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] no-underline transition md:rounded-none md:border-l md:px-3 md:py-2 ${
                  isActive
                    ? 'border-[#5faf7b] bg-[#5faf7b]/10 text-[#e8eee9]'
                    : 'border-transparent text-[#738278] hover:text-[#c7d3cb]'
                }`}
              >
                <span className={isActive ? 'text-[#5faf7b]' : 'text-[#5faf7b]/65'}>
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
