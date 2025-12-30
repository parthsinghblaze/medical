import Header from '../components/Header';
import Hero from '../components/Hero';
import CoreOfferings from '../components/CoreOfferings';
import Services from '../components/Services';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ExportExpertise from '../components/ExportExpertise';
import Certifications from '../components/Certifications';
import WhoWeAre from '../components/WhoWeAre';
import StatsSection from '../components/StatsSection';
import TrustSection from '../components/TrustSection';
import GlobalPresence from '../components/GlobalPresence';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <CoreOfferings />
            <ExportExpertise />
            <WhoWeAre />
            <StatsSection />
            <GlobalPresence />
            <TrustSection />
            <Certifications />
            <Testimonials />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
