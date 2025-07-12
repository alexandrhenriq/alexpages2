import { useState, useEffect } from 'react';
import logoLight from './assets/logoRosaFundoBranco.png'
import logoDark from './assets/logoRosaPastelFundoPreto.png'
/*import { BuscaCep } from "./components/BuscaCep.jsx"*/
import { Formulario } from './components/Formulario.jsx'

export function App() {
  const [darkMode, setDarkMode] = useState(false);
    
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--cor-bg', '#0E1324'); // fundo escuro
      root.style.setProperty('--cor-rosa-claro', '#1C2333'); // se quiser escurecer o main
    } else {
      root.style.setProperty('--cor-bg', '#f5f0e1'); // fundo claro
      root.style.setProperty('--cor-rosa-claro', '#f4d9d1');
    }
  }, [darkMode]);

  return (
    <>
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center px-4 ${darkMode ? 'bg-[#0E1324]' : 'bg-[#f5f0e1]'}`}
    >

        <div className="w-full flex justify-end">
          <label className="relative inline-flex mt-5 items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
            />
            <div className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center">
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </div>
          </label>
        </div>

        
        <div className='mt-20'>
        <img
          src={darkMode ? logoDark : logoLight}
          alt="Coinc Smart"
          className="w-[170px] object-contain"
        />
        </div>

        <main className='mb-20 bg-[var(--cor-rosa-claro)] rounded-2xl shadow-md px-10 py-8 mt-6 w-full max-w-xl flex flex-col items-center gap-6'>
          <Formulario />

        </main>
      </div>
    </>
  )
}