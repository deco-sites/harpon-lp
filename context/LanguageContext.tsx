/* import { h, Component } from 'preact';
import { useState, useEffect } from 'preact/hooks';

interface Props {}

interface State {
    language: string;
}

class LanguageSelector extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            language: '',
        }
    }

    componentDidMount() {
        // Recupera o idioma do localStorage ao montar o componente
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            this.setState({ language: storedLanguage });
        } else {
            // Se não houver idioma armazenado, usa o idioma padrão do navegador
            this.setState({ language: navigator.language });
        }
        console.log('Component mounted. Stored language:', storedLanguage);
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        // Atualiza o idioma no localStorage quando o idioma mudar
        if (prevState.language !== this.state.language) {
            localStorage.setItem('language', this.state.language);
            console.log('Language updated. New language:', this.state.language);
        }
    }

    // Função para lidar com a mudança do idioma
    handleLanguageChange = (event: any) => {
        const newLanguage = event.target.value;
        this.setState({ language: newLanguage });
        console.log('Language changed. New language:', newLanguage);
    };

    render() {
        const { language } = this.state;

        return (
            <select
                class='border-solid bg-[#3D4B58] w-[120px] h-10 ml-[-160px] mr-[60px] p-2 text-sm text-[#C8C8CA]'
                value={language}
                onChange={this.handleLanguageChange}
            >
                <option class='text-sm text-[#C8C8CA]' value='Português'>Português</option>
                <option class='text-sm text-[#C8C8CA]' value='English'>English</option>
                <option class='text-sm text-[#C8C8CA]' value='Español'>Español</option>
            </select>
        )
    }
}

export default LanguageSelector;
 */

/* import { createContext } from "preact";
import { useContext, useState, useEffect } from 'preact/hooks';

// Definindo o contexto de idioma com um valor padrão inicial
const LanguageContext = createContext({
    language: 'pt-br', // idioma padrão
    changeLanguage: () => {}, // função vazia para mudar o idioma
  });

// Hook customizado para usar o contexto de idioma
export const useLanguage = () => useContext(LanguageContext);

// Componente provedor do contexto de idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  // useEffect para recuperar o idioma armazenado no localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // useEffect para alterar o idioma no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Função para mudar o idioma
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
 */