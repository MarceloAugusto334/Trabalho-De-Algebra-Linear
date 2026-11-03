"use client";

import { useState, ChangeEvent, SubmitEvent } from "react";
import { usePoints } from "@/features/pontos/context/PointsContext";
import type { Transformation } from "@/features/pontos/types";

const campo =
  "w-full font-normal h-10 px-3 text-center bg-background border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-ring";

export default function FuncaoVariaveisInput() {
  const { points, inversesStack, applyTransformation, undoTransformation } =
    usePoints();

  const [form, setForm] = useState({
    rotation: false,
    scale: false,
    reflection: false,
    angle: "",
    sx: "",
    sy: "",
    axis: "x",
    anchorX: "",
    anchorY: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const transformation: Transformation = {
      rotation: form.rotation ? Number(form.angle) : null,
      scale: form.scale ? { sx: Number(form.sx), sy: Number(form.sy) } : null,
      reflection: form.reflection ? form.axis : null,
      anchor:
        form.anchorX && form.anchorY
          ? [Number(form.anchorX), Number(form.anchorY)]
          : null,
    };

    applyTransformation(transformation);
    setForm({
      rotation: false,
      scale: false,
      reflection: false,
      angle: "",
      sx: "",
      sy: "",
      axis: "x",
      anchorX: "",
      anchorY: "",
    });
  };

  const allowUndo = inversesStack.length > 0;

  const nothingSelected = (!form.rotation && !form.scale && !form.reflection) || points.length === 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4   mb-6 border border-border rounded-md"
    >

      <label className="flex gap-5 font-semibold items-center text-xs">
        Variavel dependente:
        <div className="flex gap-2">
          <input
            type="text"
            id="anchorX"
            placeholder="f(x)"
            className={campo}
            onChange={handleChange}
          />
        </div>
      </label>
      <label className="flex gap-5 font-semibold items-center">
        Variavel Independente:
        <div className="flex gap-2">
          <input
            type="text"
            id="anchorX"
            placeholder="x"
            className={campo}
            onChange={handleChange}
          />
        </div>

      </label>
      <div className="flex gap-4">
        <button
          disabled={nothingSelected}
          className="h-10 px-4 bg-secondary text-secondary-foreground font-medium rounded-md hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Aplicar
        </button>
        <button
          type="button"
          className=" text-secondary-foreground font-medium rounded-md hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={undoTransformation}
          disabled={!allowUndo}
        >
          Reverter
        </button>
      </div>
    </form>
  );
}
