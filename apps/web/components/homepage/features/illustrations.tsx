"use client";

import React, { useState } from "react";
import { Separator } from "@feely/ui/components/separator";
import { Toggle } from "@feely/ui/components/toggle";
import { Skeleton } from "@feely/ui/components/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@feely/ui/components/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@feely/ui/components/hover-card";
import { RadioGroup, RadioGroupItem } from "@feely/ui/components/radio-group";
import { Label } from "@feely/ui/components/label";
import {
  AlarmClock,
  Banknote,
  Beer,
  Bone,
  Bot,
  Bug,
  CakeSlice,
  Carrot,
  CarTaxiFront,
  CheckCircle,
  ChefHat,
  Cherry,
  ChevronUp,
  CircleDashed,
  Croissant,
  Crown,
  Diamond,
  Dices,
  Drum,
  Egg,
  FireExtinguisher,
  Fish,
  Footprints,
  Gem,
  Ghost,
  Gift,
  Handshake,
  Heart,
  IceCream,
  Joystick,
  Layers,
  ListChecks,
  Loader2,
  Lollipop,
  Luggage,
  Mailbox,
  Medal,
  Megaphone,
  Merge,
  Moon,
  Palette,
  Paperclip,
  Rocket,
  Shield,
  Tags,
  TreePalm,
} from "@feely/ui/components/icon";
import { Tag } from "@feely/ui/components/tag";
import { Button } from "@feely/ui/components/button";
import { useTheme } from "next-themes";

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
            <div key={index}>
              <div className="bg-item hover:bg-item-hover flex items-start justify-between gap-6 rounded p-4">
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
            </div>
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
              <div key={index}>
                <div className="bg-item hover:bg-item-hover flex items-start gap-2 rounded p-2">
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
              </div>
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
              <div key={index + 2}>
                <div className="bg-item hover:bg-item-hover flex items-start gap-2 rounded p-2">
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
              </div>
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
              <div key={index + 4}>
                <div className="bg-item hover:bg-item-hover flex items-start gap-2 rounded p-2">
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
              </div>
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
      image: "/images/homepage/avatar-3.png",
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
            <div key={index}>
              <div className="bg-item hover:bg-item-hover flex items-center justify-between gap-6 rounded p-4">
                <div className="flex w-full items-center justify-normal gap-4">
                  <div className="flex size-8 items-center justify-center">
                    <p className="text-heading-subsection">{item.position}</p>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Avatar className="border-default mt-1 hidden rounded-full border sm:flex" size="xl">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback>{item.fallback}</AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex items-center space-x-2">
                        <Avatar className="border-default mt-1 hidden rounded-full border sm:flex" size="xl">
                          <AvatarImage src={item.image} alt={item.name} />
                          <AvatarFallback>{item.fallback}</AvatarFallback>
                        </Avatar>
                        <div className="grid w-full gap-0">
                          <h4 className="text-lg-semibold line-clamp-1 ">{item.name}</h4>
                          <p className="text-description line-clamp-1 text-sm">🪬 {item.karmas} karmas</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div className="grid w-full gap-0">
                    <h4 className="text-lg-semibold line-clamp-1 ">{item.name}</h4>
                    <p className="text-description line-clamp-1 text-sm">🪬 {item.karmas} karmas</p>
                  </div>
                </div>
                <Skeleton shape="line" className="hidden h-6 w-20 rounded sm:flex" />
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface Badge {
  icon: JSX.Element;
  color?: string;
}

export const FifthIllustration = () => {
  const badges: Badge[] = [
    {
      icon: <Cherry size={24} />,
      color: "red",
    },
    {
      icon: <ChefHat size={24} />,
      color: "orange",
    },
    {
      icon: <Carrot size={24} />,
      color: "amber",
    },
    {
      icon: <CarTaxiFront size={24} />,
      color: "yellow",
    },
    {
      icon: <Bug size={24} />,
      color: "lime",
    },
    {
      icon: <Bot size={24} />,
      color: "green",
    },
    {
      icon: <CakeSlice size={24} />,
      color: "emerald",
    },
    {
      icon: <Beer size={24} />,
      color: "teal",
    },
    {
      icon: <Bone size={24} />,
      color: "cyan",
    },
    {
      icon: <Banknote size={24} />,
      color: "sky",
    },
    {
      icon: <Diamond size={24} />,
      color: "blue",
    },
    {
      icon: <Crown size={24} />,
      color: "indigo",
    },
    {
      icon: <Dices size={24} />,
      color: "violet",
    },
    {
      icon: <AlarmClock size={24} />,
      color: "purple",
    },
    {
      icon: <Egg size={24} />,
      color: "fuchsia",
    },
    {
      icon: <Croissant size={24} />,
      color: "pink",
    },
    {
      icon: <FireExtinguisher size={24} />,
      color: "rose",
    },
    {
      icon: <Fish size={24} />,
      color: "red",
    },
    {
      icon: <Heart size={24} />,
      color: "orange",
    },
    {
      icon: <Joystick size={24} />,
      color: "amber",
    },
    {
      icon: <Medal size={24} />,
      color: "yellow",
    },
    {
      icon: <Megaphone size={24} />,
      color: "lime",
    },
    {
      icon: <Ghost size={24} />,
      color: "green",
    },
    {
      icon: <Gem size={24} />,
      color: "emerald",
    },
    {
      icon: <Handshake size={24} />,
      color: "teal",
    },
    {
      icon: <Layers size={24} />,
      color: "cyan",
    },
    {
      icon: <Footprints size={24} />,
      color: "sky",
    },
    {
      icon: <ListChecks size={24} />,
      color: "blue",
    },
    {
      icon: <Merge size={24} />,
      color: "indigo",
    },
    {
      icon: <Lollipop size={24} />,
      color: "violet",
    },
    {
      icon: <Luggage size={24} />,
      color: "purple",
    },
    {
      icon: <Moon size={24} />,
      color: "fuchsia",
    },
    {
      icon: <IceCream size={24} />,
      color: "pink",
    },
    {
      icon: <Palette size={24} />,
      color: "rose",
    },
    {
      icon: <Rocket size={24} />,
      color: "red",
    },
    {
      icon: <Mailbox size={24} />,
      color: "orange",
    },
    {
      icon: <Paperclip size={24} />,
      color: "amber",
    },
    {
      icon: <Tags size={24} />,
      color: "yellow",
    },
    {
      icon: <Shield size={24} />,
      color: "lime",
    },
    {
      icon: <TreePalm size={24} />,
      color: "green",
    },
  ];

  const Badge: React.FC<Badge> = ({ icon, color }) => {
    const { theme } = useTheme();
    const fillBadgeColor = theme === "dark" ? `var(--color-${color}-950)` : `var(--color-${color}-100)`;
    const strokeBadgeColor = theme === "dark" ? `var(--color-${color}-800)` : `var(--color-${color}-300)`;
    const strokeIconColor = theme === "dark" ? `var(--color-${color}-300)` : `var(--color-${color}-800)`;
    return (
      <div className="relative flex size-12 items-center justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0">
        {React.cloneElement(icon, {
          style: { stroke: strokeIconColor },
          className: `relative z-40`,
        })}
        <svg
          className="absolute z-10"
          width="42"
          height="46"
          viewBox="0 0 42 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.5 2.17543L37.2846 9.55662C39.4504 10.8071 40.7846 13.1179 40.7846 15.6188V30.3812C40.7846 32.8821 39.4504 35.1929 37.2846 36.4434L24.5 43.8246C22.3342 45.075 19.6658 45.075 17.5 43.8246L4.71539 36.4434C2.54958 35.1929 1.21539 32.8821 1.21539 30.3812V15.6188C1.21539 13.1179 2.54958 10.8071 4.71539 9.55662L17.5 2.17543C19.6658 0.924997 22.3342 0.924997 24.5 2.17543Z"
            strokeWidth="2"
            style={{
              fill: fillBadgeColor,
              stroke: strokeBadgeColor,
            }}
          />
        </svg>
      </div>
    );
  };
  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 flex size-full flex-wrap items-center justify-center gap-2 px-5 pt-5 sm:items-start sm:px-6 sm:pt-6 md:gap-4 md:px-8 md:pt-8">
        {badges.map((badge, index) => (
          <Badge key={index} icon={badge.icon} color={badge.color} />
        ))}
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

export const SeventhIllustration = () => {
  const [selectedColor, setSelectedColor] = useState("violet");
  const colorStyles = {
    "--bg-color": `var(--color-${selectedColor}-600)`,
    "--hover-bg-color": `var(--color-${selectedColor}-500)`,
    "--dark-hover-bg-color": `var(--color-${selectedColor}-700)`,
    "--active-bg-color": `var(--color-${selectedColor}-700)`,
    "--dark-active-bg-color": `var(--color-${selectedColor}-500)`,
  } as React.CSSProperties;
  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 flex size-full flex-col items-center gap-3 px-5 pt-5 sm:flex-row sm:items-start sm:px-6 sm:pt-6 md:gap-6 md:px-8 md:pt-8">
        <RadioGroup
          onValueChange={(value) => setSelectedColor(value)}
          defaultValue="violet"
          className="my-4 flex flex-row gap-3 sm:flex-col">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="violet"
              id="r1"
              style={colorStyles}
              className="border-2 border-violet-500 focus-visible:ring-[var(--hover-bg-color)] [&>span>svg]:fill-[var(--bg-color)] [&>span>svg]:stroke-[var(--bg-color)]"
            />
            <Label htmlFor="r1" className="sr-only">
              Violet
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="rose"
              id="r2"
              style={colorStyles}
              className="border-2 border-rose-500 focus-visible:ring-[var(--hover-bg-color)] [&>span>svg]:fill-[var(--bg-color)] [&>span>svg]:stroke-[var(--bg-color)]"
            />
            <Label htmlFor="r2" className="sr-only">
              Rose
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="teal"
              id="r3"
              style={colorStyles}
              className="border-2 border-teal-500 focus-visible:ring-[var(--hover-bg-color)] [&>span>svg]:fill-[var(--bg-color)] [&>span>svg]:stroke-[var(--bg-color)]"
            />
            <Label htmlFor="r3" className="sr-only">
              Teal
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="amber"
              id="r4"
              style={colorStyles}
              className="border-2 border-amber-500 focus-visible:ring-[var(--hover-bg-color)] [&>span>svg]:fill-[var(--bg-color)] [&>span>svg]:stroke-[var(--bg-color)]"
            />
            <Label htmlFor="r4" className="sr-only">
              Amber
            </Label>
          </div>
        </RadioGroup>
        <div className="border-default grid size-full gap-4 rounded-t-lg border border-b-0 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-heading-subsection">Ideas</h4>
            <Button
              style={colorStyles}
              className="bg-[var(--bg-color)] hover:bg-[var(--hover-bg-color)] active:bg-[var(--active-bg-color)] dark:hover:bg-[var(--dark-hover-bg-color)] dark:active:bg-[var(--dark-active-bg-color)]">
              New idea
            </Button>
          </div>
          <Separator />
          <div className="hidden items-center justify-between sm:flex sm:gap-16 md:gap-32">
            <Skeleton shape="line" className="h-9 rounded" />
            <div className="flex gap-2">
              <Skeleton shape="line" className="h-9 w-24 rounded" />
              <Skeleton shape="line" className="h-9 w-24 rounded" />
            </div>
          </div>
          <div className="grid gap-2">
            <Skeleton shape="line" className="h-8 rounded" />
            <Skeleton shape="line" className="h-8 rounded" />
            <Skeleton shape="line" className="h-8 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
