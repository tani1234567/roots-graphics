import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Roots Graphics — M. B. Parag & Jayant Mairal',
  description:
    'Learn the story of Roots Graphics — founded by M. B. Parag on Gandhi Jayanti 1990 with a mission to give India\'s finest artists the global platform they deserve.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
