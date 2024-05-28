import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/user/dashBoard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './Pages/admin/AdminDashboard';
import CreateCategory from './Pages/admin/CreateCategory';
import CreateProductl from './Pages/admin/CreateProduct';
import Users from './Pages/admin/User';
import Orders from './Pages/user/Orders';
import Profile from './Pages/user/Profile';
import Products from './Pages/admin/Products';
import UpdateProduct from './Pages/admin/UpdateProduct';
import Search from './Pages/Search';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProductl />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:id" element={<UpdateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/policy' element={<Policy />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    
    </>
  );
}

export default App;
