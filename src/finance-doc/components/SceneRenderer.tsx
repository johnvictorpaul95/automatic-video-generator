import React from 'react';
import {AbsoluteFill} from 'remotion';
import {THEME} from '../theme';
import type {Scene} from '../types';
import {AnimatedBarChart} from './AnimatedBarChart';
import {AnimatedLineChart} from './AnimatedLineChart';
import {CaptionTrack} from './CaptionTrack';
import {ComparisonScene} from './ComparisonScene';
import {HeadlineCard} from './HeadlineCard';
import {IntroScene} from './IntroScene';
import {LowerThird} from './LowerThird';
import {OutroScene} from './OutroScene';
import {QuoteScene} from './QuoteScene';
import {StatCallout} from './StatCallout';
import {Ticker} from './Ticker';

const renderBody = (scene: Scene, brand?: string): React.ReactNode => {
  switch (scene.type) {
    case 'intro':
      return <IntroScene scene={scene} brand={brand} />;
    case 'headline':
      return <HeadlineCard scene={scene} />;
    case 'bar-chart':
      return <AnimatedBarChart scene={scene} />;
    case 'line-chart':
      return <AnimatedLineChart scene={scene} />;
    case 'ticker':
      return <Ticker scene={scene} />;
    case 'stat':
      return <StatCallout scene={scene} />;
    case 'comparison':
      return <ComparisonScene scene={scene} />;
    case 'quote':
      return <QuoteScene scene={scene} />;
    case 'outro':
      return <OutroScene scene={scene} brand={brand} />;
    default: {
      const unreachable: never = scene;
      throw new Error(`Unknown scene type: ${JSON.stringify(unreachable)}`);
    }
  }
};

export const SceneRenderer: React.FC<{
  scene: Scene;
  showCaptions: boolean;
  brand?: string;
}> = ({scene, showCaptions, brand}) => (
  <AbsoluteFill style={{fontFamily: THEME.fonts.body, color: THEME.colors.text}}>
    <div
      style={{
        position: 'absolute',
        top: THEME.safe.top,
        bottom: THEME.safe.bottom,
        left: THEME.safe.side,
        right: THEME.safe.side,
      }}
    >
      {renderBody(scene, brand)}
    </div>
    {scene.source ? <LowerThird source={scene.source} /> : null}
    {showCaptions && scene.caption ? <CaptionTrack text={scene.caption} /> : null}
  </AbsoluteFill>
);
