import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME} from '../theme';
import type {TickerScene} from '../types';
import {ramp} from '../utils/easing';
import {formatNumber, formatPct} from '../utils/format';

export const Ticker: React.FC<{scene: TickerScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const currency = scene.currency ?? '$';

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 48}}>
      {scene.title ? (
        <div
          style={{
            fontFamily: THEME.fonts.display,
            fontWeight: 700,
            fontSize: THEME.type.h2,
            lineHeight: 1.12,
            opacity: ramp(frame, 0, fps * 0.6),
          }}
        >
          {scene.title}
        </div>
      ) : null}
      <div>
        {scene.items.map((item, i) => {
          const p = ramp(frame, fps * 0.4 + i * fps * 0.2, fps * 0.7);
          const up = item.changePct >= 0;
          const color = up ? THEME.colors.gain : THEME.colors.loss;
          return (
            <div
              key={item.symbol}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '28px 0',
                borderBottom: `1px solid ${THEME.colors.line}`,
                opacity: p,
                transform: `translateX(${(1 - p) * 60}px)`,
              }}
            >
              <div>
                <div style={{fontSize: 56, fontWeight: 700}}>{item.symbol}</div>
                {item.name ? (
                  <div style={{fontSize: THEME.type.small, color: THEME.colors.muted}}>{item.name}</div>
                ) : null}
              </div>
              <div style={{textAlign: 'right', fontVariantNumeric: 'tabular-nums'}}>
                <div style={{fontSize: 56, fontWeight: 700}}>
                  {currency}
                  {formatNumber(item.price, 2)}
                </div>
                <div style={{fontSize: THEME.type.body, color}}>
                  {up ? '▲' : '▼'} {formatPct(item.changePct, 2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
