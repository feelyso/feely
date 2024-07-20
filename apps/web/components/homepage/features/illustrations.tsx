"use client";

import React, { useState } from "react";
import { Separator } from "@feely/ui/components/separator";
import { Toggle } from "@feely/ui/components/toggle";
import { Skeleton } from "@feely/ui/components/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@feely/ui/components/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@feely/ui/components/hover-card";
import { CheckCircle, ChevronUp, CircleDashed, Gift, Loader2 } from "@feely/ui/components/icon";
import { Tag } from "@feely/ui/components/tag";

interface Item {
  image: string;
  name: string;
  title?: string;
  fallback?: string;
  count?: number;
  topic?: string;
  karmas?: number;
  position?: string;
  toggled?: boolean;
}

export const FirstIllustration = () => {
  const initialItems: Item[] = [
    {
      image: "/images/homepage/avatar-1.png",
      name: "Federico Kratter Thaler",
      title: "📍 Custom roadmap label",
      fallback: "FK",
      count: 53,
      topic: "✨ Feature",
    },
    {
      image: "/images/homepage/avatar-2.png",
      name: "Jane Cooper",
      title: "🤖 Zapier integration",
      fallback: "JC",
      count: 15,
      topic: "🤖 Integration",
    },
  ];

  const [items, setItems] = useState(initialItems);

  interface CountButtonProps {
    count: number | undefined;
    onToggle: () => void;
    toggled: boolean;
  }

  const handleToggle = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, toggled: !item.toggled };
        }
        return item;
      })
    );
  };

  const CountButton: React.FC<CountButtonProps> = ({ count = 0, onToggle, toggled }) => (
    <Toggle
      variant="outline"
      className="grid h-14 w-11 justify-items-center gap-0 rounded p-1"
      onPressedChange={onToggle}
      pressed={toggled}>
      <ChevronUp size={24} />
      <p className="text-md text-center">{count + (toggled ? 1 : 0)}</p>
    </Toggle>
  );

  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 size-full px-5 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
        <div className="border-default grid size-full gap-1 rounded-t-lg border border-b-0 p-1">
          {items.map((item, index) => (
            <>
              <div
                key={index}
                className="bg-item hover:bg-item-hover flex items-start justify-between gap-6 rounded p-4">
                <div className="flex w-full items-start justify-normal gap-4">
                  <Avatar className="mt-1 hidden sm:flex" size="xl">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="grid w-full gap-1">
                    <h4 className="text-lg-semibold line-clamp-1 ">{item.title}</h4>
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                    <div className="text-description flex items-center space-x-2 text-sm">
                      <p className="text-sm-medium text-brand hover:text-brand-hover line-clamp-1 cursor-pointer">
                        {item.name}
                      </p>
                      <div className="bg-muted hidden size-1 rounded-full sm:flex" />
                      <p className="hidden sm:flex">{item.topic}</p>
                    </div>
                  </div>
                </div>
                <CountButton
                  count={item.count}
                  onToggle={() => handleToggle(index)}
                  toggled={!!item.toggled}
                />
              </div>
              <Separator />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatusItem {
  count: number;
  toggled?: boolean;
}

export const SecondIllustration = () => {
  const initialStatuses: StatusItem[] = [
    { count: 53 },
    { count: 15 },
    { count: 47 },
    { count: 138 },
    { count: 78 },
    { count: 91 },
  ];

  const [items, setItems] = useState(initialStatuses);

  interface CountButtonProps {
    count: number;
    onToggle: () => void;
    toggled: boolean;
  }

  const handleToggle = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, toggled: !item.toggled };
        }
        return item;
      })
    );
  };

  const CountButton: React.FC<CountButtonProps> = ({ count, onToggle, toggled }) => (
    <Toggle
      variant="outline"
      className="grid h-14 w-11 justify-items-center gap-0 rounded p-1"
      onPressedChange={onToggle}
      pressed={toggled}>
      <ChevronUp size={24} />
      <p className="text-md text-center">{count + (toggled ? 1 : 0)}</p>
    </Toggle>
  );

  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 flex size-full gap-4 px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="border-default hidden size-full gap-1 rounded-t-lg border border-b-0 p-1 sm:grid">
          <div className="border-default flex h-12 w-full items-center border-b px-2 pb-2 pt-1">
            <Tag colors="violet">
              <CircleDashed />
              Planned
            </Tag>
          </div>
          {items
            .filter((_, index) => index < 2)
            .map((item, index) => (
              <>
                <div key={index} className="bg-item hover:bg-item-hover flex items-start gap-2 rounded p-2">
                  <div className="grid w-full gap-1">
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                  </div>
                  <CountButton
                    count={item.count}
                    onToggle={() => handleToggle(index)}
                    toggled={!!item.toggled}
                  />
                </div>
                <Separator />
              </>
            ))}
        </div>
        <div className="border-default grid size-full gap-1 rounded-t-lg border border-b-0 p-1">
          <div className="border-default flex h-12 w-full items-center border-b px-2 pb-2 pt-1">
            <Tag colors="blue">
              <Loader2 />
              In Progress
            </Tag>
          </div>
          {items
            .filter((_, index) => index >= 2 && index < 4)
            .map((item, index) => (
              <>
                <div
                  key={index + 2}
                  className="bg-item hover:bg-item-hover flex items-start gap-2 rounded p-2">
                  <div className="grid w-full gap-1">
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                  </div>
                  <CountButton
                    count={item.count}
                    onToggle={() => handleToggle(index + 2)}
                    toggled={!!item.toggled}
                  />
                </div>
                <Separator />
              </>
            ))}
        </div>
        <div className="border-default hidden size-full gap-1 rounded-t-lg border border-b-0 p-1 lg:grid">
          <div className="border-default flex h-12 w-full items-center border-b px-2 pb-2 pt-1">
            <Tag colors="emerald">
              <CheckCircle />
              Completed
            </Tag>
          </div>
          {items
            .filter((_, index) => index >= 4)
            .map((item, index) => (
              <>
                <div
                  key={index + 4}
                  className="bg-item hover:bg-item-hover flex items-start gap-2 rounded p-2">
                  <div className="grid w-full gap-1">
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                    <Skeleton shape="line" className="h-4 w-full rounded" />
                  </div>
                  <CountButton
                    count={item.count}
                    onToggle={() => handleToggle(index + 4)}
                    toggled={!!item.toggled}
                  />
                </div>
                <Separator />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export const ThirdIllustration = () => {
  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 size-full px-5 pt-5 sm:px-6 sm:pt-6 md:px-5 md:pt-5">
        <div className="border-default grid size-full gap-5 rounded-t-lg border border-b-0 p-6">
          <div className="grid gap-1.5">
            <p className="text-md text-description">15 Jul 2024</p>
            <h4 className="text-heading-subsection">🤖 Zapier integration</h4>
          </div>
          <div className="grid gap-2">
            <Skeleton shape="line" className="h-4 w-full rounded" />
            <Skeleton shape="line" className="h-4 w-full rounded" />
            <Skeleton shape="line" className="h-4 w-full rounded" />
            <Skeleton shape="line" className="h-4 w-full rounded" />
            <Skeleton shape="line" className="h-4 w-full rounded" />
            <Skeleton shape="line" className="h-4 w-full rounded" />
            <Skeleton shape="line" className="h-4 w-full rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FourthIllustration = () => {
  const items: Item[] = [
    {
      image: "/images/homepage/avatar-2.png",
      name: "Jane Cooper",
      fallback: "JC",
      position: "🥇",
      karmas: 131,
    },
    {
      image: "/images/homepage/avatar-1.png",
      name: "Federico Kratter Thaler",
      fallback: "FK",
      position: "🥈",
      karmas: 123,
    },
    {
      image: "/images/homepage/avatar-1.png",
      name: "Esther Howard",
      fallback: "EH",
      position: "🥉",
      karmas: 113,
    },
  ];

  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 size-full px-5 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
        <div className="border-default grid size-full gap-1 rounded-t-lg border border-b-0 p-1">
          {items.map((item, index) => (
            <>
              <div
                key={index}
                className="bg-item hover:bg-item-hover flex items-center justify-between gap-6 rounded p-4">
                <div className="flex w-full items-center justify-normal gap-4">
                  <div className="flex size-8 items-center justify-center">
                    <p className="text-heading-subsection">{item.position}</p>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Avatar className="mt-1 hidden sm:flex" size="xl">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback>{item.fallback}</AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/vercel.png" />
                          <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-md-semibold">{item.name}</p>
                          <p className="text-md">The React Framework – created and maintained by @vercel.</p>
                          <div className="flex items-center pt-2">
                            <span className="text-description text-sm">Joined December 2021</span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div className="grid w-full gap-1">
                    <h4 className="text-lg-semibold line-clamp-1 ">{item.name}</h4>
                    <p className="text-description line-clamp-1 text-sm">🪬 {item.karmas} karmas</p>
                  </div>
                </div>
                <Skeleton shape="line" className="hidden h-6 w-20 rounded sm:flex" />
              </div>
              <Separator />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SixthIllustration = () => {
  return (
    <div className="relative flex size-full items-center justify-center">
      <div className="border-secondary rounded-full border p-6">
        <div className="border-secondary rounded-full border p-4">
          <div className="border-default bg-subtle rounded-full border p-3">
            <Gift size={36} className="stroke-amber-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
