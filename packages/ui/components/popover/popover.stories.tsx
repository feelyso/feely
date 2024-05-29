// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays rich content in a portal, triggered by a button.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%8D%9D-Fusillo-Design-System?type=design&node-id=540%3A8871&mode=design&t=h85Ey3chnxVlElkp-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="col-span-2" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  args: {},
};
