import Image from "next/image";
import myPhoto from "@/src/assets/photo.png";
import Container from "../Container";
export default function Banner() {
  return (
    <Container>
      <div>
        <div className="lg:flex justify-between items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Main title of your landing page
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Free landing page template to promote your business startup and
              generate leads for the offered services
            </p>
            <p className="mt-8 md:mt-12">
              <button
                type="button"
                className="
        py-4 px-12
        
        bg-teal-500
        hover:bg-teal-600
        rounded
        text-white"
              >
                Get Started
              </button>
            </p>
          </div>
          <div className="">
            <Image width={400} src={myPhoto} alt="my-photo" />
          </div>
        </div>
      </div>
    </Container>
  );
}
