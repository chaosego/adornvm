import { Layout } from "@/components/Layout";
import { supabase } from "@/supabase/config";
import Card from "./components/Card";
type Image = {
  name: string;
};

export default function Page({ images }: { images: Image[] }) {
  return (
    <Layout title="Fotografias" color="bg-[#202023]">
      <section className="mx-8 lg:mx-16 xl:mx-24 h-full ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <Card key={image.name} image={image.name} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data, error } = await supabase.storage
    .from("Fotografias")
    .list("DSC");

  if (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
  return {
    props: {
      images: data,
    },
  };
}
