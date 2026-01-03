import { Inter, Montserrat, Questrial, Chakra_Petch } from 'next/font/google';
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

const questrial = Questrial({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-questrial',
    display: 'swap',
});

const chakraPetch = Chakra_Petch({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-chakra-petch',
    display: 'swap',
});

export const metadata = {
    title: 'Transcendence Pharma - Experts In Global Pharmaceuticals Exports',
    description: 'Delivering top-notch medications to partners across the globe. Reliable. Compliant. Efficient.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable} ${questrial.variable} ${chakraPetch.variable}`} suppressHydrationWarning>
            <body className="font-sans antialiased text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark transition-colors duration-300 overflow-x-hidden">
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
