import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

/** Frame info local to the current <Sequence>, plus 0..1 progress. */
export const useSceneProgress = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const progress = durationInFrames > 1 ? frame / (durationInFrames - 1) : 1;
  return {frame, fps, durationInFrames, progress};
};

/** Smooth 0 -> 1 entrance, optionally delayed by `delayFrames`. */
export const useEnter = (delayFrames = 0): number => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({
    frame: Math.max(0, frame - delayFrames),
    fps,
    config: {damping: 200},
    durationInFrames: Math.round(fps * 0.9),
  });
};
