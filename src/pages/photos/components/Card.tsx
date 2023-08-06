import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
type Image = {
  name: string;
};

const Card = ({
  image,
  index,
}: {
  image: Image;
  index: number;
  key: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const divInView = useInView(divRef, { once: true });
  return (
    <motion.div
      key={image.name}
      ref={divRef}
      initial={{ opacity: 0 }}
      animate={
        divInView
          ? {
              opacity: 1,
              transition: { delay: index * 0.1, duration: 0.5 },
            }
          : { opacity: 0 }
      }
      transition={{ duration: 2 }}
    >
      <img
        src={`https://kiubjdmfcguvgiurzqpq.supabase.co/storage/v1/object/public/Fotografias/DSC/${image.name}`}
        alt={image.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

export default Card;
