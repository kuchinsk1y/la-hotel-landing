import { cn } from "@/lib/cn";

type ArrowIconProps = React.ComponentPropsWithoutRef<"svg"> & {
  direction?: "left" | "right";
};

export function ArrowIcon({ direction = "right", className, ...props }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 18 18"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("shrink-0", direction === "left" && "rotate-180", className)}
      {...props}
    >
      <path d="M2 9H16" />
      <path d="M9 2L16 9L9 16" />
    </svg>
  );
}
