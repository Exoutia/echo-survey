import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Heading = ({ title, subtitle, className }: HeadingProps) => {
  return (
    <div className={cn("space-y-0.5", className)}>
      <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground font-medium">
        {subtitle}
      </p>
    </div>
  );
};
