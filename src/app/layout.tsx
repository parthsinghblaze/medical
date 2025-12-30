import { Inter, Montserrat } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const metadata = {
    title: 'AksharAvira Pharma - Experts In Global Pharmaceuticals Exports',
    description: 'Delivering top-notch medications to partners across the globe. Reliable. Compliant. Efficient.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
            <body className="font-sans antialiased text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark transition-colors duration-300">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
