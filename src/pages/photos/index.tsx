import { Layout } from "@/components/Layout";
import { supabase } from "@/supabase/config";
import React from "react";
import Works from "@/supabase/works";

interface Props {
  proyectos: Works[];
}

const index = ({ proyectos }: Props) => {
  return (
    <Layout title="" color="bg-[#202023]">
      <section className="mx-8 lg:mx-16 xl:mx-24 h-full ">
        <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8">
                      
        </main>
      </section>
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  const { data: proyectos } = await supabase.from("proyectos").select("*");
  return {
    props: {
      proyectos,
    },
  };
}
