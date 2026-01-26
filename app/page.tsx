import { Header } from '@/components/organisms/header'
import { Banner } from '@/components/organisms/banner'
import { SectionObjetivos } from '@/components/sections/section-objetivos'
import { SectionRequisitos } from '@/components/sections/section-requisitos'

export default function Home() {
  return (
    <div id="topo" className="min-h-screen w-full bg-[--color-darkgreen]">
      <Header />
      <main>
        <Banner />
        <SectionObjetivos />
        <SectionRequisitos />
      </main>
    </div>
  )
}
