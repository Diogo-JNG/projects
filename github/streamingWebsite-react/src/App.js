import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import Historypage from './pages/historypage';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/history' element={<Historypage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<Registerpage/>}/>
      <Route path='*' element={<h1 style={{display:'flex',textAlign:'center',alignItems:'center'}}>Page Not Found <Link to='/'>Click Here</Link> to go back.</h1>}/>
    </Routes>
  );
}

export default App;
