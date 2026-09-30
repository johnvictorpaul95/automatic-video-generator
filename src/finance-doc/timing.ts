import type {DocumentaryManifest, Scene} from './types';

export const FINANCE_DOC_FPS = 30;

export type TimedScene = {scene: Scene; from: number; duration: number};

export const timeScenes = (scenes: Scene[], fps: number = FINANCE_DOC_FPS): TimedScene[] => {
  let cursor = 0;
  return scenes.map((scene) => {
    const duration = Math.max(1, Math.round(scene.durationSec * fps));
    const timed = {scene, from: cursor, duration};
    cursor += duration;
    return timed;
  });
};

export const totalFrames = (
  manifest: DocumentaryManifest,
  fps: number = FINANCE_DOC_FPS,
): number => {
  const sum = timeScenes(manifest.scenes, fps).reduce((acc, t) => acc + t.duration, 0);
  return Math.max(1, sum);
};
