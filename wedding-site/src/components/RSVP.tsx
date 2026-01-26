const RSVP = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-amber-50 to-emerald-50 text-center min-w-full px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-6 text-fuchsia-700">RSVP</h2>
        <p className="mb-6 text-lg">
          Please let us know if you will be attending our wedding by filling out
          the form below:
        </p>
        <a
          href="https://forms.gle/..."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-fuchsia-700 text-amber-50 font-semibold rounded hover:bg-fuchsia-800 transition"
        >
          RSVP Form
        </a>
      </div>
    </section>
  );
};

export default RSVP;
