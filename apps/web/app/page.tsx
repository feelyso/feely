"use client";

import { ModeToggle } from "@components/mode-toggle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Input } from "@feely/ui";
import { PlusCircle } from "@feely/ui/components/icon";
import { toast } from "@feely/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <div className="flex w-full gap-1">
        <Button
          variant="secondary"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }>
          Show toast
        </Button>
        <Input placeholder="Once upon a time..." />
      </div>
      <PlusCircle />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
