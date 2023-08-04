import { AnimatePresence, motion, useInView } from "framer-motion";
import { Oswald } from "next/font/google";
import { useRef, useState } from "react";
import Link from "next/link";
import Works from "@/supabase/works";

const oswald = Oswald({ subsets: ["latin"] });
interface Props {
  work: Works;
  index: number;
  totalProjects: number;
}
export default function Proyectos({
  work,
  index,
  totalProjects,
}: Props) {
  const scrollVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const divRef = useRef(null);
  const divInView = useInView(divRef);
  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 pt-12"
        key={work.id}
        ref={divRef}
        transition={{ duration: 0.6 }}
        variants={scrollVariants}
        initial="hidden"
        animate={divInView ? "visible" : "hidden"}
      >
        <div className="items-start justify-between flex flex-row lg:flex-col md:col-span-full lg:col-span-5 lg:col-start-1 lg:col-end-6">
          <motion.h1
            className={`${oswald.className} text-[16vw] lg:text-[9vw] font-black leading-none `}
          >
            {`${(index + 1).toString().padStart(2, "0")}/${totalProjects
              .toString()
              .padStart(2, "0")}`}
          </motion.h1>

          <div className="flex justify-end items-end h-full lg:h-auto lg:rotate-180 lg:[writing-mode:_vertical-lr] ">
            <h3>{work.tag}</h3>
          </div>
        </div>

        <Link
          className="col-span-full lg:col-start-6 lg:col-end-13 "
          href={`/work/${work.id}`}
        >
          <motion.img
            src={work.portada}
            alt={work.tag}
            className="object-cover h-[100vw] lg:h-[80vh] w-full lg:w-[100vw] cursor-pointer"
          />
        </Link>

        <div className="pb-8 col-span-full lg:col-start-6 lg:col-end-13 justify-center items-center">
          <motion.p
            className={`${oswald.className} pb-12 font-black text-left text-[16vw] lg:text-[9vw] uppercase tracking-[-6px] lg:leading-[9vw] leading-[14vw]`}
          >
            {work.id}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
