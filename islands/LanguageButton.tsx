/* import { h } from 'preact';
import { useLanguage } from "deco-sites/harpon-lp/context/LanguageContext.tsx";

function LanguageSelector() {
    const { language, changeLanguage } = useLanguage();
  
    const handleLanguageChange = (newLanguage) => {
      console.log(`Mudando idioma para ${newLanguage}`);
      changeLanguage(newLanguage);
    };

  return (
    <div>
      <button class='w-5 h-5 bg-white text-red' onClick={() => handleLanguageChange('pt-br')}>Português</button>
      <button class='w-5 h-5 bg-white text-red' onClick={() => handleLanguageChange('en')}>English</button>
      <button class='w-5 h-5 bg-white text-red' onClick={() => handleLanguageChange('es')}>Español</button>
      {/* Adicione mais botões para outros idiomas, se necessário */
      /* <p>Idioma atual: {language}</p>
    </div>
  );
}

export default LanguageSelector; */ 
