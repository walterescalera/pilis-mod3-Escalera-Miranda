
import { nanoid } from 'nanoid';
import { createContext, useEffect, useState } from 'react'


//crear contexto
export const myContext = createContext(null);

export default function ClimaContext({children}) {

  const [ ubicaciones, setUbicaciones ] = useState([]);
  const [ usuarios, setUsuarios ] = useState([]);
  const [login, setlogin] = useState(false)
 
  //*set LocalStorage Ubicaciones
  useEffect(() => {
    
    let getUbicaciones = localStorage.getItem('ubicaciones');
    if(getUbicaciones != null){
        setUbicaciones(JSON.parse(getUbicaciones));
    }else{
        setUbicaciones([]);
    }
  }, [])

  //*update localStorage Ubicaciones
  useEffect(() => {
    localStorage.setItem('ubicaciones',JSON.stringify(ubicaciones));
  
   
  }, [ubicaciones])


  //*set LocalStorage Usuarios
  useEffect(() => {
    let getUsuarios = localStorage.getItem('usuarios');
    if(getUsuarios != null){
        setUsuarios(JSON.parse(getUsuarios));
    }else{
        setUsuarios([]);
    }
  }, [])

  

  //*update localStorage Usuarios
  useEffect(() => {
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
  
   
  }, [usuarios])


function addUbicacion(latitud, longitud, nombreUbicacion, temperatura, velocidad){

    const ubicacionNueva={
      id: nanoid(),
      latitud,
      longitud,
      nombreUbicacion,
      temperatura,
      velocidad

    };

    setUbicaciones([ ...ubicaciones, ubicacionNueva ]);
    alert('Ubicacion Guardada')


}
function deleteUbicacion (ubicacionId){

  const ubicacionFilter = ubicaciones.filter( (ubicacion) => ubicacion.id !== ubicacionId);
  setUbicaciones(ubicacionFilter); 
  
  }

  function addUsuario(nombre, password){

    const usuarioNuevo={
      id: nanoid(),
      nombre,
      password,

    };

    setUsuarios([ ...usuarios, usuarioNuevo ]);
    alert('Usuario Guardado!!')
}

function userLogin(valor){

  setlogin(valor)
}


return (
  <>
      <myContext.Provider value={{ubicaciones, addUbicacion, deleteUbicacion, addUsuario, usuarios, login, userLogin}}>{children}</myContext.Provider>
  </>
    )



}