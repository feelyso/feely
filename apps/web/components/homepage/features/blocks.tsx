import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@feely/ui/components/button";
import { Gem, Heart, ListOrdered, PlusCircle, Trophy, Users, Globe } from "@feely/ui/components/icon";
import Title from "@components/homepage/features/title";
import Icons from "@components/homepage/features/icons";
import EmptyRaw from "@components/homepage/features/empty-raw";
import WithButton from "@components/homepage/features/with-button";
import { DoubleCard, SingleCard } from "@components/homepage/features/cards";
import { GithubIcon } from "@components/homepage/social-icon";
import {
  FifthIllustration,
  FirstIllustration,
  FourthIllustration,
  SecondIllustration,
  SeventhIllustration,
  SixthIllustration,
  ThirdIllustration,
} from "@components/homepage/features/illustrations";

export const FirstBlock = () => {
  return (
    <>
      <EmptyRaw />
      <Title
        title={
          <>
            <span className="text-brand-gradient">Meet</span> feely
          </>
        }
        description="A nice spot for your users to give you feedbacks and co-create your projects."
      />
      <SingleCard
        title="Designed for your users"
        description="They’ll feel comfortable expressing their thoughts."
        illustration={<FirstIllustration />}
      />
      <Icons
        items={[
          {
            icon: <Gem className="stroke-amber-500" />,
            title: "Get your treasure.",
            description: "Collect user feedbacks.",
          },
          {
            icon: <ListOrdered className="stroke-amber-500" />,
            title: "Make order.",
            description: "Prioritize their ideas.",
          },
          {
            icon: <Trophy className="stroke-amber-500" />,
            title: "The best wins.",
            description: "Users vote each idea so you’ll know what to improve. ",
          },
        ]}
      />
      <EmptyRaw />
    </>
  );
};

export const SecondBlock = () => {
  return (
    <>
      <Title
        title={
          <>
            Get bigger <span className="text-brand-gradient">together</span>
          </>
        }
        description="Improve your project thanks to and with your users: grow up sharing everything. "
      />
      <DoubleCard
        firstTitle="Enlight the road"
        firstDescription="Share your roadmap, so every step is visible."
        firstIllustration={<SecondIllustration />}
        secondTitle="Share the updates "
        secondDescription="Notifications will help for each release."
        secondIllustration={<ThirdIllustration />}
      />
      <EmptyRaw />
    </>
  );
};

export const ThirdBlock = () => {
  return (
    <>
      <Title
        title={
          <>
            <span className="text-brand-gradient">Gratitude</span> spins the world
          </>
        }
        description="A loud kiss on the forehead and some rewards are good for your people."
      />
      <SingleCard
        title="Users gain points"
        description="Everytime their ideas get voted, they got points."
        illustration={<FourthIllustration />}
      />
      <DoubleCard
        firstTitle="Badges for great goals"
        firstDescription="Stimulate people to be an active part of the community and give them bagdes. "
        firstIllustration={<FifthIllustration />}
        secondTitle="Spread happiness"
        secondDescription="Give your users rewards to show your gratitude."
        secondIllustration={<SixthIllustration />}
      />
      <EmptyRaw />
    </>
  );
};

export const FourthBlock = () => {
  return (
    <>
      <Title
        title={
          <>
            Feely puts itself <span className="text-brand-gradient">in your shoes</span>
          </>
        }
        description="Make it a tool that represents your brand. Easy peasy."
      />
      <SingleCard
        title="Explore the theming"
        description="Feely can get dressed as you like."
        illustration={<SeventhIllustration />}
      />
      <Icons
        items={[
          {
            icon: <Heart className="stroke-amber-500" />,
            title: "Embed feely.",
            description: "You can do it wherever you feel like.",
          },
          {
            icon: <Globe className="stroke-amber-500" />,
            title: "Connect a custom domain.",
            description: "You can easily host feely on your own (sub)domain.",
          },
          {
            icon: <Users className="stroke-amber-500" />,
            title: "Feely loves team play.",
            description: "You can make it a perfect collaborative platform.",
          },
        ]}
      />
      <EmptyRaw />
    </>
  );
};

export const FifthBlock = () => {
  return (
    <>
      <Title
        title={
          <>
            Feely is <span className="text-brand-gradient">not shy</span>
          </>
        }
        description="It gets along with your workflow and your tools. Here are the main integrations."
      />
      <Icons
        items={[
          {
            icon: <Image width={40} height={40} alt="Notion logo" src="/images/notion.png" />,
            title: "Notion.",
            description: "Export each feedback to automatically create a new task.",
          },
          {
            icon: (
              <Image
                width={584}
                height={454}
                alt="Notion logo"
                src="/images/slack.png"
                className="bg-inverse size-6 overflow-hidden rounded object-cover"
              />
            ),
            title: "Slack.",
            description: "Get notifications every time an idea gets voted.",
          },
          {
            icon: <PlusCircle className="stroke-amber-500" />,
            title: "More.",
            description: "Feely is always at work to release new ones.",
          },
        ]}
      />
      <EmptyRaw />
    </>
  );
};

export const SixthBlock = () => {
  return (
    <>
      <WithButton
        title={
          <>
            Proudly <span className="text-brand-gradient">open source</span>
          </>
        }
        description="Feely is not greedy, and neither of us is: we keep this tool entirely open source. "
        button={
          <Button asChild variant="secondary">
            <Link href="https://github.com/feelyso/feely">
              <GithubIcon />
              Github
            </Link>
          </Button>
        }
      />
      <EmptyRaw />
    </>
  );
};
