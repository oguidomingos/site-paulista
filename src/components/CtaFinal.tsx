import { MessageCircle, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WHATSAPP_LINK = 'https://wa.me/5561992251743?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20restaurante.'

export default function CtaFinal() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-800 to-brand-900" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-10 right-20 w-64 h-64 rounded-full bg-amber-500/30 blur-3xl"
          style={{ animation: 'float 7s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-terra-500/20 blur-3xl"
          style={{ animation: 'float 9s ease-in-out infinite 3s' }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <span className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-6">
            Venha nos Visitar
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-50 mb-6 leading-tight">
            Pronto para saborear a{' '}
            <span className="text-gradient">melhor comida caseira</span> de Taguatinga?
          </h2>

          <p className="text-lg text-brand-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Faca sua reserva pelo WhatsApp ou apareca direto no restaurante.
            Estamos esperando voce de segunda a sabado, das 11h as 15h.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-amber-500 px-10 py-5 text-lg font-semibold text-brand-900 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              Chamar no WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="mt-6 text-sm text-brand-500">
            Resposta rapida pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}
