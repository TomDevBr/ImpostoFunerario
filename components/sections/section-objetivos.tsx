import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'
import { SectionTitle } from '@/components/molecules/section-title'

export interface SectionObjetivosProps extends ComponentProps<'section'> {}

export function SectionObjetivos({ className, ...props }: SectionObjetivosProps) {
  return (
    <section
      id="objetivos"
      data-slot="section-objetivos"
      className={twMerge('w-full bg-[#0E1918] py-24 text-white px-4 sm:px-0', className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1390px] flex flex-col gap-12">
        <SectionTitle>objetivo da guild</SectionTitle>

        <div>

        <p className="mt-12 text-[24px] leading-[1em] text-yellow text-center font-[var(--font-alegreya-sc)]">
          No Albion, todo mundo paga, mais cedo ou mais tarde.
        </p>
        <p className="mt-4 text-[24px] leading-[1em] text-white text-center font-[var(--font-alegreya-sans)]">
          A Imposto Funerário nasceu com um objetivo simples: crescer juntos, se divertir e aproveitar o jogo do nosso jeito.
        </p>
        <p className="mt-2 text-[24px] leading-[1em] text-white text-center font-[var(--font-alegreya-sans)]">
          Aqui o foco é jogar bem, rir dos erros, comemorar as vitórias e cobrar o imposto dos inimigos abatidos.
        </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row  justify-between">
          <div className=' flex flex-col'>
            <h3 className="text-[24px] font-[var(--font-alegreya-sc)] text-yellow">O que buscamos</h3>
            <ul className="mt-4 space-y-2 text-[24px] font-[var(--font-alegreya-sc)]">
              <li>Diversão acima de tudo</li>
              <li>PvP e PvE, do casual ao mais intenso</li>
              <li>Crescimento da guilda e dos jogadores, sem pressão</li>
              <li>Jogar for fun, mas com vontade de aprender e evoluir</li>
            </ul>
          </div>
          <div className=' flex flex-col'>
            <h3 className="text-[24px] font-[var(--font-alegreya-sc)] text-yellow">Nossa filosofia</h3>
            <ul className="mt-4 space-y-2 text-[24px] font-[var(--font-alegreya-sc)]">
              <li>O inimigo morreu? O inimigo pagou.</li>
              <li>O inimigo caiu no chão? O imposto foi cobrado.</li>
              <li>Ganhamos a luta? A arrecadação foi um sucesso.</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-[24px] font-[var(--font-alegreya-sans)] text-yellow text-center">
          Se você curte PvP, PvE, caos controlado e boas risadas, venha cobrar impostos.
        </p>
      </div>
    </section>
  )
}

