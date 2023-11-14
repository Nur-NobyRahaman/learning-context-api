import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './conponents/Home/Home';
import OrderReview from './conponents/OrderReview/OrderReview';
import GrandPa from './conponents/GrandPa/GrandPa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
