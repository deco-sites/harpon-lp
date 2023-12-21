export type Item = {
  label: string;
  href: string;
};

export default function ExtraLinks({ content }: { content?: Item[] }) {
  return (
    <>
      {content && content?.length > 0 && (
        <div class="bg-[#29323A] w-full flex items-center justify-center mb-[-50px]md:flex-row lg:gap-2" style='height: 40px; text-decoration: none;'>
          {content.map((item) => (
            <a class=" text-sm" href={item.href}>{item.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
