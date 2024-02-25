import { html as h, css } from "react-strict-dom";
import { ScrollView } from "react-native";
import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import { Stack } from "./components/Stack";
import { TextInput } from "./components/TextInput";
import { Display } from "./components/Text/Display";
import { Title } from "./components/Text/Title";
import { Body } from "./components/Text/Body";
import { Label } from "./components/Text/Label";
import { font } from "./tokens/typography.stylex";
import { spacing } from "./tokens/spacing.stylex";

const styles = css.create({
  main: {
    fontFamily: font.sans,
    paddingBlock: spacing["64"],
    paddingInline: spacing["24"],
    maxWidth: "640px",
    margin: "auto",
  },
});

function Example({ heading, description, children }) {
  return (
    <Stack gap="16">
      <Stack gap="04">
        <Stack direction="row" items="center">
          <Title>{heading}</Title>
          <Badge rounded>WIP</Badge>
        </Stack>
        <Body size="large">{description}</Body>
      </Stack>
      {children}
    </Stack>
  );
}

export default function App() {
  return (
    <ScrollView>
      <h.main style={[styles.main]}>
        <Stack gap="64">
          <Stack gap="24">
            <Stack gap="04">
              <Display size="large">Indy</Display>
              <Title size="large">
                Indy is a small, opinionated design system for iOS, Android and
                Web.
              </Title>
            </Stack>
            <Stack direction="row" gap="16">
              <Button size="large">Download</Button>
            </Stack>
          </Stack>
          <Example
            heading="Text"
            description="The Text components are used to display text content in the
              application."
          >
            <Stack>
              <Display size="large">Display large</Display>
              <Display size="medium">Display medium</Display>
              <Display size="small">Display small</Display>
            </Stack>
            <Stack>
              <Title size="large">Title large</Title>
              <Title size="medium">Title medium</Title>
              <Title size="small">Title small</Title>
            </Stack>
            <Stack direction="row" gap="24">
              <Stack>
                <Body size="large" weight="regular">
                  Body large (regular)
                </Body>
                <Body size="medium" weight="regular">
                  Body medium (regular)
                </Body>
                <Body size="small" weight="regular">
                  Body small (regular)
                </Body>
              </Stack>
              <Stack>
                <Body size="large" weight="medium">
                  Body large (medium)
                </Body>
                <Body size="medium" weight="medium">
                  Body medium (medium)
                </Body>
                <Body size="small" weight="medium">
                  Body small (medium)
                </Body>
              </Stack>
              <Stack>
                <Body size="large" weight="semibold">
                  Body large (semibold)
                </Body>
                <Body size="medium" weight="semibold">
                  Body medium (semibold)
                </Body>
                <Body size="small" weight="semibold">
                  Body small (semibold)
                </Body>
              </Stack>
            </Stack>
            <Stack>
              <Label size="large">Label large</Label>
              <Label size="medium">Label medium</Label>
              <Label size="small">Label small</Label>
            </Stack>
          </Example>
          <Example
            heading="TextField"
            description="The TextField component is used to collect user input. It should
              be used for short, single-line text input."
          >
            <Stack gap="16">
              <TextInput label="Medium TextField" />
              <TextInput label="Large TextField" size="large" />
            </Stack>
          </Example>
          <Example
            heading="Button"
            description="The Button component is used to trigger an action or event, such
              as submitting a form or opening a dialog."
          >
            <Stack gap="16">
              <Stack direction="row">
                <Button size="small">Button</Button>
                <Button size="small" rounded>
                  Button
                </Button>
              </Stack>
              <Stack direction="row">
                <Button>Button</Button>
                <Button rounded>Button</Button>
              </Stack>
              <Stack direction="row">
                <Button size="large">Button</Button>
                <Button size="large" rounded>
                  Button
                </Button>
              </Stack>
            </Stack>
          </Example>
          <Example
            heading="Badge"
            description="The Badge component is used to display a small amount of
              information to the user."
          >
            <Stack gap="16">
              <Stack direction="row">
                <Badge size="small">Badge</Badge>
                <Badge size="small" rounded>
                  Badge
                </Badge>
              </Stack>
            </Stack>
            <Stack gap="16">
              <Stack direction="row">
                <Badge>Badge</Badge>
                <Badge rounded>Badge</Badge>
              </Stack>
            </Stack>
          </Example>
        </Stack>
      </h.main>
    </ScrollView>
  );
}
