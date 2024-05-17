"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";

import { createSurvey } from "@/actions/survey";
import { cn } from "@/lib/utils";


export const CreateSurveyButton = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState("Untitled Survey")
  const [description, setDescription] = useState("Please provide your feedback")


  const createNewSurvey = () => {
    startTransition(() => {
      createSurvey(name, description)
        .then(({ success, error }) => {
          if (error) {
            toast.error(error.message);
          }

          if (success) {
            toast.success(success.message);

            const newSurvey = success.survey;
            router.push(`/surveys/${newSurvey.id}`);
          }
        })
        .catch((err) => {
          console.log("ERROR-CREATE_NEW_SURVEY", err);
          toast.error("Something went wrong!");
        });
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="px-4 sm:px-3"
        >
          {pending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Plus className="size-5" />
          )}
          <span className={cn("hidden sm:flex ml-1 text-sm", pending && "ml-2")}>
            {pending ? "Creating..." : "Create"}
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Dialog Box</DialogTitle>
          <DialogDescription>
            Give a name and description to your survey. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-col gap-4">
          <div className="flex-col">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex-col">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></Textarea>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => createNewSurvey()} disabled={pending}>

            {pending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Plus className="size-5" />
            )}

            <span className={cn("hidden sm:flex ml-1 text-sm", pending && "ml-2")}>
              {pending ? "Saving..." : "Save"}
            </span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
