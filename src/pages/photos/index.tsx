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
      <section className="mx-8 lg:mx-16 xl:mx-24 h-screen ">
        {/* <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8"> */}
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
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
