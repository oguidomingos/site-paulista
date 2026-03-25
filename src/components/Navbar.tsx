import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/5561992251743?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20restaurante.'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cardapio', label: 'Cardapio' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliacoes' },
  { href: '#localizacao', label: 'Localizacao' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-amber-300 tracking-tight">
            Taguatinga do Paulista
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-200 hover:text-amber-300 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-amber-400 transition-colors duration-300"
          >
            <Phone size={16} />
            Reservar Mesa
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-brand-200 hover:text-amber-300 transition-colors"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-brand-200 hover:text-amber-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-base font-semibold text-brand-900 hover:bg-amber-400 transition-colors"
          >
            <Phone size={18} />
            Reservar Mesa
          </a>
        </div>
      )}
    </nav>
  )
}
