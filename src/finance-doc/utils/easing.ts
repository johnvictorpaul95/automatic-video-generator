import {Easing, interpolate} from 'remotion';

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);

export const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));

/** 0 -> 1 over `duration` frames starting at `start`, clamped on both ends. */
export const ramp = (
  frame: number,
  start: number,
  duration: number,
  easing: (t: number) => number = easeOut,
): number =>
  interpolate(frame, [start, start + Math.max(1, duration)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });
