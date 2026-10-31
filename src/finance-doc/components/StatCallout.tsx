import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME, toneColor} from '../theme';
import type {StatScene} from '../types';
import {useEnter} from '../hooks/useSceneProgress';
import {ramp} from '../utils/easing';
import {formatNumber} from '../utils/format';

export const StatCallout: React.FC<{scene: StatScene}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = useEnter(0);
  const noteIn = useEnter(Math.round(fps * 2.2));
  const decimals = scene.decimals ?? 0;
  const prefix = scene.prefix ?? '';
  const suffix = scene.suffix ?? '';

  const p = ramp(frame, fps * 0.4, fps * 2);
  const text = `${prefix}${formatNumber(scene.value * p, decimals)}${suffix}`;
  // Size from the final string so the number does not jitter while counting.
  const finalLen = `${prefix}${formatNumber(scene.value, decimals)}${suffix}`.length;
  const size = Math.min(260, Math.floor(THEME.contentWidth / (finalLen * 0.6)));

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40}}>
      <div
        style={{
          fontFamily: THEME.fonts.display,
          fontWeight: 700,
          fontSize: THEME.type.h2,
          lineHeight: 1.15,
          opacity: enter,
        }}
      >
        {scene.label}
      </div>
      <div
        style={{
          fontSize: size,
          fontWeight: 700,
          lineHeight: 1,
          color: toneColor(scene.tone),
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {text}
      </div>
      {scene.note ? (
        <div
          style={{
            fontSize: THEME.type.body,
            lineHeight: 1.4,
            color: THEME.colors.muted,
            opacity: noteIn,
          }}
        >
          {scene.note}
        </div>
      ) : null}
    </div>
  );
};
