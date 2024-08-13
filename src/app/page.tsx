import Image from "next/image";
import heroImg from "./components/img/redtruck.jpg";
import heroImg2 from "./components/img/redtruck.jpg";

export default function Home() {
  return (
    <div className="relative">
      {/* Overlay for Coming Soon Animation */}
      <div className="z-50 fixed left-1/2 transform -translate-x-1/2 w-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative right-1/3 transform -translate-x-1/2 md:right-[10%] text-6xl md:text-7xl font-bold">
          <div className="absolute w-full text-center animate-slide-in-top-smooth text-stroke-[1px] text-stroke-[#ffffff96] text-transparent">
            COMING SOON!!
          </div>
          <div className="absolute w-full text-center z-10 text-white">
            COMING SOON!!
          </div>
          <div className="absolute w-full text-center animate-slide-in-bottom-smooth text-stroke-[1px] text-stroke-[#ffffff96] text-transparent">
            COMING SOON!!
          </div>
          <div className="absolute w-full text-center animate-slide-in-bottom-smooth text-stroke-[1px] text-stroke-[#ffffff96] text-transparent">
            COMING SOON!!
          </div>
        </div>
      </div>

      {/* Blurred Content */}
      <div className="blur-sm pointer-events-none">
        <section>
          <div className="md:flex flex-row-reverse justify-between items-center">
            <div className="hero-img w-full mt-[6rem] md:hidden">
              <Image
                src={heroImg}
                alt="alt"
                width={360}
                height={92}
                className="m-auto w-full"
              />
            </div>

            <div className="hero-img2 hidden md:block">
              <Image
                src={heroImg2}
                alt="alt"
                className="h-[100vh] w-[1200px] object-cover"
              />
            </div>

            <div className="text p-2 pt-4 md:pt-0 md:max-w-[80%] md:ms-[9rem]">
              <h2 className="font-[900] text-[24.66px] md:text-[40px] leading-[29.85px] md:leading-[48.41px] text-[#FFFFFF] w-[80%]">
                Quote, Orders and Delivery. All Simplified for you!
              </h2>
              <p className="font-[400] text-[10.86px] md:text-[17.61px] leading-[14.48px] md:leading-[23.49px] w-[80%] text-[#BBBBBB] pt-2">
                Enjoy these pre-made components and worry only about creating the
                best product ever.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
