import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M. B. Parag | Roots Graphics',
  description:
    'Learn about M. B. Parag — founder of Roots Graphics, abstract artist, art promoter, philanthropist, and world conceptualist.',
};

export default function MBParagLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
