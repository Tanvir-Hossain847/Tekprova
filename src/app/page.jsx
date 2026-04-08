import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import OurServices from '@/components/OurServices';
import OurProjects from '@/components/OurProjects';
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
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}
