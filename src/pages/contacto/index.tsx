"use client";
import Hero from "@/components/Hero";
import { Layout } from "@/components/Layout";
import Skills from "@/components/SoftSkills";
import { Line } from "@/components/ui/Line";
import { programs, skills } from "@/data/dto";
import { supabase } from "@/supabase/config";
import Works from "@/supabase/works";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  proyectos: Works[];
}

export default function Home({ proyectos }: Props) {
  useEffect(() => {
    document.body.classList.add("contact");
    return () => document.body.classList.remove("contact");
  }, []);

  const scrollVariants = {
    hidden: { transform: "translate(0%, 100%)" },
    visible: {
      transform: "translate(0px, 0px)",
      staggerChildren: 1,
      delay: 2,
    },
  };
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <section className=" bg-[#202023] text-[#EBE4E4]">
      <Layout title="ADRIAN DARIO ORTIZ RAMOS | Contacto" color="bg-[#EBE4E4]">
        <Hero
          mainStyles=" h-screen "
          Profile="/Portfolio_ador_image_01.jpg"
          styles={
            " pb-[100px] " +
            " font-black text-left text-[16vw] " +
            " tracking-[-3px]  md:tracking-[-10px] lg:tracking-[-12px] xl:tracking-[-13px] 2xl:tracking-[-20px]" +
            " leading-[14vw] flex flex-col justify-center bottom-0 h-full z-10 relative "
          }
          text="ADRIAN <br />
          DARIO <br />
          ORTIZ RAMOS"
          smText="ADRIAN <br /> DARIO <br /> ORTIZ <br /> RAMOS"
          textStyles=" hidden md:inline-block"
        />

        <section className="mx-8 lg:mx-16 xl:mx-24 h-full  grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12  gap-12">
          <motion.div className=" col-span-full lg:col-start-4 lg:col-end-13 text-2xl flex justify-start items-start lg:text-3xl mx-auto mb-20 tracking-[-1px] h-full ">
            <div className="overflow-hidden">
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                a amet ullam iure assumenda! Est, aut modi laudantium harum
                accusantium illum illo sunt id. Cumque accusamus vero assumenda
                hic modi! Consequatur perspiciatis facere, vero odio, placeat
                maxime voluptatem suscipit quo, corrupti quia voluptates qui
                tenetur fugit repudiandae eligendi recusandae ipsa reprehenderit
                dicta at animi quasi doloremque! Quas iste ducimus molestias.
                Aliquam expedita porro architecto veniam inventore, libero
              </h1>
            </div>
          </motion.div>

          <div className="col-span-full lg:col-start-1 lg:col-end-4 hidden lg:flex flex-col items-start ">
            <div className="rotate-180 [writing-mode:_vertical-lr] uppercase">
              <h3>Contacto</h3>
            </div>
          </div>

          <div className="col-span-full lg:col-start-4 lg:col-end-13 h-auto flex flex-col pb-14 text-3xl text-[#707070] gap-4">
            <motion.a
              href="https://www.linkedin.com/in/adornvm/"
              className="hover:cursor-pointer hover:opacity-100 hover:text-[white] opacity-50 w-max"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              target="_blank"
            >
              Instagram
              <motion.span
                className={`mt-1 h-[2px] block bg-white `}
                style={{ width: "0%" }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ador.nvm/"
              className="hover:cursor-pointer hover:opacity-100 hover:text-[white]  w-max opacity-50"
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
              target="_blank"
            >
              Linkedin
              <motion.span
                className={`mt-1 h-[2px] block bg-white`}
                style={{ width: "0%" }}
                animate={{ width: isHovered2 ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            <motion.a
              href="mailto:adriandarioortizramos@gmail.com"
              className="hover:cursor-pointer hover:opacity-100 hover:text-[white]  w-max opacity-50"
              onHoverStart={() => setIsHovered3(true)}
              onHoverEnd={() => setIsHovered3(false)}
              target="_blank"
            >
              Email
              <motion.span
                className={`mt-1 h-[2px] block bg-white`}
                style={{ width: "0%" }}
                animate={{ width: isHovered3 ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </div>
        </section>

        <div className="mx-8 lg:mx-16 xl:mx-24  flex justify-center items-center ">
          <span className="h-[2px] block bg-white w-full" />
        </div>
        <section className="mx-8 lg:mx-16 xl:mx-24 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 lg:my-40 ">
          <div className="flex col-span-full md:col-start-1 md:col-end-4 items-start pt-7">
            <div className="lg:rotate-180 mb-11 uppercase lg:[writing-mode:_vertical-lr]">
              <h3>Trabajos</h3>
            </div>
          </div>
          <div className="col-span-full lg:col-start-4 lg:col-end-13 flex items-center leading-[80px] md:leading-[150px] text-[7vw] md:text-[5vw] pt-20 tracking-[-1px]">
            <div>
              <AnimatePresence>
                <AnimatePresence>
                  {proyectos.map((proyectos, index) => (
                    <div
                      key={index}
                      className=" hover:cursor-pointer hover:opacity-100 w-auto opacity-50"
                      onMouseMove={(event) => {
                        setMousePosition({
                          x: event.clientX,
                          y: event.clientY,
                        });
                      }}
                      onMouseEnter={() => setActiveProject(index)}
                      onMouseLeave={() => setActiveProject(null)}
                    >
                      <Link
                        href={`work/${proyectos.id}`}
                        className=" font-normal text-left"
                      >
                        {proyectos.id}
                      </Link>
                    </div>
                  ))}
                  {activeProject !== null && (
                    <motion.img
                      className="absolute w-2/4 h-2/4 hidden  rounded-lg lg:block object-cover"
                      style={{
                        position: "fixed",
                        left: mousePosition.x,
                        top: mousePosition.y,
                      }}
                      src={proyectos[activeProject].portada}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.3 },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.3 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </AnimatePresence>
            </div>
          </div>
        </section>
        <div className="mx-8 lg:mx-16 xl:mx-24 pt-12 flex justify-center items-center ">
          <Line bgColor=" bg-[#EBE4E4] " />
        </div>
        <section className="mx-8 lg:mx-16 xl:mx-24 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 ">
          <div className="flex col-span-full lg:col-start-1 lg:col-end-4 items-start ">
            <div className="lg:rotate-180 lg:[writing-mode:_vertical-lr] pt-7 uppercase lg:mt-28">
              <h3>HABILIDADES Y PROGRAMAS</h3>
            </div>
          </div>
          <div className="flex flex-col col-span-full lg:col-start-4 lg:col-end-13 items-start gap-4">
            <Skills title="Skills" items={skills} />
            <Skills title="Programas" items={programs} />
          </div>
        </section>

        <div className="mx-8 lg:mx-16 xl:mx-24 pt-12 flex justify-center items-center ">
          <Line bgColor=" bg-[#EBE4E4] " />
        </div>
      </Layout>
    </section>
  );
}

export async function getStaticProps() {
  let { data: proyectos, error } = await supabase.from("proyectos").select("*");

  if (error) console.log("Error fetching proyectos: ", error);

  return {
    props: {
      proyectos,
    },
  };
}
