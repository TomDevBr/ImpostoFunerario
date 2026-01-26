import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'
import { Separator } from '@/components/atoms/separator'

export interface SectionTitleProps extends ComponentProps<'h2'> {}

export function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <div data-slot="section-title" className={twMerge('flex w-full flex-col items-center', className)}>
      <Separator className="max-w-[354px]" />
      <h2
        className={twMerge('text-[64px] leading-[0.375em] font-normal text-[--color-yellow] font-[var(--font-alegreya-sc)]', className)}
        {...props}
      >
        {children}
      </h2>
      <Separator className="max-w-[354px]" />
    </div>
  )
}

