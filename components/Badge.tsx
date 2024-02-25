import { html as h, css } from "react-strict-dom";
import { spacing } from "../tokens/spacing.stylex";
import { baseline, fontWeight } from "../tokens/typography.stylex";
import { radius } from "../tokens/borders.stylex";
import { background, onBackground } from "../tokens/colors.stylex";

const styles = css.create({
  root: {
    display: "flex",
    alignItems: "center",
    fontWeight: fontWeight.semibold,
  },
  small: {
    height: spacing["16"],
    fontSize: baseline["12"],
    paddingInline: spacing["04"],
  },
  medium: {
    height: spacing["24"],
    fontSize: baseline["12"],
    paddingInline: spacing["08"],
  },
  radius: (radiusKey: keyof typeof radius) => ({
    borderRadius: radius[radiusKey],
  }),
  background: (colorKey: keyof typeof background) => ({
    backgroundColor: background[colorKey],
    color: onBackground[colorKey],
  }),
});

export function Badge({
  children,
  size = "medium",
  color = "neutral",
  rounded = false,
}: {
  children: string;
  size?: "small" | "medium" | "large";
  color?: "neutral";
  rounded?: boolean;
}) {
  return (
    <h.div
      style={[
        styles.root,
        styles[size],
        styles.background(color),
        styles.radius(rounded ? "rounded" : "small"),
      ]}
    >
      <h.span>{children}</h.span>
    </h.div>
  );
}
