"use client";

// Import core
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// Import customs
import { cn } from "@feely/lib/twMerge";
import { Check, ChevronsUpDown } from "../icon";
import { Button } from "../button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../command";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Combobox = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[240px] justify-between">
          {value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..."}
          <ChevronsUpDown className="opacity-disabled ml-2 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}>
                <Check
                  className={cn("mr-2", value === framework.value ? "opacity-visible" : "opacity-invisible")}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Autocomplete input and command palette with a list of suggestions.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%8D%9D-Fusillo-Design-System?type=design&node-id=233%3A755&mode=design&t=WFdj0huEcHgBPdYp-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: () => <Combobox />,
  args: {},
};
