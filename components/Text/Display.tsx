import { html as h, css } from "react-strict-dom";
import { baseline, fontWeight } from "../../tokens/typography.stylex";

const styles = css.create({
  root: {
    fontWeight: fontWeight.bold,
  },
  small: {
    fontSize: baseline["36"],
    lineHeight: "40px",
    // lineHeight: baseline["40"],
  },
  medium: {
    fontSize: baseline["40"],
    lineHeight: "44px",
    // lineHeight: baseline["44"],
  },
  large: {
    fontSize: baseline["44"],
    lineHeight: "48px",
    // lineHeight: baseline["48"],
  },
});

export function Display({
  children,
  size = "medium",
}: {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}) {
  return <h.span style={[styles.root, styles[size]]}>{children}</h.span>;
}
