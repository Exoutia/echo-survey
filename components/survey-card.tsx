"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Survey } from "@prisma/client";
import { BarChart2, Loader2, Pencil, Share2, Trash } from "lucide-react";

import { Button } from "./ui/button";
import { deleteSurvey } from "@/actions/survey";
import { toast } from "sonner";
import { Hint } from "./hint";

interface SurveyCardProps {
  survey: Survey;
}

export const SurveyCard = ({ survey }: SurveyCardProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onDelete = () => {
    startTransition(() => {
      deleteSurvey(survey.id)
        .then(({ success, error }) => {
          if (error) {
            toast.error(error.message);
          }
          if (success) {
            toast.success(success.message);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong!");
        });
    });
  };

  const onEdit = () => {
    router.push(`/surveys/${survey.id}`);
  };

  return (
    <div className="bg-accent dark:bg-accent/70 rounded-md p-4 space-y-6">
      <div className="mt-1">
        <Link href={`/surveys/${survey.id}`}>
          <h3 className="font-bold text-lg line-clamp-1">{survey.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {survey.description}
        </p>
      </div>

      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <Hint label="Share" asChild>
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-background/50"
            >
              <Share2 className="size-4" />
              <span className="hidden ml-2">Share</span>
            </Button>
          </Hint>

          <div className="flex items-center gap-0.5 mt-1.5">
            <BarChart2 className="size-4" />
            <span className="text-xs pt-1">
              69 <span className="text-muted-foreground">Responses</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Hint label="Delete" asChild>
            <Button
              variant="destructive"
              className="h-8 px-2"
              onClick={() => onDelete()}
              disabled={pending}
            >
              {pending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Trash className="size-4" />
              )}
            </Button>
          </Hint>

          <Hint label="Edit" asChild>
            <Button
              className="h-8 px-2"
              onClick={() => onEdit()}
              disabled={pending}
            >
              <Pencil className="size-4" />
            </Button>
          </Hint>
        </div>
      </div>
    </div>
  );
};
