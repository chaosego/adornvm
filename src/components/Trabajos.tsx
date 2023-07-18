"use client";
import Works from "@/supabase/works";
import Link from "next/link";

interface Props {
  works: Works[];
}

export default function Trabajos({ works }: Props) {
  if (!works) return null;
  return (
    <section className="mx-8 lg:mx-16 xl:mx-24 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 lg:my-40 ">
      <div className="flex col-span-full md:col-start-1 md:col-end-4 items-start pt-7">
        <div className="lg:rotate-180 mb-11 uppercase lg:[writing-mode:_vertical-lr]">
          <h3>Trabajos</h3>
        </div>
      </div>

      <div className="col-span-full lg:col-start-4 lg:col-end-13 flex items-center leading-[80px] md:leading-[150px] text-[7vw] md:text-[5vw] pt-20 tracking-[-1px]">
        <div>
          {works.map((works, index) => (
            <div
              key={index}
              className=" lg:hover:cursor-pointer lg:hover:opacity-100 w-auto lg:opacity-50"
            >
              <Link href={`work/${works.id}`} className=" font-normal text-left">
                {works.id}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
