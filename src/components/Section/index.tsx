import { ComponentProps, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function Section({
  children,
  className,
  ...rest
}: PropsWithChildren<ComponentProps<"section">>) {
  return (
    <section className={twMerge("w-full h-screen", className)} {...rest}>
      {children}
    </section>
  );
}
