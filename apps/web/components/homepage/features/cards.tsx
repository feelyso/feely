import React from "react";

interface CardProps {
  title: string;
  description: string;
  illustration: JSX.Element;
}

const SingleCard: React.FC<CardProps> = ({ title, description, illustration }) => {
  return (
    <div className="border-secondary w-full border-b">
      <div className="border-secondary mx-auto grid size-full max-w-screen-lg gap-4 border-x px-4">
        <div className="border-secondary block border-x p-2">
          <div className="border-default bg-subtle h-80 rounded-lg border p-1 shadow-sm">
            <div className="bg-elevated border-default flex h-full flex-col overflow-hidden rounded border">
              <div className="h-full grow">{illustration}</div>
              <div className="border-secondary grid w-full border-t px-4 py-3">
                <h3 className="text-heading-body">{title}</h3>
                <p className="text-description text-lg">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DoubleCardProps {
  firstTitle: string;
  firstDescription: string;
  firstIllustration: JSX.Element;
  secondTitle: string;
  secondDescription: string;
  secondIllustration: JSX.Element;
}

const DoubleCard: React.FC<DoubleCardProps> = ({
  firstTitle,
  firstDescription,
  firstIllustration,
  secondTitle,
  secondDescription,
  secondIllustration,
}) => {
  return (
    <div className="border-secondary w-full border-b">
      <div className="border-secondary mx-auto grid size-full max-w-screen-lg grid-cols-1 border-x px-4 md:grid-cols-3 md:gap-4">
        <div className="border-secondary col-span-2 block size-full border-x p-2">
          <div className="border-default bg-subtle h-80 rounded-lg border p-1 shadow-sm">
            <div className="bg-elevated border-default flex h-full flex-col overflow-hidden rounded border">
              <div className="h-full grow">{firstIllustration}</div>
              <div className="border-secondary grid w-full border-t px-4 py-3">
                <h3 className="text-heading-body">{firstTitle}</h3>
                <p className="text-description text-lg">{firstDescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-secondary block size-full border-x border-t p-2 md:border-t-0">
          <div className="border-default bg-subtle h-80 rounded-lg border p-1 shadow-sm">
            <div className="bg-elevated border-default flex h-full flex-col overflow-hidden rounded border">
              <div className="h-full grow">{secondIllustration}</div>
              <div className="border-secondary grid w-full border-t px-4 py-3">
                <h3 className="text-heading-body">{secondTitle}</h3>
                <p className="text-description text-lg">{secondDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleCard, DoubleCard };
