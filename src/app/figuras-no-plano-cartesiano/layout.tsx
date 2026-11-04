import type { Metadata } from "next";
import PointsProvider from "@/context/PointsContext";
import TransformacoesProvider from "./context/TransformacoesContext";

export const metadata: Metadata = {
  title: "Figuras no Plano Cartesiano",
  description: "Cadastro de figuras e transformações geométricas no plano.",
};

export default function FigurasNoPlanoCartesianoLayout({ children }: LayoutProps<"/figuras-no-plano-cartesiano">) {
  return (
    <PointsProvider>
      <TransformacoesProvider>{children}</TransformacoesProvider>
    </PointsProvider>
  );
}
