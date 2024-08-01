"use client";

import { Button } from "@feely/ui/components/button";
import { Input } from "@feely/ui/components/input";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@feely/ui/components/form";
import { useRouter } from "next/navigation";
import { useCheckWorkspaceExistance } from "app/api/controllers/workspaceController";

const WorkspaceInputField = () => {
  const { mutateAsync: checkWorkspaceExistanceAsync } = useCheckWorkspaceExistance();

  const FormSchema = z.object({
    workspaceName: z
      .string()
      .min(2, {
        message: "The name of the workspace must be at least 2 characters.",
      })
      .regex(/^[a-zA-Z0-9-_]+$/, {
        message: "Invalid input: only alphanumeric characters, hyphens, and underscores are allowed.",
      })
      .refine(async (value) => {
        if (!value) return;
        const checkSimilar = await checkWorkspaceExistanceAsync(value);
        console.log("Chec", checkSimilar);
        return !checkSimilar.data.exists;
      }, "This workspace name is already taken."),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      workspaceName: "",
    },
  });

  const router = useRouter();

  const handleSubmit = async ({ workspaceName }: z.infer<typeof FormSchema>) => {
    router.push(`/create_account?workspace=${workspaceName}`);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex w-[384px] items-start gap-3">
        <FormField
          control={form.control}
          name="workspaceName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="your workspace" {...field} className="input-brand w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="button-brand">
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default WorkspaceInputField;
