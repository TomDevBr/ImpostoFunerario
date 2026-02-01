import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export interface SeparatorProps extends ComponentProps<'div'> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      data-slot="separator"
      className={twMerge('h-[4px] w-full rounded bg-yellow', className)}
      {...props}
    />
  )
}

