import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";

interface Props {
  loading: boolean;
  currency: string;
  total: number;
  items: AnalyticsItem[];
}

function CartButton({ loading, currency, total, items }: Props) {
  const { displayCart } = useUI();
  const totalItems = items.length;

  const onClick = () => {
    sendEvent({
      name: "view_cart",
      params: { currency, value: total, items },
    });
    displayCart.value = true;
  };

  return (
    <div class="indicator group hidden">
      <span
        class={`indicator-item badge badge-secondary badge-sm flex items-center bg-white text-[#29323A] mt-[-85px] mr-[175px] w-[14px] h-[14px] group-hover:bg-[#E9F408] md:mr-[150px] md:mt-[-100px] lg:mr-[40px] ${
          totalItems === 0 ? "block" : ""
        }`}
      >
        {totalItems > 9 ? "9+" : totalItems}
      </span>

      <Button
        class="btn-circle btn-sm btn-ghost mt-[-100px]"
        aria-label="open cart"
        data-deco={displayCart.value && "open-cart"}
        loading={loading}
        onClick={onClick}
      >
        <div class='flex items-center mr-[480px] mt-[5px] group md:mr-[400px] lg:ml-[280px] '>
          <svg class='mr-[6px] mb-[5px]' xmlns="http://www.w3.org/2000/svg" width="21.987" height="20.829" viewBox="0 0 21.987 20.829">
              <g id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" transform="translate(-0.5 -0.5)">
            <path class='group-hover:fill-[#E9F408]' id="Caminho_12" data-name="Caminho 12" d="M12.909,29.25a1.659,1.659,0,1,1-1.659,1.659A1.66,1.66,0,0,1,12.909,29.25Zm0,1.817a.159.159,0,1,0-.159-.159A.159.159,0,0,0,12.909,31.067Z" transform="translate(-4.14 -11.238)" fill="#fff"/>
            <path class='group-hover:fill-[#E9F408]' id="Caminho_13" data-name="Caminho 13" d="M29.409,29.25a1.659,1.659,0,1,1-1.659,1.659A1.66,1.66,0,0,1,29.409,29.25Zm0,1.817a.159.159,0,1,0-.159-.159A.159.159,0,0,0,29.409,31.067Z" transform="translate(-10.647 -11.238)" fill="#fff"/>
            <path class='group-hover:fill-[#E9F408]' id="Caminho_14" data-name="Caminho 14" d="M18.252,16.128H9.395A2.814,2.814,0,0,1,6.588,13.86L5.071,6.28q-.01-.04-.016-.081l-.74-3.7H1.5a1,1,0,1,1,0-2H5.134a1,1,0,0,1,.981.8l.748,3.739H21.487A1,1,0,0,1,22.47,6.23l-1.454,7.622v.007A2.814,2.814,0,0,1,18.252,16.128Zm-8.866-2h8.866a.816.816,0,0,0,.8-.655l1.226-6.431H7.263l1.286,6.426a.817.817,0,0,0,.817.659Z" fill="#fff"/>
        </g>
    </svg>
    <p class='text-base text-white font-normal w-max mb-[5px] group-hover:text-[#E9F408]'>Meu carrinho</p>
</div>

      </Button>
    </div>
  );
}

export default CartButton;
