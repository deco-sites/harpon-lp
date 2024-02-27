// translations.ts
export const translateTexts = (language: string) => {
    switch (language) {
      case 'Português':
        return {
          placeholder: 'O que você procura?',
          enterSignUpText: 'Entre ou cadastre-se',
        };
      case 'English':
        return {
          placeholder: 'What are you looking for?',
          enterSignUpText: 'Sign in or sign up',
        };
      case 'Español':
        return {
          placeholder: '¿Qué estás buscando?',
          enterSignUpText: 'Iniciar sesión o registrarse',
        };
      default:
        return {
          placeholder: 'O que você procura?',
          enterSignUpText: 'Entre ou cadastre-se',
        };
    }
  };
  