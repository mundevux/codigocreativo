import { Aboutus } from './Aboutus';
import { HeroSection } from './HeroSection';
import { Solutions } from './Solutions';
import { Testimonials } from './Testimonials';
import { CallToAction } from './CallToAction';
import { Blog } from './Blog';
import { Contac } from './Contact';

export function AppMain() {
    return(
        <main className="space-y-40 mb-10">
            <HeroSection/>
            <Aboutus/>
            <Solutions/>
            {/*<Testimonials/>
            <CallToAction/>
            <Blog/>*/}
            <Contac />
        </main>
    )
}