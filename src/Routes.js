import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';


import Registration from './pages/registration';





import Video from './pages/order/videos';

import News from './pages/news';
// import Images from './pages/home/images';



import Home from './pages/home';
import Navbar from './components/header';
import Pricing from './pages/pricing';
import Pricingspe from './pages/pricing/pricing specific/pricing';
import Order from './pages/order';
import Contactus from './pages/contactus';
import About1 from './pages/home/aboutus';
// import SectionExamples from './pages/home/SectionExamples';
import About from './pages/home/aboutus';
import Form from './pages/order/orderform';
import Orderform from './pages/order/orderform';
import Displayorder from './pages/order/dispayorder';
import Slip from './pages/order/slip';
import Forsecond from './pages/order/forsecond';
// import Slip1 from './pages/order/slip1';
import Secondform from './pages/order/secondform';
import Videos from './pages/order/videos';

// import footer from "../src/components/footer/"
// import Sidebar from './components/Sidebar';




import Customer from './pages/coustomer/manager';
import ProfileCard from './pages/profile';
// import Log from './pages/logout';
import Licence1 from './pages/home/licence1';
// import New from './pages/news';
// import FooterTitl from './components/footer/FooterTitle';
// import FooterTitle from './components/footer';
import Footer from './components/footer';
import Signup from './pages/signup/signup';
import Slip1 from './pages/order/slip1';
import Aggrement from './pages/order/agreement';

import Features from './pages/home/features/features';
import Form1 from './pages/form';
import Mycards from './pages/home/cardss/mycards';
import Properties from './pages/pricing';
import Regi from './pages/new reg/reg';
import Order2 from './pages/order/2ndorders';
import Stock from './pages/home/stock marcket/stock';
import Coustomer1 from './pages/profile/coustomer details';
// import Stock from './pages/home/stock marckets/stock';
// import Contactus1 from './pages/contact';
// import Register from './pages/login/register';
// import Form1 from './pages/form';
// import Draft from './pages/drafthome/drafthome';


const handleRoutes = () => {
  return (
    <div className='page-container'>
      <div className='content-wrapper'>
        <Router>
        
        <Navbar />
         
          <Routes>

            <Route path='/login' exact element={<Login />} />
            <Route path='/reg' exact element={<Registration/>} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/videos" element={<Videos />} />
            {/* <Route path="/customer" exact element={<Customer />} /> */}
            {/* <Route path="/img" exact element={<Images />} /> */}
            {/* <Route path="/crud" exact element={<Crud />} /> */}
            <Route path="/News" exact element={<News />} />
            <Route path="/Contactus" exact element={<Contactus />} />
            {/* <Route path="/logout" exact element={<Log/>} />
            <Route path="/License" exact element={<Licence1/>} />
            <Route path="/Aggrement" exact element={<Aggrement />} /> */}
            {/* <Route path="/demo" exact element={<Demo />} /> */}
            <Route path="/Form" exact element={<Form />} />
            <Route path="/Order" exact element={<Order />} />
            <Route path="/v" exact element={<Video/>} />
            {/* <Route path="/" exact element={<Home/>} /> */}
            {/* <Route path="/sec" exact element={<SectionExamples/>} /> */}
            <Route path="/Orderform" exact element={Orderform()} />
            <Route path="/slip" exact element={<Slip />} />
            <Route path="/signup" exact element={<Signup />} />

            {/* <Route path="/property1" exact element={<Properties1/>} />  */}

            {/* <Route path="/home" exact element={<Pro1/>} /> */}
<Route path="/About" exact element={<About1/>} />
     <    Route path="/Pricing" exact element={<Pricing />} />
     <Route path="/pricing/:id" exact element ={<Pricingspe/>}/>
     <Route path="/Displayorder" exact element ={<Displayorder/>}/>
     <Route path="/forsecond" exact element ={<Forsecond/>}/>
     <Route path="/orderform/slip1" exact element ={<Slip1/>}/> 
     <Route path="/secondform/slip" exact element ={<Slip1/>}/>
     <Route path="/secondform" exact element ={<Secondform/>}/>
     {/* <Route path="/Videos" exact element ={<Videos/>}/> */}
     {/* <Route path="/reg" exact element ={<Registration/>}/> */}
      
     {/* <Route path="/feature" exact element ={<Features/>}/> */}
      
     {/* <Route path="/Form1" exact element ={<Form1/>}/> */}
          {/* <Route path="/product" element={<Product />} /> */}
          {/* <Route path="/productList" element={<ProductList />} /> */}
          <Route path="/customers" element= {<Customer />} />
          <Route path="/profile" element= {<ProfileCard />} />
          {/* <Route path='/News' exact element={<News/>} /> */}
      <Route path='/proper' exact element={<Properties/>} /> 
          {/* <Route path='/mycards' exact element={<Mycards/>} /> */}
 <Route path='/REGI' exact element={<Regi/>} />
 {/* <Route path='/Contactus1' exact element={<Contactus1/>} /> */}
 <Route path='/Order2' exact element={<Order2/>} />
 <Route path='/Stock' exact element={<Stock/>} />
 <Route path='/Coustomer1' exact element={<Coustomer1/>}/>
         </Routes>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
    
  )
}

export default handleRoutes;
