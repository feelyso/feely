// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: { type: "select" },
      description: "Determines whether one or multiple items can be opened at the same time.",
      table: {
        defaultValue: { summary: "single" },
      },
    },
    collapsible: {
      description: "When `type` is `single`, allows closing content when clicking trigger for an open item.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    defaultValue: {
      options: ["item-1", "item-2", "item-3"],
      control: { type: "select" },
      description: "The value of the item to expand when initially rendered",
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        defaultValue: { summary: false },
        type: { summary: null },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A vertically stacked set of interactive headings that each reveal a section of content.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=233%3A748&mode=design&t=MpDMELWReoDbdLIS-1",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: "single",
    collapsible: false,
    defaultValue: undefined,
  },
};

export const Multiple: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: "multiple",
  },
};

export const Collapsible: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: "single",
    collapsible: true,
  },
};

export const DefaultValue: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: "single",
    collapsible: false,
    defaultValue: "item-2",
  },
};
