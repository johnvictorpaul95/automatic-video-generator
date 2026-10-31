import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {THEME} from '../theme';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 120) * 6;

  return (
    <AbsoluteFill style={{background: THEME.colors.ground}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(1100px 900px at ${50 + drift}% 22%, ${THEME.colors.surface} 0%, transparent 70%)`,
        }}
      />
      {/* chart-paper rules: quiet, and they read as "finance" without decoration */}
      <AbsoluteFill
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${THEME.colors.line} 0px, ${THEME.colors.line} 1px, transparent 1px, transparent 160px)`,
          opacity: 0.22,
        }}
      />
    </AbsoluteFill>
  );
};
