import { css } from "react-strict-dom";

/**
 * 4px baseline grid
 */

export const baseline = css.defineVars({
  "12": "12px",
  "16": "16px",
  "20": "20px",
  "24": "24px",
  "28": "28px",
  "32": "32px",
  "36": "36px",
  "40": "40px",
  "44": "44px",
  "48": "48px",
});

export const font = css.defineVars({
  sans: "system-ui, sans-serif",
  serif: "Georgia, serif",
  mono: "Menlo, monospace",
});

export const fontWeight = css.defineVars({
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
});
