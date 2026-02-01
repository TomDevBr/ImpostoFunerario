import { buttonVariants } from '@/components/atoms/button'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export interface CtaDiscordProps extends ComponentProps<'div'> {}

export function CtaDiscord({ className, ...props }: CtaDiscordProps) {
  return (
    <div data-slot="cta-discord" className={twMerge('flex w-full justify-center', className)} {...props}>
      <a
        href="https://discord.gg/Bj8XXcNHCV"
        target="_blank"
        aria-label="Abrir Discord"
        className={twMerge(buttonVariants({ variant: 'primary', size: 'lg' }), 'h-40 w-[400px] rounded-[90px] text-[64px] flex items-center justify-center')}
      >
        DISCORD
      </a>
    </div>
  )
}
