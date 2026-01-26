import image from "../assets/IMG_9329_VSCO.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Optional: overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/15"></div>

      <div className="relative z-10">
        <h1 className="text-6xl md:text-7xl font-serif mb-4 text-black drop-shadow-lg">
          Gibor en Lize-Marié
        </h1>
        <p className="text-xl md:text-2xl tracking-wide text-black drop-shadow-md">
          19 Desember 2026 • Stanford
        </p>
        <p className="mt-6 text-black max-w-xl">
          Join us as we celebrate our wedding surrounded by family, friends, and
          beautiful memories.
        </p>
      </div>
    </section>
  );
};

export default Hero;
