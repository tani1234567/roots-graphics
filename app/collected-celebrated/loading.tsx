export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-12 w-80 bg-brand-navy/10 rounded mx-auto mb-4" />
          <div className="h-px w-16 bg-brand-gold/40 mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-[#173F2D] p-5 border border-brand-gold/10">
              <div className="h-5 bg-brand-navy/20 rounded mb-2" />
              <div className="h-3 bg-white/10 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
