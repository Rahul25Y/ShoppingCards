import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cards from './Pages/Cards';
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux'
import store from './store/store';

function App() {
  return (
    <div className="Ap">
    <Provider store={store}>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cards' element={<Cards/>}></Route>
     </Routes>
     </Provider>
    </div>
  );
}

export default App;
