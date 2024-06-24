import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import LandingPageHeader from "deco-sites/harpon-lp/components/landingpage/Header.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  srcMobile: ImageWidget;
  srcDesktop?: ImageWidget;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    /** @default 2 */
    mobile?: 1 | 2;
    /** @default 4 */
    desktop?: 1 | 2 | 4 | 6 | 8;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    /** @default none */
    mobile?: BorderRadius;
    /** @default none */
    desktop?: BorderRadius;
  };
  banners: Banner[];
}

const MOBILE_COLUMNS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
};

const DESKTOP_COLUMNS = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  4: "sm:grid-cols-4",
  6: "sm:grid-cols-6",
  8: "sm:grid-cols-8",
};

const RADIUS_MOBILE = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "full": "rounded-full",
};

const RADIUS_DESKTOP = {
  "none": "sm:rounded-none",
  "sm": "sm:rounded-sm",
  "md": "sm:rounded-md",
  "lg": "sm:rounded-lg",
  "xl": "sm:rounded-xl",
  "2xl": "sm:rounded-2xl",
  "3xl": "sm:rounded-3xl",
  "full": "sm:rounded-full",
};

const DEFAULT_PROPS: Props = {
  title: "Summer bags",
  banners: [
    {
      alt: "a",
      href: "a",
      srcMobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/82727553-f670-4e7c-b9c2-9452aed1955f",
      srcDesktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    },
    {
      alt: "a",
      href: "a",
      srcMobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/c5c6bdf6-5555-488c-8b14-719e4158dea6",
      srcDesktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/3e2b7824-d75c-4704-8d32-621bfc9b20cf",
    },
  ],
  borderRadius: {
    mobile: "3xl",
    desktop: "3xl",
  },
  itemsPerLine: {
    mobile: 2,
    desktop: 2,
  },
};

export default function BannnerGrid(props: Props) {
  const {
    title,
    itemsPerLine,
    borderRadius,
    banners = [],
  } = { ...DEFAULT_PROPS, ...props };

  {/* <section class="container w-full px-4 md:px-0 mx-auto">
      {title &&
        (
          <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
            <h2 class="text-lg leading-5 font-semibold uppercase">
              {title}
            </h2>

            <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
          </div>
        )}
      <div
        class={`grid gap-4 md:gap-6 ${
          MOBILE_COLUMNS[itemsPerLine?.mobile ?? 2]
        } ${DESKTOP_COLUMNS[itemsPerLine?.desktop ?? 4]}`}
      >
        {banners.map(({ href, srcMobile, srcDesktop, alt }) => (
          <a
            href={href}
            class={`overflow-hidden ${
              RADIUS_MOBILE[borderRadius.mobile ?? "none"]
            } ${RADIUS_DESKTOP[borderRadius.desktop ?? "none"]} `}
          >
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={srcMobile}
                width={100}
                height={100}
              />
              <Source
                media="(min-width: 768px)"
                src={srcDesktop ? srcDesktop : srcMobile}
                width={250}
                height={250}
              />
              <img
                class="w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={srcMobile}
                alt={alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </a>
        ))}
      </div>
    </section> */}

  return (
    <>
      <div class='xs:overflow-x-hidden 1xs:overflow-x-hidden  md:overflow-x-hidden lg:overflow-x-hidden'>
        <div>
          <LandingPageHeader />
        </div>
        <div class='bg-[#E4E4E4] sm:w-[798px]'>
          <div class='bg-[#E4E4E4] h-[50px]'></div>
          <div class='flex justify-center h-[120px] w-[900px] bg-[#E9F408] mx-[300px] mb-[50px] xs:m-0 xs:w-auto 1xs:m-auto 1xs:w-auto sm:ml-5 sm:w-[750px] md:m-auto lg:ml-[50px]'>
            <h1 class='text-[#29323A]  font-bold text-4xl text-center mb-[50px] pt-[15px] xs:text-base xs:mr-2 1xs:text-lg sm:text-2xl md:text-2xl md:mr-[120px]'>
              Participe do Programa Carbide Boomerang <br></br>
              e ganhe créditos para a sua próxima compra!
            </h1>
          </div>
          <div class='grid justify-center w-[800px] mx-[370px] my-5 xs:m-0 xs:mt-5 xs:w-auto xs:p-2 1xs:m-0 1xs:mt-5 1xs:w-auto 1xs:p-2 sm:ml-[50px] sm:w-[700px] md:ml-0 md:w-[750px] md:p-5 lg:ml-[50px]'>
              <p class='text-[#29323A] text-xl  text-left xs:text-base 1xs:text-lg'>
            As regras são simples:
              </p>
              <p class='text-[#29323A] text-xl  text-justify mt-5 xs:text-base 1xs:text-lg'>
              <span class='text-2xl xs:text-lg 1xs:text-lg' style={{ fontWeight: 'bold' }}>1.</span> Envie os seus carbides usados para a Harpon.
              </p>
              <p class='text-[#29323A] text-xl  text-justify mt-5 xs:text-base 1xs:text-lg'>
              <span class='text-2xl xs:text-lg 1xs:text-xl' style={{ fontWeight: 'bold' }}>2.</span> Nós realizamos uma triagem, separando os carbides sem condições de uso para o descarte da forma adequada.
              </p>
              <p class='text-[#29323A] text-xl  text-justify mt-5 xs:text-base 1xs:text-lg'>
              <span class='text-2xl xs:text-lg 1xs:text-xl' style={{ fontWeight: 'bold' }}>3.</span> Os itens em boas condições de reaproveitamento são validados.
              </p>
              <p class='text-[#29323A] text-xl  text-justify mt-5 xs:text-base 1xs:text-lg'>
              <span class='text-2xl xs:text-lg 1xs:text-xl' style={{ fontWeight: 'bold' }}>4.</span> Dentro de 48 horas, retornamos informando o valor do seu voucher a partir da quantidade e tipo de carcaças reaproveitadas.
              </p>
              <p class='text-[#29323A] text-xl  text-justify mt-5 xs:text-base 1xs:text-lg'>
              <span class='text-2xl xs:text-lg 1xs:text-xl' style={{ fontWeight: 'bold' }}>5.</span> Geramos um crédito de até R$ 87 (consultar tabela abaixo) por carbide para você utilizar comprando qualquer produto Harpon.
              </p>
              <p class='text-[#29323A] text-xl  text-justify mt-5 xs:text-base 1xs:text-lg'>
              A cada compra, você pode abater, no máximo, 30% do valor da nota. Caso o crédito não seja zerado, poderá ser abatido na próxima compra, sem limite de prazo.
              </p>
              <p class='text-[#29323A] text-xl  text-justify mt-12 font-bold xs:text-base 1xs:text-lg'>
              Participe e contribua para o avanço da economia circular!
              </p>
          </div>
              <div class='flex justify-center'>
          <img src='tabela-promocao.jfif' alt='Tabela de valores'></img>
              </div>
        </div>
      </div>

    </>
    
  );
}
