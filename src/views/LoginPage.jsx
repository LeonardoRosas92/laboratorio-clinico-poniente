import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner';
import {useState} from 'react';


export default function LoginPage() {
  const[isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        getValues
      } = useForm();
    
      const handleButton = (e) => {
        e.preventDefault();
      };

      const login = (e) => {
        const users=JSON.parse(localStorage.getItem("users") || "[]");
        if ( users.some(user => user.email === e.email)){
          const user = users.find(user => user.email === e.email)
          if(user.password === e.password){
            toast.success('Sesión iniciada');
            localStorage.setItem("user", JSON.stringify(user));
            setIsLogged(true);
            navigate("/");
          } else {
            toast.error('Usuario y/o contraseña incorrectos');
          }
        } else {
          toast.error('El Usuario no existe');
        } 

        
      }

  return (
    
    <>
    <Toaster richColors position="top-right"/>
    <div className="container-login" style={{backdropFilter:"blur(10px)"}}>
        <div className="row d-flex justify-content-end align-content-center p-5">
            <div className="col-12 col-md-5 text-center p-5 bg-blur-login m-5">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit(login)} className="row">


                <div className="mb-3">
                <label htmlFor="email" className="col-12 col-form-label">
                  Correo electrónico:
                </label>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    {...register("email", {
                        required: "Correo electrónico es obligatorio",
                        validate: {
                          maxLength: (v) =>
                            v.length <= 100 || "El correo electrónico no puede exceder los 100 caracteres",
                          matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                            "El correo electrónico debe ser una dirección válida",
                        },
                      })}
                      
                    
                  />
                   {errors.email?.message && (
                        <small className="text-danger">{errors.email.message}</small>
                         )}
                </div>
              </div>              

              <div className="mb-3">
                <label htmlFor="password" className="col-12 col-form-label">
                  Contraseña:
                </label>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    {...register("password", {
                        required: true,
                    })}
                  />
                      {errors.password?.type === "required" && (
                        <small className="text-danger">Introduce una contraseña para iniciar sesión.</small>
                      )}
  
                </div>
              </div>

                    <div className="col-12 mt-3 text-center">
                        <input type="submit" value="Entrar" className="btn-green"/>
                    </div>
                    
                </form>
                
                <div className="mt-3 text-center">
                    <p>¿No tienes una cuenta? <Link to="/registro">¡Registrate aquí!</Link> </p>
                </div>
            </div>

        </div>
    </div>
</>
  )
/* }; */
}
