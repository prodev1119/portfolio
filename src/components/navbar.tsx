import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">
            John Hinton
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about-skills" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#history" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              History
            </Link>
            <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 