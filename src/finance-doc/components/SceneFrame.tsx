import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

/** Fades a scene in and out at its Sequence boundaries. */
export const SceneFrame: React.FC<{children: React.ReactNode; fadeFrames?: number}> = ({
  children,
  fadeFrames = 8,
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  // Guarantees 0 < f < durationInFrames - f, so the input range is strictly increasing.
  const f = Math.min(fadeFrames, Math.floor((durationInFrames - 1) / 2));
  const opacity =
    f <= 0
      ? 1
      : interpolate(frame, [0, f, durationInFrames - f, durationInFrames], [0, 1, 1, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });

  return <AbsoluteFill style={{opacity}}>{children}</AbsoluteFill>;
};
