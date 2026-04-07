import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Roots Graphics',
  description:
    'Get in touch with Roots Graphics — enquiries about the collection, valuations, authentication certificates, and art acquisition.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
