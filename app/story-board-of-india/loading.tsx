export default function Loading() {
  return (
    <div className="min-h-screen bg-[#143526] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-3 w-24 bg-brand-gold/30 rounded mx-auto mb-4" />
          <div className="h-12 w-80 bg-brand-navy/20 rounded mx-auto mb-4" />
          <div className="h-px w-16 bg-brand-gold/40 mx-auto mb-4" />
          <div className="h-3 w-56 bg-gray-600/30 rounded mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto mb-16 space-y-3 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-600/20 rounded w-full" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse p-6 border-l-4 border-brand-gold/30" style={{ background: 'rgba(16,42,31,0.6)' }}>
              <div className="h-6 w-20 bg-brand-gold/30 rounded-full mb-4" />
              <div className="h-5 bg-brand-navy/20 rounded w-2/3 mb-3" />
              <div className="space-y-2">
                <div className="h-3 bg-gray-600/20 rounded w-full" />
                <div className="h-3 bg-gray-600/20 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
