# Vertical Financial Documentary Engine

A manifest-driven Remotion composition for 1080x1920, 30fps explainers.
Duration is computed from the scene list, so add or remove scenes freely.

## Register (done by the setup script)

```tsx
<Composition
  id="FinancialDocumentary"
  component={FinancialDocumentary}
  durationInFrames={30 * 45}
  fps={30}
  width={1080}
  height={1920}
  defaultProps={defaultFinancialDocProps}
  calculateMetadata={calculateFinancialDocMetadata}
/>
```

## Render

```
npx remotion render FinancialDocumentary out/finance-doc.mp4
npx remotion render FinancialDocumentary out/custom.mp4 --props=./my-manifest.json
```

`my-manifest.json` must look like `{ "manifest": { ...DocumentaryManifest } }`.

## Scene types

Every scene has `id`, `type`, `durationSec`, and optionally `caption`, `source`, `sfx`.

| type | fields |
| --- | --- |
| `intro` | `title`, `subtitle?` |
| `headline` | `headline`, `kicker?`, `body?`, `tone?` |
| `line-chart` | `title`, `labels[]`, `values[]`, `valuePrefix?`, `valueSuffix?` |
| `bar-chart` | `title`, `data[{label,value,color?}]`, `valuePrefix?`, `valueSuffix?` |
| `ticker` | `title?`, `items[{symbol,name?,price,changePct}]`, `currency?` |
| `stat` | `label`, `value`, `prefix?`, `suffix?`, `decimals?`, `note?`, `tone?` |
| `comparison` | `title?`, `left{label,value,note?,tone?}`, `right{...}` |
| `quote` | `quote`, `author`, `role?` |
| `outro` | `title`, `cta?` |

`tone` is `neutral` (amber), `gain` (green) or `loss` (red).

## Examples

```json
{ "id": "mkts", "type": "ticker", "durationSec": 7, "title": "Markets today",
  "items": [
    { "symbol": "AAA", "name": "Example Co", "price": 123.45, "changePct": 1.2 },
    { "symbol": "BBB", "name": "Sample Inc", "price": 67.89, "changePct": -0.8 }
  ] }
```

```json
{ "id": "q", "type": "quote", "durationSec": 6,
  "quote": "Your quote here.", "author": "Name", "role": "Title" }
```

## Audio

Put files in `public/` and reference them by relative path in the manifest:
`narrationSrc`, `musicSrc`, `musicVolume`, or per-scene `sfx`. Missing files
make the render fail, so leave these unset until the files exist.

## Layout

Content sits inside a safe area (top 200px, bottom 520px, sides 72px) so it
stays clear of Reels / Shorts / TikTok UI. Adjust in `theme.ts`.

The sample manifest is illustrative compounding arithmetic, not market data.
