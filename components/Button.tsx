import { html as h, css } from "react-strict-dom";
import { spacing } from "../tokens/spacing.stylex";
import { baseline, fontWeight } from "../tokens/typography.stylex";
import { background, onBackground } from "../tokens/colors.stylex";
import { radius } from "../tokens/borders.stylex";

const styles = css.create({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    position: "relative",
    borderColor: "transparent",
    fontWeight: fontWeight.semibold,
  },
  small: {
    height: spacing["32"],
    fontSize: baseline["12"],
    paddingInline: spacing["16"],
  },
  medium: {
    height: spacing[40],
    fontSize: baseline["16"],
    paddingInline: spacing["24"],
  },
  large: {
    height: spacing[48],
    fontSize: baseline["20"],
    paddingInline: spacing["32"],
  },
  color: (colorKey: keyof typeof background) => ({
    backgroundColor: background[colorKey],
    color: onBackground[colorKey],
  }),
  radius: (radiusKey: keyof typeof radius) => ({
    borderRadius: radius[radiusKey],
  }),
});

export function Button({
  children,
  size = "medium",
  color = "primary",
  rounded = false,
}: {
  children: string;
  size?: "small" | "medium" | "large";
  color?: "neutral" | "primary";
  rounded?: boolean;
}) {
  return (
    <h.button
      style={[
        styles.root,
        styles[size],
        styles.color(color),
        styles.radius(rounded ? "rounded" : "medium"),
      ]}
    >
      <h.span>{children}</h.span>
    </h.button>
  );
}
