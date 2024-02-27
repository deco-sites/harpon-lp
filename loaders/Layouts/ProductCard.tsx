import ProductCard, { Layout } from "$store/components/product/ProductCard.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";

interface Props {
  /** @title Product Card layout props */
  layout: Layout;
}

/** @title Product Card Layout */
const loader = ({ layout }: Props): Layout => layout;

export const Preview = (props: Props) => {
  const { layout } = props;

  return (
    <div class="h-full w-full grid place-items-center">
      <h1>Funciona Caralho!!!
      </h1>
    </div>
  );
};

export default loader;
