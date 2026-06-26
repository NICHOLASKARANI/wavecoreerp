import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WAVECOREERP - Smart ERP Platform',
  description: 'AI-Powered ERP, POS, CRM, Accounting, HRM & Business Intelligence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
