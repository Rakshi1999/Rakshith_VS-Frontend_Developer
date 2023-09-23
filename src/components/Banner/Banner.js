import SpaceXLogo from "../Logo/Logo";

const Banner = ({ backgroundImage, title, subtitle }) => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        position: "relative",
      }}
    >
      <div className="absolute top-0 left-0 p-4">
        {" "}
        <SpaceXLogo />
      </div>
      <div
        style={{ position: "absolute", bottom: 0 }}
        className="text-white p-6 animate-fade-in flex flex-col justify-start items-end w-full"
      >
        <h1
          className="text-5xl  text-center tracking-wider  font-semibold"
          style={{ fontFamily: "'Eczar', serif", fontWeight: 400 }}
        >
          {title}
        </h1>
        <p
          className=" text-2xl underline  text-center hover:text-slate-300 hover:cursor-pointer"
          style={{ fontFamily: "'Alkatra', cursive" }}
        >
          {subtitle}
        </p>
        <style>
          {`
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .animate-fade-in {
            animation: fade-in 3s ease-in-out;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Banner;
