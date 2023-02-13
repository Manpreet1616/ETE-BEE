import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckoutPage from './routes/checkout/checkout.components';


const App=()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='auth' element={<SignIn/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='checkout' element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
