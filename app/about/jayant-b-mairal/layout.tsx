import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jayant B. Mairal | Roots Graphics',
  description:
    'Learn about Jayant B. Mairal — fine artist, 9 national award winner, mixed media specialist, and in-house artist at Roots Graphics.',
};

export default function JayantLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
