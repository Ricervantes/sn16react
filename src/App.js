
import './App.css';
import AppRouter from './router/AppRouter';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  //console.log("proces");
  console.log(process.env.REACT_APP_API_URL);
  return (
    <BrowserRouter>
      <div className="topnav">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/tablas'>Tabla</NavLink>
        <NavLink to='/formularios'>Formularios</NavLink>
      </div>
<div className="containner">
<div className="row">
  <div className="col-12">
    
  <div className="container" style={{ marginTop: '10rem' }}>
          <div className="row align-items-center">
            <div className="col-12">
              <AppRouter>
              </AppRouter>

            </div>
          </div>
        </div>
    <AppRouter/>

  </div>

</div>

</div>
    </BrowserRouter>
  );
}

export default App;
