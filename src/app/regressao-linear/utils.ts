import type { Matrix } from "@/types";
import { calculateInverse, multiplyMatrices, transpose } from "@/utils/matrix";

/** Reta y = a·x + b */
export interface Reta {
  a: number;
  b: number;
}

/**
 * Mínimos quadrados pela equação normal: β = (XᵀX)⁻¹ Xᵀy
 * Retorna null se não for possível calcular (menos de 2 pontos ou todos com o mesmo x).
 */
export const calcularRegressao = (points: Matrix): Reta | null => {
  if (points.length < 2) {
    return null;
  }

  const X = points.map(([x]) => [1, x]);
  const y = points.map(([, y]) => [y]);

  const Xt = transpose(X);
  const XtX = multiplyMatrices(Xt, X);

  const det = XtX[0][0] * XtX[1][1] - XtX[0][1] * XtX[1][0];
  if (det === 0) {
    return null;
  }

  const beta = multiplyMatrices(
    multiplyMatrices(calculateInverse(XtX as Matrix), Xt),
    y,
  );

  return { b: beta[0][0], a: beta[1][0] };
};
