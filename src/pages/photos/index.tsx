import { Layout } from "@/components/Layout";
import { supabase } from "@/supabase/config";
type Image = {
  name: string;
};

export default function Page({ images }: { images: Image[] }) {
  return (
    <Layout title="Fotografias" color="bg-[#202023]">
      <section className="mx-8 lg:mx-16 xl:mx-24 h-full ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image) => (
            <div key={image.name}>
              <img
                src={`https://kiubjdmfcguvgiurzqpq.supabase.co/storage/v1/object/public/Fotografias/DSC/${image.name}`}
                alt={image.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await supabase.storage.from("Fotografias").list("DSC");
  return {
    props: {
      images: data,
    },
  };
}
