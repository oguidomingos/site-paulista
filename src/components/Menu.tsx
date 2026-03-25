import { Flame, Leaf, Coffee } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface MenuItem {
  name: string
  description: string
  highlight?: boolean
  icon?: typeof Flame
}

interface MenuCategory {
  title: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Especialidades da Casa',
    items: [
      {
        name: 'Carne de Sol na Brasa',
        description: 'Nossa estrela: carne de sol selecionada, assada na brasa e servida com manteiga de garrafa, macaxeira e vinagrete.',
        highlight: true,
        icon: Flame,
      },
      {
        name: 'Feijao Tropeiro Mineiro',
        description: 'Feijao cozido com farinha de mandioca, linguica, bacon, ovos e temperos especiais da casa.',
        highlight: true,
      },
      {
        name: 'Picanha na Chapa',
        description: 'Corte nobre grelhado no ponto, acompanhado de arroz, feijao e farofa.',
      },
      {
        name: 'Costela ao Molho',
        description: 'Costela bovina cozida lentamente em molho especial ate desmanchar.',
      },
    ],
  },
  {
    title: 'Buffet Self-Service',
    items: [
      {
        name: 'Saladas Frescas',
        description: 'Variedade de saladas preparadas diariamente com verduras e legumes frescos.',
        icon: Leaf,
      },
      {
        name: 'Pratos Quentes',
        description: 'Arroz branco, feijao carioca, macarrao, legumes refogados e guarnicoes variadas.',
      },
      {
        name: 'Carnes do Dia',
        description: 'Selecao de carnes que varia diariamente: frango, porco, peixe e carne bovina.',
      },
      {
        name: 'Sobremesas',
        description: 'Doces caseiros, frutas da estacao e sobremesas tradicionais brasileiras.',
        icon: Coffee,
      },
    ],
  },
]

export default function Menu() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="cardapio" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-800" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-4">
            Cardapio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-50 mb-4">
            Nossos <span className="text-gradient">Pratos</span>
          </h2>
          <p className="text-lg text-brand-300 max-w-2xl mx-auto">
            Preparados diariamente com ingredientes frescos e todo o sabor da culinaria caseira brasileira
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {menuCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={isVisible ? `animate-fade-in-up` : 'opacity-0'}
              style={isVisible ? { animationDelay: `${0.3 + catIdx * 0.2}s` } : undefined}
            >
              <h3 className="font-display text-2xl font-semibold text-amber-300 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-amber-500/50" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.name}
                      className={`glass rounded-xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-500/30 ${
                        item.highlight ? 'ring-1 ring-amber-500/20' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {Icon && (
                          <div className="mt-1 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                            <Icon size={18} className="text-amber-400" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-display text-lg font-semibold text-brand-100">
                              {item.name}
                            </h4>
                            {item.highlight && (
                              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900 bg-amber-400 px-2 py-0.5 rounded-full">
                                Destaque
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-brand-400 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center glass rounded-2xl p-8 ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}
          style={isVisible ? { animationDelay: '0.8s' } : undefined}
        >
          <p className="text-xl font-display font-semibold text-brand-100 mb-2">
            Self-Service a partir de <span className="text-gradient">R$ 20,00</span> por pessoa
          </p>
          <p className="text-brand-400">
            Sirva-se a vontade com toda a variedade do nosso buffet
          </p>
        </div>
      </div>
    </section>
  )
}
