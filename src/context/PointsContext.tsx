"use client";

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import type { Matrix, Vector } from "@/types";
import { includesPoint } from "@/utils/points";

interface PointsProviderProps {
  children: ReactNode;
}

interface PointsContextType {
  points: Matrix;
  setPoints: Dispatch<SetStateAction<Matrix>>;
  addPoint: (newPoint: Vector, setErr: (param: string) => void) => void;
  removePoints: (pointIndices: number[]) => void;
}

const PointsContext = createContext<PointsContextType | null>(null);

export function usePoints() {
  const context = useContext(PointsContext);

  if (!context) {
    throw new Error("ERROR IN CONTEXT");
  }

  return context;
}

export default function PointsProvider({ children }: PointsProviderProps) {
  const [points, setPoints] = useState<Matrix>([]);

  const addPoint = (newPoint: Vector, setErr: (param: string) => void) => {
    if (!includesPoint(points, newPoint)) {
      setPoints([...points, newPoint]);
    } else {
      setErr("Ponto já adicionado.");
    }
  };

  const removePoints = (pointsIndices: number[]) => {
    setPoints((prev: Matrix) =>
      prev.filter((_, index) => !pointsIndices.includes(index)),
    );
  };

  return (
    <PointsContext.Provider
      value={{
        points,
        setPoints,
        addPoint,
        removePoints,
      }}
    >
      {children}
    </PointsContext.Provider>
  );
}
