import Container from "../Container";
import BannerMotion from "./BannerMotion";
import DesignationAnimation from "./DesignationAnimation";

export default function Banner() {
  return (
    <Container>
      <div>
        <div className="lg:flex justify-between items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="h-[100px] text-2xl lg:text-3xl xl:text-6xl font-bold leading-none">
              Hi! This is Al Samiul <br />
              <span>
                <DesignationAnimation />
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              I am a Software Developer and here is my portfolio website. Here
              you'll learn about my journey as a software developer.
            </p>
            <a
              className="block mt-8 md:mt-12"
              target="_blank"
              href="https://drive.google.com/file/d/118f-b0RIUWvOXZa6lT_3sTN9r4xxlwkG/view?usp=sharing"
            >
              <button
                type="button"
                className="py-3 px-8 bg-accent hover:bg-teal-700 rounded text-white"
              >
                Resume
              </button>
            </a>
          </div>
          <div>
            <BannerMotion />
          </div>
        </div>
      </div>
    </Container>
  );
}
