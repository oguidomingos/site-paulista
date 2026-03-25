import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-brand-900 border-t border-brand-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-amber-300 mb-4">
              Taguatinga do Paulista
            </h3>
            <p className="text-sm text-brand-400 leading-relaxed">
              Ha mais de 15 anos servindo a melhor comida caseira de Taguatinga Sul.
              Venha sentir o sabor de casa.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-brand-200 uppercase tracking-wider mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-brand-400">
                  CSA 1, Loja 3 - Taguatinga Sul
                  <br />
                  Brasilia - DF, 72015-590
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500 shrink-0" />
                <a
                  href="tel:+5561992251743"
                  className="text-sm text-brand-400 hover:text-amber-300 transition-colors"
                >
                  (61) 99225-1743
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-amber-500 shrink-0" />
                <p className="text-sm text-brand-400">Seg-Sab: 11h - 15h</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-brand-200 uppercase tracking-wider mb-4">
              Links
            </h4>
            <nav className="space-y-2">
              {['Inicio', 'Sobre', 'Cardapio', 'Galeria', 'Avaliacoes', 'Localizacao'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-brand-400 hover:text-amber-300 transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-600">
            2025 Restaurante Taguatinga do Paulista. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-600">
            Desenvolvido por{' '}
            <span className="text-brand-400 font-medium">
              Trion Marketing
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
