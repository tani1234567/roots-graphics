export default function Loading() {
  return (
    <div className="min-h-screen bg-[#143526] pt-32 pb-24 px-6 md:px-12 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="h-3 w-24 bg-brand-gold/20 rounded" />
          <div className="h-12 w-96 bg-brand-navy/20 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 2 }).map((_, col) => (
            <div key={col} className="flex flex-col gap-4">
              <div className="h-6 w-40 bg-brand-gold/20 rounded" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-24 rounded" style={{ background: 'rgba(16,42,31,0.5)', border: '1px solid rgba(201,168,76,0.15)' }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
