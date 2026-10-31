export type Pt = {x: number; y: number};
export type Pad = {l: number; r: number; t: number; b: number};

export const linearScale =
  (d0: number, d1: number, r0: number, r1: number) =>
  (v: number): number =>
    d1 === d0 ? (r0 + r1) / 2 : r0 + ((v - d0) / (d1 - d0)) * (r1 - r0);

/** Maps values to SVG points inside a w x h box, with 8% headroom. */
export const toPoints = (values: number[], w: number, h: number, pad: Pad): Pt[] => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const lo = min - (max - min) * 0.08;
  const hi = max + (max - min) * 0.08;
  const x = linearScale(0, Math.max(1, values.length - 1), pad.l, w - pad.r);
  const y = linearScale(lo, hi, h - pad.b, pad.t);
  return values.map((v, i) => ({x: x(i), y: y(v)}));
};

export const pathFromPoints = (pts: Pt[]): string =>
  pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ');

export const polylineLength = (pts: Pt[]): number => {
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    total += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  }
  return total;
};

/** Point at a given arc length along the polyline, plus a fractional data index. */
export const pointAtLength = (pts: Pt[], length: number): {x: number; y: number; index: number} => {
  let remaining = Math.max(0, length);
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const seg = Math.hypot(b.x - a.x, b.y - a.y);
    if (remaining <= seg || i === pts.length - 1) {
      const f = seg === 0 ? 1 : Math.min(1, remaining / seg);
      return {x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f, index: i - 1 + f};
    }
    remaining -= seg;
  }
  return {x: pts[0].x, y: pts[0].y, index: 0};
};

export const valueAtIndex = (values: number[], index: number): number => {
  const i = Math.min(values.length - 2, Math.max(0, Math.floor(index)));
  const f = index - i;
  return values[i] + (values[i + 1] - values[i]) * f;
};
