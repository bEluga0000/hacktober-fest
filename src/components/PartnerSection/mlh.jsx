import docLogo from "/PartnersSection/docLogo.svg";
import { SponArr, MLHArr } from "./data.js";
function MLH() {
  return (
    <section className="">
      {/* <img src={sponsorGradient} className="absolute w-1/3 h-5/6" /> */}
      <div className="px-6 py-9 md:p-16">
        {SponArr.map((data, index) => (
          <div className="text-[#D6D9F6] md:mb-16 mb-12 items-center justify-center flex" key={index}>
            <p className="text-[#E0E2FF] text-3xl md:text-4xl font-medium mb-3 font-spline">
              {data.mlh}
            </p>
          </div>
        ))}
        <div className="flex flex-wrap justify-around gap-5">
          {MLHArr.map((image, index) => (
            <div
              className="flex flex-col items-center justify-evenly"
              key={index}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.img}
                  width={image.width}
                  height={image.height}
                  className="md:mb-3 ml-5"
                />
                <p className="text-xl font-medium text-white mt-6">{image.text}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MLH;
