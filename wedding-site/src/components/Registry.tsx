const Registry = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-amber-50 to-emerald-50 text-center min-w-full px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-6 text-fuchsia-700">Registry</h2>
        <p className="mb-6 text-lg">
          We are grateful for your presence at our wedding. If you wish to honor
          us with a gift, we have registered at the following stores:
        </p>
        <ul className="mb-6 space-y-3">
          <li>
            <a
              href="https://www.yuppiechef.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-700 hover:text-fuchsia-800 underline"
            >
              Yuppiechef
            </a>
          </li>
          <li>
            <a
              href="https://www.hirschs.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-700 hover:text-fuchsia-800 underline"
            >
              Hirsch's
            </a>
          </li>
        </ul>
        <p className="text-lg italic text-amber-700">
          Your love and support are the greatest gifts we could ask for!
        </p>
      </div>
    </section>
  );
};

export default Registry;
