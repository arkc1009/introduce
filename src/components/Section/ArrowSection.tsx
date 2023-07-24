import { twMerge } from 'tailwind-merge';

import Section, { SectionProps } from '.';
import ScrollArrow, { ScrollArrowProps } from '../ScrollArrow';

export interface ArrowSectionProps extends SectionProps, Pick<ScrollArrowProps, 'circle'> {
  nextId?: string;
}

export default function ArrowSection({
  children,
  nextId,
  className,
  circle,
  ...rest
}: ArrowSectionProps) {
  return (
    <Section className={twMerge('relative', className)} {...rest}>
      {children}
      <ScrollArrow id={nextId} circle={circle} />
    </Section>
  );
}
