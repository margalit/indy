import { html as h, css } from "react-strict-dom";
import { baseline, fontWeight } from "../../tokens/typography.stylex";

const styles = css.create({
  root: {},
  small: {
    fontSize: baseline["12"],
    lineHeight: "20px",
    // lineHeight: baseline["20"],
  },
  medium: {
    fontSize: baseline["16"],
    lineHeight: "24px",
    // lineHeight: baseline["24"],
  },
  large: {
    fontSize: baseline["20"],
    lineHeight: "28px",
    // lineHeight: baseline["28"],
  },
  regularWeight: {
    fontWeight: fontWeight.regular,
  },
  mediumWeight: {
    fontWeight: fontWeight.medium,
  },
  semiboldWeight: {
    fontWeight: fontWeight.semibold,
  },
});

export function Body({
  children,
  size = "medium",
  weight = "regular",
}: {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  weight?: "regular" | "medium" | "semibold";
}) {
  return (
    <h.span style={[styles.root, styles[size], styles[`${weight}Weight`]]}>
      {children}
    </h.span>
  );
}
