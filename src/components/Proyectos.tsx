import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import { useState } from "react";
import { Line } from "./ui/Line";
import Link from "next/link";
import Works from "@/supabase/works";

const oswald = Oswald({ subsets: ["latin"] });
interface Props {
  works: Works[];
}
export default function Proyectos({ works }: Props) {
  const [displayedWorks, setDisplayedWorks] = useState(works.slice(0, 3));
  const favoriteWorks = displayedWorks.filter((work) => work.favorito);
  const totalProjects = works.filter((work) => work.favorito).length;
  const handleLoadMore = () => {
    const moreWorks = works.slice(
      displayedWorks.length,
      displayedWorks.length + 2
    );
    setDisplayedWorks((prevWorks) => [...prevWorks, ...moreWorks]);
  };
  return (
    <section className="mx-8 lg:mx-16 xl:mx-24 h-full static">
      <main className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-12 gap-20">
        <div className="col-span-full lg:col-start-6 lg:col-end-13 justify-center items-center">
          <div className="flex flex-col items-start justify-between pt-20">
            <Line divStyle=" lg:order-1 order-2 h-[2px] lg:mb-12 bg-black w-full " />
            <h3 className="lg:order-2 order-1 pb-12 md:pb-8">Proyectos</h3>
          </div>
        </div>
      </main>
      {favoriteWorks.map((work, index) => (
        <motion.main
          className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-12 gap-8 pt-12"
          key={work.id}
        >
          <div className="flex flex-row lg:flex-col items-start justify-between">
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
            className="ol-span-full lg:col-start-6 lg:col-end-13 "
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
              className={`${oswald.className} pb-8 font-black text-left text-[16vw] lg:text-[9vw] uppercase tracking-[-6px] lg:leading-[9vw] leading-[14vw]`}
            >
              {work.id}
            </motion.p>
            {index !== favoriteWorks.length - 1 && (
              <span className="col-span-full h-[2px] bg-black w-full"></span>
            )}
            {index === favoriteWorks.length - 1 &&
              displayedWorks.length < works.length && (
                <motion.button
                  onClick={handleLoadMore}
                  className="col-span-full lg:col-span-5 h-[2vw] "
                >
                  <h3> + Cargar más proyectos</h3>
                </motion.button>
              )}
          </div>
        </motion.main>
      ))}
    </section>
  );
}
