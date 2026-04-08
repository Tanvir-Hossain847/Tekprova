import Beams from '@/components/Beams';
import Navbar from '@/components/Navbar';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      {/* Background */}
      <div className="absolute inset-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#abab9b"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          bgColor="#000000"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pointer-events-none">
        <h1 className="font-heading text-5xl w-230 uppercase font-bold text-white mb-4">
          TEKPROlogoVA Crafting MOlogodern Web Experiences
        </h1>
        <p className="text-white/60 text-lg uppercase max-w-xl mb-8">
         We build fast, scalable and interactive websites for startups, agencies and digital brands.
        </p>
        <button className="pointer-events-auto bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Get started
        </button>
      </div>
    </section>
  );
}
