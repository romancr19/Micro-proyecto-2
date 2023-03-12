import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { HOME_URL, REGISTER_URL } from "../../constants/urls/urls";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";


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

function login(){
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  //Validaciones imputs
  if (validate_email(email) == false || validate_password(password) == false){
    alert('Email o password no validos')
    return
  }

  auth.singInWithEmailAndPassword(email,password).then(function(){
    //Declaracion de usuario
    var user = auth.currentUser
    //Agregar usuario al database de firebase
    var database_ref = database.ref()
    //Crear data de usuario
    var user_data = {
      last_login:Date.now()
    }
  database_ref.child('users/'+ user.uid).update(user_data)

  alert('Usuario logeado')
  })
  .catch(function(error){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

function validate_email(email) {
  expressions = /^[^@]+@\w+(\.\w)+\w$/
  if (expressions.test(email)==true){
    return true
  }else{
    return false
  }
}

function validate_password(password){
  if (password<6){
    return false
  }else{
    return true
  }
}
