import { html as h, css } from "react-strict-dom";
import { baseline, fontWeight } from "../../tokens/typography.stylex";

const styles = css.create({
  root: {
    fontWeight: fontWeight.regular,
  },
  small: {
    fontSize: baseline["12"],
    lineHeight: "16px",
    // lineHeight: baseline["16"],
  },
  medium: {
    fontSize: baseline["16"],
    lineHeight: "20px",
    // lineHeight: baseline["20"],
  },
  large: {
    fontSize: baseline["20"],
    lineHeight: "24px",
    // lineHeight: baseline["24"],
  },
});

export function Label({
  children,
  size = "medium",
}: {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}) {
  return <h.label style={[styles.root, styles[size]]}>{children}</h.label>;
}
