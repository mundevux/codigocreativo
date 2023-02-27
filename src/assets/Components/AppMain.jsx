import { Features } from './Features';
import { HeroSection } from './HeroSection';
import { Stats } from './Stats';
import { Testimonials } from './Testimonials';
import { CallToAction } from './CallToAction';
import { Blog } from './Blog';

export function AppMain() {
    return(
        <main className="space-y-40 mb-40">
            <HeroSection/>
            <Features/>
            <Stats/>
            <Testimonials/>
            <CallToAction/>
            <Blog/>
        </main>
    )
}