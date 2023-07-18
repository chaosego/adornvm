import Head from "next/head";
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "500" });
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  color?: string;
}

export const Layout = ({ children, title, color }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "ADORNVM"}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="Fotografo, ADORNVM, Diseñador, Artista, Fotografia, Diseño, Art, Photographer, Designer, Artist, Photography, Design, Art"
        />
        <meta property="og:title" content={`ADORNVM ${title} `} />
        <meta
          property="og:description"
          content={`DESIGNER & ART DIRECTOR ${title} `}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="ADORNVM" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:type"
          content="image/Portfolio_ador_image_01.jpg"
        />
        <meta property="og:image:alt" content="ADORNVM" />
        <meta name="theme-color" content="#202023" />
        <meta property="og:url" content="https://adornvm.com/" />
        <meta property="og:image" content="/Portfolio_ador_image_01.jpg" />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Navigation color={color} />
      <div className={`${inter.className} `}>{children}</div>
      <Footer />
    </>
  );
};
