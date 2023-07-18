import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import Image from "next/image";
const oswald = Oswald({ subsets: ["latin"] });

interface Props {
  text: string;
  smText?: string;
  styles: string;
  divStyles?: string;
  mainStyles?: string;
  Profile?: string;
  textStyles?: string;
}

export default function Hero({
  text,
  smText,
  textStyles,
  styles,
  divStyles,
  mainStyles,
  Profile,
}: Props) {
  return (
    <section className={`${mainStyles} `}>
      <main className={`mx-8 lg:mx-16 xl:mx-24 ${divStyles} `}>
        <h1 className={`${oswald.className} ${styles}`}>
          {smText &&
            smText.split("<br />").map((line, index) => (
              <span key={index} className="inline-block md:hidden">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 150,
                    mass: 1,
                    delay: 0.1 + index * 0.2,
                  }}
                >
                  {line}
                </motion.span>
                <br />
              </span>
            ))}
          {text.split("<br />").map((line, index) => (
            <span key={index} className={`${textStyles}`}>
              {line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 150,
                    mass: 1,
                    delay: 0.2 + wordIndex * 0.1,
                  }}
                >
                  {word + " "}
                </motion.span>
              ))}
              <br />
            </span>
          ))}
        </h1>
      </main>
      {Profile && (
        <Image
          priority
          quality={100}
          width={805}
          height={1080}
          src={Profile}
          alt={text}
          className="absolute bottom-0 z-[1] h-full w-auto opacity-[50%] right-0 object-cover"
        />
      )}
    </section>
  );
}
