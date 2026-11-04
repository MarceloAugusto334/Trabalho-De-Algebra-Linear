"use client";

import { useState, ChangeEvent, SubmitEvent } from "react";
import { useRegressao } from "../context/RegressaoContext";

const campo =
  "w-full font-normal h-10 px-3 text-center bg-background border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-ring";

export default function FuncaoVariaveisInput() {
  const { reta, variaveis, setVariaveis } = useRegressao();

  const [form, setForm] = useState({
    dependente: variaveis.dependente,
    independente: variaveis.independente,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVariaveis({
      dependente: form.dependente.trim(),
      independente: form.independente.trim(),
    });
  };

  const nomeDep = variaveis.dependente || "f(x)";
  const nomeIndep = variaveis.independente || "x";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 mb-6 border border-border rounded-md"
    >
      <label className="flex gap-5 font-semibold items-center text-xs">
        Variável dependente:
        <input
          type="text"
          id="dependente"
          value={form.dependente}
          placeholder="f(x)"
          className={campo}
          onChange={handleChange}
        />
      </label>
      <label className="flex gap-5 font-semibold items-center text-xs">
        Variável independente:
        <input
          type="text"
          id="independente"
          value={form.independente}
          placeholder="x"
          className={campo}
          onChange={handleChange}
        />
      </label>

      {reta && (
        <p className="font-mono text-sm text-muted-foreground">
          {nomeDep} = {Number(reta.a.toFixed(4))}·{nomeIndep}{" "}
          {reta.b < 0 ? "-" : "+"} {Math.abs(Number(reta.b.toFixed(4)))}
        </p>
      )}

      <button className="h-10 px-4 bg-secondary text-secondary-foreground font-medium rounded-md hover:opacity-90 cursor-pointer">
        Aplicar
      </button>
    </form>
  );
}
