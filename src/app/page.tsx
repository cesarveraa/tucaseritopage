import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { VisualDemo } from "../components/sections/VisualDemo";
import { BusinessImpact } from "../components/sections/BusinessImpact";
import { Vision } from "../components/sections/Vision";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Footer } from "../components/layout/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <VisualDemo />
                <BusinessImpact />
                <Vision />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
