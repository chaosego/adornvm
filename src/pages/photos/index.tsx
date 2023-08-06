import { Layout } from "@/components/Layout";
import { supabase } from "@/supabase/config";
import Card from "./components/Card";
import { useEffect, useState } from "react";
type Image = {
  name: string;
};

export default function Photos() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const { data, error } = await supabase.storage
        .from("my-bucket")
        .list("my-folder");

      if (error) {
        console.error("Error fetching images:", error);
      } else if (data) {
        setImages(data);
      }
    };

    getImages();
  }, []);
  return (
    <Layout title="Fotografias" color="bg-[#202023]">
      <section className="mx-8 lg:mx-16 xl:mx-24 h-full ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <Card key={image.name} image={image} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
