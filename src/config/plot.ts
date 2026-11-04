import type { Layout, Config } from "plotly.js";

export const BASE_LAYOUT: Partial<Layout> = {
  autosize: true,
  dragmode: "pan",
  paper_bgcolor: "transparent",
  plot_bgcolor: "transparent",

  xaxis: {
    gridcolor: "#222222",
    zerolinecolor: "#444444",
    tickfont: { color: "#a1a1aa" },
    tickformat: ".2~f",
    hoverformat: ".2~f",
  },
  yaxis: {
    gridcolor: "#222222",
    zerolinecolor: "#444444",
    tickfont: { color: "#a1a1aa" },
    tickformat: ".2~f",
    hoverformat: ".2~f",
    scaleanchor: "x",
    scaleratio: 1,
  },
  margin: { l: 50, r: 50, t: 60, b: 50 },
};

export const BASE_CONFIG: Partial<Config> = {
  responsive: true,
  displayModeBar: false,
  scrollZoom: true,
};
