import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import WaterJetProductList from "deco-sites/harpon-lp/islands/WaterJetProducts.tsx"


export interface Props {
  title?: string;
  description?: string;
  benefits?: Array<{
    label: string;
    icon: AvailableIcons;
    description: string;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "",
    description = "",
    benefits = [{
      icon: "Truck",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
    }, {
      icon: "Discount",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
    }, {
      icon: "ArrowsPointingOut",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
    }],
    layout,
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    const showDivider = index < benefits.length - 1;
    const reverse = layout?.variation === "Color reverse";
    const benefitLayout = !layout?.variation || layout?.variation === "Simple"
      ? "tiled"
      : "piledup";

    return (
      <>
        {/* <WaterJetProducts /> */}
      </>
    );
  });

  return (
    <>
      <WaterJetProductList />
    </>
  );
}
