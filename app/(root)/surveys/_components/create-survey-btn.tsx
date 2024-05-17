"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createSurvey } from "@/actions/survey";
import { cn } from "@/lib/utils";

export const CreateSurveyButton = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const createNewSurvey = () => {
    startTransition(() => {
      createSurvey()
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
    <Button
      className="px-4 sm:px-3"
      onClick={() => createNewSurvey()}
      disabled={pending}
      size="lg"
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
  );
};
