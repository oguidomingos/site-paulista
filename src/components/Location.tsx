import { MapPin, Clock, Phone, Car, Wifi, Truck, Accessibility } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const schedule = [
  { day: 'Segunda-feira', hours: '11:00 - 15:00' },
  { day: 'Terca-feira', hours: '11:00 - 15:00' },
  { day: 'Quarta-feira', hours: '11:00 - 15:00' },
  { day: 'Quinta-feira', hours: '11:00 - 15:00' },
  { day: 'Sexta-feira', hours: '11:00 - 15:00' },
  { day: 'Sabado', hours: '11:00 - 15:00' },
  { day: 'Domingo', hours: 'Fechado', closed: true },
]

const amenities = [
  { icon: Car, label: 'Estacionamento' },
  { icon: Wifi, label: 'Wi-Fi Gratis' },
  { icon: Truck, label: 'Delivery' },
  { icon: Accessibility, label: 'Acessibilidade' },
]

export default function Location() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="localizacao" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-800 to-brand-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-4">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-50 mb-4">
            Venha nos <span className="text-gradient">visitar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className={isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}>
            <div className="glass rounded-2xl overflow-hidden">
              <iframe
                title="Localizacao do Restaurante Taguatinga do Paulista"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.06!3d-15.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzI0LjAiUyA0OMKwMDMnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="350"
                style={{ border: 0, filter: 'hue-rotate(180deg) invert(90%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-100">Endereco</p>
                    <p className="text-sm text-brand-300">
                      CSA 1, Loja 3 - Taguatinga Sul
                      <br />
                      Brasilia - DF, 72015-590
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-100">Telefone</p>
                    <p className="text-sm text-brand-300">(61) 99225-1743</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}>
            <div className="glass rounded-2xl p-6 sm:p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={22} className="text-amber-400" />
                <h3 className="font-display text-xl font-semibold text-brand-100">
                  Horario de Funcionamento
                </h3>
              </div>

              <div className="space-y-3">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center py-2.5 border-b border-brand-700/50 last:border-0 ${
                      item.closed ? 'opacity-50' : ''
                    }`}
                  >
                    <span className="text-sm font-medium text-brand-200">{item.day}</span>
                    <span
                      className={`text-sm font-semibold ${
                        item.closed ? 'text-brand-500' : 'text-amber-300'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity) => {
                const Icon = amenity.icon
                return (
                  <div
                    key={amenity.label}
                    className="glass rounded-xl p-4 flex items-center gap-3 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <Icon size={20} className="text-amber-400" />
                    <span className="text-sm font-medium text-brand-200">{amenity.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
