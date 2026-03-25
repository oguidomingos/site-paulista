import { MessageCircle, Star, ChevronDown } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/5561992251743?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20restaurante.'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80)',
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-amber-500/30 blur-3xl"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-32 right-10 w-96 h-96 rounded-full bg-terra-500/20 blur-3xl"
          style={{ animation: 'float 8s ease-in-out infinite 2s' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8"
          style={{ animation: 'fadeInUp 0.8s ease-out both' }}
        >
          <Star size={16} className="text-amber-400 fill-amber-400" />
          <span className="text-sm font-medium text-amber-200">
            4.8 estrelas no Google - 105+ avaliacoes
          </span>
          <Star size={16} className="text-amber-400 fill-amber-400" />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
        >
          <span className="text-brand-100">Sabor de</span>
          <br />
          <span className="text-gradient">comida caseira</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-brand-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          Desde 2010 servindo o melhor self-service de Taguatinga Sul.
          Carne de sol, feijao tropeiro e receitas que lembram a comida da vovo.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-brand-900 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
            Fale Conosco
          </a>
          <a
            href="#cardapio"
            className="flex items-center gap-2 rounded-full glass px-8 py-4 text-lg font-medium text-brand-100 hover:text-amber-300 hover:border-amber-500/30 transition-all duration-300"
          >
            Ver Cardapio
          </a>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-center"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-300">15+</p>
            <p className="text-sm text-brand-400">anos de tradicao</p>
          </div>
          <div className="w-px h-10 bg-brand-700" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-300">4.8</p>
            <p className="text-sm text-brand-400">nota no Google</p>
          </div>
          <div className="w-px h-10 bg-brand-700" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-300">R$20</p>
            <p className="text-sm text-brand-400">a partir de</p>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-400 hover:text-amber-300 transition-colors"
        aria-label="Rolar para baixo"
        style={{ animation: 'float 2s ease-in-out infinite' }}
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
