import React from 'react';
import {THEME} from '../theme';
import type {QuoteScene as QuoteSceneData} from '../types';
import {useEnter} from '../hooks/useSceneProgress';

export const QuoteScene: React.FC<{scene: QuoteSceneData}> = ({scene}) => {
  const enter = useEnter(0);
  const authorIn = useEnter(18);

  return (
    <div style={{height: '100%', display: 'flex', alignItems: 'center', gap: 36}}>
      <div
        style={{
          alignSelf: 'stretch',
          width: 10,
          margin: '160px 0',
          borderRadius: 5,
          background: THEME.colors.accent,
          transform: `scaleY(${enter})`,
          transformOrigin: 'top',
        }}
      />
      <div>
        <div
          style={{
            fontFamily: THEME.fonts.display,
            fontStyle: 'italic',
            fontSize: 68,
            lineHeight: 1.2,
            opacity: enter,
          }}
        >
          {scene.quote}
        </div>
        <div style={{marginTop: 44, fontSize: THEME.type.body, opacity: authorIn}}>
          <span style={{fontWeight: 700}}>{scene.author}</span>
          {scene.role ? <span style={{color: THEME.colors.muted}}>, {scene.role}</span> : null}
        </div>
      </div>
    </div>
  );
};
