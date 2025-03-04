'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className='bg-black shadow-md p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <h1 className='text-2xl font-bold text-white'>Inqludera</h1>
        </Link>

        <div className='hidden md:flex space-x-6'>
          <Link href='/find-jobs' className='hover:text-blue-500 text-white'>
            Lediga Jobb
          </Link>
          <Link href='#Tjänster' className='hover:text-blue-500 text-white'>
            Tjänster
          </Link>
          <Link href='#Våra kontor' className='hover:text-blue-500 text-white'>
            Våra kontor
          </Link>
          <Link href='#Om oss' className='hover:text-blue-500 text-white'>
            Om oss
          </Link>
          <Link href='#Kontakt' className='hover:text-blue-500 text-white'>
            Kontakt
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu with Animated Links */}
      {isOpen && (
        <div className='fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 text-xl shadow-md'>
          <button
            className='absolute top-4 right-4 text-white'
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(
            (text, index) => (
              <motion.div
                key={text}
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={linkVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={`#${text.toLowerCase()}`}
                  className='hover:text-blue-500 text-white'
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </Link>
              </motion.div>
            )
          )}
        </div>
      )}
    </nav>
  );
}
