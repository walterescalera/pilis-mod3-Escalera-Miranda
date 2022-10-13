import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { myContext } from '../../../ClimaContext/ClimaContext'
import { getClima } from '../../climaApi/ClimaApi'
import { longLatiValidator } from '../../validators/validators'
import './ClimaForm.css'


function ClimaForm() {


const { register, formState:{ errors }, handleSubmit, reset } = useForm()
const { addUbicacion } = useContext(myContext);



// useEffect(() => {
//         let latitud=50.1;
//         let longitud= 50.1;
//       getClima(latitud, longitud).then((data) => {
//         setUbicaciones(JSON.stringify(data.latitude))
//       }
//       )
//       .catch((err) => console.log(err));
      
//     }, [])

  const cargarUbicacion = (data) =>{
                   // console.log(data.latitud)    
            getClima(data.latitud, data.longitud).then((res) => {
                  //  setUbicaciones(JSON.stringify(res))                      
                    //console.log(res.latitude, res.longitude,data.nombre,res.current_weather.temperature,res.current_weather.windspeed)
                    addUbicacion(res.latitude, res.longitude,data.nombre,res.current_weather.temperature,res.current_weather.windspeed)              
                 
                    }
            )
            .catch((err) => console.log(err));
            reset({nombre:'',latitud:'',longitud:''})
    }

  return (
    <div>
    <div className='contenedor'> 
      <div className='formulario'>
            <form  className='formato'   onSubmit={handleSubmit(cargarUbicacion) }>
                <div>
                  <label>Nombre Ubicacion:</label>
                  <input type="text" {...register('nombre',{
                    required:true,
                    minLength:6            
                    
                  })} />
                  {errors.nombre?.type === 'required' && <span>Debe ingresar un nombre para la Ubicacion</span>}
                  {errors.nombre?.type === 'minLength' && <span>Debe ingresar un nombre para la Ubicacion mayor a 6 caracteres</span>}
                </div>
                <div>
                  <label>Latitud:</label>
                  <input type="number" {...register('latitud',{
                    required:true,  
                    validate:longLatiValidator          
                  })} />
                  {errors.latitud?.type === 'required' && <span >Debe ingresar Latitud</span>}
                  {errors.latitud?.type === 'validate' && <span >Debe ingresar un valor de latitud entre 0° y 90°</span>}
                </div>
                <div>
                  <label>Longitud:</label>
                  <input type="number" {...register('longitud',{
                    required:true, 
                    validate:longLatiValidator               
                  })} />
                  {errors.longitud?.type === 'required' && <span>Debe ingresar Longitud</span>}
                  {errors.longitud?.type === 'validate' && <span>Debe ingresar un valor de longitud entre 0° y 90°</span>}
                </div>
                <div className='button'>
                <button type='submit'className='subbt' >Guardar Ubicacion</button>        
                </div>   
            </form> 
         </div>
      </div>  
      </div>  
  )
}

export default ClimaForm