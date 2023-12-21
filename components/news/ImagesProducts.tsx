export default function ImagesProducts() {
    return (
      <div className="flex relative gap-[inherit] m-auto">
        <div className="relative group">
          <div className="image-container">
            <div className="image-zoom" style={{ overflow: 'hidden' }}>
              <div className="zoomable-image">
                <img
                  src="man-tires2.png"
                  alt="Homem montando pneu"
                  className="transition-transform hover:scale-110"
                />
              </div>
            </div>
            <p
            style={{border: "solid 1px white", padding: "8px"}}
              className="absolute z-10 mt-[-70px] ml-8 image-overlay text-white group-hover:text-[#29323A] group-hover:bg-[#E9F408]"
            > VER PRODUTOS 
            </p>
            <div className="absolute bottom-[180px] left-[30px] text-[32px] font-[Albert Sans] font-normal text-white">
              PRODUTOS PARA{' '}
              <span style={{ fontWeight: 'bold' }}>CORTE</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative group">
          <div className="image-container">
            <div className="image-zoom" style={{ overflow: 'hidden' }}>
              <div className="zoomable-image">
                <img
                  src="hand-tires.png"
                  alt="Homem montando pneu"
                  className="transition-transform hover:scale-110"
                />
              </div>
            </div>
            <p
            style={{border: "solid 1px white", padding: "8px"}}
              className="absolute z-10 mt-[-70px] ml-8 image-overlay text-white group-hover:text-[#29323A] group-hover:bg-[#E9F408]"
            > VER PRODUTOS 
            </p>

            <div className="absolute bottom-[180px] left-[30px] text-[32px] font-[Albert Sans] font-normal text-white">
              PRODUTOS PARA{' '}
              <span style={{ fontWeight: 'bold' }}>RECAPAGEM</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  