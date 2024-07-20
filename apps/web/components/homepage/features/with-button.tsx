import React from "react";

interface WithButtonProps {
  title: string | JSX.Element;
  description: string;
  button: JSX.Element;
}

const WithButton: React.FC<WithButtonProps> = ({ title, description, button }) => {
  return (
    <div className="border-secondary w-full border-b">
      <div className="border-secondary mx-auto grid size-full max-w-screen-lg grid-cols-1 border-x px-4 md:grid-cols-3 md:gap-4">
        <div className="border-secondary col-span-2 grid size-full gap-2 border-x p-4">
          <h2 className="text-heading-section">{title}</h2>
          <p className="text-description text-lg">{description}</p>
        </div>
        <div className="border-secondary flex size-full items-center justify-normal border-x p-4 md:justify-center">
          {button}
        </div>
      </div>
    </div>
  );
};

export default WithButton;
