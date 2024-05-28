import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import AuthProvider, { AuthContext } from "deco-sites/harpon-lp/context/AuthProvider.tsx"
import Login from 'deco-sites/harpon-lp/islands/Login.tsx';
import Register from 'deco-sites/harpon-lp/islands/Register.tsx';

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