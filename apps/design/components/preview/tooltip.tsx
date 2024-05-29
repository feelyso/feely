// Import core
import { FilePlus } from "lucide-react";
// Import customs
import Preview from "@components/preview/preview";
import { Button } from "@feely/ui/components/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@feely/ui/components/tooltip";

export const TooltipPreview = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipOutline = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipFilled = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent type="fill">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipSide = () => (
  <Preview>
    <div className="grid justify-items-center gap-5 sm:flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </Preview>
);
