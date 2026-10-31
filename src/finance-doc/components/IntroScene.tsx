import React from 'react';
import {THEME} from '../theme';
import type {IntroScene as IntroSceneData} from '../types';
import {useEnter} from '../hooks/useSceneProgress';

export const IntroScene: React.FC<{scene: IntroSceneData; brand?: string}> = ({scene, brand}) => {
  const enter = useEnter(0);
  const ruleIn = useEnter(10);
  const subIn = useEnter(20);

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      {brand ? (
        <div style={{fontSize: THEME.type.small, color: THEME.colors.muted, marginBottom: 40, opacity: enter}}>
          {brand}
        </div>
      ) : null}
      <div
        style={{
          fontFamily: THEME.fonts.display,
          fontWeight: 700,
          fontSize: THEME.type.hero,
          lineHeight: 1.04,
          opacity: enter,
          transform: `translateY(${(1 - enter) * 50}px)`,
        }}
      >
        {scene.title}
      </div>
      <div
        style={{
          height: 8,
          width: 240 * ruleIn,
          background: THEME.colors.accent,
          borderRadius: 4,
          margin: '48px 0',
        }}
      />
      {scene.subtitle ? (
        <div style={{fontSize: THEME.type.body, color: THEME.colors.muted, opacity: subIn}}>{scene.subtitle}</div>
      ) : null}
    </div>
  );
};
