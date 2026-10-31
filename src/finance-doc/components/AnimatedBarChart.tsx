import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME} from '../theme';
import type {BarChartScene} from '../types';
import {ramp} from '../utils/easing';
import {formatCompact} from '../utils/format';

export const AnimatedBarChart: React.FC<{scene: BarChartScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const max = Math.max(1e-9, ...scene.data.map((d) => d.value));
  const prefix = scene.valuePrefix ?? '';
  const suffix = scene.valueSuffix ?? '';
  const titleIn = ramp(frame, 0, fps * 0.6);

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 64}}>
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
      <div style={{display: 'flex', flexDirection: 'column', gap: 48}}>
        {scene.data.map((d, i) => {
          const start = fps * 0.5 + i * fps * 0.35;
          const p = ramp(frame, start, fps * 1.3);
          const width = (d.value / max) * 100 * p;
          const shown = d.value * p;
          return (
            <div key={d.label} style={{opacity: Math.min(1, p * 4)}}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: 14,
                  fontSize: THEME.type.body,
                }}
              >
                <span style={{color: THEME.colors.muted}}>{d.label}</span>
                <span style={{fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>
                  {prefix}
                  {formatCompact(shown)}
                  {suffix}
                </span>
              </div>
              <div style={{height: 44, background: THEME.colors.surface, borderRadius: 6}}>
                <div
                  style={{
                    height: '100%',
                    width: `${width}%`,
                    background: d.color ?? THEME.colors.accent,
                    borderRadius: 6,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
