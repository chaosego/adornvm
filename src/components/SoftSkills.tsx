import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  title: string;
  items: string[];
}

export default function SoftSkills({ title, items }: Props) {
  const h1 = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(h1, { once: true });
  return (
    <section className="pt-20 ">
      <div className="leading-[90px] tracking-[-3px] text-5xl">
        <div>
          <h4 className="my-8 lg:text-4xl text-[#707070] ">{title}</h4>
          {items.map((item, index) => (
            <motion.h1
              ref={h1}
              key={index}
              className="text-3xl text-left tracking-[-2px] leading-[70px] "
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.01 + index * 0.1,
              }}
            >
              {item}
            </motion.h1>
          ))}
        </div>
      </div>
    </section>
  );
}
