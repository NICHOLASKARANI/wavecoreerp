import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WAVECOREERP - Smart ERP Platform',
  description: 'AI-Powered ERP for Modern Enterprises',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
