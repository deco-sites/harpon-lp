import SimpleText from "deco-sites/harpon-lp/components/news/SimpleText.tsx";
import BannerCarousel from "deco-sites/harpon-lp/components/ui/BannerCarousel.tsx";
import Diferencials from "deco-sites/harpon-lp/components/news/Diferencials.tsx";

export default function ImagesProducts() {
    return (
      <>
      <BannerCarousel />
      <div className="flex relative gap-[20px] justify-center mb-[150px] mt-[142px] xs:w-auto xs:flex-col xs:mt-[100px] xs:ml-0 xs:mb-0 1xs:w-max 1xs:flex-col 1xs:mt-[100px] md:w-max 2xl:justify-center 2xl:mt-[200px]">
        <div className="relative group">
          <div className="image-container">
            <div className="image-zoom" style={{ overflow: "hidden" }}>
              <div className="zoomable-image">
                <a href='#'>
                  <img
                    src="waterjet.png"
                    alt="Homem montando pneu"
                    className="transition-transform hover:scale-110 xs:w-[800px] 1xs:w-[430px]"
                  />
                </a>
              </div>
            </div>
           {/*  <a class="xs:text-[10px] 1xs:text-sm md:text-sm" href="https://www.harpon.com.br/waterjet"> */}
              <p
                style={{ border: "solid 1px white", padding: "8px" }}
                className="absolute z-10 mt-[-20px] ml-[200px] image-overlay font-bold text-[#29323A] bg-[#E9F408] xs:text-[18px] xs:ml-[140px] xs:-mt-5 1xs:ml-[160px]"
              >
                EM BREVE
              </p>
            {/* </a> */}
            <div className="absolute bottom-[190px]  left-[30px] text-[32px]  font-normal text-white xs:text-4xl xs:mb-0 xs:mt-5 xs:relative 1xs:text-2xl 1xs:relative ">
              <span style={{ fontWeight: "bold" }}>WATERJET</span>
            </div>
          </div>
        </div>
        <div className="relative group xs:w-auto 1xs:w-max lg:w-max">
          <div className="image-container">
            <div className="image-zoom" style={{ overflow: "hidden" }}>
              <div className="zoomable-image">
                <a href='https://www.harpon.com.br/recauchutagem'>
                  <img
                    src="recauchutagem.png"
                    alt="Homem montando pneu"
                    className="transition-transform hover:scale-110 xs:w-[800px] 1xs:w-[430px]  lg:w-max"
                  />
                </a>
              </div>
            </div>
            <a
              class="xs:text-[10px] 1xs:text-sm md:text-sm"
              href="https://www.harpon.com.br/recauchutagem"
            >
              <p
                style={{ border: "solid 1px white", padding: "8px" }}
                className="absolute z-10 mt-[-20px] ml-[200px] image-overlay font-bold text-[#29323A] bg-[#E9F408] xs:text-[18px] xs:ml-[120px] 1xs:ml-[160px]"
              >
                VISITE A LOJA
              </p>
            </a>
  
            <div className="absolute bottom-[190px] left-[30px] text-[32px] font-[Albert Sans] font-normal text-white xs:text-4xl xs:mb-0 xs:relative xs:mt-5 1xs:text-2xl 1xs:mb-[-30px] md:mb-[-60px] lg:mb-[-20px]">
              <span style={{ fontWeight: "bold" }}>RECAUCHUTAGEM</span>
            </div>
          </div>
        </div>
      </div>
        <div>
        <SimpleText />
        </div>
        <div>
        <Diferencials />
        </div>
      </>
    );
  }
  