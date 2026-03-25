import { Heart, Utensils, Users, Award } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const features = [
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Receitas passadas de geracao em geracao, preparadas com ingredientes frescos todo dia.',
  },
  {
    icon: Utensils,
    title: 'Self-Service',
    description: 'Buffet variado com opcoes para todos os gostos. Sirva-se a vontade.',
  },
  {
    icon: Users,
    title: 'Ambiente Familiar',
    description: 'Espaco aconchegante para almocar com familia e amigos. Estacionamento disponivel.',
  },
  {
    icon: Award,
    title: 'Qualidade Premiada',
    description: 'Nota 4.8 no Google com mais de 105 avaliacoes de clientes satisfeitos.',
  },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-800 to-brand-900" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <span className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-4">
              Nossa Historia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-50 mb-6 leading-tight">
              Comida de verdade,{' '}
              <span className="text-gradient">sabor de casa</span>
            </h2>
            <p className="text-lg text-brand-300 leading-relaxed mb-6">
              O Restaurante Taguatinga do Paulista nasceu da paixao pela culinaria caseira brasileira.
              Ha mais de uma decada, servimos o melhor da comida mineira e nordestina em Taguatinga Sul,
              com destaque para a nossa famosa carne de sol e o feijao tropeiro que conquista qualquer paladar.
            </p>
            <p className="text-lg text-brand-300 leading-relaxed">
              Nosso buffet self-service e preparado diariamente com ingredientes selecionados,
              mantendo a tradicao e o carinho que so a comida de mao tem.
              Venha nos visitar e sentir o aroma que transforma qualquer almoco em um momento especial.
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={`${import.meta.env.BASE_URL}photos/buffet-closeup.jpg`}
                  alt="Buffet do Restaurante do Paulista"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src={`${import.meta.env.BASE_URL}photos/interior-main.jpg`}
                  alt="Interior do Restaurante do Paulista"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src={`${import.meta.env.BASE_URL}photos/plate-meat.jpg`}
                  alt="Prato com carne de sol do Restaurante do Paulista"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={`${import.meta.env.BASE_URL}photos/team.jpg`}
                  alt="Equipe do Restaurante do Paulista"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`glass rounded-2xl p-6 text-center hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible
                    ? `animate-fade-in-up`
                    : 'opacity-0'
                }`}
                style={isVisible ? { animationDelay: `${0.6 + index * 0.15}s` } : undefined}
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Icon size={24} className="text-amber-400" />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
