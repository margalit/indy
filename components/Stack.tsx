import { html as h, css } from "react-strict-dom";
import { spacing } from "../tokens/spacing.stylex";

type SpacingKey = keyof typeof spacing;

const styles = css.create({
  root: {
    display: "flex",
  },
  items: (align: "center" | "flex-start" | "flex-end") => ({
    alignItems: align,
  }),
  direction: (direction: "column" | "row") => ({
    flexDirection: direction,
  }),
  gap: (key: SpacingKey) => ({
    gap: spacing[key],
  }),
});

export function Stack({
  children,
  gap = "08",
  direction = "column",
  items = "flex-start",
}: {
  children: React.ReactNode;
  direction?: "column" | "row";
  gap?: keyof typeof spacing;
  items?: "center" | "flex-start" | "flex-end";
}) {
  return (
    <h.div
      style={[
        styles.root,
        styles.direction(direction),
        styles.gap(gap),
        styles.items(items),
      ]}
    >
      {children}
    </h.div>
  );
}
