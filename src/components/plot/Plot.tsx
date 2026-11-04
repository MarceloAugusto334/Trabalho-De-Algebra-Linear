"use client";

import dynamic from "next/dynamic";

export const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-muted-foreground text-sm">
      Carregando gráfico...
    </div>
  ),
});
