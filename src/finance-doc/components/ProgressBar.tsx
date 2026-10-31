import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME} from '../theme';

/** Whole-video progress. Rendered outside the scene Sequences. */
export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const pct = durationInFrames > 1 ? (frame / (durationInFrames - 1)) * 100 : 100;

  return (
    <div style={{position: 'absolute', left: 0, right: 0, top: 24, height: 8, background: THEME.colors.line, opacity: 0.6}}>
      <div style={{height: '100%', width: `${pct}%`, background: THEME.colors.accent}} />
    </div>
  );
};
