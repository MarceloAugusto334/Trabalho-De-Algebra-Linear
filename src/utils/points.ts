import type { Matrix, Vector } from "@/types";

export const sumPoints = (param: number[]) => {
  return param.reduce((acc, item) => (acc += item), 0);
};

export const calculateAnchorPoint = (currentPoints: Matrix): Vector => {
  const xCoord: number[] = currentPoints.map((item) => item[0]);
  const yCoord: number[] = currentPoints.map((item) => item[1]);

  const xCenter = sumPoints(xCoord) / xCoord.length;
  const yCenter = sumPoints(yCoord) / yCoord.length;

  return [xCenter, yCenter];
};

export const includesPoint = (currentPoints: Matrix, newPoint: Vector): boolean => {
  return currentPoints.some((p) => {
    return p[0] === newPoint[0] && p[1] === newPoint[1];
  });
};

/**
 * Ordena os pontos pelo ângulo em relação ao centroide.
 * Retorna um novo array, não altera o original.
 */
export const organizePoints = (newPoints: Matrix): Matrix => {
  if (newPoints.length < 3) {
    return newPoints;
  }

  const [centerX, centerY] = calculateAnchorPoint(newPoints);

  const pointsWithAngle = newPoints.map((item) => {
    const deltaX: number = item[0] - centerX;
    const deltaY: number = item[1] - centerY;

    const angle = Math.atan2(deltaY, deltaX);

    return { vetor: item, angle };
  });

  const orderedByAngle = pointsWithAngle.sort((a, b) => a.angle - b.angle);

  return orderedByAngle.map((item) => item.vetor);
};
