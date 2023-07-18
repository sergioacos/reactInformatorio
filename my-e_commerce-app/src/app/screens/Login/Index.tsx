import { useState } from "react";
import {  useLocation } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, navigate] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/');
    };   

return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="Nombre de usuario" onChange={(e) => setUsername(e.target.value)} value={username} />
            <input placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button>Login</button>
        </form>
    </div >
)
}
export default Login;