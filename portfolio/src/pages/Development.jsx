import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function NazwaStrony() {
  const { isDark, t, theme } = useContext(AppContext);

  return (
    <div className="animate-fade-in py-20 text-center">
      <h1 className="text-4xl font-bold">Witaj na stronie: Development</h1>
      <p className={`mt-4 ${theme.textMuted}`}>Treść wkrótce zostanie uzupełniona.</p>
    </div>
  );
}