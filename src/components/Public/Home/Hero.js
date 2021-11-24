function Hero() {
  const handleRedirect = () => {
    window.location.href = "/reserve";
  };
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col py-6 sm:py-12">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl text-indigo-500 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-extrabold leading-tight">
              ¡Registra tu cita!
            </h1>
            <p className="mt-5 sm:mt-10 text-gray-600 font-normal text-lg sm:text-lg">
              Esta página te ayudará a poder registrar una cita.
            </p>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                handleRedirect();
              }}
              className="ml-4 focus:outline-none bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
