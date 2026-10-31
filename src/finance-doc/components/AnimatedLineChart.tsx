import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME} from '../theme';
import type {LineChartScene} from '../types';
import {
  pathFromPoints,
  pointAtLength,
  polylineLength,
  toPoints,
  valueAtIndex,
} from '../utils/chartMath';
import {ramp} from '../utils/easing';
import {formatCompact, formatPct} from '../utils/format';

const W = THEME.contentWidth;
const H = 640;
const PAD = {l: 16, r: 56, t: 40, b: 56};

export const AnimatedLineChart: React.FC<{scene: LineChartScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const values = scene.values;
  if (values.length < 2) return null;

  const prefix = scene.valuePrefix ?? '';
  const suffix = scene.valueSuffix ?? '';
  const pts = toPoints(values, W, H, PAD);
  const total = polylineLength(pts);
  const draw = ramp(frame, fps * 0.6, fps * 2.4);
  const tip = pointAtLength(pts, total * draw);
  const current = valueAtIndex(values, tip.index);

  const first = values[0];
  const last = values[values.length - 1];
  const color = last >= first ? THEME.colors.gain : THEME.colors.loss;
  const titleIn = ramp(frame, 0, fps * 0.6);

  const line = pathFromPoints(pts);
  const baseY = H - PAD.b;
  const area = `${line} L${pts[pts.length - 1].x.toFixed(2)} ${baseY} L${pts[0].x.toFixed(2)} ${baseY} Z`;
  const gridYs = [0, 1, 2, 3].map((i) => PAD.t + ((baseY - PAD.t) * i) / 3);

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40}}>
      <div
        style={{
          fontFamily: THEME.fonts.display,
          fontWeight: 700,
          fontSize: THEME.type.h2,
          lineHeight: 1.12,
          opacity: titleIn,
        }}
      >
        {scene.title}
      </div>

      <div style={{display: 'flex', alignItems: 'baseline', gap: 24}}>
        <span
          style={{
            fontSize: 120,
            fontWeight: 700,
            color,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {prefix}
          {formatCompact(current)}
          {suffix}
        </span>
        {first !== 0 ? (
          <span style={{fontSize: THEME.type.body, color: THEME.colors.muted}}>
            {formatPct(((current - first) / Math.abs(first)) * 100)}
          </span>
        ) : null}
      </div>

      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{overflow: 'visible'}}>
        <defs>
          <clipPath id="fd-line-reveal">
            <rect x={0} y={0} width={Math.max(0, tip.x)} height={H} />
          </clipPath>
        </defs>
        {gridYs.map((y) => (
          <line key={y} x1={0} x2={W} y1={y} y2={y} stroke={THEME.colors.line} strokeWidth={1} />
        ))}
        <path d={area} fill={color} opacity={0.14} clipPath="url(#fd-line-reveal)" />
        <path
          d={line}
          fill="none"
          stroke={color}
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={total}
          strokeDashoffset={total - total * draw}
        />
        <circle cx={tip.x} cy={tip.y} r={14} fill={color} />
        {pts.map((p, i) =>
          scene.labels[i] ? (
            <text
              key={i}
              x={p.x}
              y={H - 12}
              fontSize={28}
              fill={THEME.colors.muted}
              textAnchor="middle"
              fontFamily={THEME.fonts.body}
            >
              {scene.labels[i]}
            </text>
          ) : null,
        )}
      </svg>
    </div>
  );
};
