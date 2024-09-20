export default function Component() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://acciocontent.com/_next/static/media/banner-img-1.d69fd878.png"
        alt="Conference background"
        className="absolute z-0 w-full h-full object-cover filter brightness-50"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl text-white mb-4">
        Struggling to Stand Out? 
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="block sm:inline">
            Hire Virtual Snipers for <span className="text-red-500">Your Transformation</span>
          </span>
          <span className="block">
            <span className="text-red-500">Into A</span> Personal Brand.
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
        Where Expert Content Transforms You into a Popular Brand!
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg">
          Book a call Today !
        </button>
      </div>
      {/* <div className="relative z-10"> */}
      {/* </div> */}
    </div>
  );
}
