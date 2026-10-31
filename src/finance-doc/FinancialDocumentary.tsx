import React, {useMemo} from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';
import type {CalculateMetadataFunction} from 'remotion';
import {AudioLayer} from './audio/AudioLayer';
import {Background} from './components/Background';
import {ProgressBar} from './components/ProgressBar';
import {SceneFrame} from './components/SceneFrame';
import {SceneRenderer} from './components/SceneRenderer';
import {FINANCE_DOC_FPS, timeScenes, totalFrames} from './timing';
import type {FinancialDocumentaryProps} from './types';

/** Use with <Composition calculateMetadata={...} /> so duration follows the manifest. */
export const calculateFinancialDocMetadata: CalculateMetadataFunction<
  FinancialDocumentaryProps
> = ({props}) => ({
  durationInFrames: totalFrames(props.manifest, FINANCE_DOC_FPS),
});

export const FinancialDocumentary: React.FC<FinancialDocumentaryProps> = ({manifest}) => {
  const {fps} = useVideoConfig();
  const timed = useMemo(() => timeScenes(manifest.scenes, fps), [manifest.scenes, fps]);

  return (
    <AbsoluteFill>
      <Background />
      {timed.map((t) => (
        <Sequence key={t.scene.id} from={t.from} durationInFrames={t.duration}>
          <SceneFrame>
            <SceneRenderer
              scene={t.scene}
              brand={manifest.brand}
              showCaptions={manifest.captions !== false}
            />
          </SceneFrame>
        </Sequence>
      ))}
      <ProgressBar />
      <AudioLayer manifest={manifest} timed={timed} />
    </AbsoluteFill>
  );
};
