import type { Metadata } from "next";
import { PointsProvider } from "@/features/pontos";

export const metadata: Metadata = {
  title: "Pontos",
  description: "Cadastro de pontos e transformações geométricas no plano.",
};

export default function PontosLayout({ children }: LayoutProps<"/pontos">) {
  return <PointsProvider>{children}</PointsProvider>;
}
