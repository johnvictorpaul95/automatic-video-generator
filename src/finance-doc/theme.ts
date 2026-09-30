import type {Tone} from './types';

export const THEME = {
  colors: {
    ground: '#0C1F2E',
    surface: '#123047',
    line: '#2A4A63',
    text: '#EAF1F5',
    muted: '#8FA7B8',
    accent: '#F2A93B',
    gain: '#4CC9A0',
    loss: '#EF6F4A',
  },
  fonts: {
    // Swap in @remotion/google-fonts here if you want a specific typeface.
    display: "'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif",
    body: "'Inter','Helvetica Neue',Arial,sans-serif",
  },
  layout: {width: 1080, height: 1920},
  // Keeps content clear of the platform UI on Reels / Shorts / TikTok.
  safe: {top: 200, bottom: 520, side: 72},
  contentWidth: 1080 - 72 * 2,
  type: {hero: 124, h1: 96, h2: 64, body: 46, caption: 44, small: 34},
} as const;

export const toneColor = (tone?: Tone): string => {
  if (tone === 'gain') return THEME.colors.gain;
  if (tone === 'loss') return THEME.colors.loss;
  return THEME.colors.accent;
};
