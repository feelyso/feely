// Import core
import { Bold } from "lucide-react";
// Import customs
import Preview from "@components/preview/preview";
import { Toggle } from "@feely/ui/components/toggle";

export const TogglePreview = () => (
  <Preview>
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  </Preview>
);

export const ToggleDefault = () => (
  <Preview>
    <Toggle aria-label="Toggle bold" variant="default">
      <Bold />
    </Toggle>
  </Preview>
);

export const ToggleOutline = () => (
  <Preview>
    <Toggle aria-label="Toggle bold" variant="outline">
      <Bold />
    </Toggle>
  </Preview>
);

export const ToggleWithText = () => (
  <Preview>
    <Toggle aria-label="Toggle bold">
      <Bold /> Bold
    </Toggle>
  </Preview>
);

export const ToggleDisabled = () => (
  <Preview>
    <Toggle aria-label="Toggle bold" disabled>
      <Bold />
    </Toggle>
  </Preview>
);
