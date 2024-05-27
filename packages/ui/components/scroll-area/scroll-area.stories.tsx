// Import core
import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
// Import customs
import { ScrollArea, ScrollBar } from './scroll-area';
import { Separator } from '../separator';


const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Augments native scroll functionality for custom, cross-browser styling.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8874&mode=design&t=BNqih1pZMuav038B-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea
      {...args}
      className="h-40 w-48 rounded border border-default"
    >
      <div className="p-4">
        <h4 className="mb-4 text-md-medium leading-none">Tags</h4>
        {Array.from({ length: 50 })
          .map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
          .map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-md" key={tag}>
                {tag}
              </div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
      </div>
    </ScrollArea>
  ),
  args: {},
};

export interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
];

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea {...args} className="w-96 whitespace-nowrap rounded border border-default">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-sm text-description">
              Photo by{' '}
              <span className="font-semibold text">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  args: {},
};
