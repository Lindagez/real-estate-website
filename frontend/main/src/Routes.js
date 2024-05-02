import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import { Logout } from './auth';
import Login from './pages/login';
import Registration from './pages/registration';
import News from './pages/news';
import Home from './pages/home';
import Navbar from './components/header';
import Pricing from './pages/pricing';
import SelectedProperty from './pages/pricing/pricing specific/pricing';
import About1 from './pages/about/about';
import Videos from './pages/videos';
import Footer from './components/footer';
import Signup from './pages/signup';;

const handleRoutes = () => {
  return (
    <div className='page-container'>
      <div className='content-wrapper'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/login' exact element={<Login />} />
            <Route path='/reg' exact element={<Registration />} />
            <Route path='/' element={<Home />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/News' exact element={<News />} />
            <Route path='/signup' exact element={<Signup />} />
            <Route path='/About' exact element={<About1 />} />
            <Route path='/property' exact element={<Pricing />} />
            <Route path='/property/:id' exact element={<PrivateRoute><SelectedProperty /></PrivateRoute>} />
            <Route path='/logout' exact element={<Logout />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default handleRoutes;
