
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { myContext } from './ClimaContext/ClimaContext';
import ClimaForm from './components/pages/ClimaForm/ClimaForm';
import ClimaList from './components/pages/ClimaList/ClimaList';
import Login from './components/pages/Login/Login';
import Registro from './components/pages/Login/Registro';
import NavBar from './components/pages/NavBar/NavBar';




function App() {

  const { login} = useContext(myContext);

console.log(login)

  return (
    <div className="App">
    
                    <NavBar/>
                    <Routes>                        
          
                        <Route  path='/' element={<Login/>}/>
                        <Route  path='/listado' element={<ClimaList/>}  />
                        {/* <Route path='/' element={<ClimaForm/>}/> */}
                        <Route path='/formulario' element={<ClimaForm/>}/>
                        <Route  path='/registro' element={<Registro/>}  />
                    </Routes> 
                    
          
         
      
            
                       
 
   </div>
  );
}

export default App;
