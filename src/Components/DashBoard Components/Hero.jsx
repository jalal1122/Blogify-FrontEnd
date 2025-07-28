import "../../../public/hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-[1200px] relative bg-gray-200 flex items-center justify-center mx-auto my-10">
        <img src="hero.jpg" className="" alt="hero iamge" />
        <div className="absolute bottom-[-35px] left-20 w-[400px] text-center bg-white py-3 px-5 border-2 border-gray-300">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Blogify
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            soluta debitis cum consequuntur rem minima quas dolore nemo nostrum
            vitae sapiente, est laborum magni error accusamus consequatur!
            Dolorum, enim sapiente! Dolor amet ipsam voluptatum, ratione
            delectus et, repudiandae veniam nostrum similique repellendus
            eveniet harum hic sed nisi nam autem aliquam!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
