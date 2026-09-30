import React from 'react';
import {interpolate} from 'remotion';
import {THEME} from '../theme';
import {useSceneProgress} from '../hooks/useSceneProgress';

/** Word-by-word captions, paced across the scene's length. */
export const CaptionTrack: React.FC<{text: string}> = ({text}) => {
  const {frame, durationInFrames} = useSceneProgress();
  const words = text.trim().split(/\s+/);
  const t = interpolate(frame, [durationInFrames * 0.06, durationInFrames * 0.9], [0, words.length], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const current = Math.floor(t);

  return (
    <div
      style={{
        position: 'absolute',
        left: THEME.safe.side,
        right: THEME.safe.side,
        bottom: 290,
        minHeight: 190,
        fontSize: THEME.type.caption,
        fontWeight: 600,
        lineHeight: 1.3,
        fontFamily: THEME.fonts.body,
      }}
    >
      {words.map((w, i) => {
        const spoken = i < current;
        const now = i === current && t < words.length;
        return (
          <span
            key={`${w}-${i}`}
            style={{
              color: now ? THEME.colors.accent : THEME.colors.text,
              opacity: spoken || now ? 1 : 0.35,
              marginRight: 12,
              display: 'inline-block',
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};
