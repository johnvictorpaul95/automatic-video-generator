import React from 'react';
import {Audio, Sequence, interpolate, staticFile, useVideoConfig} from 'remotion';
import type {TimedScene} from '../timing';
import type {DocumentaryManifest} from '../types';

const resolveSrc = (src: string): string => (/^https?:\/\//.test(src) ? src : staticFile(src));

/** Narration, background music (with 1s fades), and per-scene sound effects. */
export const AudioLayer: React.FC<{manifest: DocumentaryManifest; timed: TimedScene[]}> = ({
  manifest,
  timed,
}) => {
  const {fps, durationInFrames} = useVideoConfig();
  const base = manifest.musicVolume ?? 0.12;
  const canFade = durationInFrames > fps * 2;

  const musicVolume = (f: number): number =>
    canFade
      ? interpolate(f, [0, fps, durationInFrames - fps, durationInFrames], [0, base, base, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })
      : base;

  return (
    <>
      {manifest.narrationSrc ? <Audio src={resolveSrc(manifest.narrationSrc)} /> : null}
      {manifest.musicSrc ? <Audio src={resolveSrc(manifest.musicSrc)} volume={musicVolume} loop /> : null}
      {timed.map((t) =>
        t.scene.sfx ? (
          <Sequence key={`sfx-${t.scene.id}`} from={t.from} durationInFrames={t.duration}>
            <Audio src={resolveSrc(t.scene.sfx)} />
          </Sequence>
        ) : null,
      )}
    </>
  );
};
