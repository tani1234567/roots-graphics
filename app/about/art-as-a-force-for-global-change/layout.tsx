import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Art as a Force for Global Change | Roots Graphics',
  description:
    'Discover how Roots Graphics uses art to drive global social and charitable impact — from community kitchens and free hospitals to NFT platforms and international auctions.',
};

export default function GlobalChangeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
