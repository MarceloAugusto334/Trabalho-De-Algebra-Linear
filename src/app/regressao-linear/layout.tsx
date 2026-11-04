import type { Metadata } from "next";
import PointsProvider from "@/context/PointsContext";
import RegressaoProvider from "./context/RegressaoContext";

export const metadata: Metadata = {
  title: "Regressão Linear",
  description: "Regressão linear por mínimos quadrados com visualização da reta.",
};

export default function RegressaoLinearLayout({ children }: LayoutProps<"/regressao-linear">) {
  return (
    <PointsProvider>
      <RegressaoProvider>{children}</RegressaoProvider>
    </PointsProvider>
  );
}
