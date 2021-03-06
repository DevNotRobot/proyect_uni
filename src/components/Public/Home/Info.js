import Doc from "../../../assets/doc.jpg";
const Info = () => {
  return (
    <>
      <section className="text-gray-600 body-font mx-auto container border-t-2 border-purple-400">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Doc}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Si necesitas ayuda
              <br className="hidden lg:inline-block" />
              LLAMA al siguiente número:
            </h1>
            <p className="mb-8 leading-relaxed">987654321 con la dra. María.</p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
