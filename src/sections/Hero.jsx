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
          Feeling Like a Personal Brand Muggle?
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="block sm:inline">
            AccioContent <span className="text-red-500">Awakens Your</span>
          </span>
          <span className="block">
            <span className="text-red-500">Marketing Magic</span> Within.
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Where Content Casts Spells and Brands Excel!
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg">
          Book a call
        </button>
        <p className=" max-w-4xl relative z-10 text-white text-center py-8 px-2 text-xl">
          Struggling to Stand Out? 
          <br /> 
          Hire Virtual Snipers Your Image
          Transformation into a Personal Brand. 
          <br />
          Where Expert Content Transforms
          You into a Popular Brand! Book a Call Today!
        </p>
      </div>
      {/* <div className="relative z-10"> */}
      {/* </div> */}
    </div>
  );
}
