import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Testimonial {
  text?: string;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
  user?: {
    avatar?: ImageWidget;
    name?: string;
    position?: string;
    company?: string;
  };
}

export interface Props {
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
  layout?: {
    variation?: "Grid" | "Slider";
    headerAlignment?: "center" | "left";
  };
}

const DEFAULT_PROPS: Props = {
  "title": "",
  "description": "",
  "testimonials": [{
    "text":
      "Fashion Store is my go-to online destination for all things stylish. Their vast collection of trendy clothes and accessories never disappoints. The quality is exceptional, and the prices are affordable. The website is easy to navigate, and their customer service team is friendly and responsive. I always feel like a fashionista when I shop here!",
    "image": {
      "src":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Robert Johnson",
      "position": "Founder",
      "company": "RJ Agency",
    },
  }, {
    "text":
      "I can't praise Fashion Store enough! Their commitment to staying ahead of the fashion curve is evident in their diverse and up-to-date inventory. Whether I need a casual outfit or a glamorous dress, they have it all. The shopping experience is seamless, and my orders always arrive promptly. Fashion Store is a true fashion lover's paradise!",
    "image": {
      "src":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Mary Bush",
      "position": "Director",
      "company": "MB & Co",
    },
  }, {
    "text":
      "Fashion Store has transformed my wardrobe. Their curated collection of clothing and accessories has helped me discover my personal style. The quality of their products is outstanding, and the prices are unbeatable. The website is visually appealing and easy to navigate. Fashion Store is my trusted companion for staying fashionable and feeling confident!",
    "image": {
      "src":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Sandra Bullock",
      "position": "Founder",
      "company": "Sanlock",
    },
  }],
  "layout": {
    "variation": "Grid",
    "headerAlignment": "center",
  },
};

const Testimonal = ({ image, text, user }: Testimonial) => (
  <div class="flex flex-col items-center gap-9 text-center">
    {image?.src && (
      <Image
        src={image.src}
        alt={image?.alt}
        width={100}
        height={100}
      />
    )}
    <h3 class="text-xl lg:text-2xl">
      {text}
    </h3>
    <div class="flex flex-col items-center gap-4">
      {user?.avatar && (
        <Image
          src={user.avatar}
          alt={user?.name}
          width={60}
          height={60}
          class="rounded-full"
        />
      )}
      <div class="flex flex-col">
        {user?.name &&
          (
            <p class="text-lg">
              {user?.name}
            </p>
          )}
        {(user?.position || user?.company) &&
          (
            <p class="text-lg">
              {user?.position}, {user?.company}
            </p>
          )}
      </div>
    </div>
  </div>
);

export default function Testimonials(
  props: Props,
) {
  const id = useId();
  const { title, description, testimonials, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="w-full px-4 py-8 flex flex-col gap-14 lg:gap-20 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class='flex ml-[139px] mt-[150px]'>
        <a href='/'><p class='font-bold'>Home &#62;</p></a> <a href='productlist'><p class='font-bold'>Todos os Produtos &#62;</p></a> <span class='ml-2'>Flange</span>
      </div>
      <div class='ml-[783px]'>
        <h1 class='text-4xl text-[#29323A] font-bold'>FLANGES</h1>
        <p class='text-sm text-[#29323A]'>Flange para Escova 1/2" A-15/35 - PAR</p>
      </div>
      <div class='ml-[783px] mt-[-50px]'>
        <h2 class='text-[#29323A] text-base font-bold'>Descrição:</h2>
        <p class='text-sm text-[#29323A] mb-5 w-[490px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est .</p>
        <p class='inline text-[#29323A] text-base font-bold'>Código:</p>
        <span class='text-sm ml-[10px]'>0012345-67</span>
        <p class='text-[#29323A] text-base font-bold mt-5 mb-[10px]'>Selecione o tamanho:</p>
        <select class='border border-solid bg-[#F2F2F2] w-[444px] h-10 text-sm mb-[30px]'>
                <option class='text-sm text-[#29323A]'>50mm</option>
                <option class='text-sm text-[#29323A]'>60mm </option>
                <option class='text-sm text-[#29323A]'>70mm</option>
                <option class='text-sm text-[#29323A]'>75mm</option>
                <option class='text-sm text-[#29323A]'>30mm</option>
                <option class='text-sm text-[#29323A]'>40mm</option>
            </select>
            <div class='flex gap-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="168" height="48" viewBox="0 0 168 48">
              <g id="botão_comprar" data-name="botão comprar" transform="translate(-783 -695)">
                <g id="Retângulo_19" data-name="Retângulo 19" transform="translate(783 695)" fill="none" stroke="#c8c8ca" stroke-width="1">
                  <rect width="168" height="48" stroke="none"/>
                  <rect x="0.5" y="0.5" width="167" height="47" fill="none"/>
                </g>
                <text id="comprar" transform="translate(826 725)" fill="#c8c8ca" font-size="16" font-family="AlbertSans-Bold, Albert Sans" font-weight="700"><tspan x="0" y="0">COMPRAR</tspan></text>
               </g>
              </svg>
              <div class='group'>
              <svg  id="botão_cotar" data-name="botão cotar" xmlns="http://www.w3.org/2000/svg" width="260"    height="48" viewBox="0 0 260 48">
               <rect class='group-hover:fill-[#E9F408]' id="Retângulo_19" data-name="Retângulo 19" width="260" height="48" fill="#29323a"/>
                <text class=' group-hover:fill-[#29323A]' id="cotar" transform="translate(102 30)" fill="#fff" font-size="16" font-family="AlbertSans-Bold, Albert Sans" font-weight="700"><tspan x="0" y="0">COTAR</tspan></text>
              </svg>
              </div>
            </div>
      </div>
      <div class='border border-solid text-[#E6E6E6] w-[536px] h-[427px] absolute mt-[250px] ml-[231px]'>
        <img class='mt-[90px] ml-[90px]' src='flangeG.png'></img>
      </div>
      <div class='inline-grid gap-5 absolute mt-[250px] ml-[139px]'>
        <img class='w-[76px]' src='miniflange.png'></img>
        <img class='w-[76px]' src='miniflange2.png'></img>
        <img class='w-[76px]' src='miniflange3.png'></img>
        <img class='w-[76px]' src='miniflange4.png'></img>
      </div>
      <div class='mx-auto p-4 mt-[139px] mb-[100px] ml-[139px]'>
           <h1 class='text-[36px] font-normal'>VOCÊ TAMBÉM{' '} 
           <span style={{ fontWeight: 'bold' }}>PODE GOSTAR</span> 
           </h1> 
            <div class='flex items-center group'>
                <p
                    style={{border: "solid 1px black", padding: "6px"}}
                    class="w-[130px] mt-[-40px] ml-[930px] h-[36px] text-center font-semibold group-hover:bg-[#E9F408]" 
                >
                    VER TODOS
                </p>
                <svg class='ml-[-16px] mt-[-40px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                    <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                        <path id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#29323a"/>
                        <path id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#29323a"/>
                    </g>
                </svg>
            </div>
           <div class="grid grid-cols-4 gap-2 mt-4">
                <div class="group section border border-solid border-[#E6E6E6] relative transition duration-300 ease-in-out"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div class='group-hover:hidden'>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px] group">
                        <img  src='flanges.png '></img>
                    </div>
                    
                    <p class='ml-5 mt-5 font-bold text-[20px] font-[Albert Sans] group'>FLANGES</p>
                    
                    <div class=' group'>
                        <span class='hidden border border-solid w-[212px] h-[32px] bg-[#29323A] text-white text-center ml-[25px] p-1 group-hover:block hover:bg-[#E9F408] hover:text-[#29323A]'>MAIS DETALHES</span>
                        <svg class=' ml-[200px] mt-[-25px] group-hover:rotate-45' xmlns="http://www.w3.org/2000/svg" width="15.359" height="15.359" viewBox="0 0 15.359 15.359">
                          <g class='group'  id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-13.605 9.815) rotate(-45)">
                            <path class='group-hover:fill-[#29323A]' id="Caminho_762" data-name="Caminho 762" d="M19.492,18.9H7.589a.9.9,0,1,1,0-1.8h11.9a.9.9,0,1,1,0,1.8Z" transform="translate(0 -4.46)" fill="#fff"/>
                            <path class='group-hover:fill-[#29323A]' id="Caminho_763" data-name="Caminho 763" d="M18,20.481a.858.858,0,0,1-.636-.29,1.059,1.059,0,0,1,0-1.4l4.782-5.253L17.364,8.288a1.059,1.059,0,0,1,0-1.4.844.844,0,0,1,1.273,0l5.419,5.952a1.059,1.059,0,0,1,0,1.4l-5.419,5.952A.858.858,0,0,1,18,20.481Z" transform="translate(-3.838)" fill="#fff"/>
                          </g>
                        </svg>
                    </div>
                    
                </div>
                <div class="section border border-solid border-[#E6E6E6]  relative"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px]">
                        <img  src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans]'>FLANGES</p>
                    
                </div>
                <div class="section border border-solid border-[#E6E6E6]  relative"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px]">
                        <img  src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans]'>FLANGES</p>
                </div>
                <div class="section border border-solid border-[#E6E6E6]  relative"
                    style={{
                        width: "260px",
                        height: "299px",
                    }}
                >
                    <div>
                        <img class='mt-5 ml-5' src='tag.svg'></img>
                    </div>
                    <div class="flex items-center justify-center mb-2 mt-[40px]">
                        <img  src='flanges.png '></img>
                    </div>
                    <p class='absolute bottom-5 left-5 font-bold text-[20px] font-[Albert Sans]'>FLANGES</p>
                </div>
           </div>
        </div>
    </div>
  );
}
