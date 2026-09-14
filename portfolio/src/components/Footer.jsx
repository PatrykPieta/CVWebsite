import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function Footer() {
  const { theme } = useContext(AppContext);

  return (
    <footer className={`border-t ${theme.borderColor} ${theme.cardBg} py-8 mt-auto`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
        <div className={`${theme.textMuted}`}>© 2026 Patryk Pięta. All rights reserved.</div>
        <div className={`flex gap-6 ${theme.textMuted}`}>
          <a href="mailto:emzet959@gmail.com" className="hover:text-blue-500 transition-colors">emzet959@gmail.com</a>
          <span className="text-gray-500">|</span>
          <span>+48 530 229 233</span>
        </div>
      </div>
    </footer>
  );
}