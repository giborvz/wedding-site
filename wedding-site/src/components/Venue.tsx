import image from "../assets/venue.jpg";

const Venue = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-white/15"></div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-6 text-fuchsia-700">Venue</h2>
        <p className="text-lg mb-6">
          Join us at the beautiful{" "}
          <span className="font-semibold">Beloftebos</span>, located just
          outside of Stanford.
        </p>
        <p className="text-amber-700 italic">
          We can't wait to celebrate with you in this gorgeous setting!
        </p>
      </div>
    </section>
  );
};

export default Venue;
