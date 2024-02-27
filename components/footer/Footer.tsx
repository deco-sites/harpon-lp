import BackToTop from "$store/components/footer/BackToTop.tsx";
import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import Divider from "$store/components/footer/Divider.tsx";
import ExtraLinks from "$store/components/footer/ExtraLinks.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import MobileApps from "$store/components/footer/MobileApps.tsx";
import PaymentMethods from "$store/components/footer/PaymentMethods.tsx";
import RegionSelector from "$store/components/footer/RegionSelector.tsx";
import Social from "$store/components/footer/Social.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";



export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter";
  link: string;
}

export interface PaymentItem {
  label: "Diners" | "Elo" | "Mastercard" | "Pix" | "Visa";
}

export interface MobileApps {
  /** @description Link to the app */
  apple?: string;
  /** @description Link to the app */
  android?: string;
}

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Layout {
  backgroundColor?:
    | "Primary"
    | "Secondary"
    | "Accent"
    | "Base 100"
    | "Base 100 inverted";
  variation?:
    | "Variation 1"
    | "Variation 2"
    | "Variation 3"
    | "Variation 4"
    | "Variation 5";
  hide?: {
    logo?: boolean;
    newsletter?: boolean;
    sectionLinks?: boolean;
    socialLinks?: boolean;
    paymentMethods?: boolean;
    mobileApps?: boolean;
    regionOptions?: boolean;
    extraLinks?: boolean;
    backToTheTop?: boolean;
  };
}

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  };
  payments?: {
    title?: string;
    items: PaymentItem[];
  };
  mobileApps?: MobileApps;
  regionOptions?: RegionOptions;
  extraLinks?: Item[];
  backToTheTop?: {
    text?: string;
  };
  layout?: Layout;
}

function Footer({
  logo,
  newsletter = {
    title: "Newsletter",
    description: "",
    form: { placeholder: "", buttonText: "", helpText: "" },
  },
  sections = [{
    "label": "Home",
    "items": [
      {
        "href": "/sobre-nos",
        "label": "Sobre Nós",
      },
      {
        "href": "/termos-de-uso",
        "label": "Termos de uso",
      },
      {
        "href": "/trabalhe-conosco",
        "label": "Trabalhe conosco",
      },
    ],
  }, {
    "label": "Atendimento",
    "items": [
      {
        "href": "/centraldeatendimento",
        "label": "Central de atendimento",
      },
      {
        "href": "/whatsapp",
        "label": "Fale conosco pelo WhatsApp",
      },
      {
        "href": "/trocaedevolucao",
        "label": "Troca e devolução",
      },
    ],
  }],
  social = {
    title: "Redes sociais",
    items: [{ label: "Instagram", link: "/" }, { label: "Tiktok", link: "/" }],
  },
  payments = {
    title: "Formas de pagamento",
    items: [{ label: "Mastercard" }, { label: "Visa" }, { label: "Pix" }],
  },
  mobileApps = { apple: "/", android: "/" },
  regionOptions = { currency: [], language: [] },
  extraLinks = [],
  backToTheTop,
  layout = {
    backgroundColor: "Primary",
    variation: "Variation 1",
    hide: {
      logo: false,
      newsletter: false,
      sectionLinks: false,
      socialLinks: false,
      paymentMethods: false,
      mobileApps: false,
      regionOptions: false,
      extraLinks: false,
      backToTheTop: false,
    },
  },
}: Props) {
  const _logo = layout?.hide?.logo ? <></> : <Logo logo={logo} />;
  const _newsletter = layout?.hide?.newsletter ? <></> : (
    <Newsletter
      content={newsletter}
      layout={{
        tiled: layout?.variation == "Variation 4" ||
          layout?.variation == "Variation 5",
      }}
    />
  );
  const _sectionLinks = layout?.hide?.sectionLinks ? <></> : (
    <FooterItems
      sections={sections}
      justify={layout?.variation == "Variation 2" ||
        layout?.variation == "Variation 3"}
    />
  );
  const _social = layout?.hide?.socialLinks
    ? <></>
    : <Social content={social} vertical={layout?.variation == "Variation 3"} />;
  const _payments = layout?.hide?.paymentMethods
    ? <></>
    : <PaymentMethods content={payments} />;
  const _apps = layout?.hide?.mobileApps
    ? <></>
    : <MobileApps content={mobileApps} />;
  const _region = layout?.hide?.regionOptions
    ? <></>
    : <RegionSelector content={regionOptions} />;
  const _links = layout?.hide?.extraLinks
    ? <></>
    : <ExtraLinks content={extraLinks} />;

  return (
    <footer
      class= 'bg-[#C8C8CA] w-full h-[420px] flex flex-col pt-10 pb-2 md:pb-10 gap-10  xs:h-max xs:mt-[-200px] 1xs:h-max 1xs:mt-[-120px] md:w-max lg:w-max ' 
       
    >
      <div class='ml-[139px] xs:ml-5 xs:mt-[-40px] 1xs:ml-5 md:ml-5 lg:ml-[30px]'>
        <img class='absolute mt-[30px] xs:mt-[10px] xs:w-[120px] 1xs:mt-0 lg:mt-0' src='logo-harpon.svg'/>
      </div>
      <div class="flex  flex-grow mt-10 -mb-10 ml-[250px] text-center md:pl-20 md:mt-0 md:text-left xs:ml-[50px] 1xs:text-justify 1xs:ml-10 md:ml-[120px] lg:ml-[50px] xl:text-justify">
                <div class="w-[20%] ml-[50px] px-4 lg:w-1/4 md:w-1/2 xs:ml-0 xs:text-justify xs:w-0 lg:text-justify">
                  <h2 class='text-[#29323A] font-bold md:text-[18px] xs:text-[16px] 1xs:text-lg'>Home</h2>
                  <h2 class='text-[#29323A] font-bold md:text-[18px] mt-4 whitespace-[nowrap] xs:text-[16px]  xs:whitespace-[nowrap] 1xs:text-lg'>Sobre Nós</h2>
                  <h2 class='text-[#29323A] font-bold md:text-[18px] mt-4 xs:text-[16px] 1xs:text-lg'>Suporte</h2>
                  <h2 class='text-[#29323A] font-bold md:text-[18px] mt-4 xs:text-[16px] 1xs:text-lg'>Contato</h2>
                </div>
                <div class="w-[20%] ml-[-60px] px-4 lg:w-1/4 md:w-1/2 xs:text-justify xs:ml-[90px] 1xs:ml-10 lg:text-justify lg:ml-[-50px]">
                  <h2 class='text-[#29323A] font-bold text-[18px] xs:text-sm'>Produtos</h2>
                  <p class='text-[#29323A] text-normal font-bold mt-4 xs:text-sm'>Recapagem</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Carbide</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Fresas com ponta</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Hastes</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Flanges</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Copos de corte</p>
                </div>
                <div class="w-[20%] ml-[-30px] px-4 lg:w-1/4 md:w-1/2 xs:hidden 1xs:hidden md:hidden lg:text-justify lg:ml-[-10px]">
                  <p class='text-[#29323A] mt-[65px]'>Extrusoras</p>
                  <p class='text-[#29323A]'>Sovelas</p>
                  <p class='text-[#29323A]'>Escova Harpon</p>
                  <p class='text-[#29323A]'>Roletes</p>
                  <p class='text-[#29323A]'>Almofadas</p>
                </div>
                <div class="w-[20%] ml-[-40px] px-4 lg:w-1/4 md:w-1/2 xs:hidden 1xs:hidden md:hidden lg:text-justify lg:ml-[-40px] ">
                  <p class='text-[#29323A] mt-[65px]'>Ferramentas</p>
                  <p class='text-[#29323A]'>Serras</p>
                  <p class='text-[#29323A]'>Reparos e manchão</p>
                  <p class='text-[#29323A]'>Engates e pinos</p>
                </div>
                <div class="w-[20%] px-4 lg:w-1/4 md:w-1/2 lg:text-justify">
                  <p class='text-[#29323A] text-normal font-bold mt-10 xs:text-sm xs:absolute xs:ml-[-60px] xs:mt-[80px] 1xs:ml-[-77px] 1xs:mt-[90px] ' >Corte</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Abrasivos</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Orifício</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden'>Tubo de mistura</p>
                  <p class='text-[#29323A] xs:hidden 1xs:hidden whitespace-nowrap'>Acessórios e ferramentas</p>
                </div>
                <div class="w-[20%] px-4 lg:w-1/4 md:w-1/2 xs:hidden 1xs:hidden md:hidden lg:text-justify">
                  <p class='text-[#29323A] mt-[65px]'>Peças de reposição</p>
                  <p class='text-[#29323A]'>Extrusoras</p>
                  <p class='text-[#29323A]'>Hidrojato</p>
                  <p class='text-[#29323A]'>Laser</p>
                </div>
        </div>
        <div class='flex items-center ml-[139px] mt-[50px] xs:w-[250px] xs:block xs:ml-[70px] 1xs:block md:ml-[90px]'>
            
                <img class='xs:w-[14px] xs:absolute 1xs:mt-5 1xs:mb-[-20px]' src='icon-feather-phone.svg'></img>			
                      <span class='text-[#29323A] text-center  ml-[10px] xs:text-sm xs:px-[5px] 1xs:pl-[15px] 1xs:text-[17px]'>+55(11)1234-5678</span>
                      <img class='md:ml-[30px] xs:w-[14px] xs:mt-[30px] xs:mb-[-20px] 1xs:mb-[-22px] 1xs:mt-5 lg:pl-[15px] xl:pl-5' src='icon-feather-map-pin.svg'></img>
                      <span class='text-[#29323A] text-center  ml-[10px] xs:text-sm xs:px-2 1xs:text-[17px] 1xs:pl-[15px]'> Rua Nome do Endereço, 00 - Jardim Bairro - 01234-567</span>
        </div>
        
      
            
            <div class="bg-[#29323A] flex items-center justify-center text-white text-sm  xs:mb-[-8px] xs:text-xs 1xs:mb-[-8px]"
              style='height: 40px;'
            >
              <p class='xs:px-5 xs:mx-[10px] 1xs:text-base 1xs:ml-[25px]'>Política de Privacidade | Política de Cookies</p>
              <div class='bg-[#29323A] h-10'></div>
            </div>
                                                                                                                                                                                                                                                                                                              
        
        
        
    </footer>
  );
}

export default Footer;
