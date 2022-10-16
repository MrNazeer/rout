import './App.css';
import { Menu } from './components/menu/Menu';
import {Sec1} from './components/Cont_1/Sec1';
import {Cont2} from './components/Cont_2/Cont2';
import {Cont3} from './components/Cont_3/Cont3';
import {Cont4} from './components/Cont_4/Cont4';
import {Onlineservice} from './components/Service_Comp1/Onlineservice';
import {Offlineservice} from './components/Service_Comp2/Offlineservice';
import { Routes,Route,  } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Menu />
      
        <Routes>
          <Route exact path='/'  element={<Sec1/>}/>
          <Route  path='/about' element={<Cont2/>}/>
          <Route path='/service' element={<Cont3/>}>
          <Route path='onlineservice' element={<Onlineservice/>}/>
          <Route path='offlineservice' element={<Offlineservice/>}/>
          </Route>
          <Route path='/contact' element={<Cont4/>}/>          
        </Routes>
    </div>
  );
}

export default App;
