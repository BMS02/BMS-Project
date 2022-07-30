// import { Addbank } from './OnlineBanking/Addbank';
import './common.css';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./Components/Pages/Home";
import OnlineBanking from "./Components/Pages/OnlineBanking";
import SearchBank from "./Components/Pages/SearchBank";
import ContactUs from "./Components/Pages/ContactUs"
// import Debit from './OnlineBanking/Debit';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/onlinebanking' element={<OnlineBanking/>}/>
      <Route path='/searchbank' element={<SearchBank/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      {/* <Route path='/onlinebanking/debit' element={<Debit/>}/> */}
      {/* <Route path='/onlinebanking/addbank' element={<Addbank/>}/> */}
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


    // <div className="App">
    //   <Addbank/>
    
    // </div>
 
