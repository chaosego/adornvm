import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageProps {
  src: string;
  size_keyword: string;
}

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

const GalleryImage = ({ src, size_keyword }: ImageProps) => {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true });

  return (
    <motion.img
      src={src}
      alt={src}
      whileHover={{ scale: 1.1 }}
      className={`${sizeConfig[size_keyword]} h-full object-cover`}
      ref={imgRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={imgInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default GalleryImage;
