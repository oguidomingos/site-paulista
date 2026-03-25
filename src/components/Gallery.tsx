import { useState } from 'react'
import { X } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    alt: 'Carne assada na brasa',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    alt: 'Salada fresca do buffet',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    alt: 'Prato preparado com carinho',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    alt: 'Ambiente interno do restaurante',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    alt: 'Comida caseira brasileira',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Mesa servida para o almoco',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    alt: 'Carne de sol especial',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80',
    alt: 'Prato do dia',
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
            src={lightbox.replace('w=600', 'w=1200').replace('w=800', 'w=1200')}
            alt="Foto ampliada"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            style={{ animation: 'scaleIn 0.3s ease-out both' }}
          />
        </div>
      )}
    </section>
  )
}
