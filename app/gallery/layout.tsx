import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Roots Graphics — Creative Paintings',
  description:
    'Browse the complete collection of paintings by M. B. Parag and Jayant B. Mairal — abstract, spiritual, and conceptual works spanning three decades.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
