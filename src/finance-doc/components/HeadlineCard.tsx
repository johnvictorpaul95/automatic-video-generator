import React from 'react';
import {THEME, toneColor} from '../theme';
import type {HeadlineScene} from '../types';
import {useEnter} from '../hooks/useSceneProgress';

export const HeadlineCard: React.FC<{scene: HeadlineScene}> = ({scene}) => {
  const enter = useEnter(0);
  const enterBody = useEnter(12);
  const color = toneColor(scene.tone);

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      {scene.kicker ? (
        <div
          style={{
            fontSize: THEME.type.small,
            color: THEME.colors.muted,
            marginBottom: 28,
            opacity: enter,
          }}
        >
          {scene.kicker}
        </div>
      ) : null}
      <div style={{display: 'flex', gap: 36}}>
        {/* The bar's colour carries the tone: gain, loss, or neutral. */}
        <div
          style={{
            width: 10,
            borderRadius: 5,
            background: color,
            transform: `scaleY(${enter})`,
            transformOrigin: 'top',
          }}
        />
        <div>
          <div
            style={{
              fontFamily: THEME.fonts.display,
              fontWeight: 700,
              fontSize: THEME.type.h1,
              lineHeight: 1.06,
              opacity: enter,
              transform: `translateY(${(1 - enter) * 40}px)`,
            }}
          >
            {scene.headline}
          </div>
          {scene.body ? (
            <div
              style={{
                marginTop: 36,
                fontSize: THEME.type.body,
                lineHeight: 1.4,
                color: THEME.colors.muted,
                opacity: enterBody,
                transform: `translateY(${(1 - enterBody) * 24}px)`,
              }}
            >
              {scene.body}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
