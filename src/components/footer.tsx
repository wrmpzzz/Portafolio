import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: "https://github.com" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com" },
    { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:contact@example.com" }
  ]

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="border-t-2 border-black dark:border-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Logo/Marca */}
        <div 
          className="mb-8"
        >
          <Link href="#" className="text-2xl font-bold tracking-tighter">
            WM.
          </Link>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navegación */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className="text-sm hover:underline underline-offset-4 decoration-2 hover:decoration-black dark:hover:decoration-white transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Derechos */}
          <div className="md:text-right">
            <p className="text-sm mb-2">© {new Date().getFullYear()} Willams Muñoz</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}