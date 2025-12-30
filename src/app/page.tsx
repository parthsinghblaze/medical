import Header from '../components/Header';
import Hero from '../components/Hero';
import CoreOfferings from '../components/CoreOfferings';
import Services from '../components/Services';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <CoreOfferings />
            <Services />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
