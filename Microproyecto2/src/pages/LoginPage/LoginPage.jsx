import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { HOME_URL, REGISTER_URL } from "../../constants/urls/urls";

export function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido!</h1>
      <p className={styles.welcomeTxt}>
        Inicia sesión
      </p>

      <div className={styles.input}>
        <label htmlFor="email">
          <span>Ingresa tu email</span>
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

      <button type="submit" className={styles.submit}>
        Ingresar
      </button>

      <Link to={REGISTER_URL} className={styles.login}>
        ¿No tienes una cuenta?{" "}
        <span className={styles.redirect}>Regístrate</span>
      </Link>
  </div>
);
}
