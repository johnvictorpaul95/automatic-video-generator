import {THEME} from './theme';
import type {DocumentaryManifest, FinancialDocumentaryProps} from './types';

// Future value of a fixed monthly deposit, compounded monthly.
const futureValue = (monthly: number, annualRate: number, years: number): number => {
  const r = annualRate / 12;
  const n = years * 12;
  return monthly * ((Math.pow(1 + r, n) - 1) / r);
};

const MONTHLY = 500;
const RATE = 0.07;
const years = [0, 5, 10, 15, 20, 25, 30];
const curve = years.map((y) => (y === 0 ? 0 : Math.round(futureValue(MONTHLY, RATE, y))));
const final30 = futureValue(MONTHLY, RATE, 30);
const deposits30 = MONTHLY * 12 * 30;
const growthShare = ((final30 - deposits30) / final30) * 100;

const compact = (v: number) =>
  v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` : `$${Math.round(v / 1000)}K`;

/**
 * Illustrative sample: the arithmetic of compounding (not market data).
 * Replace with your own scenes.
 */
export const sampleManifest: DocumentaryManifest = {
  title: 'The quiet math of compounding',
  brand: 'Money, explained',
  captions: true,
  scenes: [
    {
      id: 'intro',
      type: 'intro',
      durationSec: 4,
      title: 'The quiet math of compounding',
      subtitle: 'A 45-second explainer',
      caption: 'Most wealth is built slowly, then all at once.',
    },
    {
      id: 'headline',
      type: 'headline',
      durationSec: 6,
      kicker: 'The idea',
      headline: 'Time does most of the work',
      body: 'A modest monthly deposit becomes a large number when it has decades to grow.',
      tone: 'neutral',
      caption: 'A small monthly deposit needs time far more than it needs size.',
    },
    {
      id: 'line',
      type: 'line-chart',
      durationSec: 9,
      title: `$${MONTHLY} a month at ${RATE * 100}% a year`,
      labels: years.map((y) => `Yr ${y}`),
      values: curve,
      valuePrefix: '$',
      caption: 'Put away five hundred dollars a month and the curve bends upward every year.',
      source: 'Illustrative calculation, monthly compounding',
    },
    {
      id: 'stat',
      type: 'stat',
      durationSec: 6,
      label: 'After 30 years, the share of the balance that is growth, not deposits',
      value: Number(growthShare.toFixed(1)),
      suffix: '%',
      decimals: 1,
      tone: 'gain',
      note: `You deposit ${compact(deposits30)}. You end with about ${compact(final30)}.`,
      caption: 'Most of the final balance never came from your paycheck.',
    },
    {
      id: 'bars',
      type: 'bar-chart',
      durationSec: 8,
      title: 'Same deposit, different start age (to age 65)',
      valuePrefix: '$',
      data: [
        {label: 'Start at 25', value: Math.round(futureValue(MONTHLY, RATE, 40)), color: THEME.colors.gain},
        {label: 'Start at 35', value: Math.round(futureValue(MONTHLY, RATE, 30))},
        {label: 'Start at 45', value: Math.round(futureValue(MONTHLY, RATE, 20))},
      ],
      caption: 'Starting ten years earlier does not add ten years of growth. It multiplies it.',
      source: 'Illustrative calculation, 7% a year',
    },
    {
      id: 'compare',
      type: 'comparison',
      durationSec: 7,
      title: 'Thirty years, side by side',
      left: {label: 'What you deposit', value: compact(deposits30), note: 'Out of pocket'},
      right: {
        label: 'What you end with',
        value: compact(final30),
        note: 'After compounding',
        tone: 'gain',
      },
      caption: 'The gap between those two numbers is the whole story.',
    },
    {
      id: 'outro',
      type: 'outro',
      durationSec: 5,
      title: 'Start early. Stay consistent.',
      cta: 'Follow for more money explainers',
      caption: 'The best time to start was years ago. The next best is this month.',
    },
  ],
};

export const defaultFinancialDocProps: FinancialDocumentaryProps = {manifest: sampleManifest};
