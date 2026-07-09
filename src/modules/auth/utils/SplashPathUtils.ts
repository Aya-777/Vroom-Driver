import { Skia } from '@shopify/react-native-skia';

interface PathConfig {
  screenWidth: number;
  screenHeight: number;
  logoCenterX: number;
  vanishingPointY: number;
  roadTopWidth: number;
}

export const generateRoadPaths = ({
  screenWidth,
  screenHeight,
  logoCenterX,
  vanishingPointY,
  roadTopWidth,
}: PathConfig) => {

  const roadPath = Skia.Path.Make();
  roadPath.moveTo(0, screenHeight + 30);
  roadPath.lineTo(screenWidth, screenHeight + 30);
  roadPath.cubicTo(
    screenWidth * 0.95, screenHeight * 0.82,
    screenWidth * 0.65, screenHeight * 0.75,
    logoCenterX + roadTopWidth / 2, vanishingPointY
  );
  roadPath.lineTo(logoCenterX - roadTopWidth / 2, vanishingPointY);
  roadPath.cubicTo(
    screenWidth * 0.35, screenHeight * 0.75,
    screenWidth * 0.05, screenHeight * 0.82,
    0, screenHeight + 30
  );
  roadPath.close();

  const customDashPath = Skia.Path.Make();

  const getCenterBezierPoint = (ratio: number) => {
    const p0 = { x: logoCenterX, y: screenHeight };
    const p1 = { x: logoCenterX - 5, y: screenHeight * 0.82 };
    const p2 = { x: logoCenterX - 2, y: screenHeight * 0.70 };
    const p3 = { x: logoCenterX, y: vanishingPointY };

    const cx = 3 * (p1.x - p0.x); const bx = 3 * (p2.x - p1.x) - cx; const ax = p3.x - p0.x - cx - bx;
    const cy = 3 * (p1.y - p0.y); const by = 3 * (p2.y - p1.y) - cy; const ay = p3.y - p0.y - cy - by;

    return {
      x: ax * Math.pow(ratio, 3) + bx * Math.pow(ratio, 2) + cx * ratio + p0.x,
      y: ay * Math.pow(ratio, 3) + by * Math.pow(ratio, 2) + cy * ratio + p0.y,
    };
  };

  let val = 0.01; 
  while (val < 0.96) {
    const dashLength = 0.08 * Math.pow(1 - val, 1.5) + 0.015;

    const startRatio = val;
    const endRatio = Math.min(val + dashLength, 0.98);

    const startPt = getCenterBezierPoint(startRatio);
    const endPt = getCenterBezierPoint(endRatio);

    const startWidth = 14 * Math.pow(1 - startRatio, 1.2) + 3;
    const endWidth = 14 * Math.pow(1 - endRatio, 1.2) + 3;

    customDashPath.moveTo(startPt.x - startWidth / 2, startPt.y);
    customDashPath.lineTo(startPt.x + startWidth / 2, startPt.y);
    customDashPath.lineTo(endPt.x + endWidth / 2, endPt.y);
    customDashPath.lineTo(endPt.x - endWidth / 2, endPt.y);
    customDashPath.close();

    const gap = 0.06 * Math.pow(1 - val, 1.2) + 0.015;
    val += dashLength + gap;
  }

  return { roadPath, customDashPath };
};