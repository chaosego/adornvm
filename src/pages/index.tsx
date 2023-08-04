"use client";
import Hero from "@/components/Hero";
import { Layout } from "@/components/Layout";
import Proyectos from "@/components/Proyectos";
import { Line } from "@/components/ui/Line";
import { supabase } from "@/supabase/config";
import Works from "@/supabase/works";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  proyectos: Works[];
}

export default function Home({ proyectos }: Props) {
  useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home");
  }, []);
  const [displayedWorks, setDisplayedWorks] = useState(proyectos.slice(0, 4));
  const favoriteWorks = displayedWorks.filter((work) => work.favorito);
  const totalProjects = proyectos.filter((work) => work.favorito).length;
  const handleLoadMore = () => {
    setDisplayedWorks(proyectos.slice(0, displayedWorks.length + 4));
  };
  const [isHovered, setIsHovered] = useState(false);
  const cargarMas = useRef<HTMLButtonElement>(null);
  const inViewCarga = useInView(cargarMas);

  return (
    <main className=" bg-[#EBE4E4] text-[#202023]">
      <Layout title="ADRIAN DARIO ORTIZ RAMOS">
        <Hero
          mainStyles=" h-full "
          text="DIGITAL DESIGNER & ART DIRECTOR"
          styles={
            " pb-[100px] " +
            " font-black text-wrap text-left text-[16vw] " +
            " tracking-[-3px]  md:tracking-[-10px] lg:tracking-[-12px] xl:tracking-[-13px] 2xl:tracking-[-20px]" +
            " leading-[14vw]"
          }
        />
        <section className="mx-8 lg:mx-16 xl:mx-24 h-full static">
          <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8">
            <div className="col-span-full lg:col-start-6 lg:col-end-13 justify-center items-center">
              <div className="flex flex-col items-start justify-between pt-20">
                <Line divStyle=" lg:order-1 order-2 h-[2px] lg:mb-12 bg-black w-full " />
                <h3 className="lg:order-2 order-1 pb-12 md:pb-8">Proyectos</h3>
              </div>
            </div>
          </main>
          {favoriteWorks.map((work, index) => (
            <Proyectos
              key={work.id}
              work={work}
              index={index}
              totalProjects={totalProjects}
            />
          ))}
          <div className="flex justify-center items-center pt-12">
            {displayedWorks.length < proyectos.length ? (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.button
                  onClick={handleLoadMore}
                  className="col-span-full lg:col-span-5 h-[2vw] "
                  ref={cargarMas}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={
                    inViewCarga ? { opacity: 1, scale: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.6 }}
                >
                  <motion.h3 className="flex justify-center items-center text-[#202023] font-bold text-[1.2rem] hover:cursor-pointer w-max  transition-all duration-300 ease-in-out">
                    Cargar más
                    <motion.svg
                      animate={{ rotate: isHovered ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.h3>
                  <motion.span
                    className={`h-[2px] hidden md:block bg-black absolute bottom-0 left-0 right-0 mt-4`}
                    style={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </div>
            ) : (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.button
                  onClick={() => setDisplayedWorks(proyectos.slice(0, 4))}
                  className="col-span-full lg:col-span-5 h-[2vw] "
                  ref={cargarMas}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={
                    inViewCarga ? { opacity: 1, scale: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.6 }}
                >
                  <motion.h3 className="flex justify-center items-center text-[#202023] font-bold text-[1.2rem] hover:cursor-pointer w-max  transition-all duration-300 ease-in-out ">
                    Ver menos
                    <motion.svg
                      animate={{ rotate: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.h3>
                  <motion.span
                    className={`h-[2px]  bg-black absolute bottom-0 left-0 right-0 mt-4 hidden md:block`}
                    style={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </div>
            )}
          </div>
        </section>

        <div className="mx-8 lg:mx-16 xl:mx-24 pt-12 flex justify-center items-center ">
          <Line />
        </div>
      </Layout>
    </main>
  );
}

export async function getStaticProps() {
  const { data: proyectos } = await supabase.from("proyectos").select("*");
  return {
    props: {
      proyectos,
    },
  };
}
