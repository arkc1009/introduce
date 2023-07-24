import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SectionProps extends PropsWithChildren<ComponentProps<'section'>> {}

export default function Section({ children, className, ...rest }: SectionProps) {
  return (
    <section className={twMerge('w-full min-h-screen', className)} {...rest}>
      {children}
    </section>
  );
}
