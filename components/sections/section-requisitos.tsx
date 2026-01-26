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
      className={twMerge('w-full bg-[--color-darkgreen] py-24 text-white', className)}
      {...props}
    >
      <div className="mx-auto max-w-[838px] px-6">
        <SectionTitle>Requisitos da guild</SectionTitle>

        <div className="mt-12 space-y-4 text-[24px] font-[var(--font-alegreya-sans)]">
          <p>
            O uso do Discord é obrigatório sempre que estiver online.
          </p>
          <p>
            Respeite todos os membros da guilda.
          </p>
          <p>
            Siga as orientações do caller durante qualquer conteúdo.
          </p>
          <p>
            Em caso de conflito, resolvam a situação em call separada dos demais jogadores.
          </p>
          <p>
            Caso não seja possível chegar a um acordo, um @STAFF irá mediar o conflito e aplicar as medidas necessárias, conforme o ocorrido.
          </p>
          <p>
            Proibidas brigas ou discussões nos chats /g ou /a.
          </p>
          <p>
            Bom senso e respeito acima de tudo.
          </p>
          <p>
            Em caso de período de ausência, informe no canal ⁠aviso-ausência.
          </p>
        </div>

        <div id="discord" className="mt-16">
          <CtaDiscord />
        </div>
      </div>
    </section>
  )
}

