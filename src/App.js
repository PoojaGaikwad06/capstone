import './App.css';
import Header from './Components/CommonComponent/HeaderComponent/Header';
import Footer from './Components/CommonComponent/FooterComponent/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProductListing from './Components/ProductListing/ProductListing';
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import ContactInformation from './Components/Checkout/ContactInformation/ContactInformation';
import './aem-grid-12.css';
import Home from './Components/Home/Home';
import ShippingMethod from './Components/Checkout/ShippingMethod/ShippingMethod';
import PaymentInfo from './Components/Checkout/PaymentInfo/PaymentInfo';
import Checkout from './Components/Checkout/Checkout';
import Order from './Components/Checkout/OrderSummary/Order';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
       
        <Routes>
          <Route path="/" element={<Navigate to="/capstone" />} />
          <Route path='/capstone' exact element={<Home/>}/>
          <Route path='product' exact element={<ProductListing />} />
          <Route path='/product/:productID' element={<ProductDetails />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/checkout' element={<ContactInformation/>} />
          <Route path='/shipping' element={<ShippingMethod/>} />
          <Route path='/payment' element={<PaymentInfo/>} />
          <Route path='/details' element={<Checkout/>} />
          <Route path='/order' element={<Order/>} />
          <Route>404 Not Found !</Route>
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
