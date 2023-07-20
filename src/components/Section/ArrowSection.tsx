import Section, { SectionProps } from ".";
import ScrollArrow from "../ScrollArrow";

interface ArrowSectionProps extends SectionProps {
  nextId?: string;
}

export default function ArrowSection({
  children,
  nextId,
  ...rest
}: ArrowSectionProps) {
  return (
    <Section {...rest}>
      {children}
      <ScrollArrow id={nextId} />
    </Section>
  );
}
