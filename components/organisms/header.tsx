import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

export interface HeaderProps extends ComponentProps<'header'> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      data-slot="header"
      className={twMerge('fixed inset-x-0 top-0 z-50 h-[117px] bg-[--color-darkgreen] border-b border-[--color-darkgreen]', className)}
      {...props}
    >
      <nav className="mx-auto flex h-full max-w-[1920px] items-center justify-between px-10">
        <a href="#topo" className="text-[40px] font-normal text-[--color-yellow]">
          Imposto Funerário
        </a>
        <div className="flex items-center gap-10">
          <a href="#discord" className="text-[40px] font-normal text-[--color-yellow]">Discord</a>
          <a href="#objetivos" className="text-[40px] font-normal text-[--color-yellow]">Objetivos</a>
          <a href="#requisitos" className="text-[40px] font-normal text-[--color-yellow]">Requisitos</a>
        </div>
      </nav>
    </header>
  )
}

