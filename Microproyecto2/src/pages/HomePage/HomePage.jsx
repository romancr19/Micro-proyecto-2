import styles from "./HomePage.css";
import { HOME_URL, LOGIN_URL, REGISTER_URL } from "../../constants/urls/urls";
import { Link } from "react-router-dom";

export function HomePage() {
    return(
        <header>
                <nav>
                <li>
                    <Link to={REGISTER_URL}><h3>Registrarse</h3></Link>
                </li>
                <li>
                    <Link to={LOGIN_URL}><h3>Iniciar Sesión</h3></Link>
                </li>
                </nav>
                <section className="textos-header">
                    <h1>TMDB</h1>
                </section>
        </header>
    )
}