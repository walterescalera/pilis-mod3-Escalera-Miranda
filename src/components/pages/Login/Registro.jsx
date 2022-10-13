import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { myContext } from '../../../ClimaContext/ClimaContext'
import { useNavigate } from 'react-router-dom'

function Registro() {

  const { register, formState:{ errors }, handleSubmit } = useForm()
  const { addUsuario, userLogin } = useContext(myContext);
  const navigate = useNavigate();

  function cargarUsuario(data){
    addUsuario(data.usuario, data.password)
    userLogin(true)
    navigate('/formulario')
   

  }
  return (
    <div>
    <div className='contenedor'> 
      <div className='formulario'>
            <form  className='formato'   onSubmit={handleSubmit(cargarUsuario) }>
                <div>
                  <label>Usuario:</label>
                  <input type="text" {...register('usuario',{
                    required:true,                            
                    
                  })} />
                  {errors.nombre?.type === 'required' && <span>Debe ingresar un nombre para la Ubicacion</span>}
                 
                </div>
                <div>
                  <label>Password:</label>
                  <input type="text" {...register('password',{
                    required:true,                         
                  })} />
                  {errors.latitud?.type === 'required' && <span >Debe ingresar Latitud</span>}
                 
                </div>                
                <div className='button'>
                <button type='submit'className='subbt' >Registrarse</button>        
                </div>   
            </form> 
         </div>
      </div>  
      </div>  
  )
}

export default Registro