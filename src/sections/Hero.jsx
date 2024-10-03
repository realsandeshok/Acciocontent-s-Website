export default function Component() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://acciocontent.com/_next/static/media/banner-img-1.d69fd878.png"
        alt="Conference background"
        className="absolute z-0 w-full h-full object-cover filter brightness-50"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 lg:mb-10">
        <h2 className="text-xl sm:text-2xl text-white mb-4">
          Struggling to Stand Out?
        </h2>
        <h1 className="text-3xl leading-tight sm:text-5xl md:text-[5.75rem] font-bold text-white mb-4">
          <span className="block sm:inline">Hire Virtual Snipers for </span>
          <span className="text-red-500 block mt-1">Your Transformation Into A</span>
          <span className="block">
            <span>Personal Brand.</span>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Where Expert Content Transforms You into a Popular Brand!
        </p>
        <a href="#getaquote">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg">
            Book a call Today!
          </button>
        </a>
      </div>
      {/* <div className="relative z-10"> */}
      {/* </div> */}
    </div>
  );
}
