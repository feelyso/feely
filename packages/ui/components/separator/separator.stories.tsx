// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import customs
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description:
        'Define the axis that will divide the separator',
      table: {
        defaultValue: { summary: 'horizontal' },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Visually or semantically separates content.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8876&mode=design&t=7r34RfU06jHXNJDx-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-lg-semibold">When4meet</h4>
        <p className="text-md text-description">
          Crafting inclusive experiences for everyone
        </p>
      </div>
      <Separator {...args} orientation="horizontal" className="my-4" />
      <div className="flex h-6 items-center space-x-4 text-md">
        <div>Blog</div>
        <Separator {...args} orientation="vertical" />
        <div>Docs</div>
        <Separator {...args} orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <div>
      <h4 className="text-lg-semibold">When4meet</h4>
      <Separator {...args} className="my-4" />
      <p className="text-md text-description">
        Crafting inclusive experiences for everyone
      </p>
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: { table: { disable: true } },
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-6 items-center space-x-4 text-md">
      <div>Blog</div>
      <Separator {...args} orientation="vertical" />
      <div>Docs</div>
      <Separator {...args} orientation="vertical" />
      <div>Source</div>
    </div>
  ),
  args: {
    orientation: 'vertical',
  },
  argTypes: {
    orientation: { table: { disable: true } },
  },
};
