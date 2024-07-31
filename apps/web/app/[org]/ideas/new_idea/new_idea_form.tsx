"use client";

import { Button } from "@feely/ui/components/button";
import { Input } from "@feely/ui/components/input";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@feely/ui/components/form";
import { useRouter } from "next/navigation";
import { Textarea } from "@feely/ui/components/textarea";
import { Label } from "@feely/ui/components/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@feely/ui/components/select";
import { topic } from "@prisma/client";
import { getTopicsByWorkspaceName } from "app/api/apiServerActions/topicApiServerActions";
import { useCreateIdea } from "app/api/controllers/ideaController";
interface IProps {
  org: string;
}

const NewIdeaForm = ({ org }: IProps) => {
  const FormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    topic: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      topic: undefined,
    },
  });

  const [topics, setTopics] = useState<topic[]>([]);

  useEffect(() => {
    //This is probably bad, a handler should be used
    const getTopics = async () => {
      const res = await getTopicsByWorkspaceName({ workspaceName: org });
      const data = res.data;
      if (!data) return console.error("No topics found");
      setTopics(data);
    };
    getTopics();
  }, []);

  const router = useRouter();

  const { mutateAsync: createIdea } = useCreateIdea();
  const handleSubmit = async ({ title, description, topic }: z.infer<typeof FormSchema>) => {
    const res = await createIdea({
      description: description,
      org: org,
      title: title,
      topicId: topic,
    });
    if (res) {
      router.push(`/${org}/ideas`);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <Label>Title</Label>
              <FormControl>
                <Input placeholder="One sentences that summarizes your idea" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <Label>Description</Label>
              <FormControl>
                <Textarea placeholder="Why your idea is helpful?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <Label>Topic</Label>
              <Select defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chose one topic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {topics?.map((topic) => {
                    return <SelectItem value={topic.id}>{topic.name}</SelectItem>;
                  })}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end pt-4">
          <Button type="submit">Submit idea</Button>
        </div>
      </form>
    </Form>
  );
};

export default NewIdeaForm;
