import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Card = ({
  image,
  index,
}: {
  image: string;
  index: number;
  key: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const divInView = useInView(divRef, { once: true });
  return (
    <motion.div
      key={image}
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
        src={`https://kiubjdmfcguvgiurzqpq.supabase.co/storage/v1/object/public/Fotografias/DSC/${image}`}
        alt={image}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

export default Card;
