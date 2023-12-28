import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'] });
import { createMetaData } from '@/components/seo/CommonMeta';

export const metadata = {
    ...createMetaData(),
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
