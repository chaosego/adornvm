"use client";
import Hero from "@/components/Hero";
import { Layout } from "@/components/Layout";
import Skills from "@/components/SoftSkills";
import Trabajos from "@/components/Trabajos";
import { Line } from "@/components/ui/Line";
import { programs, skills } from "@/data/dto";
import { supabase } from "@/supabase/config";
import Works from "@/supabase/works";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const h1 = useRef<HTMLDivElement>(null);
  const viewH1 = useInView(h1, { once: true });

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
          <motion.div
            className=" col-span-full lg:col-start-4 lg:col-end-13 text-2xl flex justify-start items-start lg:text-3xl mx-auto mb-20 tracking-[-1px] h-full "
            ref={h1}
          >
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
            <a href="https://www.instagram.com/ador.nvm/">LinkedIn</a>
            <a href="https://www.instagram.com/ador.nvm/">Email</a>
            <a href="https://www.instagram.com/ador.nvm/">Instagram</a>
          </div>
        </section>

        <div className="mx-8 lg:mx-16 xl:mx-24  flex justify-center items-center ">
          <span className="h-[2px] block bg-white w-full" />
        </div>
        <Trabajos works={proyectos} />
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
