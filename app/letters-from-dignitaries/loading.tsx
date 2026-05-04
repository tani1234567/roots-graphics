export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-3 w-32 bg-brand-gold/30 rounded mx-auto mb-4" />
          <div className="h-12 w-96 bg-brand-navy/10 rounded mx-auto mb-4" />
          <div className="h-px w-16 bg-brand-gold/40 mx-auto mb-4" />
          <div className="h-3 w-64 bg-gray-200 rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse" style={{ border: '1px solid rgba(214,186,116,0.2)' }}>
              <div className="w-full aspect-[4/3] bg-gray-100" />
              <div className="p-5 space-y-2">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
