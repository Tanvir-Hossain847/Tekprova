import HeroBg from '@/components/HeroBg';

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <HeroBg
          waveColor={[0.659, 0.902, 0.196]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.5}
          colorNum={3}
          pixelSize={5}
          waveAmplitude={0.1}
          waveFrequency={3}
          waveSpeed={0.04}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-heading text-5xl font-bold text-foreground mb-4">
          Build something great
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mb-8">
          A modern foundation for your next project.
        </p>
        <button className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Get started
        </button>
      </div>
    </section>
  );
}
