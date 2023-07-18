interface Works {
  id: string;
  desc: string;
  cliente: string;
  rol: string[];
  creditos: string[];
  favorito: boolean;
  tag: string;
  portada: string;
  galeria: gallery[];
}

interface gallery {
  src: string;
  size_keyword: string;
}

export default Works;
