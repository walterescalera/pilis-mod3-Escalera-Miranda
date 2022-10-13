import React, { useContext } from 'react'
import './NavBar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { myContext } from '../../../ClimaContext/ClimaContext';


function NavBar() {

	const { login,userLogin } = useContext(myContext);
	const navigate =useNavigate()
	function logOut(){
		userLogin(false)
		navigate('/')
	}



  return (

	<div>
		{ login ? 
		<ul>
			<li ><Link  to = {'/formulario'}>Home</Link></li>
			<li><Link  to = {'/formulario'}> Nueva Ubicacion</Link></li>
			<li><Link  to = {'/listado'}> Listado de Ubicaciones</Link></li>
			{/* <li className='right'><a className="active" href="#about">Login</a></li> */}
			{/* <li className='right'><Link  to = {'/'}> Salir</Link></li> */}
			<li className='right'><button  onClick={()=>logOut()}  >Salir</button></li>
		</ul>:<div>

		      </div>



		}
		

	</div>
  )
}

export default NavBar
