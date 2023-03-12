import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { HOME_URL, LOGIN_URL } from "../../constants/urls/urls";

export function RegisterPage() {

    return (
      <div className={styles.container}>
        <form className={styles.forma}>
          <h1 className={styles.titulo}>Registrate</h1>
  
          <div className={styles.input}>
            <label htmlFor="name">
              <span>Ingresa tu nombre</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ej. Nombre Apellido"
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="email">
              <span>Ingresa tu correo</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ej. Usuario@gmail.com"
            />
          </div>
  
          <div className={styles.input}>
            <label htmlFor="password">
              <span>Ingresa tu contraseña</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
          </div>
  
          <button
            type="submit"
            className={styles.submit}
          >
            Registrar
          </button>
  
          <Link to={LOGIN_URL} className={styles.login}>
            ¿Ya estás registrado?{" "}
            <span className={styles.redirect}>Inicia sesión</span>
          </Link>
        </form>
      </div>
    );
  }