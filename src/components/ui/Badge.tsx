import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <code className='rounded-md bg-gray-100 px-1.5 py-0.5 text-[0.82rem] font-medium leading-tight text-gray-800'>
      {children}
    </code>
  );
}
