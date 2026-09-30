import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME, toneColor} from '../theme';
import type {ComparisonScene as ComparisonSceneData, ComparisonSide} from '../types';
import {ramp} from '../utils/easing';

const Side: React.FC<{side: ComparisonSide; progress: number; fromX: number}> = ({
  side,
  progress,
  fromX,
}) => (
  <div style={{opacity: progress, transform: `translateX(${(1 - progress) * fromX}px)`}}>
    <div style={{fontSize: THEME.type.body, color: THEME.colors.muted}}>{side.label}</div>
    <div
      style={{
        fontFamily: THEME.fonts.display,
        fontWeight: 700,
        fontSize: 170,
        lineHeight: 1.05,
        color: side.tone ? toneColor(side.tone) : THEME.colors.text,
      }}
    >
      {side.value}
    </div>
    {side.note ? <div style={{fontSize: THEME.type.small, color: THEME.colors.muted}}>{side.note}</div> : null}
  </div>
);

export const ComparisonScene: React.FC<{scene: ComparisonSceneData}> = ({scene}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const titleIn = ramp(frame, 0, fps * 0.6);
  const left = ramp(frame, fps * 0.4, fps * 0.9);
  const right = ramp(frame, fps * 1.4, fps * 0.9);
  const rule = ramp(frame, fps * 1.0, fps * 0.8);

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 44}}>
      {scene.title ? (
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
      ) : null}
      <Side side={scene.left} progress={left} fromX={-80} />
      <div style={{height: 2, width: `${rule * 100}%`, background: THEME.colors.line}} />
      <Side side={scene.right} progress={right} fromX={80} />
    </div>
  );
};
