import { useState } from 'react'
import { X } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const base = import.meta.env.BASE_URL

const photos = [
  {
    src: `${base}photos/buffet-closeup.jpg`,
    alt: 'Buffet self-service com panelas de barro',
    span: 'col-span-2 row-span-2',
  },
  {
    src: `${base}photos/facade.jpg`,
    alt: 'Fachada do Restaurante do Paulista',
    span: '',
  },
  {
    src: `${base}photos/plate-spaghetti.jpg`,
    alt: 'Prato montado com espaguete e carne de sol',
    span: '',
  },
  {
    src: `${base}photos/interior-main.jpg`,
    alt: 'Salao principal do restaurante',
    span: '',
  },
  {
    src: `${base}photos/buffet-wide.jpg`,
    alt: 'Vista ampla do buffet com cozinha ao fundo',
    span: 'col-span-2',
  },
  {
    src: `${base}photos/exterior.jpg`,
    alt: 'Area externa com mesas e piso xadrez',
    span: '',
  },
  {
    src: `${base}photos/plate-meat.jpg`,
    alt: 'Prato com carne grossa, pure e arroz',
    span: '',
  },
  {
    src: `${base}photos/team.jpg`,
    alt: 'Equipe sorrindo no balcao com churrasqueira',
    span: '',
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="galeria" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-800 to-brand-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-4">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-50 mb-4">
            Momentos de <span className="text-gradient">Sabor</span>
          </h2>
          <p className="text-lg text-brand-300 max-w-2xl mx-auto">
            Cada prato conta uma historia de dedicacao e amor pela culinaria
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`${photo.span} rounded-2xl overflow-hidden cursor-pointer group ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={isVisible ? { animationDelay: `${0.1 + index * 0.08}s` } : undefined}
              onClick={() => setLightbox(photo.src)}
              role="button"
              tabIndex={0}
              aria-label={`Ver foto: ${photo.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Visualizar foto"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Foto ampliada"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            style={{ animation: 'scaleIn 0.3s ease-out both' }}
          />
        </div>
      )}
    </section>
  )
}
