interface TickerProps {
  items: string[];
  reverse?: boolean;
}

export default function Ticker({ items, reverse }: TickerProps) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface-2 py-[18px]">
      <div
        className={`flex w-max ${reverse ? "animate-ticker-right" : "animate-ticker-left"}`}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            <span className="px-7 font-display text-[17px] font-bold uppercase tracking-[1px] text-[hsl(0,0%,27%)]">
              {item}
            </span>
            <span className="text-primary" style={{ fontSize: 7 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}