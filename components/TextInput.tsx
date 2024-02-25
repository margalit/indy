import { html as h, css } from "react-strict-dom";
import { spacing } from "../tokens/spacing.stylex";
import { baseline, fontWeight } from "../tokens/typography.stylex";
import { Label } from "./Text/Label";
import { Stack } from "./Stack";
import { radius } from "../tokens/borders.stylex";

const styles = css.create({
  root: {
    boxSizing: "border-box",
    position: "relative",
    fontWeight: fontWeight.medium,
    borderRadius: radius.medium,
    minWidth: "160px",
  },
  medium: {
    height: spacing["40"],
    fontSize: baseline["16"],
    paddingInline: spacing["08"],
  },
  large: {
    height: spacing[48],
    fontSize: baseline["20"],
    paddingInline: spacing["08"],
  },
});

export function TextInput({
  size = "medium",
  label,
}: {
  size?: "medium" | "large";
  label: string;
}) {
  return (
    <Stack gap={size === "medium" ? "04" : "08"}>
      <Label size={size}>{label}</Label>
      <h.input style={[styles.root, styles[size]]} />
      <Label size={size === "medium" ? "small" : "medium"}>
        Some hint text
      </Label>
    </Stack>
  );
}
