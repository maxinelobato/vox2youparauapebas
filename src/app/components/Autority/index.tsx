import Image from 'next/image'
import { HeroCardH1Span } from '../Hero/HeroComponents'
import veja from '../../../../public/logo-empresas/veja.webp'
import uol from '../../../../public/logo-empresas/uol.webp'
import g1 from '../../../../public/logo-empresas/g1.webp'

export function Autority() {
  return (
    <>
      <section className="bg-brandGray800">
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-8 flex-wrap gap-x-12 justify-between items-center md:flex md:px-8 lg:flex-nowrap">
            <div className="max-w-xl space-y-3">
              <h3 className="text-brandCyan uppercase text-sm font-semibold">
                na mídia
              </h3>
              <p className="text-white text-2xl font-medium sm:text-3xl">
                Dezenas de escolas e{' '}
                <HeroCardH1Span>mais de 55 mil alunos</HeroCardH1Span> pelo país
                são a prova de que não estamos para brincadeira quando o assunto
                é <HeroCardH1Span>transformar vidas</HeroCardH1Span>.
              </p>
            </div>
            <div className="flex-none mt-12 text-white lg:mt-0">
              <ul className="grid grid-cols-3 gap-8 items-center justify-center">
                <li>
                  <Image
                    className="w-24 sm:w-28 my-auto"
                    src={veja}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-32 my-auto"
                    src={uol}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-14 sm:w-16 my-auto"
                    src={g1}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}