import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Review {
  name: string
  text: string
  rating: number
  time: string
}

const reviews: Review[] = [
  {
    name: 'Maria Silva',
    text: 'Melhor comida caseira de Taguatinga! A carne de sol e simplesmente maravilhosa. Atendimento muito bom e preco justo. Recomendo demais!',
    rating: 5,
    time: 'Ha 2 semanas',
  },
  {
    name: 'Carlos Mendes',
    text: 'Almoco aqui toda semana. O buffet e muito variado e a comida e sempre fresca. O feijao tropeiro e sensacional. Ambiente limpo e agradavel.',
    rating: 5,
    time: 'Ha 1 mes',
  },
  {
    name: 'Ana Beatriz',
    text: 'Lugar excelente para almocar em familia. Precos acessiveis, comida deliciosa e atendimento nota 10. A carne de sol derrete na boca!',
    rating: 5,
    time: 'Ha 3 semanas',
  },
  {
    name: 'Roberto Oliveira',
    text: 'Comida com gosto de casa da vovo. Fui pela primeira vez e ja virei cliente fiel. O tempero e perfeito e as porcoes sao generosas.',
    rating: 5,
    time: 'Ha 1 semana',
  },
  {
    name: 'Patricia Santos',
    text: 'Ambiente familiar muito agradavel. Estacionamento facil. A comida e maravilhosa, especialmente a costela. Voltarei com certeza!',
    rating: 4,
    time: 'Ha 2 meses',
  },
  {
    name: 'Fernando Costa',
    text: 'Melhor custo-beneficio da regiao. Self-service com muita variedade. Destaque para as carnes e as sobremesas caseiras.',
    rating: 5,
    time: 'Ha 1 mes',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-amber-400 fill-amber-400' : 'text-brand-600'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="avaliacoes" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-4">
            Avaliacoes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-50 mb-4">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>

          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-4 mt-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-300">4.8</p>
              <Stars count={5} />
            </div>
            <div className="w-px h-12 bg-brand-700" />
            <div className="text-left">
              <p className="text-lg font-semibold text-brand-100">105+ avaliacoes</p>
              <p className="text-sm text-brand-400">no Google Maps</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`glass rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={isVisible ? { animationDelay: `${0.3 + index * 0.1}s` } : undefined}
            >
              <Quote size={24} className="text-amber-500/30 mb-3" />
              <p className="text-brand-200 leading-relaxed mb-4 text-sm">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-amber-300">
                      {review.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-100">{review.name}</p>
                    <p className="text-xs text-brand-500">{review.time}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
