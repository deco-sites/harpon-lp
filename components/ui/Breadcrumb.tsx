import type { BreadcrumbList } from "apps/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [{ name: "Home", item: "/" }, ...itemListElement];

  return (
    <div class="breadcrumbs">
      <ul>
        {items
          .filter(({ name, item }) => name && item)
          .map(({ name, item }) => (
            <li class='mt-[165px] ml-[55px] text-[#29323A] font-bold xs:mt-[50px] xs:ml-0 xs:text-sm 1xs:mt-[50px] 1xs:ml-0 1xs:text-base md:mt-[50px] md:text-lg md:ml-0'>
              <a href={item}>{name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
