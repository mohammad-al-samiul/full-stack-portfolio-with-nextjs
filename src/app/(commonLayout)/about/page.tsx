import Container from "@/src/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="text-default-800 flex justify-center mt-10 lg:mt-20">
        <div className=" px-3">
          <div className="lg:text-center ">
            <h1 className="text-2xl lg:text-3xl font-bold text-center text-accent">
              About Me
            </h1>
            <p className="my-7 text-justify">
              I’m a passionate full-stack web developer with 2 years of
              experience creating real-world applications using the MERN stack,
              TypeScript, Redux, and Next.js. I love building interactive,
              user-friendly, and efficient web solutions that solve real-world
              problems. My journey began with a curiosity for coding, and it
              quickly grew into a passion for web development. I specialize in
              creating responsive front-end designs, secure back-end systems,
              and scalable architectures. Using TypeScript helps me write clean,
              reliable code, while Redux ensures smooth state management.
              Next.js is my go-to framework for building fast and optimized web
              applications. I’m driven by the idea of making technology
              accessible and impactful for users and businesses. Collaboration,
              learning, and solving challenges are what keep me motivated to
              grow and contribute to the ever-evolving world of web development.
            </p>
          </div>
          <div className="lg:flex justify-between lg:mt-10 ">
            <div className="flex lg:grid ">
              <p>Name:</p>
              <h3 className="font-bold">Al Samiul</h3>
            </div>
            <div className="flex lg:grid ">
              <p>Email:</p>
              <h3 className="font-bold ">samiulwebprogrammer@gmail.com</h3>
            </div>
            <div className="flex lg:grid lg:w-[120px] ">
              <p>Date of Birth:</p>
              <h3 className="font-bold">30 january 2002</h3>
            </div>
            <div className="flex lg:grid lg:w-[100px] ">
              <p>From:</p>
              <h3 className="font-bold">Chittagong, Bangladesh</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
