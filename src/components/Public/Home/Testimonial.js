export default function Testimonial() {
  return (
    <>
      <div className="lg:px-20 md:px-6 px-4 py-20 mx-auto container border-t-2 border-purple-400">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="lg:text-5xl text-3xl font-bold text-center text-gray-800">
            Lo que nuestros pacientes dicen de nosotros
          </h1>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <svg
                  width={25}
                  height={27}
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M24.5767 14.331H18.6157C18.7176 9.55831 19.9498 9.01654 21.4974 8.86191L22.0942 8.78063V3.53254L21.4063 3.57304C19.3854 3.69795 17.1512 4.09818 15.6605 6.11977C14.3539 7.89195 13.7778 10.7872 13.7778 15.2317V23.4674H24.5767V14.331Z"
                      fill="#4338CA"
                    />
                    <path
                      d="M10.7988 23.4674V14.331H4.91744C5.01934 9.55831 6.21168 9.01654 7.75927 8.86191L8.31634 8.78063V3.53254L7.66816 3.57304C5.64729 3.69795 3.39306 4.09818 1.90245 6.11977C0.595916 7.89195 -5.72205e-06 10.7872 -5.72205e-06 15.2317V23.4674H10.7988Z"
                      fill="#4338CA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(24.5767 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                Nunca me había sentido tan a gusto con el trato de los doctores.
                Me ayudaron mucho.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <svg
                  width={23}
                  height={22}
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={1} width={20} height={21} fill="white" />
                  <path
                    d="M21.5 6L11.5 21L1 6"
                    stroke="#E5E7EB"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img
                  src="https://i.ibb.co/R6WQhYj/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Alisha Cooper
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Paciente con autismo
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <svg
                  width={25}
                  height={27}
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M24.5767 14.331H18.6157C18.7176 9.55831 19.9498 9.01654 21.4974 8.86191L22.0942 8.78063V3.53254L21.4063 3.57304C19.3854 3.69795 17.1512 4.09818 15.6605 6.11977C14.3539 7.89195 13.7778 10.7872 13.7778 15.2317V23.4674H24.5767V14.331Z"
                      fill="#4338CA"
                    />
                    <path
                      d="M10.7988 23.4674V14.331H4.91744C5.01934 9.55831 6.21168 9.01654 7.75927 8.86191L8.31634 8.78063V3.53254L7.66816 3.57304C5.64729 3.69795 3.39306 4.09818 1.90245 6.11977C0.595916 7.89195 -5.72205e-06 10.7872 -5.72205e-06 15.2317V23.4674H10.7988Z"
                      fill="#4338CA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(24.5767 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                No creía que iban a poder ayudarme con mi problema en las
                piernas, ahora puedo caminar mucho mejor.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <svg
                  width={23}
                  height={22}
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={1} width={20} height={21} fill="white" />
                  <path
                    d="M21.5 6L11.5 21L1 6"
                    stroke="#E5E7EB"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img
                  src="https://i.ibb.co/C6bwf12/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Henry Jack
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Paciente con sindrome de piernas inquietas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
