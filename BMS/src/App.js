import './common.css';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./Components/Pages/Home";
import OnlineBanking from "./Components/Pages/OnlineBanking";
import SearchBank from "./Components/Pages/SearchBank";
import ContactUs from "./Components/Pages/ContactUs"
// import Debit from './Components/Pages/Debit';
import AddBranch from "./Components/Pages/AddBranch";
import ShowBranch from './Components/Pages/ShowBranch';
// import Debit from './Components/Pages/Deposit';
import ShowItems from './Components/Pages/ShowItems';
import Deposit from './Components/Pages/Deposit';
import CreateAcc from './Components/Pages/CreateAcc';
import { ManageAccount } from './Components/Account/Manage_Account';
import UserDyta from './Components/Account/UserDyta';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/onlinebanking' element={<OnlineBanking/>}/>
      <Route path='/searchbank' element={<SearchBank/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/createacc' element={<CreateAcc/>}/>
      <Route path='/account/manageaccount' element={<ManageAccount/>}/>
      <Route path='/components/pages/AddBranch' element={<AddBranch/>}/>
      <Route path='/components/pages/showbranch' element={<ShowBranch/>}/>
      <Route path='/components/pages/deposit' element={<Deposit/>}/>
      <Route path='/components/pages/showitems' element={<ShowItems/>}/>
      <Route path='/components/account/userdyta' element={<UserDyta/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


    // <div className="App">
    //   <Addbank/>
    
    // </div>
 
