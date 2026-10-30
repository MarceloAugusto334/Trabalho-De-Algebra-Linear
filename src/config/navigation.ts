export interface NavigationItem {
  href: string;
  title: string;
  description: string;
}

export const NAVIGATION_ITEMS = [
  {
    href: "/figuras-no-plano-cartesiano",
    title: "Trabalho 1",
    description: "Monte figuras atraves pontos e aplique rotação, escala e reflexão",
  },
  {
    href: "#",
    title: "Trabalho 2 ",
    description: "Insira triangulos e suas coordenadas e decubra a soma de suas areas",
  },
  {
    href: "/#",
    title: "Trabalho 3",
    description: "Implementações de algritmos de Regrssao linear com visualização da função e do gráfico",
  },
] as const satisfies readonly NavigationItem[];
