export type Tone = 'neutral' | 'gain' | 'loss';

type SceneBase = {
  id: string;
  durationSec: number;
  /** Spoken line, shown as word-by-word captions. */
  caption?: string;
  /** Shown as a small "Source: ..." line. */
  source?: string;
  /** Optional sound effect, path relative to /public (or an http URL). */
  sfx?: string;
};

export type IntroScene = SceneBase & {
  type: 'intro';
  title: string;
  subtitle?: string;
};

export type HeadlineScene = SceneBase & {
  type: 'headline';
  kicker?: string;
  headline: string;
  body?: string;
  tone?: Tone;
};

export type BarDatum = { label: string; value: number; color?: string };

export type BarChartScene = SceneBase & {
  type: 'bar-chart';
  title: string;
  data: BarDatum[];
  valuePrefix?: string;
  valueSuffix?: string;
};

export type LineChartScene = SceneBase & {
  type: 'line-chart';
  title: string;
  /** One label per value (empty string to skip a label). */
  labels: string[];
  values: number[];
  valuePrefix?: string;
  valueSuffix?: string;
};

export type TickerItem = {
  symbol: string;
  name?: string;
  price: number;
  changePct: number;
};

export type TickerScene = SceneBase & {
  type: 'ticker';
  title?: string;
  items: TickerItem[];
  currency?: string;
};

export type StatScene = SceneBase & {
  type: 'stat';
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  note?: string;
  tone?: Tone;
};

export type ComparisonSide = {
  label: string;
  value: string;
  note?: string;
  tone?: Tone;
};

export type ComparisonScene = SceneBase & {
  type: 'comparison';
  title?: string;
  left: ComparisonSide;
  right: ComparisonSide;
};

export type QuoteScene = SceneBase & {
  type: 'quote';
  quote: string;
  author: string;
  role?: string;
};

export type OutroScene = SceneBase & {
  type: 'outro';
  title: string;
  cta?: string;
};

export type Scene =
  | IntroScene
  | HeadlineScene
  | BarChartScene
  | LineChartScene
  | TickerScene
  | StatScene
  | ComparisonScene
  | QuoteScene
  | OutroScene;

export type DocumentaryManifest = {
  title: string;
  brand?: string;
  /** Set false to hide captions. Default true. */
  captions?: boolean;
  /** Voice-over track, path relative to /public (or an http URL). */
  narrationSrc?: string;
  musicSrc?: string;
  /** 0..1, default 0.12 */
  musicVolume?: number;
  scenes: Scene[];
};

export type FinancialDocumentaryProps = {
  manifest: DocumentaryManifest;
};
