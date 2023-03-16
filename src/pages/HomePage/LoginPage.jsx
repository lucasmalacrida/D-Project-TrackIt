import { Link, useNavigate } from "react-router-dom";
import { HomePageContainer } from "./styled";
import logo from "../../assets/logo.png";

export default function LoginPage() {
    const navigate = useNavigate();
    return (
        <HomePageContainer>
            <img src={logo} alt="logo" />
            <form onSubmit={() => navigate("/hoje")} >
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </HomePageContainer>
    )
}