import { createContext, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

export const AuthContext = createContext({
    isLogin: true,
    toggleAuthMode: () => {},
    toggleForgotPasswordMode: () => {},
});

const AuthProvider: FunctionalComponent = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin((prevMode) => !prevMode);
    };

    const toggleForgotPasswordMode = () => {
        setIsForgotPassword((prevMode) => !prevMode);
    }

    return (
        <AuthContext.Provider value={{isLogin, toggleAuthMode, toggleForgotPasswordMode }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;