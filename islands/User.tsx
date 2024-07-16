import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import AuthProvider, { AuthContext } from "site/context/AuthProvider.tsx"
import Login from 'site/islands/Login.tsx';
import Register from 'site/islands/Register.tsx';

const User: FunctionalComponent = () => {
    const { isLogin } = useContext(AuthContext)

    return (
        <div>
            {isLogin ? <Login /> : <Register />}
        </div>
    )
}

const RootUser: FunctionalComponent = () => {
    return (
        <AuthProvider>
            <User />
        </AuthProvider>
    )
    
}

export default RootUser;