"use client";
import Hero from "@/components/Hero";
import { Layout } from "@/components/Layout";
import Proyectos from "@/components/Proyectos";
import { Line } from "@/components/ui/Line";
import { supabase } from "@/supabase/config";
import Works from "@/supabase/works";
import { useEffect } from "react";

interface Props {
  proyectos: Works[];
}

export default function Home({ proyectos }: Props) {
  useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home");
  }, []);

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
        <Proyectos works={proyectos} />
        <div className="mx-8 lg:mx-16 xl:mx-24 pt-12 flex justify-center items-center ">
          <Line />
        </div>
      </Layout>
    </main>
  );
}

export async function getServerSideProps() {
  const { data: proyectos } = await supabase.from("proyectos").select("*");
  return {
    props: {
      proyectos,
    },
  };
}
