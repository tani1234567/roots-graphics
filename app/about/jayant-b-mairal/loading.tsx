export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6 md:px-12 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="h-3 w-32 bg-brand-orange/20 rounded" />
          <div className="h-12 w-64 bg-brand-navy/20 rounded" />
          <div className="h-3 w-56 bg-brand-gold/20 rounded" />
          <div className="h-px w-16 bg-brand-gold/40" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 bg-brand-navy/10 rounded w-full" />
            ))}
          </div>
          <div className="aspect-[3/4] bg-brand-navy/10 rounded" />
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 bg-brand-navy/10 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
