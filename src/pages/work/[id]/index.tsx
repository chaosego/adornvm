import { GetStaticPaths, GetStaticProps } from "next";
import Hero from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import Works from "@/supabase/works";
import { motion } from "framer-motion";
import { Line } from "@/components/ui/Line";
import { supabase } from "@/supabase/config";

interface SizeConfigI {
  [key: string]: string;
}
const sizeConfig: SizeConfigI = {
  grid5izq: "col-span-full lg:col-start-1 lg:col-end-6 ",
  grid7dr: "col-span-full lg:col-start-6 lg:col-end-13",
  gridSolo7dr: "col-span-full lg:col-start-6 lg:col-end-13",
  gridSolo7izq: "col-span-full lg:col-start-1 lg:col-end-8 ",
  gridSolo8center: "col-span-full lg:col-start-3 lg:col-end-11 ",
  gridSolo4izq: "col-span-full lg:col-start-1 lg:col-end-7 ",
  gridSolo4dr: "col-span-full lg:col-start-7 lg:col-end-13 ",
};

interface Props {
  workId: Works;
}
export default function Page({ workId }: Props) {
  useEffect(() => {
    document.body.classList.add("contact");
    return () => document.body.classList.remove("contact");
  }, []);
  return (
    <section className="bg-[#202023] text-[#EBE4E4]">
      <Layout title={workId.id} color="bg-[#EBE4E4]">
        <motion.img
          src={workId.portada}
          alt={workId.id}
          className=" absolute bottom-0 right-0 z-[1] object-cover object-center h-full w-full "
        />
        <Hero
          mainStyles=" flex items-end justify-start h-screen"
          text={workId.id}
          styles={
            " pb-[150px] " +
            " font-black text-wrap text-left text-[10vw] md:text-[7vw] relative z-10 " +
            " tracking-[-3px] lg:tracking-[-6px] " +
            " leading-[11vw] md:leading-[6vw] "
          }
        />
        <main className="mx-8 lg:mx-24  ">
          <article className="h-full">
            <span className="h-[1px] my-4 block bg-[#EBE4E4] "></span>
            <div className="flex justify-between uppercase ">
              <div className="flex flex-col">
                <h3>cliente</h3>
                <h3 className="text-xs">{workId.cliente}</h3>
              </div>
              <div className="flex flex-col">
                <h3>rol</h3>
                <h3 className="text-xs flex flex-col">
                  {workId.rol.map((item) => (
                    <span key={item} className="mr-2">
                      {item}{" "}
                    </span>
                  ))}
                </h3>
              </div>
              <div className="flex flex-col">
                <h3>creditos</h3>
                <h3 className="text-xs flex flex-col text-right">
                  {workId.creditos?.map((item) => (
                    <span key={item} className="mr-2">
                      {item}{" "}
                    </span>
                  ))}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center h-full my-20">
              <div className=" hidden md:block "></div>

              <div className="col-span-2 flex justify-center items-center w-full ">
                <h1 className="text-2xl md:text-5xl text-left tracking-[-1px] ">
                  {workId.desc}
                </h1>
              </div>
            </div>
          </article>
          <section className="h-full w-full my-20">
            <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-12 gap-20">
              {workId.galeria?.map((item) => (
                <motion.img
                  key={item.src}
                  src={item.src}
                  alt="alt"
                  className={` ${
                    sizeConfig[item.size_keyword]
                  } h-full object-cover `}
                  whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                ></motion.img>
              ))}
            </div>
          </section>
        </main>
        <div className="mx-8 lg:mx-16 xl:mx-24 pt-12 flex justify-center items-center ">
          <Line bgColor="bg-[#EBE4E4]" />
        </div>
      </Layout>
    </section>
  );
}

// This is the adjusted getStaticProps function
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const decodedId = decodeURIComponent(id);

  let { data: proyecto, error } = await supabase
    .from("proyectos")
    .select("*")
    .eq("id", decodedId)
    .maybeSingle();

  if (error || !proyecto) {
    console.error(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      workId: proyecto,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: proyectos } = await supabase.from("proyectos").select("id");

  if (!proyectos) {
    return { paths: [], fallback: "blocking" };
  }

  const paths = proyectos.map(({ id }) => ({
    params: { id: encodeURIComponent(id) },
  }));

  return { paths, fallback: "blocking" };
};
