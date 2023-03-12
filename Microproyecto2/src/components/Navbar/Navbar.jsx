import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUserContext();

  const handleLogout = async () => {
    await logout(() => navigate(HOME_URL));
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={HOME_URL} className={styles.link}>
            <span>Cartelera</span>
          </Link>
        </li>
      </ul>

      {!isLoadingUser && (
        <ul className={styles.menuList}>
          {!!user ? (
            <>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={PROFILE_URL} className={styles.link}>
                  <div className={styles.userAvatar} />
                  <span>{user.name}</span>
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <button
                  type="button"
                  className={`${styles.link} ${styles.logoutBtn}`}
                  onClick={handleLogout}
                >
                  <span>Salir</span>
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={LOGIN_URL} className={styles.link}>
                  <span>Iniciar sesión</span>
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={REGISTER_URL} className={styles.link}>
                  <span>Registro</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}