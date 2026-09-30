import React from 'react';
import {THEME} from '../theme';
import type {OutroScene as OutroSceneData} from '../types';
import {useEnter} from '../hooks/useSceneProgress';

export const OutroScene: React.FC<{scene: OutroSceneData; brand?: string}> = ({scene, brand}) => {
  const enter = useEnter(0);
  const ctaIn = useEnter(16);

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div
        style={{
          fontFamily: THEME.fonts.display,
          fontWeight: 700,
          fontSize: THEME.type.h1,
          lineHeight: 1.08,
          opacity: enter,
          transform: `translateY(${(1 - enter) * 40}px)`,
        }}
      >
        {scene.title}
      </div>
      {scene.cta ? (
        <div
          style={{
            marginTop: 56,
            fontSize: THEME.type.body,
            fontWeight: 700,
            color: THEME.colors.accent,
            opacity: ctaIn,
          }}
        >
          {scene.cta}
        </div>
      ) : null}
      {brand ? (
        <div style={{marginTop: 24, fontSize: THEME.type.small, color: THEME.colors.muted, opacity: ctaIn}}>
          {brand}
        </div>
      ) : null}
    </div>
  );
};
