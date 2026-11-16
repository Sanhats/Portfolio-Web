import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const InnovativeNav = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navItems = [
    { key: 'home', name: t('nav.home') },
    { key: 'about', name: t('nav.about') },
    { key: 'skills', name: t('nav.skills') },
    { key: 'experience', name: t('nav.experience') },
    { key: 'contact', name: t('nav.contact') }
  ];

  return (
    <div className="fixed top-5 right-5 z-[70]">
      <motion.button
        className="nav-button"
        onClick={toggleNav}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Abrir menú de navegación"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-overlay fixed inset-0 z-[65] backdrop-blur-sm flex items-center justify-center p-6"
            onClick={toggleNav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <motion.div
              className="nav-panel border rounded-2xl p-8 min-w-[260px] max-w-full"
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.key}
                  smooth={true}
                  duration={450}
                  offset={-16}
                  className="block text-2xl site-ink hover:text-[#b8d86a] mb-4 cursor-pointer"
                  onClick={toggleNav}
                >
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InnovativeNav;

