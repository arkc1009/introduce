import { twMerge } from "tailwind-merge";
import Section, { SectionProps } from ".";
import ScrollArrow from "../ScrollArrow";

interface ArrowSectionProps extends SectionProps {
  nextId?: string;
}

export default function ArrowSection({
  children,
  nextId,
  className,
  ...rest
}: ArrowSectionProps) {
  return (
    <Section className={twMerge("relative", className)} {...rest}>
      {children}
      <ScrollArrow id={nextId} />
    </Section>
  );
}
