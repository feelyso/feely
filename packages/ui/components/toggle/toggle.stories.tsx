// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Toggle } from "./toggle";
import { Bold } from "../icon";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "outline"],
      description: "Define the look and feel of the toggle",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: null },
      },
    },
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  args: {
    variant: "default",
    disabled: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A two-state button that can be either on or off.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8885&mode=design&t=7r34RfU06jHXNJDx-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Base: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    variant: "default",
    disabled: false,
  },
};

export const Outline: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    variant: "outline",
    disabled: false,
  },
};

export const WithText: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
      Bold
    </Toggle>
  ),
  args: {
    variant: "default",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    variant: "default",
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};
