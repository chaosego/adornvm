interface Props {
  title: string;
  items: string[];
}
export default function SoftSkills({ title, items }: Props) {
  return (
    <section className="pt-20 ">
      <div className="leading-[90px] tracking-[-3px] text-5xl">
        <div>
          <h4 className="my-8 lg:text-4xl text-[#707070] ">{title}</h4>
          {items.map((item, index) => (
            <h1
              key={index}
              className="text-3xl text-left tracking-[-2px] leading-[70px] "
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
}
