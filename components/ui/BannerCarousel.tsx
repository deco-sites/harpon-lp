import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  images: [
    {
      alt: "/feminino",
      action: {
        href: "https://www.deco.cx/",
        label: "deco.cx",
        title: "Demo Store",
        subTitle: "Visit our site and start building now:",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/24278f9e-412d-4a8a-b2d3-57353bb1b368",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/afa2c07c-74f4-496d-8647-5cc58f48117b",
    },
    {
      alt: "/feminino",
      action: {
        href: "https://www.deco.cx/",
        label: "deco.cx",
        title: "Demo Store",
        subTitle: "Visit our site and start building now:",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/eeaa624c-a3e1-45e8-a6fe-034233cfbcd0",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7949d031-9a79-4639-b85e-62fd90af85a9",
    },
    {
      alt: "/feminino",
      action: {
        href: "https://www.deco.cx/",
        label: "deco.cx",
        title: "Demo Store",
        subTitle: "Visit our site and start building now:",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/ae89571c-4a7c-44bf-9aeb-a341fd049d19",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7ec121e4-5cfe-4b7b-b942-d1ed4493803d",
    },
  ],
  preload: true,
};

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <div
      class="relative 2xl:h-[800px] h-[600px] overflow-y-hidden w-full"
    >
      <Picture preload={lcp}>
      <div className="absolute w-[500px] pl-[130px] pt-[150px] pb-[150px] text-[42px] font-[Albert Sans] font-normal text-white xs:w-min xs:text-2xl xs:mt-[90px] xs:pl-[80px] 1xs:text-[26px] 1xs:w-min 1xs:mt-[90px] 1xs:pl-[100px] sm:pl-5 sm:mt-[100px] md:pl-[50px]">
              PARA EMPRESAS E PNEUS{' '}
              
              <span style={{ fontWeight: 'bold' }}>QUE NUNCA PARAM</span>
            </div>
        <img class="object-cover w-full h-full xs:h-[600px]" src='banner-principal.avif' alt='homem trabalhando'></img>
        {/* <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={360}
          height={600}
        /> */}
        {/* <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1440}
          height={600}
        /> */}
        {/* <img
          class="object-cover w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        /> */}
      </Picture>
      {/* {action && (
        <div class="hidden absolute h-min top-0 bottom-0 m-auto left-0 right-0 sm:right-auto sm:left-[12%] max-h-min max-w-[235px]  flex-col gap-4 p-4 rounded">
          <span class="text-[32px] font-semibold text-base-100">
            {action.title}
          </span>
          <span class=" hidden font-medium text-xl text-base-100">
            {action.subTitle}
          </span>
          <Button class=" hidden glass">{action.label}</Button>
        </div>
      )} */}
    </div>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4 xs:hidden">
        {images?.map((_, index) => (
          <li class="carousel-item xs:hidden">
            {/* <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-16 sm:w-20 h-0.5 rounded group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot> */}
          </li>
        ))}
      </ul>
    </>
  );
}

/* function Buttons() {
  return (
    <>
      <div class=" hidden  items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="hidden items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
} */

function BannerCarousel(props: Props) {
  const { images, preload, interval } = { ...DEFAULT_PROPS, ...props };

  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
      {images?.map((image, index) => (
      index === 0 && (
        <Slider.Item index={index} class="carousel-item w-full" key={index}>
          <BannerItem image={image} lcp={preload} />
        </Slider.Item>
    )
  ))}
      </Slider>

      {/* <Buttons /> */}

      <Dots images={images} interval={interval} />

      {/* <SliderJS rootId={id} interval={interval && interval * 1e3} infinite /> */}
    </div>
  );
}

export default BannerCarousel;
