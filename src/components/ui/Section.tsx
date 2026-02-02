import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}
export function Section({ title, children }: SectionProps) {
  return (
    <section className='flex flex-col'>
      <h2 className='m-0 text-3xl font-normal'>{title}</h2>
      {children}
    </section>
  );
}
