import { Link, useNavigate } from "react-router-dom";
import { HomePageContainer } from "./styled";
import logo from "../../assets/logo.png";

export default function SignupPage() {
    const navigate = useNavigate();
    return (
        <HomePageContainer>
            <img src={logo} alt="logo" />
            <form onSubmit={() => navigate("/")} >
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <input type="text" placeholder="nome" required />
                <input type="url" placeholder="foto" required />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </HomePageContainer>
    )
}