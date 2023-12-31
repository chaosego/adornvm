import React, { useState, useEffect, useCallback, useRef } from "react";
import { Inter } from "next/font/google";
import { motion, useInView } from "framer-motion";

const inter = Inter({ subsets: ["latin"], weight: "500" });
export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.footer
      ref={ref}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2 }}
      className={`${inter.className} " mx-8 lg:mx-16 xl:mx-24 py-8 bg-transparent "`}
    >
      <div className="flex md:items-center justify-between ">
        {showScroll && (
          <div
            onClick={scrollTop}
            style={{ cursor: "pointer" }}
            className="uppercase"
          >
            <h3>Back To Top</h3>
          </div>
        )}

        <div className="flex text-right md:text-left md:gap-4 md:flex-row flex-col uppercase">
          <a href="https://www.instagram.com/ador.nvm/" target="_blank">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/adornvm/" target="_blank">
            LinkedIn
          </a>
          <a href="#">Email</a>
        </div>
      </div>
    </motion.footer>
  );
}
