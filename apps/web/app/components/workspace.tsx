"use client";

import { Button } from "@feely/ui/components/button";
import { Input } from "@feely/ui/components/input";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@feely/ui/components/form";
import { checkWorkspaceExistance } from "app/api/workspace/checkExistance/route";
import { useRouter } from "next/navigation";

const WorkspaceInputField = () => {
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
        const checkSimilar = await checkWorkspaceExistance(value);
        return !checkSimilar;
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
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex w-[340px] items-center gap-4">
        <FormField
          control={form.control}
          name="workspaceName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="your workspace" {...field} className="input-docs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Continue</Button>
      </form>
    </Form>
  );
};

export default WorkspaceInputField;
