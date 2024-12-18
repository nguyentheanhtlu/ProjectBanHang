import {Routes, Route} from 'react-router-dom'
import './App.css';
import AppLayout from './layout/AppLayout';
import Products from './page/Products';
import Orders from './page/Orders';
import Login from './page/Login';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/' element={<AppLayout/>}>
        <Route path='/products' element={<Products/>} />
        <Route path='/orders' element={<Orders/>} />
      </Route>
    </Routes>
  );
}

export default App;
