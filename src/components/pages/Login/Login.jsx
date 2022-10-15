
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { myContext } from '../../../ClimaContext/ClimaContext'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
	const { register, formState:{ errors }, handleSubmit } = useForm()
	const { usuarios, userLogin } = useContext(myContext);
	const navigate = useNavigate();
	
//   useEffect(() => {
// 	userLogin()
	
//   }, [])
  
  function validarUsuario(data){
	console.log(data.usuario)
	if (usuarios.find(usuario =>usuario.nombre === data.usuario &&usuario.password === data.password)) {
		userLogin(true)
		navigate('/formulario')
	 
	}else{
		
	  alert('Usuario y/o Password invalidos')
	  
	}
	
  }


	return(
	
	<div>
		<div className='contenedor'> 
		  <div className='formulario'>
				<form  className='formato'   onSubmit={handleSubmit(validarUsuario) }>
					<div>
					  <label>Usuario:</label>
					  <input type="text" {...register('usuario',{
						required:true,                            
						
					  })} />
					  {errors.nombre?.type === 'required' && <span>Debe ingresar un nombre para la Ubicacion</span>}
					 
					</div>
					<div>
					  <label>Password:</label>
					  <input type="password" {...register('password',{
						required:true,                         
					  })} />
					  {errors.latitud?.type === 'required' && <span >Debe ingresar Latitud</span>}
					 
					</div>                
					<div className='button'>
					<button type='submit'className='subbt' >Ingresar</button>        
					</div>  
					<div>
						<p>Eres nuevo?</p>
						<Link to={'/registro'}>Regristarse</Link>
					</div> 
				</form> 
			 </div>
		  </div>  
		  </div>  
	  );
};

export default Login;
