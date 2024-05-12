import { ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HintProps {
  label: string;
  children: ReactNode;
  asChild?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  delay?: number;
}

export const Hint = ({
  label,
  children,
  asChild,
  side,
  align,
  delay = 100,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delay}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>

        <TooltipContent className="bg-background/80" side={side} align={align}>
          <p className="text-[0.8rem] font-medium">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
