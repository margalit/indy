import { html as h, css } from "react-strict-dom";
import { baseline, fontWeight } from "../../tokens/typography.stylex";

const styles = css.create({
  root: {
    fontWeight: fontWeight.medium,
  },
  small: {
    fontSize: baseline["24"],
    lineHeight: "28px",
    // lineHeight: baseline["28"],
  },
  medium: {
    fontSize: baseline["28"],
    lineHeight: "32px",
    // lineHeight: baseline["32"],
  },
  large: {
    fontSize: baseline["32"],
    lineHeight: "36px",
    // lineHeight: baseline["36"],
  },
});

export function Title({
  children,
  size = "medium",
}: {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}) {
  return <h.span style={[styles.root, styles[size]]}>{children}</h.span>;
}
