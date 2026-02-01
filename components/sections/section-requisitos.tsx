import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'
import { SectionTitle } from '@/components/molecules/section-title'
import { CtaDiscord } from '@/components/organisms/cta-discord'

export interface SectionRequisitosProps extends ComponentProps<'section'> {}

export function SectionRequisitos({ className, ...props }: SectionRequisitosProps) {
  return (
    <section
      id="requisitos"
      data-slot="section-requisitos"
      className={twMerge('flex flex-col w-full bg-darkgreen py-24 text-white gap-24 px-4 sm:px-0', className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1390px] flex flex-col gap-12">
        <SectionTitle>requisitos da guilda</SectionTitle>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row justify-between">
          <div className=' flex flex-col'>
            <h3 className="text-[24px] font-[var(--font-alegreya-sc)] text-yellow">Requisitos</h3>
            <ul className="mt-4 space-y-2 text-[24px] font-[var(--font-alegreya-sc)]">
              <li>50M de fama total.</li>
              <li>Discord ON.</li>
            </ul>
          </div>
          <div className=' flex flex-col'>
            <h3 className="text-[24px] font-[var(--font-alegreya-sc)] text-yellow">Oferecemos</h3>
            <ul className="mt-4 space-y-2 text-[24px] font-[var(--font-alegreya-sc)]">
              <li>HO na Avalon + 5 baús verdes.</li>
              <li>Suporte para os novatos.</li>
              <li>Ambiente sem pessoas tóxicas.</li>
              <li>Sem conteúdo obrigatório.</li>
            </ul>
          </div>
          <div className=' flex flex-col'>
            <h3 className="text-[24px] font-[var(--font-alegreya-sc)] text-yellow">Conteúdos diversos</h3>
            <ul className="mt-4 space-y-2 text-[24px] font-[var(--font-alegreya-sc)]">
              <li>Gank.</li>
              <li>Baús azuis e dourados.</li>
              <li>DG de grupo.</li>
              <li>Fixa.</li>
              <li>Coleta em grupo.</li>
              <li>Roads de Avalon.</li>
            </ul>
          </div>
        </div>

        <div id="discord" className="mt-16">
          <CtaDiscord className="justify-center" />
        </div>
      </div>
        


    </section>
  )
}

