"use client";

import { useMemo } from "react";
import type { Data, Layout } from "plotly.js";
import { usePoints } from "@/context/PointsContext";
import { organizePoints } from "@/utils/points";
import { BASE_LAYOUT, BASE_CONFIG } from "@/config/plot";
import { Plot } from "@/components/plot/Plot";

export default function PointsChart() {
  const { points } = usePoints();

  const data: Data[] = useMemo(() => {
    const orderedPoints = organizePoints(points);

    return [
      {
        x: orderedPoints.map((item) => item[0]),
        y: orderedPoints.map((item) => item[1]),
        type: "scatter",
        mode: "markers",
        marker: { color: "red", size: 12 },
        line: { width: 5 },
        fill: "toself",
      },
    ];
  }, [points]);

  const layout: Partial<Layout> = useMemo(() => {
    if (points.length === 0) {
      return {
        ...BASE_LAYOUT,
        xaxis: {
          ...BASE_LAYOUT.xaxis,
          range: [-5, 5],
        },
        yaxis: {
          ...BASE_LAYOUT.yaxis,
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
      xaxis: {
        ...BASE_LAYOUT.xaxis,
        range: [minX - PADDING, maxX + PADDING],
      },
      yaxis: {
        ...BASE_LAYOUT.yaxis,
        range: [minY - PADDING, maxY + PADDING],
      },
    };
  }, [points]);

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
