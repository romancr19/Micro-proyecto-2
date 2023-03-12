import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { HOME_URL, LOGIN_URL } from "../../constants/urls/urls";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";

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

function register(){
  //Tomar todos los campos de los inputs
  nameU = document.getElementById('name').value
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  //Validaciones imputs
  if (validate_email(email) == false || validate_password(password) == false){
    alert('Email o password no validos')
    return
  }
  if (validate_field(nameU)==false){
    alert('El nombre no es valido')
    return
  }

  //Autentificacion
  auth.createUserWithEmailAndPassword(email,password).then(function(){
    //Declaracion de usuario
    var user = auth.currentUser
    //Agregar usuario al database de firebase
    var database_ref = database.ref()
    //Crear data de usuario
    var user_data = {
      nameU: nameU,
      email:email,
      last_login:Date.now()
    }
  database_ref.child('users/'+ user.uid).set(user_data)

  alert('Usuario creado')
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

function validate_field(flied){
  if (field == null){
    return false
  }
  if (field.length <=0){
    return false
  }else{
    return true
  }
}