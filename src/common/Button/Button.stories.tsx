// Button.stories.tsx
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "error", "warning"],
      control: { type: "select" },
    },
    status: {
      options: ["idle", "loading"],
      control: { type: "select" },
    },
  },
} as Meta;

export const Primary: Story = (args) => (
  <Button
    type={"primary"}
    label={""}
    onClick={() => alert("Hallow")}
    {...args}
  />
);

Primary.args = {
  label: "Button",
  type: "primary",
  status: "idle",
};
