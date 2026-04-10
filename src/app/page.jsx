import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import OurServices from '@/components/OurServices';
import OurProjects from '@/components/OurProjects';
import GlobalPresence from '@/components/GlobalPresence';
import FAQ from '@/components/FAQ';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <OurProjects />
      <GlobalPresence />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}
