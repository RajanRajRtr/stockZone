import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import AdminLayout from "../src/pages/Admin/AdminLayout";
import AddProduct from "../src/pages/Admin/AddProduct";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowProduct from "./pages/Admin/ShowProduct";
import SBIGudie from "./components/Footer/SBIGudie";
import AboutUs from"./pages/AboutUs"
import ContactUs from "./pages/Contactus";
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';
import Terms from "./components/Footer/Term";
import Privacy from "./components/Footer/Privacy";
import TrainingServices from "./components/services/TrainingServices";
import TradingService from "./components/services/TradingService";
import AdminLogin from "./pages/Login/AdminLogin";
import AdminOrders from "./pages/Admin/AdminOrders";
import IPOshare from "./components/services/IPOshare";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const AdminDash = lazy(() => import("./pages/Admin/AdminDash"));
const NotFound = lazy(() => import("./components/NotFound"));


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* <Layout> */}
        {/* <NavBar /> */}
        <AuthProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/shop/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/SebiGuidelines" element={<SBIGudie/>} />
                  <Route path="/AboutUs" element={<AboutUs/>} />
                  <Route path="/ContactUs" element={<ContactUs/>} />
                  <Route path="/Terms" element={<Terms/>} />
                  <Route path="/Privacy" element={<Privacy/>} />
                  <Route path="/TrainingServices" element={<TrainingServices/>} />
                  <Route path="/TradingServices" element={<TradingService/>} />
                  <Route path="/AdminLogin" element={<AdminLogin/>} />
                  <Route path="/IPO_Services" element={<IPOshare/>} />
                </Routes>
              </Layout>
            }
          />

          <Route
            path="/Admin/*"
            element={
              <AdminLayout>
                <Routes>
                <Route path="/Dashboard" element={ <ProtectedRoute>< AdminDash /></ProtectedRoute>} />

                  <Route path="/Orders" element={ <ProtectedRoute>< AdminOrders/></ProtectedRoute>} />
                   <Route path="/AddProduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
                   <Route path="/viewProduct" element={<ProtectedRoute><ShowProduct /></ProtectedRoute>} />
                  {/* <Route path="/*" element={<NotFound />} /> */}
                </Routes>
              </AdminLayout>
            }
          />
          
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AuthProvider>
        {/* <Footer /> */}
      </Router>
    </Suspense>
  );
}

export default App;
