import Image from 'next/image'
import banner from '@/public/banner.png'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export interface BannerProps extends ComponentProps<'section'> {}

export function Banner({ className, ...props }: BannerProps) {
  return (
    <section
      id="banner"
      data-slot="banner"
      className={twMerge('relative mt-[80px] sm:mt-[117px] mx-auto w-full', className)}
      {...props}
    >
      <Image
        src={banner}
        alt="Banner"
        width={banner.width}
        height={banner.height}
        priority
        sizes="(max-width: 640px) 100vw, 1600px"
        className="w-full h-auto"
      />
    </section>
  ) 
}

