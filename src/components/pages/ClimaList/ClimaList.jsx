import React from 'react'
import { useContext } from 'react'
import { myContext } from '../../../ClimaContext/ClimaContext'
import './ClimaList.css'
import {BsTrash} from 'react-icons/bs'


function ClimaList() {

 const { ubicaciones, deleteUbicacion } = useContext(myContext);


  return (
    
    <div className='contenedor1'>
        
        {ubicaciones.map((ubicacion)=>(
            <div className='caja' key={ubicacion.id}>   
            <p>Ubicacion : {ubicacion.nombreUbicacion} </p>
            <p>Latitud : {ubicacion.latitud} </p>
            <p>Longitud : {ubicacion.longitud} </p>
            <p>Temperatura (°C) : {ubicacion.temperatura} </p>
            <p>Velocidad del Viento (m/h) : {ubicacion.velocidad} </p>
            

            <button className='button1' onClick={()=>deleteUbicacion(ubicacion.id)}><BsTrash/></button> 
            </div>    
           
            )
     )}
      </div>
)}

export default ClimaList