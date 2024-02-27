export default function ImagesProducts() {
    return (
      <div className="flex relative gap-[inherit] m-auto xs:w-max xs:flex-col xs:mt-0 1xs:w-max 1xs:flex-col 1xs:mt-0 md:w-max">
        <div className="relative group">
          <div className="image-container">
            <div className="image-zoom" style={{ overflow: 'hidden' }}>
              <div className="zoomable-image">
                <img
                  src="man-tires2.png"
                  alt="Homem montando pneu"
                  className="transition-transform hover:scale-110 xs:w-[350px] 1xs:w-[430px] md:w-[360px]"
                />
              </div>
            </div>
            <a class='xs:text-[10px] 1xs:text-sm md:text-sm' href='/productlist'>
              <p
                style={{border: "solid 1px white", padding: "8px"}}
                className="absolute z-10 mt-[-70px] ml-8 image-overlay text-white group-hover:text-[#29323A] group-hover:bg-[#E9F408]"
              > VER PRODUTOS 
              </p>
            </a>
            <div className="absolute bottom-[150px] left-[30px] text-[32px] font-[Albert Sans] font-normal text-white xs:text-base xs:mb-[-20px] 1xs:text-xl md:text-lg md:mb-[-20px] lg:mb-[-20px]">
              BORRACHA PARA{' '}
              <span style={{ fontWeight: 'bold' }}>VULCANIZAÇÃO</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative group xs:w-max 1xs:w-max lg:w-max">
          <div className="image-container">
            <div className="image-zoom" style={{ overflow: 'hidden' }}>
              <div className="zoomable-image">
                <img
                  src="hand-tires.png"
                  alt="Homem montando pneu"
                  className="transition-transform hover:scale-110 xs:w-[350px] 1xs:w-[430px] md:w-[360px] lg:w-max"
                />
              </div>
            </div>
            <a class='xs:text-[10px] 1xs:text-sm md:text-sm' href='/productlist'>
              <p
                style={{border: "solid 1px white", padding: "8px"}}
                className="absolute z-10 mt-[-70px] ml-8 image-overlay text-white group-hover:text-[#29323A] group-hover:bg-[#E9F408]"
              >   VER PRODUTOS 
              </p>
            </a>

            <div className="absolute bottom-[190px] left-[30px] text-[32px] font-[Albert Sans] font-normal text-white xs:text-base xs:mb-[-60px] 1xs:text-xl 1xs:mb-[-30px] md:text-lg md:mb-[-60px] lg:mb-[-20px]">
              {' '}
              <span style={{ fontWeight: 'bold' }}>CARBIDES</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  