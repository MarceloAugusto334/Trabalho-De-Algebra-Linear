"use client";

import { createContext, ReactNode, useState, useContext, useMemo } from "react";
import { usePoints } from "@/context/PointsContext";
import { calcularRegressao, type Reta } from "../utils";

interface RegressaoProviderProps {
  children: ReactNode;
}

interface Variaveis {
  dependente: string;
  independente: string;
}

interface RegressaoContextType {
  reta: Reta | null;
  variaveis: Variaveis;
  setVariaveis: (variaveis: Variaveis) => void;
}

const RegressaoContext = createContext<RegressaoContextType | null>(null);

export function useRegressao() {
  const context = useContext(RegressaoContext);

  if (!context) {
    throw new Error("ERROR IN CONTEXT");
  }

  return context;
}

export default function RegressaoProvider({ children }: RegressaoProviderProps) {
  const { points } = usePoints();
  const [variaveis, setVariaveis] = useState<Variaveis>({
    dependente: "",
    independente: "",
  });

  // derivado dos pontos: recalcula só quando points muda
  const reta = useMemo(() => calcularRegressao(points), [points]);

  return (
    <RegressaoContext.Provider value={{ reta, variaveis, setVariaveis }}>
      {children}
    </RegressaoContext.Provider>
  );
}
