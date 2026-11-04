"use client";

import { useMemo } from "react";
import type { Data, Layout } from "plotly.js";
import { usePoints } from "@/context/PointsContext";
import { useRegressao } from "../context/RegressaoContext";
import { BASE_LAYOUT, BASE_CONFIG } from "@/config/plot";
import { Plot } from "@/components/plot/Plot";

export default function RegressaoChart() {
  const { points } = usePoints();
  const { reta, variaveis } = useRegressao();

  const data: Data[] = useMemo(() => {
    const xCoord = points.map((point) => point[0]);
    const yCoord = points.map((point) => point[1]);

    const traces: Data[] = [
      {
        x: xCoord,
        y: yCoord,
        type: "scatter",
        mode: "markers",
        name: "Pontos",
        marker: { color: "red", size: 12 },
      },
    ];

    if (reta && points.length >= 2) {
      const minX = Math.min(...xCoord);
      const maxX = Math.max(...xCoord);
      const PADDING = 1.5;
      const lineX = [minX - PADDING, maxX + PADDING];

      traces.push({
        x: lineX,
        y: lineX.map((x) => reta.a * x + reta.b),
        type: "scatter",
        mode: "lines",
        name: "Regressão",
        line: { color: "#3b82f6", width: 3 },
      });
    }

    return traces;
  }, [points, reta]);

  const layout: Partial<Layout> = useMemo(() => {
    if (points.length === 0) {
      return {
        ...BASE_LAYOUT,
        showlegend: false,
        xaxis: {
          ...BASE_LAYOUT.xaxis,
          title: { text: variaveis.independente || "x" },
          range: [-5, 5],
        },
        yaxis: {
          ...BASE_LAYOUT.yaxis,
          title: { text: variaveis.dependente || "y" },
          range: [-5, 5],
        },
      };
    }

    const xCoord = points.map((point) => point[0]);
    const yCoord = points.map((point) => point[1]);

    const maxX = Math.max(...xCoord);
    const minX = Math.min(...xCoord);
    const maxY = Math.max(...yCoord);
    const minY = Math.min(...yCoord);

    const PADDING = 1.5;

    return {
      ...BASE_LAYOUT,
      showlegend: false,
      xaxis: {
        ...BASE_LAYOUT.xaxis,
        title: { text: variaveis.independente || "x" },
        range: [minX - PADDING, maxX + PADDING],
      },
      yaxis: {
        ...BASE_LAYOUT.yaxis,
        title: { text: variaveis.dependente || "y" },
        range: [minY - PADDING, maxY + PADDING],
      },
    };
  }, [points, variaveis]);

  return (
    <section className="flex-1 p-8 w-full h-full bg-background flex items-center justify-center">
      <div className="w-full h-full max-w-6xl max-h-[800px]">
        <Plot
          data={data}
          layout={layout}
          config={BASE_CONFIG}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </section>
  );
}
