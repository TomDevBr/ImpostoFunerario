
"use client"
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'
import { useState } from 'react'
import { List } from 'phosphor-react'

export interface HeaderProps extends ComponentProps<'header'> {}

export function Header({ className, ...props }: HeaderProps) {
  const [open, setOpen] = useState(false)
  return (
    <header
      data-slot="header"
      className={twMerge('fixed inset-x-0 top-0 z-50 h-[80px] sm:h-[117px] bg-darkgreen border-b border-darkgreen', className)}
      {...props}
    >
      <nav className="mx-auto flex h-full w-full sm:max-w-[1600px] items-center justify-between px-4 sm:px-10 box-border">
        <a href="#topo" className="text-[28px] sm:text-[40px] font-normal text-yellow">
          Imposto Funerário
        </a>
        <div className="hidden items-center gap-10 sm:flex">
          <a href="#discord" className="text-[32px] sm:text-[40px] font-normal text-yellow">Discord</a>
          <a href="#objetivos" className="text-[32px] sm:text-[40px] font-normal text-yellow">Objetivos</a>
          <a href="#requisitos" className="text-[32px] sm:text-[40px] font-normal text-yellow">Requisitos</a>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex items-center justify-center rounded-lg border border-yellow px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen(true)}
          >
            <List className="size-6 text-yellow" />
          </button>
          {open && (
            <div data-slot="mobile-menu" className="fixed inset-0 z-60 bg-darkgreen/95">
              <div className="mx-auto mt-24 w-full px-6 sm:max-w-[1390px]">
                <div className="flex items-center justify-between">
                  <span className="text-[28px] text-yellow">Menu</span>
                  <button
                    type="button"
                    aria-label="Fechar menu"
                    className="inline-flex items-center justify-center text-yellow rounded-lg border border-yellow px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => setOpen(false)}
                  >
                    fechar
                  </button>
                </div>
                <div className="mt-8 flex flex-col gap-6">
                  <a
                    href="#discord"
                    className="text-[28px] text-yellow"
                    onClick={() => setOpen(false)}
                  >
                    Discord
                  </a>
                  <a
                    href="#objetivos"
                    className="text-[28px] text-yellow"
                    onClick={() => setOpen(false)}
                  >
                    Objetivos
                  </a>
                  <a
                    href="#requisitos"
                    className="text-[28px] text-yellow"
                    onClick={() => setOpen(false)}
                  >
                    Requisitos
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

