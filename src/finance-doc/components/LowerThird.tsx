import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {THEME} from '../theme';
import {ramp} from '../utils/easing';

/** Source attribution, sits between the content area and the captions. */
export const LowerThird: React.FC<{source: string}> = ({source}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        position: 'absolute',
        left: THEME.safe.side,
        right: THEME.safe.side,
        bottom: 235,
        fontSize: 30,
        color: THEME.colors.muted,
        opacity: ramp(frame, fps * 1, fps * 0.5),
      }}
    >
      Source: {source}
    </div>
  );
};
