export default function Loading() {
  return (
    <div className="min-h-screen bg-[#143526] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-12 w-72 bg-brand-navy/20 rounded mx-auto mb-4" />
          <div className="h-px w-16 bg-brand-gold/40 mx-auto mb-4" />
          <div className="h-3 w-56 bg-brand-gold/20 rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse" style={{ background: '#183A2B', border: '1px solid rgba(214,186,116,0.2)' }}>
              <div className="w-full aspect-[4/3] bg-[#1D4733]" />
              <div className="p-5 space-y-2">
                <div className="h-5 bg-brand-navy/20 rounded w-3/4" />
                <div className="h-3 bg-brand-orange/10 rounded w-1/2" />
                <div className="h-3 bg-white/5 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
