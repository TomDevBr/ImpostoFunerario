import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export interface BannerProps extends ComponentProps<'section'> {}

export function Banner({ className, ...props }: BannerProps) {
  return (
    <section
      id="banner"
      data-slot="banner"
      className={twMerge('relative mt-[117px] h-[60vh] min-h-[540px] w-full', className)}
      {...props}
    >
      <Image src="/banner.png" alt="Banner" fill className="object-cover" priority />
    </section>
  )
}

